import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import * as typeormConfig from './boards/configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig.typeORMConfig),
    BoardsModule,
  ],
})
export class AppModule {}