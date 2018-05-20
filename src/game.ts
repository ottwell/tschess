import { gamePiece, pieceTypes, king } from "./pieces";
import { player } from "./player";
import {
    rulesHelper
} from "./helpers/movementRules";
import {
    visualUI as visHelper
} from "./helpers/visualUI";
import {
    initializer
} from "./helpers/initializer";
import {
    checkHelper
} from "./helpers/checkHelper";
 import {
     gameLog
 } from './helpers/logger';

import {
    List
} from "../node_modules/linqts_new/dist/linq";




export class game {

    players: List<player>;
    currentPlayer: player;
    nonCurrentPlayer: player;
    log: gameLog;

    init() {
        this.players = initializer.initPlayers();
        this.nonCurrentPlayer = this.players.Where(x => x.id === "black").FirstOrDefault();
        this.currentPlayer = this.players.Where(x => x.id === "white").FirstOrDefault();
        this.log = new gameLog();
        initializer.initTiles(this);
    }


    pieceSelected(piece: gamePiece): void {
        visHelper.removeHighlight(visHelper.classNames["destination"]);
        piece.availableLocations.ForEach((tile) => { visHelper.highlightTile(tile, visHelper.classNames["destination"]) });
    }

    tileSelected(tileId: number): void {
        visHelper.removeHighlight(visHelper.classNames["destination"]);
        if (this.currentPlayer.currentActivePiece) {
            if (this.currentPlayer.currentActivePiece.availableLocations.Contains(tileId)) {
                this.currentPlayer.move(this, tileId, this.initCheckList);
            }
        }
    }

    initCheckList(game: game): void {
        visHelper.removeHighlight(visHelper.classNames["threat"]);
        //1. check current player available moves
        game.currentPlayer.pieces.Where(x => x.type != pieceTypes.king).ForEach(element => {
            element.availableLocations = rulesHelper.checkAvailableMoves(element, game);
        });
        //2. switch current player
        game.currentPlayer.currentActivePiece = undefined;
        let current = game.currentPlayer;
        let nonCurrent = game.nonCurrentPlayer
        game.currentPlayer = nonCurrent;
        game.nonCurrentPlayer = current;
        //3. check current player moves for all pieces + check check 
        let king = game.currentPlayer.pieces.Where(x => x.type === pieceTypes.king).FirstOrDefault() as king;
        game.currentPlayer.pieces.ForEach(element => {
            element.availableLocations = rulesHelper.checkAvailableMoves(element, game);
        });
        king = checkHelper.isUnderCheck(king, game.nonCurrentPlayer)
        if (king.isInCheck) {
            king.potentialAssassins.ToArray().forEach(piece => {
                visHelper.highlightTile(piece.currentLocation, visHelper.classNames["threat"]);
            });
            if (king.potentialAssassins.Count() > 1) {
                if (king.availableLocations.Count() === 0){
                    checkHelper.announceWinner(game.nonCurrentPlayer)
                } 
                else game.currentPlayer.pieces.Where(y => y.type !== pieceTypes.king).ForEach(piece => piece.availableLocations.RemoveAll(x => x > 0)) //only the king can move in this situation
            }
            else {
                let attacker = king.potentialAssassins.FirstOrDefault();
                let attackerLocation = attacker.currentLocation;
                let attackerLine = rulesHelper.getLine(attacker, king);
                let attackerPath = rulesHelper.getLocationsBetweenTwoPieces(attackerLine, attacker.currentLocation, king.currentLocation);
                game.currentPlayer.pieces.Where(x => x.type != pieceTypes.king).ForEach(element => {
                    element.availableLocations = checkHelper.checkAvailableMoves(element, attacker, attackerPath, game);
                });
                //check if check mate
                if (king.availableLocations.Count() === 0 && game.currentPlayer.pieces.Where(x => x.type != pieceTypes.king && x.availableLocations.Count() === 0).Count() === 0) {
                    checkHelper.announceWinner(game.nonCurrentPlayer)
                }
            }
        }
    }
}

