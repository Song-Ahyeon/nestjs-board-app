import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { BoardRepository } from './boards/board.repository';
import { BoardsController } from './boards/boards.controller';
import { BoardsModule } from './boards/boards.module';
import { BoardsService } from './boards/boards.service';
import { typeORMConfig } from './boards/configs/typeorm.config';
import { TypeOrmExModule } from './database/typeorm-ex.module';

@Module({
  imports: [
    BoardsModule,
    TypeOrmModule.forFeature([BoardRepository]),
    TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmExModule.forCustomRepository([BoardRepository])
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class AppModule {}
