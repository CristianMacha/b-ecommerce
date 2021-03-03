import { IsString } from 'class-validator'

export class WriteCategoryDto {
    @IsString()
    name: string

    @IsString()
    description: string
}
