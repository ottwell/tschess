import * as gameGenerator from "./game";
import '../src/style.css';


window.onload = () => {
    let game = new gameGenerator.game();
    game.init();
}

