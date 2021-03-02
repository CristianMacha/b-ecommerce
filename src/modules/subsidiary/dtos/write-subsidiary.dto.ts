import { IsLowercase, IsString, IsUppercase } from 'class-validator'

export class WriteSubsidiaryDto {
    @IsString()
    @IsUppercase()
    code: string

    @IsString()
    location: string
}
