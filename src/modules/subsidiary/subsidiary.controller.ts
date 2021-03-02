import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ValidationDtoPipe } from 'src/pipes/validation-dto.pipe'
import { JwtAuthGuard } from '../person/guards/jwt-auth.guard'
import { RolesGuard } from '../role/guards/roles.guard'
import { Roles } from '../role/role.decorate'
import { Role } from '../role/role.enum'
import { WriteSubsidiaryDto } from './dtos/write-subsidiary.dto'
import { SubsidiaryService } from './subsidiary.service'

@Controller('subsidiary')
export class SubsidiaryController {
    constructor(private subsidiaryS: SubsidiaryService) {}

    @Roles(Role.Admin, Role.Root)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async register(@Body(new ValidationDtoPipe()) subsidiary: WriteSubsidiaryDto) {
        return this.subsidiaryS.create(subsidiary)
    }
}
