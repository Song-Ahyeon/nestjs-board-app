import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './boards/configs/typeorm.config';

@Module({
  imports: [BoardsModule,
  TypeOrmModule.forRoot(typeORMConfig),
  ],
})
export class AppModule {}
