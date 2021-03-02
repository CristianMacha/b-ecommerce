import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToClass } from 'class-transformer'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { PersonRepository } from './person.repository'
import { WritePersonDto } from './dtos/write-person.dto'
import { ReadPersonDto } from './dtos/read-person.dto'
import { SigninDto } from './dtos/signin.dto'
import { IPayload } from './passport/payload.interface'
import { RoleService } from '../role/role.service'

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonRepository)
        private personR: PersonRepository,
        private jwtS: JwtService,
        private roleS: RoleService,
    ) {}

    async create(person: WritePersonDto): Promise<ReadPersonDto> {
        const role = await this.roleS.getById(person.roleId)
        if (!role) throw new BadRequestException('Error al crear usuario, intente mas tarde.')

        const persondb = await this.personR.findOne({ where: [{ email: person.email }, { dni: person.dni }] })
        if (persondb) throw new BadRequestException('El correo o dni ya esta registrado.')

        const saltOrRounds = 10
        const hashPassword = await bcrypt.hash(person.password, saltOrRounds)

        const newPerson = this.personR.create(person)
        newPerson.password = hashPassword
        newPerson.role = role

        const createdPerson = this.personR.save(newPerson)
        return plainToClass(ReadPersonDto, createdPerson)
    }

    async signin(person: SigninDto): Promise<{ access_token: string }> {
        const persondb = await this.personR.findOne({ where: { dni: person.dni }, relations: ['role'] })
        
        if (!persondb.active) throw new BadRequestException('Su cuenta esta desactivada.')
        if (!persondb) throw new BadRequestException('La cuenta no existe.')

        // TODO: Cambiar respuesta
        const isMatchPassword = await bcrypt.compare(person.password, persondb.password)
        if (!isMatchPassword) throw new BadRequestException('Contraseña incorrecta.')

        const payload: IPayload = { id: persondb.id, dni: persondb.dni, role: persondb.role.code }
        const access_token = this.jwtS.sign(payload)
        return { access_token }
    }
}
