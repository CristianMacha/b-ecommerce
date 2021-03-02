import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator'

export class WritePersonDto {
    @IsString()
    names: string

    @IsString()
    surnames: string

    @IsString()
    dni: string

    @IsOptional()
    @IsEmail()
    email: string

    @IsOptional()
    @IsEmail()
    phone: string

    @IsOptional()
    @IsEmail()
    address: string

    @IsString()
    password: string

    @IsNumber()
    roleId: number
}
