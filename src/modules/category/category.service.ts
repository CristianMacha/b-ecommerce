import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { CategoryRepository } from './category.repository'
import { WriteCategoryDto } from './dtos/write-category.dto'

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryR: CategoryRepository,
    ) {}

    async create(category: WriteCategoryDto) {
        const categorydb = await this.categoryR.findOne({ where: { name: category.name } })
        if (categorydb) throw new BadRequestException('La categoria ya esta registrado.')

        const newCategory = this.categoryR.create(category)
        const createdCategory = await this.categoryR.save(newCategory)

        return createdCategory
    }

    async getById(categoryId: number) {
        const categorydb = await this.categoryR.findOne(categoryId, { where: { active: true } })
        return categorydb
    }
}
