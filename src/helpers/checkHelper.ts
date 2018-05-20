import { gamePiece, pieceTypes, pawn, knight, rook, tower, queen, king } from "../pieces";
import { player } from "../player";
import { game } from "../game";
import {
    rulesHelper
} from "../helpers/movementRules";
import {
    locationCheckLog
} from './logger';

import {
    List
} from "../../node_modules/linqts_new/dist/linq";

export namespace checkHelper {
     export function isUnderCheck(king: king, attackingPlayer: player): king {
         let location = king.currentLocation;
         let potentialAssassins = attackingPlayer.pieces.Where(x => x.availableLocations.Where(y => y === location).Count() > 0);
         if(potentialAssassins.Count() === 0){
             king.isInCheck === false;
             king.potentialAssassins = null;
             return king;
         }
         king.isInCheck = true;
         king.potentialAssassins = potentialAssassins;
         return king;
     }

     export function checkAvailableMoves(piece: gamePiece, attacker: gamePiece ,attackerPath: List<number>, game: game): List<number> {
         let log = new locationCheckLog(piece.id);
         let result = new List<number>();
         let relevantLocations = new List<number>();
         relevantLocations.Add(attacker.currentLocation);
         if(attacker.type !== pieceTypes.knight){ // a knight cannot be blocked
            relevantLocations.AddRange(attackerPath.ToArray());
         }
         if(piece.type === pieceTypes.pawn){
             piece.availableLocations = rulesHelper.checkAvailableMoves(piece, game);
         }
         result = piece.availableLocations.Intersect(relevantLocations);
         log.movesAfterCheckCheck = result;
         game.log.moves.LastOrDefault().followingMoveChecks.Add(log);
         return result;
     }

     export function announceWinner(winner: player){
         document.getElementById('winnerAnnouncment').innerText = winner.name + " wins!!!";
         document.getElementById('chessboard').classList.add('disabled-board');
     }
}