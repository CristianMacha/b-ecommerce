import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'

import { RoleModule } from '../role/role.module'

import { PersonRepository } from './person.repository'
import { PersonController } from './person.controller'
import { PersonService } from './person.service'
import { JwtStrategy } from './passport/jwt.strategy'

@Module({
    imports: [
        TypeOrmModule.forFeature([PersonRepository]),
        PassportModule,
        JwtModule.register({
            secret: 'THISISSEED',
            signOptions: { expiresIn: '1d' },
        }),
        RoleModule
    ],
    controllers: [PersonController],
    providers: [PersonService, JwtStrategy],
})
export class PersonModule {}
