import { Injectable, HttpStatus, BadRequestException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { WriteStoreDto } from './dtos/write-store.dto'
import { StoreRepository } from './store.repository'

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(StoreRepository)
        private storeR: StoreRepository,
    ) {}

    async create(store: WriteStoreDto) {
        const storedb = await this.storeR.findOne({ where: { ruc: store.ruc, active: true } })
        if (storedb) throw new BadRequestException('La tienda ya esta registrada.')

        const newStore = this.storeR.create(store)
        await this.storeR.save(newStore)

        return HttpStatus.CREATED
    }

    async getById(storeId: number) {
        const storedb = await this.storeR.findOne(storeId, { where: { active: true } })
        return storedb
    }
}
