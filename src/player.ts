import { gamePiece, pieceTypes } from "./pieces";
import {
    movementRules as rulesHelper
} from "./helpers/movementRules";
import {
    movementHelper as moveHandler
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
    id: string;
    isCurrent: boolean;
    isInCheck: boolean;
    pieces: List<gamePiece>;
    occupiedTiles: List<initializer.occupiedTile>;
    threats: List<initializer.threat>;
    currentActivePiece: gamePiece;
    moves: List<move>;


    constructor(id: string) {
        this.id = id;
        this.isCurrent = this.id == "white" ? true : false;
        this.isInCheck = false;
        this.pieces = initializer.initPieces(this.id);
        this.occupiedTiles = initializer.initOccupiedTiles(this);
        this.threats = initializer.initThreats(this);
        this.moves = new List<move>();
    }



    checkMove(piece: gamePiece, game: game): any {
        game.currentPlayer.currentActivePiece = piece;
        let x: number;
        piece.availableLocations = rulesHelper.checkAvailableMoves(piece, game);
        piece.availableLocations.ForEach((tile) => { visHelper.highlightTile(tile) });
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







