import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    // request method: GET, POST, PUT, DELETE, ...
    // Get 요청이 왔을 경우 getAllBoard의 return값(this.boardsService.getAllBoards)을 응답함
    @Get()
    getAllBoard() {
        return this.boardsService.getAllBoards();
    }
}
