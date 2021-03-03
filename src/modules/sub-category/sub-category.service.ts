import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { CategoryService } from '../category/category.service'
import { WriteSubCategoryDto } from './dtos/write-sub-category.dto'
import { SubCategoryRepository } from './sub-category.repository'

@Injectable()
export class SubCategoryService {
    constructor(
        @InjectRepository(SubCategoryRepository)
        private subCategoryR: SubCategoryRepository,
        private categoryS: CategoryService,
    ) {}

    async create(subCategory: WriteSubCategoryDto) {
        const categorydb = await this.categoryS.getById(subCategory.categoryId)
        if (!categorydb) throw new BadRequestException('La categoria no esta activa.')

        const newSubCategory = this.subCategoryR.create(subCategory)
        newSubCategory.category = categorydb
        const createdSubCategory = await this.subCategoryR.save(newSubCategory)

        return createdSubCategory
    }

    async getById(sub_categoryId: number) {
        const subCategorydb = await this.subCategoryR.findOne(sub_categoryId, { where: { active: true } })
        return subCategorydb
    }
}
