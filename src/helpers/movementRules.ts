import {
    gamePiece,
    pieceTypes,
    pawn,
    queen,
    king

} from '../pieces';
import {
    player
} from '../player';
import { initializer } from './initializer';

import {
    List
} from '../../node_modules/linqts_new/dist/linq'
import { game } from '../game';
import {
    locationCheckLog
} from './logger';


export namespace rulesHelper {

    //public 
    export function checkAvailableMoves(piece: gamePiece, game: game): List<number> {
        let log = new locationCheckLog(piece.id);
        let initialLegalMoves = checkBoundaries(piece);
        log.movesAfterBoundaryCheck = initialLegalMoves;
        if (initialLegalMoves.Count() == 0) return initialLegalMoves;
        let legalKingProtectionMoves = exposingKing(piece, game, initialLegalMoves);
        log.movesAfterKingExposureCheck = legalKingProtectionMoves;
        if (legalKingProtectionMoves.Count() == 0) return legalKingProtectionMoves;
        let legalBoardMoves = checkBlocks(piece, legalKingProtectionMoves, game.currentPlayer);
        log.movesAfterBlockCheckFriendly = legalBoardMoves;
        if (legalBoardMoves.Count() == 0) return legalBoardMoves;
        let legalBoardMoves2 = checkBlocks(piece, legalBoardMoves, game.nonCurrentPlayer, true);
        log.movesAfterBlockCheckEnemy = legalBoardMoves2;
        if(game.log.moves.Count() > 0)
            game.log.moves.LastOrDefault().followingMoveChecks.Add(log);
        return legalBoardMoves2;
    }

    export function checkKingAvailableMoves(king: king, game: game): List<number> {
        let initialLegalMoves = checkBoundaries(king);
        if (initialLegalMoves.Count() == 0) return initialLegalMoves;
        let legalBoardMoves = checkBlocks(king, initialLegalMoves, game.currentPlayer);
        if (legalBoardMoves.Count() == 0) return legalBoardMoves;
        return checkKingOnlyMoves(legalBoardMoves, game.nonCurrentPlayer);
    }

    export function isAttack(tiles: List<number>, targetTile: initializer.occupiedTile): boolean {
        if (targetTile.occupant === undefined) return false;
        return tiles.Contains(targetTile.id);
    }

    export function canPawnUpgrade(pawn: pawn): boolean {
        if (pawn.currentLocation < 9 || pawn.currentLocation > 57) return true;
        return false;
    }

    export function getLocationsBetweenTwoPieces(line: number, from: number, to: number): List<number> {
        let result = new List<number>();
        let bigNum = from > to ? from : to;
        let smallNum = from > to ? to : from;
        switch (line) {
            case 1:
                while (smallNum < bigNum) {
                    smallNum++;
                    if (smallNum < bigNum)
                        result.Add(smallNum);
                }
                break;
            case -1:
                while (smallNum < bigNum) {
                    bigNum--;
                    if (smallNum < bigNum)
                        result.Add(bigNum);
                }
                break;
            case 9:
                while (smallNum < bigNum) {
                    smallNum += 9;
                    if (smallNum < bigNum)
                        result.Add(smallNum);
                }
                break;
            case -9:
                while (smallNum < bigNum) {
                    bigNum -= 9;
                    if (smallNum < bigNum)
                        result.Add(bigNum);
                }
                break;
            case 8:
                while (smallNum < bigNum) {
                    smallNum += 8;
                    if (smallNum < bigNum)
                        result.Add(smallNum);
                }
                break;
            case -8:
                while (smallNum < bigNum) {
                    bigNum -= 8;
                    if (smallNum < bigNum)
                        result.Add(bigNum);
                }
                break;
            case 7:
                while (smallNum < bigNum) {
                    smallNum += 7;
                    if (smallNum < bigNum)
                        result.Add(smallNum);
                }
                break;
            case -7:
                while (smallNum < bigNum) {
                    bigNum -= 7;
                    if (smallNum < bigNum)
                        result.Add(bigNum);
                }
                break;
        }
        return result;
    }

    export function getLine(assassin: gamePiece, target: gamePiece, kingToAttacker: boolean = false): number {
        let diff = kingToAttacker ? target.currentLocation - assassin.currentLocation : assassin.currentLocation - target.currentLocation
        if (diff % 9 === 0) {
            if (diff > 0) return 9;
            else return -9
        }
        if (diff % 8 === 0) {
            if (diff > 0) return 8;
            else return -8
        }
        if (diff % 7 === 0) {
            if (diff > 0) return 7;
            else return -7;
        }
        if (diff > 0) return 1;
        else return -1;
    }

