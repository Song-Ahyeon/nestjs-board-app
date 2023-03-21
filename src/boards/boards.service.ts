import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
    ){}

    async getBoardById(id: number) : Promise <Board> {
        const found = await this.boardRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`unexpected id : ${id}`)
        }

        return found;
    }

    // 게시판 데이터 담는 변수
    // 다른 컴포넌트에서 boards라는 배열값을 수정할 수 있기 때문에 접근제한자 private 사용
    // private boards: Board[] = [];
    // /**
    //  * 모든 게시물의 데이터를 가져오는 기능 
    //  * @returns private boards(boards의 모든 데이터)를 넘겨줌
    //  */
    //             // return 값의 타입 지정 (Board 배열)
    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // // 게시물 생성 기능
    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto;
    //     const board: Board = {
    //         // uuid를 이용해서 unique value 부여
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }

    //     // boards에 새로운 board 추가
    //     this.boards.push(board)
    //     return board;
    // }

    // getBoardById(id: string): Board{
    //     const result = this.boards.find((board) => board.id === id)
    //     if (result) {
    //         return result; 
    //     } else { 
    //         throw new NotFoundException(`no id: ${id}`); 
    //     }
    // }

    // getBoardByTitle(title: string): Board {
    //     return this.boards.find((board) => board.title === title)
    // }

    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== found.id);
    // }

    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     // status를 업데이트 할 board
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
