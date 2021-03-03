import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { StoreService } from '../store/store.service'
import { WriteSubsidiaryDto } from './dtos/write-subsidiary.dto'
import { SubsidiaryRepository } from './subsidiary.repository'

@Injectable()
export class SubsidiaryService {
    constructor(
        @InjectRepository(SubsidiaryRepository)
        private subsidiaryR: SubsidiaryRepository,
        private storeS: StoreService,
    ) {}

    async create(subsidiary: WriteSubsidiaryDto) {
        const storedb = await this.storeS.getById(subsidiary.storeId)
        if (!storedb) throw new BadRequestException('Error al registrar sucursal.')

        const subsidiarydb = await this.subsidiaryR.findOne({ where: { code: subsidiary.code, active: true } })
        if (subsidiarydb) throw new BadRequestException('La sucursal ya esta registrado.')

        const newSubsidiary = this.subsidiaryR.create(subsidiary)
        newSubsidiary.store = storedb
        await this.subsidiaryR.save(newSubsidiary)

        return HttpStatus.CREATED
    }

    async getById(subsidiaryId: number) {
        const subsidiarydb = await this.subsidiaryR.findOne(subsidiaryId, { where: { active: true } })
        return subsidiarydb
    }
}
