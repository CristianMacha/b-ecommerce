import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { SubsidiaryService } from './subsidiary.service'
import { StoreModule } from '../store/store.module'
import { SubsidiaryController } from './subsidiary.controller'
import { SubsidiaryRepository } from './subsidiary.repository'

@Module({
    imports: [TypeOrmModule.forFeature([SubsidiaryRepository]), StoreModule],
    providers: [SubsidiaryService],
    controllers: [SubsidiaryController],
    exports: [SubsidiaryService],
})
export class SubsidiaryModule {}
