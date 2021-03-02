import { IsEmail, IsOptional, IsString } from 'class-validator'

export class SigninDto {
    @IsString()
    dni: string

    @IsString()
    password: string
}
