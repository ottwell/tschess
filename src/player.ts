import { gamePiece, pieceTypes } from "./pieces";
import {
    rulesHelper
} from "./helpers/movementRules";
import {
    movementHelper as moveHandler, movementHelper
} from "./helpers/movementHelper";
import {
    move
}from "./helpers/movementHelper";
import { game } from './game';
import {
    visualUI as visHelper
} from "./helpers/visualUI";
import {
    initializer
} from "./helpers/initializer";
import {
    List
} from "../node_modules/linqts/dist/linq";


export class player {
    name: string;
    id: string;
    isCurrent: boolean;
    isInCheck: boolean;
    pieces: List<gamePiece>;
    occupiedTiles: List<initializer.occupiedTile>;
    currentActivePiece: gamePiece;
    moves: List<move>;


    constructor(id: string) {
        this.id = id;
        this.isCurrent = this.id == "white" ? true : false;
        this.name = this.id == "white" ? "Player 1" : "Player 2";
        this.isInCheck = false;
        this.pieces = initializer.initPieces(this.id);
        this.occupiedTiles = initializer.initOccupiedTiles(this);
        this.moves = new List<move>();
    }

    move(game: game, target: number, callback: (game: game) => void): void {
        let startPoint = game.currentPlayer.occupiedTiles.Where(x => x.id === game.currentPlayer.currentActivePiece.currentLocation).First();
        let destination = new initializer.occupiedTile(target, game.currentPlayer.currentActivePiece);
        
        startPoint.occupant = undefined;
        game.currentPlayer.currentActivePiece = moveHandler.handlePieceMove(game.currentPlayer.currentActivePiece, destination.id);
        let isAttack = rulesHelper.isAttack(game.nonCurrentPlayer.occupiedTiles.Select(x => x.id), destination);
        var victim = undefined;
        if (isAttack) {
            victim = game.nonCurrentPlayer.pieces.Where(pi => pi.currentLocation === destination.id).First();
        }
        game = moveHandler.handlePlayersMove(game, startPoint, destination, isAttack, victim);
        visHelper.move(startPoint.id, destination.id);
        callback(game);
    }

}







