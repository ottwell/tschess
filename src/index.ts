import * as gameGenerator from "./game";
import '../src/style.css';
import {
    rulesHelper
} from "./helpers/movementRules";
import {
    checkHelper
} from "./helpers/checkHelper";
import { gamePiece, pieceTypes, king } from "./pieces";


window.onload = () => {
    let game = new gameGenerator.game();
    game.init();
    document.getElementById('showLog').addEventListener("click", (e: Event) => {
        let input = document.getElementById('pieceInput') as HTMLInputElement;
        let val = input.value;
        let log = game.log.moves.LastOrDefault().followingMoveChecks.Where(x => x.pieceName === val).FirstOrDefault();
        console.log(log);
    });
    document.getElementById('debug').addEventListener("click", (e: Event) => {
        let input = document.getElementById('pieceInput') as HTMLInputElement;
        let val = input.value;
        let piece = game.currentPlayer.pieces.Where(x => x.id === val).First();
        rulesHelper.checkAvailableMoves(piece, game)
    });
    document.getElementById('debugCheck').addEventListener("click", (e: Event) => {
        let input = document.getElementById('pieceInput') as HTMLInputElement;
        let val = input.value;
        let piece = game.currentPlayer.pieces.Where(x => x.id === val).First();
        let king = game.currentPlayer.pieces.Where(x => x.type === pieceTypes.king).First()  as king;
        let attacker = king.potentialAssassins.FirstOrDefault();
        let attackerLocation = attacker.currentLocation;
        let attackerLine = rulesHelper.getLine(attacker, king);
        let attackerPath = rulesHelper.getLocationsBetweenTwoPieces(attackerLine, attacker.currentLocation, king.currentLocation);
        checkHelper.checkAvailableMoves(piece, attacker, attackerPath, game);
    });


}

