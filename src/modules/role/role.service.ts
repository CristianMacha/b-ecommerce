import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { plainToClass } from 'class-transformer'

import { ReadRoleDto } from './dtos/read-role.dto'
import { WriteRoleDto } from './dtos/write-role.dto'
import { RoleRepository } from './role.repository'

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleRepository)
        private roleR: RoleRepository,
    ) {}

    async create(role: WriteRoleDto): Promise<ReadRoleDto> {
        const codeUpperCase = role.code.toUpperCase()

        const roledb = await this.roleR.findOne({ where: { code: codeUpperCase } })
        if (roledb) throw new BadRequestException('El rol ya existe.')

        const newRole = this.roleR.create(role)
        newRole.code = codeUpperCase
        const createdRole = await this.roleR.save(newRole)
        return plainToClass(ReadRoleDto, createdRole)
    }

    async getById(roleId: number) {
        const roledb = await this.roleR.findOne(roleId, { where: { active: true } })
        return roledb
    }
}
