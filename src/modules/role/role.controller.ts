import { Body, Controller, Post } from '@nestjs/common'

import { ValidationDtoPipe } from '../../pipes/validation-dto.pipe'
import { WriteRoleDto } from './dtos/write-role.dto'
import { RoleService } from './role.service'

@Controller('role')
export class RoleController {
    constructor(private roleS: RoleService) {}

    @Post('create')
    async register(@Body(new ValidationDtoPipe()) role: WriteRoleDto) {
        return this.roleS.create(role)
    }
}
