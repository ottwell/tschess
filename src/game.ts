import { gamePiece } from "./pieces";
import { player } from "./player";
import {
    movementRules as rulesHelper
} from "./helpers/movementRules";
import {
    visualUI as visHelper
} from "./helpers/visualUI";
import{
    initializer
} from "./helpers/initializer";
import {
    List
} from "../node_modules/linqts/dist/linq";




export class game {
    
    players: List <player>;
    currentPlayer: player;
    nonCurrentPlayer: player;

    init() {
        this.players = initializer.initPlayers();
        this.nonCurrentPlayer = this.players.Where(x => x.id === "white").FirstOrDefault();
        this.currentPlayer = this.players.Where(x => x.id === "black").FirstOrDefault();
        initializer.initTiles(this);
    }

    
    pieceSelected(piece: gamePiece): void {
        visHelper.removeAllHighlights();
        this.currentPlayer.checkMove(piece, this);
    }

    tileSelected(tileId: number): void{
        visHelper.removeAllHighlights();
        if(this.currentPlayer.currentActivePiece){
            if(this.currentPlayer.currentActivePiece.availableLocations.Contains(tileId)){
                this.currentPlayer.move(this, tileId, this.initCheckList);
            }
        }
    }

    initCheckList(game: game): void{
        //check mate check
        //change current player
        //change active piece
        game.currentPlayer.currentActivePiece = undefined;
        let current = game.currentPlayer;
        let nonCurrent = game.nonCurrentPlayer
        game.currentPlayer = nonCurrent;
        game.nonCurrentPlayer = current;
    }
    
}