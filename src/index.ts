import * as gameGenerator from "./game";
import '../src/style.css';


window.onload = () => {
    let game = new gameGenerator.game();
    game.init();
    document.getElementById('showLog').addEventListener("click", (e: Event) => {
        let input = document.getElementById('pieceInput') as HTMLInputElement;
        let val = input.value;
        let log = game.log.moves.LastOrDefault().followingMoveChecks.Where(x => x.pieceName === val).FirstOrDefault();
        console.log(log);
    });
    
}

