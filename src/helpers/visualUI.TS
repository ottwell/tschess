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


    export function move(from: number, to: number){
        let pieceHtmlText = document.getElementById(from.toString()).innerText;
        document.getElementById(from.toString()).innerText = "";
        document.getElementById(to.toString()).innerText = pieceHtmlText;

    }

}

