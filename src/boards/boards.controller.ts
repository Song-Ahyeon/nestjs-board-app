import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
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
        return this.boardsService.getAllBoards();
    }

    // title, description을 인자로 넘겨줘서 service의 createBoard를 실행시키는건데... 어떻게?
    @Post()
    createBoard(
        @Body() createBoardDto: CreateBoardDto): Board {  //return type 지정
        return this.boardsService.createBoard(createBoardDto);
    }

    // query가 parameter보다 아래에 있을 경우 인식하지 못함
    // boards/search?title={title}
    @Get('/search')
    getBoardByTitle(@Query('title') title): Board {
        return this.boardsService.getBoardByTitle(title)
    }
    
    // boards/{id}
    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string) {
        return this.boardsService.deleteBoard(id)
    }

}
