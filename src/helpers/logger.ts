import {
    move
}from "../helpers/movementHelper";

import {
    List
} from "../../node_modules/linqts_new/dist/linq";

export class gameLog {
    moves: List<move>;

    constructor(){
        this.moves = new List<move>();
    }

}





export class locationCheckLog {
    pieceName: string;
    movesAfterBoundaryCheck: List<number>;
    movesAfterKingExposureCheck: List<number>;
    movesAfterBlockCheckFriendly: List<number>;
    movesAfterBlockCheckEnemy: List<number>;

    constructor(piece: string){
        this.pieceName = piece;
    }
}
