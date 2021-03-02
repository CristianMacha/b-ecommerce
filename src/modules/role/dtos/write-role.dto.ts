import { IsString, IsUppercase } from 'class-validator'

export class WriteRoleDto {
    @IsString()
    name: string

    @IsString()
    @IsUppercase()
    code: string
}
