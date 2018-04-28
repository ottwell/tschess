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
    rulesHelper
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

    export function handlePlayersMove (game: game, startPoint: initializer.occupiedTile, dest: initializer.occupiedTile, isAttack: boolean, victim: any): game {
        game.currentPlayer.occupiedTiles.Remove(startPoint);
        game.currentPlayer.occupiedTiles.Add(dest);
        game.currentPlayer.moves.Add(new move(startPoint.id, dest.id, game.currentPlayer.currentActivePiece, isAttack, victim))
        if(isAttack){
            game.nonCurrentPlayer = handleAttack(game.nonCurrentPlayer, dest, victim);
        }
        return game;
    }
    
    function handleAttack(player: player, dest: initializer.occupiedTile, victim: gamePiece): player {
        victim.isDead = true;
        player.pieces.Remove(victim);
        player.occupiedTiles.Remove(player.occupiedTiles.Where(x => x.id === dest.id).FirstOrDefault());
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