import { Body, Controller, Post } from '@nestjs/common'

import { ValidationDtoPipe } from '../../pipes/validation-dto.pipe'
import { WriteProductDto } from './dtos/write-product.dto'
import { ProductService } from './product.service'

@Controller('product')
export class ProductController {
    constructor(private productS: ProductService) {}

    @Post('create')
    async register(@Body(new ValidationDtoPipe()) product: WriteProductDto) {
        return this.productS.create(product)
    }
}
