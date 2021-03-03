import { IsNumber, IsString } from 'class-validator'

export class WriteSubCategoryDto {
    @IsString()
    name: string

    @IsString()
    description: string

    @IsNumber()
    categoryId: number
}
