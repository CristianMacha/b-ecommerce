import { IsString } from 'class-validator'

export class WriteRoleDto {
    @IsString()
    name: string

    @IsString()
    code: string
}
