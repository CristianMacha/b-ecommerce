import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { CategoryModule } from './modules/category/category.module'
import { SubCategoryModule } from './modules/sub-category/sub-category.module'
import { StoreModule } from './modules/store/store.module'
import { ProductModule } from './modules/product/product.module'
import { DetailModule } from './modules/detail/detail.module'
import { PhotoModule } from './modules/photo/photo.module'
import { PersonModule } from './modules/person/person.module'
import { RoleModule } from './modules/role/role.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { optionsDefaultDb } from './database/connection.db'

@Module({
  imports: [
    StoreModule,
    ProductModule,
    CategoryModule,
    SubCategoryModule,
    DetailModule,
    PhotoModule,
    PersonModule,
    RoleModule,
    TypeOrmModule.forRoot({
      ...optionsDefaultDb,
      entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
