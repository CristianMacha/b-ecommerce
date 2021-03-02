import { Exclude, Expose } from 'class-transformer'
import { IsEmail, IsOptional, IsString } from 'class-validator'

@Exclude()
export class ReadPersonDto {
    @Expose()
    @IsString()
    names: string

    @Expose()
    @IsString()
    surnames: string

    @Expose()
    @IsString()
    dni: string

    @Expose()
    @IsOptional()
    @IsEmail()
    email: string

    @Expose()
    @IsOptional()
    @IsEmail()
    phone: string

    @Expose()
    @IsOptional()
    @IsEmail()
    address: string
}
