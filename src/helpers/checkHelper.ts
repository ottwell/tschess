import { gamePiece, pieceTypes, pawn, knight, rook, tower, queen, king } from "../pieces";
import { player } from "../player";
import { game } from "../game";
import {
    rulesHelper
} from "../helpers/movementRules";
import {
    List
} from "../../node_modules/linqts/dist/linq";

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

     export function checkAvailableMoves(piece: gamePiece, attacker: gamePiece ,attackerPath: List<number>): List<number> {
         let result = new List<number>();
         let relevantLocations = new List<number>();
         relevantLocations.Add(attacker.currentLocation);
         if(attacker.type !== pieceTypes.knight){ // a knight cannot be blocked
            relevantLocations.AddRange(attackerPath.ToArray());
         }
         result = piece.availableLocations.Intersect(relevantLocations);
         return result;
     }
}