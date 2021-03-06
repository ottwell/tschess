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
    visualUI as visHelper
} from "./visualUI";
import {
    locationCheckLog
} from './logger';


import {
    List
} from '../../node_modules/linqts_new/dist/linq';
import { game } from '../game';

export namespace movementHelper {

    export function handlePieceMove(game: game, piece: gamePiece, dest: number, generalMoveIndex: number): gamePiece {
        piece.currentLocation = dest;
        if (piece.type === pieceTypes.pawn) {
            let _piece = piece as pawn;
            if(_piece.isFirstMove){
                _piece.isFirstMove = false;
                _piece.firstMoveIndex = generalMoveIndex;
            }
            _piece.canUpgrade = rulesHelper.canPawnUpgrade(_piece);
            if (_piece.canUpgrade) {
                return handleUpgrade(game, _piece);
            }
            return _piece;
        }
        else if (piece.type === pieceTypes.tower) {
            let _piece = piece as tower;
            _piece.canTowerSwitch = false;
            _piece.firstMoveIndex = generalMoveIndex;
            return _piece;
        }
        else if (piece.type === pieceTypes.king) {
            let _piece = piece as king;
            _piece.canTowerSwitch = false;
            _piece.firstMoveIndex = generalMoveIndex;
            return _piece;
        }

        return piece;
    }





    export function handlePlayersMove(game: game, startPoint: initializer.occupiedTile, dest: initializer.occupiedTile, isAttack: boolean, victim: any): game {
        game.currentPlayer.occupiedTiles.Remove(startPoint);
        game.currentPlayer.occupiedTiles.Add(dest);
        let boardMove = new move(startPoint.id, dest.id, game.currentPlayer.currentActivePiece, isAttack, game.currentPlayer, victim, game.currentPlayer.moves.Count() + 1);
        game.currentPlayer.moves.Add(boardMove);
        game.log.moves.Add(boardMove);
        if (isAttack) {
            game.nonCurrentPlayer = handleAttack(game.nonCurrentPlayer, dest, victim);
        }
        return game;
    }

    export function handleReverseMove(game: game, endPoint: initializer.occupiedTile, origin: number, wasAttack: boolean, victim: any): void {
        game.nonCurrentPlayer.lastActivePiece = handlePieceReverseMove(game.nonCurrentPlayer.lastActivePiece, origin, game.log.moves.Count())
        game.nonCurrentPlayer.occupiedTiles.Remove(endPoint);
        game.nonCurrentPlayer.occupiedTiles.Add(new initializer.occupiedTile(origin, game.nonCurrentPlayer.lastActivePiece));
        game.nonCurrentPlayer.moves.RemoveAt(game.nonCurrentPlayer.moves.Count() - 1);
        game.log.moves.RemoveAt(game.log.moves.Count() - 1);
        if (wasAttack) {
            game.currentPlayer = handleResurrection(game.currentPlayer, endPoint, victim);
        }

    }

    export function handleUpgrade(game: game, upgradingPiece: pawn): gamePiece {
        game.currentPlayer.pieces.Remove(upgradingPiece);
        visHelper.showUpgradeDialog();
        let name = getNewPieceName();
        visHelper.hideUpgradeDialog();
        let temp = name as keyof typeof pieceTypes;
        let type = pieceTypes[temp];
        let id = buildIdForGamePiece(type, game.currentPlayer);
        let newPiece = new gamePiece(id, type, upgradingPiece.isWhite, false, upgradingPiece.currentLocation);
        visHelper.visualUpgrade(upgradingPiece.currentLocation, type, upgradingPiece.isWhite);
        return newPiece;
    }

    function buildIdForGamePiece(type: pieceTypes, player: player): string {
        let res: string = "";
        switch (type) {
            case pieceTypes.knight:
                res = "knv5";
                break;
            case pieceTypes.rook:
                res = "rv5";
                break;
            case pieceTypes.tower:
                res = "tv5";
                break;
            case pieceTypes.queen:
                res = "qv5";
                break;
        }
        res = player.id === "white" ? res.replace("v", "w") : res.replace("v", "b");
        return res;
    }

    function handlePieceReverseMove(piece: gamePiece, origin: number, generalMoveIndex: number): gamePiece {
        let cancelledMoveIndex = generalMoveIndex - 1;
        piece.currentLocation = origin;
        if (piece.wasPawn) {
            //todo: downgrade function
        }
        else {
            if (piece.type === pieceTypes.pawn) {
                let _piece = piece as pawn;
                if (_piece.firstMoveIndex === cancelledMoveIndex)
                    _piece.isFirstMove = true;
                return _piece;

            }
            else if (piece.type === pieceTypes.tower) {
                let _piece = piece as tower;
                if (_piece.firstMoveIndex === cancelledMoveIndex)
                    _piece.canTowerSwitch = true;
                return _piece;
            }
            else if (piece.type === pieceTypes.king) {
                let _piece = piece as king;
                if (_piece.firstMoveIndex === cancelledMoveIndex)
                    _piece.canTowerSwitch = true;
                return _piece;
            }
        }
        return piece;
    }

    function handleAttack(player: player, dest: initializer.occupiedTile, victim: gamePiece): player {
        victim.isDead = true;
        player.pieces.Remove(victim);
        player.occupiedTiles.Remove(player.occupiedTiles.Where(x => x.id === dest.id).FirstOrDefault());
        return player;
    }

    function handleResurrection(player: player, deathScene: initializer.occupiedTile, victim: gamePiece): player {
        victim.isDead = false;
        victim.currentLocation = deathScene.id;
        victim.init();
        deathScene.occupant = victim;
        player.pieces.Add(victim);
        player.occupiedTiles.Add(deathScene);
        return player;
    }

    function getNewPieceName(): string {
        var result = "";
        var element = document.getElementById('drpUpgrade') as HTMLSelectElement;
        result = element.option[element.selectedIndex].value;
        if(!result){
            setInterval(function(){
                result = element.option[element.selectedIndex].value;
                if(result) {
                    clearInterval(this);
                    return result;
                }
            }, 1000)
        }
        return result;
    }
}

export class move {
    origin: number;
    destination: number;
    movingPiece: gamePiece;
    movingPlayer: player
    victim: gamePiece
    isAttack: boolean;
    index: number;
    followingMoveChecks: List<locationCheckLog>;

    constructor(o: number, d: number, p: gamePiece, i: boolean, pp: player, v: any, ind: number) {
        this.origin = o;
        this.destination = d;
        this.movingPiece = p;
        this.isAttack = i;
        this.victim = v;
        this.movingPlayer = pp;
        this.index = ind;
        this.followingMoveChecks = new List<locationCheckLog>();
    }

}