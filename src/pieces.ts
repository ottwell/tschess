import {
    List
} from "../node_modules/linqts_new/dist/linq";

export class gamePiece {
    id: string;
    type: pieceTypes;
    isWhite: boolean;
    isDead: boolean;
    moveSet: List <number> ;
    currentLocation: number;
    availableLocations: List<number>;
    wasPawn: boolean;
    constructor(id: string, type: pieceTypes, iswhite: boolean, isdead: boolean = false, location: number) {
        this.id = id;
        this.type = type;
        this.isWhite = iswhite;
        this.isDead = isdead;
        this.currentLocation = location;
        this.moveSet = getMoveSet(this);
        this.availableLocations = getInitialAvailableLocations(this);
        this.wasPawn = false;
        this.init();
    }


    init(): void {
        let boardTile = document.getElementById(this.currentLocation.toString());
        let span  = document.createElement('span');
        span.innerHTML = getPieceIcon(this.isWhite, this.type);
        span.classList.add('animated');
        span.classList.add('fadeIn');
        boardTile.appendChild(span);
        boardTile.classList.add("piece");
    }

}

export class pawn extends gamePiece {
    canUpgrade: boolean;
    isFirstMove: boolean = true;
    firstMoveIndex: number = 0;



    upgrade() {

    }
}

export class knight extends gamePiece {

}

export class rook extends gamePiece {

}

export class tower extends gamePiece {
    canTowerSwitch: boolean = true;
    firstMoveIndex: number = 0;
}

export class queen extends gamePiece {
    
}


export class king extends gamePiece {
    canTowerSwitch: boolean = true;
    isInCheck: boolean = false;
    firstMoveIndex: number = 0;
    potentialAssassins: List<gamePiece>;

}

function getMoveSet(piece: gamePiece): List < number > {
    switch (piece.type) {
        case pieceTypes.pawn:
            if(piece.isWhite)
                return new List < number > ([7, 8, 9, 16]);
            else
                return new List <number> ([-16, -9, -8, -7]);
        case pieceTypes.knight:
            return new List < number > ([-15, -17, -10, -6, 6, 10, 15, 17]);
        case pieceTypes.rook:
            return new List < number > ([-63, -56, -49, -54, -42, -45, -35, -36, -28, -27, -21, -18, -14, -9, -7, 7, 9, 14, 18, 21, 27, 28, 36, 35, 45, 42, 54, 49, 56, 63]);
        case pieceTypes.tower:
            return new List < number > ([-56, -48, -40, -32, -24, -16, -8 ,-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56]);
        case pieceTypes.queen:
            return new List < number > ([-56, -48, -40, -32, -24, -16, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, -63, -56, -49, -54, -42, -45, -35, -36, -28, -27, -21, -18, -14, -9, 9, 14, 18, 21, 27, 28, 36, 35, 45, 42, 54, 49, 56, 63]);
        case pieceTypes.king:
            return new List < number > ([-9, -8, -7, -1, 1, 7, 8, 9]);
    }
    return new List < number > ([]);
}

function getInitialAvailableLocations(piece: gamePiece): List<number> {
    var x = piece.currentLocation;
    switch (piece.type) {
        case pieceTypes.pawn:
            if(piece.isWhite)
                return new List<number>([x + 8, x + 16]);
            else
                return new List<number>([x - 16, x - 8]);
        case pieceTypes.knight:
            if(piece.isWhite)
                return new List<number>([x + 15, x + 17]);
            else
                return new List<number>([x - 15, x - 17]);
    }
    return new List<number> ();
}

export enum pieceTypes {
    pawn,
    knight,
    rook,
    tower,
    queen,
    king
}

export function getPieceIcon(iswhite: boolean, type: pieceTypes): string {
    if (iswhite) {
        switch (type) {
            case pieceTypes.pawn:
                return "&#9817;"
            case pieceTypes.knight:
                return "&#9816;"
            case pieceTypes.rook:
                return "&#9815;"
            case pieceTypes.tower:
                return "&#9814;"
            case pieceTypes.queen:
                return "&#9813;"
            case pieceTypes.king:
                return "&#9812;"
        }
    } else {
        switch (type) {
            case pieceTypes.pawn:
                return "&#9823;"
            case pieceTypes.knight:
                return "&#9822;"
            case pieceTypes.rook:
                return "&#9821;"
            case pieceTypes.tower:
                return "&#9820;"
            case pieceTypes.queen:
                return "&#9819;"
            case pieceTypes.king:
                return "&#9818;"
        }
    }
}