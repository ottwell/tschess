import { gamePiece, pieceTypes, pawn, knight, rook, tower, queen, king } from "../pieces";
import { player } from "../player";
import {
    rulesHelper
} from "../helpers/movementRules";
import {
    visualUI as visHelper
} from "../helpers/visualUI";
import { game } from "../game";
import {
    List
} from "../../node_modules/linqts/dist/linq";


export namespace initializer {
    export function initPieces(id: string): List<gamePiece> {
        if (id == "white") {
            return new List<gamePiece>([
                new pawn("pw1", pieceTypes.pawn, true, false, 9),
                new pawn("pw2", pieceTypes.pawn, true, false, 10),
                new pawn("pw3", pieceTypes.pawn, true, false, 11),
                new pawn("pw4", pieceTypes.pawn, true, false, 12),
                new pawn("pw5", pieceTypes.pawn, true, false, 13),
                new pawn("pw6", pieceTypes.pawn, true, false, 14),
                new pawn("pw7", pieceTypes.pawn, true, false, 15),
                new pawn("pw8", pieceTypes.pawn, true, false, 16),
                new knight("knw1", pieceTypes.knight, true, false, 2),
                new knight("knw2", pieceTypes.knight, true, false, 7),
                new tower("tw1", pieceTypes.tower, true, false, 1),
                new tower("tw2", pieceTypes.tower, true, false, 8),
                new rook("rw1", pieceTypes.rook, true, false, 3),
                new rook("rw2", pieceTypes.rook, true, false, 6),
                new queen("qw", pieceTypes.queen, true, false, 4),
                new king("kiw", pieceTypes.king, true, false, 5),

            ]);
        }
        else {
            return new List<gamePiece>([
                new pawn("pb1", pieceTypes.pawn, false, false, 49),
                new pawn("pb2", pieceTypes.pawn, false, false, 50),
                new pawn("pb3", pieceTypes.pawn, false, false, 51),
                new pawn("pb4", pieceTypes.pawn, false, false, 52),
                new pawn("pb5", pieceTypes.pawn, false, false, 53),
                new pawn("pb6", pieceTypes.pawn, false, false, 54),
                new pawn("pb7", pieceTypes.pawn, false, false, 55),
                new pawn("pb8", pieceTypes.pawn, false, false, 56),
                new knight("knb1", pieceTypes.knight, false, false, 58),
                new knight("knb2", pieceTypes.knight, false, false, 63),
                new tower("tb1", pieceTypes.tower, false, false, 57),
                new tower("tb2", pieceTypes.tower, false, false, 64),
                new rook("rb1", pieceTypes.rook, false, false, 59),
                new rook("rb2", pieceTypes.rook, false, false, 62),
                new queen("qb", pieceTypes.queen, false, false, 60),
                new king("kib", pieceTypes.king, false, false, 61),
            ]);
        }

    }

    export function initOccupiedTiles(player: player): List<occupiedTile> {
        if (player.id === "white") {
            return new List<occupiedTile>([
                { id: 1, occupant: player.pieces.Where(p => p.id === "tw1").First() },
                { id: 2, occupant: player.pieces.Where(p => p.id === "knw1").First() },
                { id: 3, occupant: player.pieces.Where(p => p.id === "rw1").First() },
                { id: 4, occupant: player.pieces.Where(p => p.id === "qw").First() },
                { id: 5, occupant: player.pieces.Where(p => p.id === "kiw").First() },
                { id: 6, occupant: player.pieces.Where(p => p.id === "rw2").First() },
                { id: 7, occupant: player.pieces.Where(p => p.id === "knw2").First() },
                { id: 8, occupant: player.pieces.Where(p => p.id === "tw2").First() },
                { id: 9, occupant: player.pieces.Where(p => p.id === "pw1").First() },
                { id: 10, occupant: player.pieces.Where(p => p.id === "pw2").First() },
                { id: 11, occupant: player.pieces.Where(p => p.id === "pw3").First() },
                { id: 12, occupant: player.pieces.Where(p => p.id === "pw4").First() },
                { id: 13, occupant: player.pieces.Where(p => p.id === "pw5").First() },
                { id: 14, occupant: player.pieces.Where(p => p.id === "pw6").First() },
                { id: 15, occupant: player.pieces.Where(p => p.id === "pw7").First() },
                { id: 16, occupant: player.pieces.Where(p => p.id === "pw8").First() }
            ]);
        }
        else {
            return new List<occupiedTile>([
                { id: 57, occupant: player.pieces.Where(p => p.id === "tb1").First() },
                { id: 58, occupant: player.pieces.Where(p => p.id === "knb1").First() },
                { id: 59, occupant: player.pieces.Where(p => p.id === "rb1").First() },
                { id: 60, occupant: player.pieces.Where(p => p.id === "qb").First() },
                { id: 61, occupant: player.pieces.Where(p => p.id === "kib").First() },
                { id: 62, occupant: player.pieces.Where(p => p.id === "rb2").First() },
                { id: 63, occupant: player.pieces.Where(p => p.id === "knb2").First() },
                { id: 64, occupant: player.pieces.Where(p => p.id === "tb2").First() },
                { id: 49, occupant: player.pieces.Where(p => p.id === "pb1").First() },
                { id: 50, occupant: player.pieces.Where(p => p.id === "pb2").First() },
                { id: 51, occupant: player.pieces.Where(p => p.id === "pb3").First() },
                { id: 52, occupant: player.pieces.Where(p => p.id === "pb4").First() },
                { id: 53, occupant: player.pieces.Where(p => p.id === "pb5").First() },
                { id: 54, occupant: player.pieces.Where(p => p.id === "pb6").First() },
                { id: 55, occupant: player.pieces.Where(p => p.id === "pb7").First() },
                { id: 56, occupant: player.pieces.Where(p => p.id === "pb8").First() }
            ]);
        }
    }

    export function initPlayers(): List<player> {
        return new List<player>([
            new player("white"),
            new player("black"),
        ]);
    }

    export function initTiles(game: game): void {
        for (var i = 1; i < 65; i++) {
            let x = i;
            document.getElementById(i.toString()).addEventListener("click", (e: Event) => {
                checkTile(e, x, game);
            });
        }
    }

    function checkTile(e: Event, tileId: number, game: game): any {
        let pickedPiece = game.currentPlayer.pieces.Where(x => x.currentLocation === tileId).FirstOrDefault();
        if (pickedPiece !== undefined) { // clicked on an active piece
            game.currentPlayer.currentActivePiece = pickedPiece;
            game.pieceSelected(pickedPiece);
        }
        else { // clicked on an unoccupied tile
            game.tileSelected(tileId);
        }
    }

    export class occupiedTile {
        id: number;
        occupant: gamePiece;
        constructor(Id: number, piece: gamePiece) {
            this.id = Id;
            this.occupant = piece;
        }
    }

    
}
