import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { WriteSubsidiaryDto } from './dtos/write-subsidiary.dto'
import { SubsidiaryRepository } from './subsidiary.repository'

@Injectable()
export class SubsidiaryService {
    constructor(
        @InjectRepository(SubsidiaryRepository)
        private subsidiaryR: SubsidiaryRepository,
    ) {}

    async create(subsidiary: WriteSubsidiaryDto) {
        const subsidiarydb = await this.subsidiaryR.findOne({ where: { code: subsidiary.code, active: true } })
        if (subsidiarydb) throw new BadRequestException('La sucursal ya esta registrado.')

        const newSubsidiary = this.subsidiaryR.create(subsidiary)
        await this.subsidiaryR.save(newSubsidiary)

        return HttpStatus.CREATED
    }
}
