import { pieceTypes } from "../pieces";
import { getPieceIcon } from '../pieces';

export namespace visualUI{
    
    export var classNames: { [key : string]: string} = {
        destination: "highlight-destination",
        threat: "highlight-threat"
    };

    export function highlightTile(id: number, className: string ): void {
        var tile = document.getElementById(id.toString());
        if (tile) {
            tile.classList.add(className);
            //tile.innerText = tile.id;
        }
    }

    export function removeAllHighlights(): void {
        let elements = document.querySelectorAll(".piece");
        if(elements){
            [].forEach.call(elements, (el: HTMLElement) => {
                if(el.classList.contains('white_square'))
                    el.className = 'piece white_square';            
                else
                    el.className = 'piece black_square';            
            });
        }
    }

    export function removeHighlight(className: string): void {
        let elements = document.querySelectorAll(".piece");
        if(elements){
            [].forEach.call(elements, (el: HTMLElement) => {
                el.classList.remove(className);
            });
        }
    }


    export function move(from: number, to: number): void{
        let span = document.getElementById(from.toString()).childNodes[0];
        document.getElementById(from.toString()).removeChild(span);
        if(document.getElementById(to.toString()).childElementCount > 0){
            document.getElementById(to.toString()).removeChild(document.getElementById(to.toString()).childNodes[0]);
        }
        document.getElementById(to.toString()).appendChild(span);
    }

    export function showUpgradeDialog(): void{
        let elem = document.getElementsByClassName('upgrade-container')[0] as HTMLDivElement;
        elem.style.display = 'block';
        // let iframe = document.createElement('iframe') as HTMLIFrameElement;
        // iframe.id = 'ifMask';
        // iframe.style.position = "absolute";
        // iframe.style.left = iframe.style.right = iframe.style.top = iframe.style.bottom = "0";
        // iframe.style.zIndex = '1000';
        // elem.style.zIndex = '1001';
        // document.body.appendChild(iframe);
    }

    export function hideUpgradeDialog(): void{
        let elem = document.getElementsByClassName('upgrade-container')[0] as HTMLDivElement;
        elem.style.display = 'none';
        // let iframe = document.getElementById('ifMask') as HTMLIFrameElement;
        // document.body.removeChild(iframe);
    }

    export function visualUpgrade(location: number, type: pieceTypes, isWhite: boolean): void{
        let span = document.getElementById(location.toString()).childNodes[0] as HTMLSpanElement;
        span.innerHTML = getPieceIcon(isWhite, type);
    }
}