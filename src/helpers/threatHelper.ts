// import { pieceTypes, king } from "../pieces";
// import {
//     List
// } from '../../node_modules/linqts/dist/linq';
// import { game } from "../game";
// import { player } from "../player";
// import {
//     rulesHelper
// } from "./movementRules";
// import { initializer } from "./initializer";


// export namespace threatHelper {
//     export function updateThreats(game: game): player{
//         let king = game.currentPlayer.pieces.Where(x => x.type === pieceTypes.king).FirstOrDefault() as king;
//         let allOccupiedTiles = game.currentPlayer.occupiedTiles.Concat(game.nonCurrentPlayer.occupiedTiles).OrderBy(x => x.id);
//         game.currentPlayer.threats = addThreats(king, allOccupiedTiles);
//         return game.currentPlayer;
//     }

//     function addThreats(king: king, occupiedTiles: List<initializer.occupiedTile>): List<threat>{
//         let threats = new List<threat>();
//         let indexer = king.currentLocation;
//         while (indexer < 56){
//             indexer += 8;
//             if(occupiedTiles.Where(x => x.id === indexer).Count() === 0)
//                 threats.Add(new threat(indexer, king.isWhite ? true: false));
//             else
//                 break;
//         }
//         indexer = king.currentLocation;
//         while (indexer > 8){
//             indexer -= 8;
//             if(occupiedTiles.Where(x => x.id === indexer).Count() === 0)
//                 threats.Add(new threat(indexer, king.isWhite ? true: false));
//             else
//                 break;
//         }
//         indexer = king.currentLocation;
//         while (indexer < 53){
//             indexer += 9;
//             if(occupiedTiles.Where(x => x.id === indexer).Count() === 0)
//                 threats.Add(new threat(indexer, king.isWhite ? true: false));
//             else
//                 break;
//         }
//         indexer = king.currentLocation;
//         while (indexer > 9){
//             indexer -= 9;
//             if(occupiedTiles.Where(x => x.id === indexer).Count() === 0)
//                 threats.Add(new threat(indexer, king.isWhite ? true: false));
//             else
//                 break;
//         }
//         indexer = king.currentLocation;
//         while (indexer < 50){
//             indexer += 7;
//             if(occupiedTiles.Where(x => x.id === indexer).Count() === 0)
//                 threats.Add(new threat(indexer, king.isWhite ? true: false));
//             else
//                 break;
//         }
//         indexer = king.currentLocation;
//         while (indexer > 7 && indexer % 8 !== 0){
//             indexer -= 7;
//             if(occupiedTiles.Where(x => x.id === indexer).Count() === 0)
//                 threats.Add(new threat(indexer, king.isWhite ? true: false));
//             else
//                 break;
//         }
//         indexer = king.currentLocation;
//         while (indexer % 8 !== 0){
//             indexer ++;
//             if(occupiedTiles.Where(x => x.id === indexer).Count() === 0)
//                 threats.Add(new threat(indexer, king.isWhite ? true: false));
//             else
//                 break;
//         }
//         indexer = king.currentLocation;
//         while (indexer % 8 !== 1){
//             indexer --;
//             if(occupiedTiles.Where(x => x.id === indexer).Count() === 0)
//                 threats.Add(new threat(indexer, king.isWhite ? true: false));
//             else
//                 break;
//         }
//         return threats;
//     }

//     export class threat {
//         id: number;
//         threatOnWhite: boolean;
//         threatOnBlack: boolean;
//         constructor(Id: number, tw: boolean) {
//             this.id = Id;
//             this.threatOnWhite = tw;
//             this.threatOnBlack = tw ? false : true;
//         }
//     }
// }






