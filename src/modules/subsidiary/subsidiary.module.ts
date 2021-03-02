import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SubsidiaryService } from './subsidiary.service'
import { SubsidiaryController } from './subsidiary.controller'
import { SubsidiaryRepository } from './subsidiary.repository'

@Module({
    imports: [TypeOrmModule.forFeature([SubsidiaryRepository])],
    providers: [SubsidiaryService],
    controllers: [SubsidiaryController],
})
export class SubsidiaryModule {}
