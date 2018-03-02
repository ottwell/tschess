import {
    gamePiece,
    pieceTypes,
    pawn,
    queen,
    king,
    tower

} from '../pieces';
import {
    player
} from '../player';
import { initializer } from './initializer';
import {
    movementRules as rulesHelper
} from "./movementRules";

import {
    List
} from '../../node_modules/linqts/dist/linq';
import { game } from '../game';

export namespace movementHelper {

    export function handlePieceMove(piece: gamePiece, dest: number): gamePiece{
        piece.currentLocation = dest;
        if(piece.type === pieceTypes.pawn){
            let _piece = piece as pawn;
            _piece.isFirstMove = false;
            _piece.canUpgrade = rulesHelper.canPawnUpgrade(_piece);
            return _piece;
        }
        else if(piece.type === pieceTypes.tower){
            let _piece = piece as tower;
            _piece.canTowerSwitch = false;
            return _piece;
        }
        else if (piece.type === pieceTypes.king){
            let _piece = piece as king;
            _piece.canTowerSwitch = false;
            return _piece;
        }

        return piece;
    } 

    export function handlePlayerMove (player: player, startPoint: initializer.occupiedTile, dest: initializer.occupiedTile, isAttack: boolean, victim: any): player {
        player.occupiedTiles.Remove(startPoint);
        player.occupiedTiles.Add(dest);
        player.moves.Add(new move(startPoint.id, dest.id, player.currentActivePiece, isAttack, victim))
        return player;
    }
    



}

export class move{
    origin: number;
    destination: number;
    movingPiece: gamePiece;
    victim: gamePiece
    isAttack: boolean;

    constructor(o: number, d: number, p: gamePiece, i: boolean, v: any){
        this.origin = o;
        this.destination = d;
        this.movingPiece = p;
        this.isAttack = i;
        this.victim = v;
    }

}