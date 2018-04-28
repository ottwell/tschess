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
} from '../../node_modules/linqts/dist/linq';
import { game } from '../game';

export namespace rulesHelper {

    //public 
    export function checkAvailableMoves(piece: gamePiece, game: game): List<number> {
        if (!exposingKing(piece, game)) {
            var legalBoundaryMoves = checkBoundaries(piece);
            var legalBoardMoves1 = checkBlocks(piece, legalBoundaryMoves, game.currentPlayer);
            var legalBoardMoves2 = checkBlocks(piece, legalBoardMoves1, game.nonCurrentPlayer, true);
            return legalBoardMoves2;
        }
        return new List<number>();
    }

    export function isAttack(tiles: List<number>, targetTile: initializer.occupiedTile): boolean {
        if (targetTile.occupant === undefined) return false;
        return tiles.Contains(targetTile.id);
    }

    export function canPawnUpgrade(pawn: pawn): boolean {
        if (pawn.currentLocation < 9 || pawn.currentLocation > 57) return true;
        return false;
    }

    

    

    //helpers
    
    function exposingKing(piece: gamePiece, game: game): boolean {
        let target = game.currentPlayer.pieces.Where(x => x.type === pieceTypes.king).FirstOrDefault() as king;
        if (!isDirectLine(piece, target)) return false;
        let line = getLine(piece, target);

        //to do:
        //1. check if there are other defenders (from both armies) closer to the king. if so, return false
        //2. check line between defender and target, and see if there is a potential assassin with a move set that can attack the king

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

    function getLine(assassin: gamePiece, target: gamePiece): line {
        let diff = assassin.currentLocation - target.currentLocation;
        if (diff % 9 === 0) {
            if (diff > 0) return line.plus9;
            else return line.minus9
        }
        if (diff % 8 === 0) {
            if (diff > 0) return line.plus8;
            else return line.minus8
        }
        if (diff % 7 === 0) {
            if (diff > 0) return line.plus7;
            else return line.minus7;
        }
        if (diff > 0) return line.rightSide;
        else return line.leftSide;
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
                res = checkBlockQueen(piece, locations, player);
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
            let rightSide = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && t - piece.currentLocation < piece.currentLocation % 8 && (t - piece.currentLocation) % 8 !== 0).OrderBy(m => Math.abs(m - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 1 : 0);
            let leftSide = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && piece.currentLocation - t < piece.currentLocation % 8 && (t - piece.currentLocation) % 8 !== 0).OrderBy(m => Math.abs(m - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 1 : 0);
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
            let rightSide = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && t - piece.currentLocation < piece.currentLocation % 8 && (t - piece.currentLocation) % 8 !== 0).OrderBy(m => Math.abs(m - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 1 : 0);
            let leftSide = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && piece.currentLocation - t < piece.currentLocation % 8 && (t - piece.currentLocation) % 8 !== 0).OrderBy(m => Math.abs(m - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 1 : 0);
            let plus9 = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && (t - piece.currentLocation) % 9 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 9 : 0);
            let minus9 = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && (t - piece.currentLocation) % 9 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 9 : 0);
            let plus7 = locations.Intersect(occupied).Where(t => t - piece.currentLocation > 0 && (t - piece.currentLocation) % 7 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() + (isOpponent ? 7 : 0);
            let minus7 = locations.Intersect(occupied).Where(t => t - piece.currentLocation < 0 && (t - piece.currentLocation) % 7 === 0).OrderBy(x => Math.abs(x - piece.currentLocation)).FirstOrDefault() - (isOpponent ? 7 : 0);
            return new List<number>([minus9, minus7, plus7, plus9, minus8, leftSide, rightSide, plus8]).Where(y => y !== undefined).OrderBy(b => b).Distinct();
        }
    }

    function checkBlockPawn(piece: gamePiece, locations: List<number>, player: player, isOpponent: boolean = false): List<number> { //includes color related move check
        let pawn = piece as pawn;
        if (pawn.isWhite) {
            if (isOpponent) {
                let victim1 = player.occupiedTiles.Where(x => x.id === pawn.currentLocation + 7).FirstOrDefault();
                if (!victim1)
                    locations = locations.Except(locations.Where(x => x === pawn.currentLocation + 7))
                let victim2 = player.occupiedTiles.Where(x => x.id === pawn.currentLocation + 9).FirstOrDefault();
                if (!victim2)
                    locations = locations.Except(locations.Where(x => x === pawn.currentLocation + 9))
            }
            else
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
            else
                locations = locations.Except(player.occupiedTiles.Select(z => z.id).Where(c => c > pawn.currentLocation).ToList());
        }
        if (!pawn.isFirstMove) {
            if (isOpponent)
                return locations;
            return locations.Except(player.occupiedTiles.Select(z => z.id).ToList());
        }
        else {
            let _tempMoves = locations.Except(player.occupiedTiles.Select(z => z.id).ToList());
            if (_tempMoves.Contains(piece.currentLocation + 16) && !_tempMoves.Contains(piece.currentLocation + 8)) {
                _tempMoves.Remove(piece.currentLocation + 16);
            }
            else if (_tempMoves.Contains(piece.currentLocation - 16) && !_tempMoves.Contains(piece.currentLocation - 8)) {
                _tempMoves.Remove(piece.currentLocation - 16);
            }
            return _tempMoves;
        }
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
                    while (index < 51) {
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
                    while (index < 51) {
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


    export enum line {
        plus8, minus8, plus9, minus9, plus7, minus7, leftSide, rightSide
    }

}