import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';  // uuid의 v1 버전을 uuid라는 이름으로 사용하겠다
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    // 게시판 데이터 담는 변수
    // 다른 컴포넌트에서 boards라는 배열값을 수정할 수 있기 때문에 접근제한자 private 사용
    private boards: Board[] = [{
        id: 'id1',
        title: 'title1',
        description: 'desc1',
        status: BoardStatus.PUBLIC
    }, {
        id: 'id2',
        title: 'title2',
        description: 'desc2',
        status: BoardStatus.PUBLIC
    }];
    /**
     * 모든 게시물의 데이터를 가져오는 기능 
     * @returns private boards(boards의 모든 데이터)를 넘겨줌
     */
                // return 값의 타입 지정 (Board 배열)
    getAllBoards(): Board[] {
        return this.boards;
    }

    // 게시물 생성 기능
    createBoard(createBoardDto: CreateBoardDto) {
        const { title, description } = createBoardDto;
        const board: Board = {
            // uuid를 이용해서 unique value 부여
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        // boards에 새로운 board 추가
        this.boards.push(board)
        return board;
    }

    getBoardById(id: string): Board{
        const result = this.boards.find((board) => board.id === id)
        if (result) {
            return result; 
        } else { 
            throw new NotFoundException(`no id: ${id}`); 
        }
    }

    getBoardByTitle(title: string): Board {
        return this.boards.find((board) => board.title === title)
    }

    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    // deleteBoard 실패 문구 추가
    // deleteBoard(id: string){
    //     const found = this.boards.find(e => e.id === id)
    //     if (found) {
    //         this.boards = this.boards.filter((board) => board.id !== id);
    //         return ({
    //             status: 'success',
    //             description: `${id} is successfully deleted`
    //         })
    //     } else {
    //         return ({
    //             status: 'fail',
    //             description: 'delete fail'
    //         })
    //     }
    // }

    updateBoardStatus(id: string, status: BoardStatus): Board {
        // status를 업데이트 할 board
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
