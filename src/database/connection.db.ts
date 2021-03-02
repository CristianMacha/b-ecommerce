import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const optionsDefaultDb: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'btfws5femscf7xpqytye-postgresql.services.clever-cloud.com',
    port: 5432,
    username: 'u8uxxljyfjghvkxpop4w',
    password: '0aCbeui40EQ4LTYsOkf8',
    database: 'btfws5femscf7xpqytye',
    synchronize: true,
}