    export function getLocationsBetweenPieceAndBoundary(line: number, from: number): List<number> {
        let result = new List<number>();
        let rightBoundary = from % 8 == 0 ? from : (Math.ceil(from / 8)) * 8;
        let leftBoundary = from % 8 == 1 ? from : (Math.floor(from / 8)) * 8 + 1;
        let limit: number;
        let index = from;
        switch (line) {
            case 1:
                limit = rightBoundary;
                while (index < limit) {
                    index++;
                    if (index < limit)
                        result.Add(index);
                }
                break;
            case -1:
                limit = leftBoundary;
                while (index > limit) {
                    index--;
                    if (index > limit)
                        result.Add(index);
                }
                break;
            case 9:
                while (index < 65 && index % 8 != 0) {
                    index += 9;
                    if (index < 65)
                        result.Add(index);
                }
                break;
            case -9:
                while (index > 0 && index % 8 != 1) {
                    index -= 9;
                    if (index > 0)
                        result.Add(index);
                }
                break;
            case 8:
                while (index < 65) {
                    index += 8;
                    if (index < 65)
                        result.Add(index);
                }
                break;
            case -8:
                while (index > 0) {
                    index -= 8;
                    if (index > 0)
                        result.Add(index);
                }
                break;
            case 7:
                while (index < 65 && index % 8 != 1) {
                    index += 7;
                    if (index < 65)
                        result.Add(index);
                }
                break;
            case -7:
                while (index > 0 && index % 8 != 0) {
                    index -= 7;
                    if (index > 0)
                        result.Add(index);
                }
                break;
        }
        return result;
    }

    //#region king protection

    function exposingKing(piece: gamePiece, game: game, initialLegalMoves: List<number>): List<number> {
        let result = new List<number>();
        let target = game.currentPlayer.pieces.Where(x => x.type === pieceTypes.king).FirstOrDefault() as king;
        if (!isDirectLine(piece, target)) return initialLegalMoves; //1.is there a direct line between the moving piece and its king
        let line = getLine(piece, target);
        let locationsToCheck1 = getLocationsBetweenTwoPieces(line, piece.currentLocation, target.currentLocation);
        if (blockersInLocations(locationsToCheck1, game)) return initialLegalMoves; //2. are there other pieces between the moving piece and its king
        let assassin = potentialAssassin(line, piece.currentLocation, game); //3. is there an enemy piece in line that can kill the king
        if (!assassin) return initialLegalMoves;
        let locationsToCheck2 = getLocationsBetweenTwoPieces(line, piece.currentLocation, assassin.currentLocation);
        if (blockersInLocations(locationsToCheck2, game)) return initialLegalMoves; //4. is the moving piece the only thing between the assassin and the king
        let totalLineMoves = locationsToCheck1.Concat(locationsToCheck2);
        let legalMoves = initialLegalMoves.Intersect(totalLineMoves);
        if (initialLegalMoves.Contains(assassin.currentLocation)) legalMoves.Add(assassin.currentLocation);
        return legalMoves //return only moves that are part of the piece moveset and are on the line
    }

    function blockersInLocations(locationsToCheck: List<number>, game: game): boolean {
        let AlliedLocations = game.currentPlayer.occupiedTiles.Select(x => x.id);
        let enemyLocations = game.nonCurrentPlayer.occupiedTiles.Select(x => x.id);
        if (AlliedLocations.Intersect(locationsToCheck).Count() > 0) return true;
        if (enemyLocations.Intersect(locationsToCheck).Count() > 0) return true;
        return false;
    }

    function isDirectLine(defender: gamePiece, target: gamePiece): boolean {
        let diff = Math.abs(defender.currentLocation - target.currentLocation);
        if (diff % 9 === 0) return true;
        if (diff % 8 === 0) return true;
        if (diff % 7 === 0) return true;
        if (diff > 7) return false;
        if (sameRow(defender.currentLocation, target.currentLocation)) return true;
        return false;
    }

    function sameRow(location1: number, location2: number): boolean {
        let row1 = Math.floor(location1 / 8);
        let row2 = Math.floor(location2 / 8);
        if (location1 % 8 !== 0 && location2 % 8 !== 0) {
            if (row1 === row2) return true;
        }
        if (location1 % 8 === 0) {
            if (row1 - 1 === row2) return true;
        }
        if (location2 % 8 === 0) {
            if (row2 - 1 === row1) return true;
        }
        return false;
    }




    

