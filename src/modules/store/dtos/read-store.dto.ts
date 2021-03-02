import { Exclude, Expose } from 'class-transformer'
import { IsDate, IsString } from 'class-validator'

@Exclude()
export class WriteStoreDto {
    @Expose()
    @IsString()
    name: string

    @Expose()
    @IsString()
    owner: string

    @Expose()
    @IsString()
    address: string

    @Expose()
    @IsString()
    phone: string

    @Expose()
    @IsString()
    email: string

    @Expose()
    @IsString()
    ruc: string

    @Expose()
    @IsDate()
    created_at: Date

    @Expose()
    @IsDate()
    updated_at: Date
}
