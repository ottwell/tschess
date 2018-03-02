export namespace visualUI{
    export function highlightTile(id: number): void {
        var tile = document.getElementById(id.toString());
        if (tile) {
            tile.classList.add("highlight");
            //tile.innerText = tile.id;
        }
    }

    export function removeAllHighlights(): void {
        let elements = document.querySelectorAll(".highlight");
        if(elements){
            [].forEach.call(elements, (el: HTMLElement) => {
                el.classList.remove("highlight");
            });
        }
    }

    export function move(from: number, to: number){
        let pieceHtmlText = document.getElementById(from.toString()).innerText;
        document.getElementById(from.toString()).innerText = "";
        document.getElementById(to.toString()).innerText = pieceHtmlText;

    }

}