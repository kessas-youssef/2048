import { Tile } from "./tile";

export class Board {

    private board: Tile[] = [];

    public Start() {
        console.log('Starting 2048');
        this.board = [
            { x: 1, y: 1, val: 2 },
            { x: 2, y: 1, val: 4 },
            { x: 3, y: 1, val: 8 },
            { x: 4, y: 1, val: 16 },
            { x: 1, y: 2, val: 32 },
            { x: 2, y: 2, val: 64 },
            { x: 4, y: 4, val: 2048 },
        ]
    }

    public Draw() {
        for (const tile of this.board) {
            const tiles = document.querySelectorAll('.tile') as any;
            tiles?.forEach((t: any) => {
                if (t.dataset.col === String(tile.x) && t.dataset.row === String(tile.y)) {
                    t.classList.add('active', `val_${tile.val}`);
                    t.innerHTML = tile.val;
                } 
            })
        }
    }
}