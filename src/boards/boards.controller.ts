import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    // request method: GET, POST, PUT, DELETE, ...
    // Get 요청이 왔을 경우 getAllBoard의 return값(this.boardsService.getAllBoards)을 응답함
    @Get('/')
    getAllBoard():Board[] {
        console.log('get all boards');
        
        return this.boardsService.getAllBoards();
    }

    // title, description을 인자로 넘겨줘서 service의 createBoard를 실행시키는건데... 어떻게?
    @Post()
    createBoard(
        @Body() createBoardDto: CreateBoardDto): Board {  //return type 지정
        console.log('createboard');
        
        return this.boardsService.createBoard(createBoardDto);
    }
    
    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

}
