import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ProductController } from './product.controller'
import { ProductRepository } from './product.repository'
import { SubsidiaryModule } from '../subsidiary/subsidiary.module'
import { SubCategoryModule } from '../sub-category/sub-category.module'

@Module({
    imports: [TypeOrmModule.forFeature([ProductRepository]), SubsidiaryModule, SubCategoryModule],
    providers: [ProductService],
    controllers: [ProductController],
})
export class ProductModule {}
