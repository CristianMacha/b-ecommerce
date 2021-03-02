import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ValidationDtoPipe } from '../../pipes/validation-dto.pipe'
import { RolesGuard } from '../role/guards/roles.guard'
import { Roles } from '../role/role.decorate'
import { Role } from '../role/role.enum'

import { ReadPersonDto } from './dtos/read-person.dto'
import { SigninDto } from './dtos/signin.dto'
import { WritePersonDto } from './dtos/write-person.dto'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { PersonService } from './person.service'

@Controller('person')
export class PersonController {
    constructor(private personS: PersonService) {}

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async register(@Body(new ValidationDtoPipe()) person: WritePersonDto): Promise<ReadPersonDto> {
        return this.personS.create(person)
    }

    @Post('signin')
    async signin(@Body(new ValidationDtoPipe()) person: SigninDto): Promise<{ access_token: string }> {
        return this.personS.signin(person)
    }
}
