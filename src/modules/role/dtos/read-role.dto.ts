import { Exclude, Expose } from 'class-transformer'
import { IsNumber, IsString } from 'class-validator'

@Exclude()
export class ReadRoleDto {
    @Expose()
    @IsNumber()
    id: number

    @Expose()
    @IsString()
    name: string

    @Expose()
    @IsString()
    code: string
}
