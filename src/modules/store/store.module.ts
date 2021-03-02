import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { StoreService } from './store.service'
import { StoreController } from './store.controller'
import { StoreRepository } from './store.repository'

@Module({
    imports: [TypeOrmModule.forFeature([StoreRepository])],
    providers: [StoreService],
    controllers: [StoreController],
})
export class StoreModule {}
