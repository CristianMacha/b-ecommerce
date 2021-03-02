import { IsString } from 'class-validator'

export class WriteStoreDto {
    @IsString()
    name: string

    @IsString()
    owner: string

    @IsString()
    address: string

    @IsString()
    phone: string

    @IsString()
    email: string

    @IsString()
    ruc: string
}
