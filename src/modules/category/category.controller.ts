import { Body, Controller, Post, UseGuards } from '@nestjs/common'

import { ValidationDtoPipe } from '../../pipes/validation-dto.pipe'
import { JwtAuthGuard } from '../person/guards/jwt-auth.guard'
import { RolesGuard } from '../role/guards/roles.guard'
import { Roles } from '../role/role.decorate'
import { Role } from '../role/role.enum'
import { CategoryService } from './category.service'
import { WriteCategoryDto } from './dtos/write-category.dto'

@Controller('category')
export class CategoryController {
    constructor(private categoryS: CategoryService) {}

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async register(@Body(new ValidationDtoPipe()) category: WriteCategoryDto) {
        return this.categoryS.create(category)
    }
}
