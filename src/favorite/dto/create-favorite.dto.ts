import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateFavoriteDto {
    @IsNumber()
    @ApiProperty({ description: 'ID of the user who owns the favorite', example: 1, name: 'userId' })
    private _userId: number;

    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    
}
