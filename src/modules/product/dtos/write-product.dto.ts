import { IsNumber, IsString, IsUppercase, IsUrl } from 'class-validator'

export class WriteProductDto {
    @IsString()
    @IsUppercase()
    code: string

    @IsString()
    name: string

    @IsNumber()
    price: number

    @IsNumber()
    stock: number

    @IsUrl()
    photo: string

    @IsNumber()
    subsidiaryId: number

    @IsNumber()
    sub_categoryId: number
}