    function potentialAssassin(line: number, from: number, game: game): gamePiece {
        let locations = getLocationsBetweenPieceAndBoundary(line, from);
        if (locations.Count() == 0) return null;
        let assassin = game.nonCurrentPlayer.pieces.Where(x => locations.Contains(x.currentLocation)).FirstOrDefault();
        if (!assassin) return null;
        if (assassin.type === pieceTypes.queen) return assassin;
        if (assassin.type === pieceTypes.rook) {
            if (line == 9 || line == -9 || line == 7 || line == -7) return assassin;
        }
        if (assassin.type === pieceTypes.tower) {
            if (line == 8 || line == -8 || line == 1 || line == -1) return assassin;
        }
        return null;
    }
    //#endregion

    //#region boundaries



    function checkBoundaries(piece: gamePiece): List<number> {
        var rawMoves = piece.moveSet.ToArray().filter((move) => {
            if (move + piece.currentLocation < 65 && move + piece.currentLocation > 0)
                return move;
        });
        switch (piece.type) { //east and west check specific to piece type
            case pieceTypes.pawn:
                let _pawn = piece as pawn;
                var locations = rawMoves.filter((move) => {
                    if (_pawn.isFirstMove) {
                        return move;
                    }
                    else {
                        if (move !== 16 && move !== -16) {
                            return move;
                        }
                    }
                }).map((move) => {
                    return move + piece.currentLocation;
                });
                break;
            case pieceTypes.knight:
                var locations = rawMoves.filter((move) => {
                    if (piece.currentLocation % 8 === 1) {
                        if (move === -15 || move === -6 || move === 10 || move === 17)
                            return move;
                        else return;
                    }
                    if (piece.currentLocation % 8 === 2) {
                        if (move !== 6 && move !== -10)
                            return move;
                        else return;
                    }
                    if (piece.currentLocation % 8 === 7) {
                        if (move !== -6 && move !== 10)
                            return move;
                        else return;
                    }
                    if (piece.currentLocation % 8 === 0) {
                        if (move === 6 || move === -10 || move === 15 || move === -17)
                            return move;
                        else return;
                    }
                    return move
                }).map((move) => {
                    return move + piece.currentLocation;
                });
                break;
            case pieceTypes.rook:
                var locations = rawMoves.filter((move) => {
                    if (piece.currentLocation % 8 === 0) {
                        if (move === -63 || move === -54 || move === -45 || move === -36 || move === -27 || move === -18 || move === -9 || move === 7 || move === 14 || move === 21 || move === 28 || move === 35 || move === 42 || move === 49)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 1) {
                        if (move === -49 || move === -42 || move === -35 || move === -28 || move === -21 || move === -14 || move === -7 || move === 9 || move === 18 || move === 27 || move === 36 || move === 45 || move === 54 || move === 63)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 2) {
                        if (move === -42 || move === -35 || move === -28 || move === -21 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 18 || move === 27 || move === 36 || move === 45 || move === 54)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 3) {
                        if (move === -35 || move === -28 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 27 || move === 36 || move === 45)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 4) {
                        if (move === -28 || move === -27 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 27 || move === 36)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 5) {
                        if (move === -36 || move === -27 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 27 || move === 36)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 6) {
                        if (move === -36 || move === -27 || move === -45 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 28 || move === 35)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 7) {
                        if (move === -54 || move === -45 || move === -36 || move === -27 || move === -18 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 21 || move === 28 || move === 35 || move === 42)
                            return move;
                    }
                }).map((move) => {
                    return move + piece.currentLocation;
                });
                break;
            case pieceTypes.tower:
                var locations = rawMoves.filter((move) => {
                    if (piece.currentLocation % 8 === 0) {
                        if (move < 0 || move % 8 === 0)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 1) {
                        if (move > 0 || move % 8 === 0)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 2) {
                        if (move % 8 === 0 || (move > 0 && move < 7) || move === -1)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 3) {
                        if (move % 8 === 0 || (move > 0 && move < 6) || move === -1 || move === -2)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 4) {
                        if (move % 8 === 0 || (move > 0 && move < 5) || move === -1 || move === -2 || move === -3)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 5) {
                        if (move % 8 === 0 || (move > 0 && move < 4) || move === -1 || move === -2 || move === -3 || move === -4)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 6) {
                        if (move % 8 === 0 || (move > 0 && move < 3) || (move > -6 && move < 0))
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 7) {
                        if (move % 8 === 0 || (move === 1) || (move > -7 && move < 0))
                            return move;
                    }
                }).map((move) => {
                    return move + piece.currentLocation;
                });
                break;
            case pieceTypes.queen:
                var locations = rawMoves.filter((move) => {
                    if (piece.currentLocation % 8 === 0) {
                        if ((move < 0 && move > -8) || move % 8 === 0 || move === -63 || move === -54 || move === -45 || move === -36 || move === -27 || move === -18 || move === -9 || move === 7 || move === 14 || move === 21 || move === 28 || move === 35 || move === 42 || move === 49)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 1) {
                        if ((move > 0 && move < 8) || move % 8 === 0 || move === -49 || move === -42 || move === -35 || move === -28 || move === -21 || move === -14 || move === -7 || move === 9 || move === 18 || move === 27 || move === 36 || move === 45 || move === 54 || move === 63)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 2) {
                        if (move === -1 || (move > 0 && move < 7) || move % 8 === 0 || move === -42 || move === -35 || move === -28 || move === -21 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 18 || move === 27 || move === 36 || move === 45 || move === 54)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 3) {
                        if (move === -1 || move === -2 || (move > 0 && move < 6) || move % 8 === 0 || move === -35 || move === -28 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 27 || move === 36 || move === 45)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 4) {
                        if (move === -1 || move === -2 || move === -3 || (move > 0 && move < 5) || move % 8 === 0 || move === -28 || move === -27 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 27 || move === 36)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 5) {
                        if (move === -1 || move === -2 || move === -3 || move === - 4 || (move > 0 && move < 4) || move % 8 === 0 || move === -36 || move === -27 || move === -21 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 27 || move === 28)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 6) {
                        if (move === -1 || move === -2 || move === -3 || move === - 4 || move === -5 || (move > 0 && move < 3) || move % 8 === 0 || move === -36 || move === -27 || move === -45 || move === -18 || move === -14 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 18 || move === 21 || move === 28 || move === 35)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 7) {
                        if ((move > -7 && move < 0) || move === 1 || move % 8 === 0 || move === -54 || move === -45 || move === -36 || move === -27 || move === -18 || move === -9 || move === -7 || move === 7 || move === 9 || move === 14 || move === 21 || move === 28 || move === 35 || move === 42)
                            return move;
                    }
                }).map((move) => {
                    return move + piece.currentLocation;
                });
                break;
            case pieceTypes.king:
                var locations = rawMoves.filter((move) => {
                    if (piece.currentLocation % 8 === 0) {
                        if (move !== 9 && move !== 1 && move !== -9)
                            return move;
                    }
                    else if (piece.currentLocation % 8 === 1) {
                        if (move !== 7 && move !== -1 && move !== 7)
                            return move;
                    }
                    else
                        return move;
                }).map((move) => {
                    return move + piece.currentLocation;
                });
                break;
        }
        return new List<number>(locations);

    }

