import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CategoryService } from './category.service'
import { CategoryController } from './category.controller'
import { CategoryRepository } from './category.repository'

@Module({
    imports: [TypeOrmModule.forFeature([CategoryRepository])],
    providers: [CategoryService],
    controllers: [CategoryController],
    exports: [CategoryService],
})
export class CategoryModule {}
