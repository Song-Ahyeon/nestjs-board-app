import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

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
        // 전부 가져오려면 @Body() body
        @Body('title') title: string,
        @Body('description') description: string
    ): Board {  //return type 지정
        // console.log('title', title);
        // console.log('description', description);
        return this.boardsService.createBoard(title, description);
    }
}
