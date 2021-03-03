import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { SubCategoryService } from '../sub-category/sub-category.service'
import { SubsidiaryService } from '../subsidiary/subsidiary.service'
import { WriteProductDto } from './dtos/write-product.dto'
import { ProductRepository } from './product.repository'

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private productR: ProductRepository,
        private subsidiaryS: SubsidiaryService,
        private subCategoryS: SubCategoryService,
    ) {}

    async create(product: WriteProductDto) {
        const subsidiarydb = await this.subsidiaryS.getById(product.subsidiaryId)
        if (!subsidiarydb) throw new BadRequestException('La sucursal no esta activo.')

        const subCategorydb = await this.subCategoryS.getById(product.sub_categoryId)
        if (!subCategorydb) throw new BadRequestException('La subcategoria no esta activa')

        const newProduct = this.productR.create(product)
        newProduct.subsidiary = subsidiarydb
        newProduct.sub_category = subCategorydb
        await this.productR.save(newProduct)

        return HttpStatus.CREATED
    }
}
