import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ValidationDtoPipe } from 'src/pipes/validation-dto.pipe'
import { JwtAuthGuard } from '../person/guards/jwt-auth.guard'
import { RolesGuard } from '../role/guards/roles.guard'
import { Roles } from '../role/role.decorate'
import { Role } from '../role/role.enum'
import { WriteStoreDto } from './dtos/write-store.dto'

import { StoreService } from './store.service'

@Controller('store')
export class StoreController {
    constructor(private storeS: StoreService) {}

    @Roles(Role.Root)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('create')
    async register(@Body(new ValidationDtoPipe()) store: WriteStoreDto) {
        return this.storeS.create(store)
    }
}
