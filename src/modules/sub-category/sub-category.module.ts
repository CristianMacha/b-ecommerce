import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { SubCategoryService } from './sub-category.service'
import { SubCategoryController } from './sub-category.controller'
import { SubCategoryRepository } from './sub-category.repository'
import { CategoryModule } from '../category/category.module'

@Module({
    imports: [TypeOrmModule.forFeature([SubCategoryRepository]), CategoryModule],
    providers: [SubCategoryService],
    controllers: [SubCategoryController],
    exports: [SubCategoryService],
})
export class SubCategoryModule {}
