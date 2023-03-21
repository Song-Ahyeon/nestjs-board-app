import { BadRequestException } from "@nestjs/common/exceptions";
import { ArgumentMetadata, PipeTransform } from "@nestjs/common/interfaces";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform {
    
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

	transform(value: any, metadata: ArgumentMetadata) {
        // 입력값 대문자로 변환
        value = value.toUpperCase();
        
        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is not status`)
        }
        return value;
	}

    private isStatusValid(status: any) {
        // status가 StatusOptions에 없을 경우 -1 반환
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}