    //#endregion

    //#region blocks

    function checkBlocks(piece: gamePiece, locations: List<number>, player: player, isOpponent: boolean = false): List<number> {
        let res = new List<number>();
        switch (piece.type) {
            case pieceTypes.pawn:
                res = checkBlockPawn(piece, locations, player, isOpponent);
                break;
            case pieceTypes.knight:
                res = checkBlockKnight(locations, player, isOpponent);
                break;
            case pieceTypes.rook:
                res = checkBlockRook(piece, locations, player, isOpponent);
                break;
            case pieceTypes.tower:
                res = checkBlockTower(piece, locations, player, isOpponent);
                break;
            case pieceTypes.queen:
                res = checkBlockQueen(piece, locations, player, isOpponent);
                break;
            case pieceTypes.king:
                res = checkBlockKing(piece, locations, player);
                break;
        }
        return res;
    }

    function initialBlockCheck(piece: gamePiece, locations: List<number>, player: player, isOpponent: boolean = false): List<number> {
        let occupied = player.occupiedTiles.Select(x => x.id).OrderBy(y => y);
        if (player.id === "black")
            occupied = player.occupiedTiles.Select(x => x.id).OrderByDescending(y => y);
        locations = locations.OrderByDescending(y => y);
        if (piece.type === pieceTypes.tower) {
            let plus8 = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && (t - piece.currentLocation) % 8 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 8 : 0);
            if (plus8 > 64) plus8 = NaN;
            let minus8 = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && (t - piece.currentLocation) % 8 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 8 : 0);
            if (minus8 < 0) minus8 = NaN;
            let rightSide = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && t - piece.currentLocation < 8 && (t - piece.currentLocation) % 8 !== 0).OrderBy(m => Math.abs(m - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 1 : 0);
            let leftSide = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && piece.currentLocation - t < 8 && (t - piece.currentLocation) % 8 !== 0).OrderBy(m => Math.abs(m - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 1 : 0);
            return new List<number>([minus8, leftSide, rightSide, plus8]).Where(y => y !== undefined).Distinct();
        }
        else if (piece.type === pieceTypes.rook) {
            let plus9 = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && (t - piece.currentLocation) % 9 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 9 : 0);
            let minus9 = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && (t - piece.currentLocation) % 9 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 9 : 0);
            let plus7 = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && (t - piece.currentLocation) % 7 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 7 : 0);
            let minus7 = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && (t - piece.currentLocation) % 7 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 7 : 0);
            return new List<number>([minus9, minus7, plus7, plus9]).Where(y => y !== undefined).Distinct();
        }
        else if (pieceTypes.queen) {
            let plus8 = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && (t - piece.currentLocation) % 8 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 8 : 0);;
            let minus8 = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && (t - piece.currentLocation) % 8 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 8 : 0);
            let rightSide = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && sameRow(t, piece.currentLocation)).OrderBy(m => Math.abs(m - piece.currentLocation)).FirstOrDefault();
            if(piece.currentLocation % 8 === 7 && isOpponent) rightSide++;
            let leftSide = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && sameRow(t, piece.currentLocation)).OrderBy(m => Math.abs(m - piece.currentLocation)).FirstOrDefault();
            if(piece.currentLocation % 8 === 2 && isOpponent) leftSide--;
            let plus9 = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && (t - piece.currentLocation) % 9 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 9 : 0);
            let minus9 = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && (t - piece.currentLocation) % 9 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 9 : 0);
            let plus7 = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && (t - piece.currentLocation) % 7 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 7 : 0);
            let minus7 = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && (t - piece.currentLocation) % 7 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 7 : 0);
            return new List<number>([minus9, minus7, plus7, plus9, minus8, leftSide, rightSide, plus8]).Where(y => y !== undefined).OrderBy(b => b).Distinct();
        }
    }

    function checkBlockPawn(piece: gamePiece, locations: List<number>, player: player, isOpponent: boolean = false): List<number> { //includes color related move check
        let pawn = piece as pawn;
        let blockers = player.occupiedTiles.Where(x => Math.abs(x.id - piece.currentLocation) === 8 || Math.abs(x.id - piece.currentLocation) === 16).Select(y => y.id);
        locations = locations.Except(blockers)
        if (pawn.isWhite) {
            if (isOpponent) {
                let victim1 = player.occupiedTiles.Where(x => x.id === pawn.currentLocation + 7).FirstOrDefault();
                if (!victim1)
                    locations = locations.Except(locations.Where(x => x === pawn.currentLocation + 7))
                let victim2 = player.occupiedTiles.Where(x => x.id === pawn.currentLocation + 9).FirstOrDefault();
                if (!victim2)
                    locations = locations.Except(locations.Where(x => x === pawn.currentLocation + 9));
            }
            locations = locations.Except(player.occupiedTiles.Select(z => z.id).Where(c => c < pawn.currentLocation).ToList());

        }
        else {
            if (isOpponent) {
                let victim1 = player.occupiedTiles.Where(x => x.id === pawn.currentLocation - 7).FirstOrDefault();
                if (!victim1)
                    locations = locations.Except(locations.Where(x => x === pawn.currentLocation - 7))
                let victim2 = player.occupiedTiles.Where(x => x.id === pawn.currentLocation - 9).FirstOrDefault();
                if (!victim2)
                    locations = locations.Except(locations.Where(x => x === pawn.currentLocation - 9))
            }
            locations = locations.Except(player.occupiedTiles.Select(z => z.id).Where(c => c > pawn.currentLocation).ToList());
        }
        return locations;
        // if (!pawn.isFirstMove) {
        //     if (isOpponent) {
        //         return locations.Except(player.occupiedTiles.Where(z => Math.abs(z.id - pawn.currentLocation) === 8).Select(t => t.id).ToList());
        //     }

        //     return locations.Except(player.occupiedTiles.Select(z => z.id).ToList());
        // }
        // else {
        //     if (locations.Contains(piece.currentLocation + 16) && !locations.Contains(piece.currentLocation + 8)) {
        //         locations.Remove(piece.currentLocation + 16);
        //     }
        //     else if (locations.Contains(piece.currentLocation - 16) && !locations.Contains(piece.currentLocation - 8)) {
        //         locations.Remove(piece.currentLocation - 16);
        //     }
        //     return locations;
        // }
    }

    function checkBlockKnight(locations: List<number>, player: player, isOpponent: boolean = false): List<number> {
        if (isOpponent) return locations;
        return locations.Except(player.occupiedTiles.Select(z => z.id).ToList());
    }

    function checkBlockRook(piece: gamePiece, locations: List<number>, player: player, isOpponent: boolean = false): List<number> {
        let behindBlocked = new List<number>();
        let blocked = initialBlockCheck(piece, locations, player, isOpponent)
        if (blocked.Count() == 0)
            return locations;
        blocked.ForEach((num) => {
            let diff = num - piece.currentLocation;
            let index = num;
            if (diff % 9 === 0) {
                if (diff > 0) {
                    while (index < 64) {
                        index += 9;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);

                    }
                } else {
                    while (index > 0) {
                        index -= 9;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);

                    }
                }
            }
            else if (diff % 7 === 0) {
                if (diff > 0) {
                    while (index < 57) {
                        index += 7;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);

                    }
                }
                else {
                    while (index > 0) {
                        index -= 7;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }

        });

        return locations.Except(blocked).Except(behindBlocked);
    }

    function checkBlockTower(piece: gamePiece, locations: List<number>, player: player, isOpponent: boolean = false): List<number> {
        let behindBlocked = new List<number>();
        let blocked = initialBlockCheck(piece, locations, player, isOpponent)
        if (blocked.Count() == 0)
            return locations;
        blocked.ForEach(num => {
            let diff = num - piece.currentLocation;
            let index = num;
            if (Math.abs(diff) < 8) {
                if (diff > 0) {
                    while (index % 8 > 0) {
                        index += 1;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index % 8 > 1) {
                        index -= 1;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);

                    }
                }
            }
            else if (diff % 8 === 0) {
                if (diff > 0) {
                    while (index < 64) {
                        index += 8;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);

                    }
                }
                else {
                    while (index > 0) {
                        index -= 8;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
        });
        return locations.Except(blocked).Except(behindBlocked);
    }

    function checkBlockQueen(piece: gamePiece, locations: List<number>, player: player, isOpponent: boolean = false): List<number> {
        let behindBlocked = new List<number>();
        let blocked = initialBlockCheck(piece, locations, player, isOpponent)
        if (blocked.Count() == 0)
            return locations;
        blocked.ForEach((num) => {
            let diff = num - piece.currentLocation;
            let index = num;
            if (diff % 9 === 0) {
                if (diff > 0) {
                    while (index < 56) {
                        index += 9;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);

                    }
                } else {
                    while (index > 9) {
                        index -= 9;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);

                    }
                }
            }
            else if (diff % 7 === 0) {
                if (diff > 0) {
                    while (index < 56) {
                        index += 7;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index > 0) {
                        index -= 7;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
            else if (Math.abs(diff) < 8) {
                if (diff > 0) {
                    while (index % 8 > 0) {
                        index += 1;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index % 8 > 1) {
                        index -= 1;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);

                    }
                }
            }
            else if (diff % 8 === 0) {
                if (diff > 0) {
                    while (index < 64) {
                        index += 8;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
                else {
                    while (index > 0) {
                        index -= 8;
                        if (locations.Where(x => x === index).Count() > 0)
                            behindBlocked.Add(index);
                    }
                }
            }
        });
        return locations.Except(blocked).Except(behindBlocked);
    }

    function checkBlockKing(piece: gamePiece, locations: List<number>, player: player, isOpponent: boolean = false): List<number> {
        let blocked = locations.Intersect(player.occupiedTiles.Select(x => x.id));
        return locations.Except(blocked);
    }

    function checkKingOnlyMoves(initialLocations: List<number>, enemyPlayer: player): List<number> {
        let trash = new List<number>();
        initialLocations.ForEach(location => {
            enemyPlayer.pieces.ForEach(piece => {
                if (piece.availableLocations.Where(x => x == location).Count() == 1) {
                    trash.Add(location);
                    return;
                }
            });
        });
        return initialLocations.Except(trash);
    }

    //#endregion



}