import { Body, Controller, Post, UseGuards } from '@nestjs/common'

import { ValidationDtoPipe } from '../../pipes/validation-dto.pipe'
import { JwtAuthGuard } from '../person/guards/jwt-auth.guard'
import { RolesGuard } from '../role/guards/roles.guard'
import { Roles } from '../role/role.decorate'
import { Role } from '../role/role.enum'
import { WriteSubCategoryDto } from './dtos/write-sub-category.dto'
import { SubCategoryService } from './sub-category.service'

@Controller('sub-category')
export class SubCategoryController {
    constructor(private subCategoryS: SubCategoryService) {}

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async register(@Body(new ValidationDtoPipe()) subCategory: WriteSubCategoryDto) {
        return this.subCategoryS.create(subCategory)
    }
}
