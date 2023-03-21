import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    // database type
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "nestBoard",
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}