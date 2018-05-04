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
    List
} from "../node_modules/linqts/dist/linq";




export class game {

    players: List<player>;
    currentPlayer: player;
    nonCurrentPlayer: player;

    init() {
        this.players = initializer.initPlayers();
        this.nonCurrentPlayer = this.players.Where(x => x.id === "black").FirstOrDefault();
        this.currentPlayer = this.players.Where(x => x.id === "white").FirstOrDefault();
        initializer.initTiles(this);
        console.log(this);
    }


    pieceSelected(piece: gamePiece): void {
        visHelper.removeAllHighlights();
        piece.availableLocations.ForEach((tile) => { visHelper.highlightTile(tile) });
    }

    tileSelected(tileId: number): void {
        visHelper.removeAllHighlights();
        if (this.currentPlayer.currentActivePiece) {
            if (this.currentPlayer.currentActivePiece.availableLocations.Contains(tileId)) {
                this.currentPlayer.move(this, tileId, this.initCheckList);
            }
        }
    }

    initCheckList(game: game): void {
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
        //3. check check + check current king moves
        game.currentPlayer.pieces.Where(x => x.type == pieceTypes.king).FirstOrDefault().availableLocations = rulesHelper.checkKingAvailableMoves(game.currentPlayer.pieces.Where(x => x.type == pieceTypes.king).FirstOrDefault() as king, game);
        //4. check new current player moves
        game.currentPlayer.pieces.Where(x => x.type != pieceTypes.king).ForEach(element => {
            element.availableLocations = rulesHelper.checkAvailableMoves(element, game);
        });
        
    }
}