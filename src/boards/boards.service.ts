import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
    // 게시판 데이터 담는 변수
    // 다른 컴포넌트에서 boards라는 배열값을 수정할 수 있기 때문에 접근제한자 private 사용
    private boards: Board[] = [];

    /**
     * 모든 게시물의 데이터를 가져오는 기능 
     * @returns private boards(boards의 모든 데이터)를 넘겨줌
     */
                // return 값의 타입 지정 (Board 배열)
    getAllBoards(): Board[] {
        return this.boards;
    }
}
