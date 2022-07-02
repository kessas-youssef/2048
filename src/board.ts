import { Tile } from "./tile";

export enum Direction {
  Up,
  Down,
  Right,
  Left,
}

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
      { x: 4, y: 1, val: 64 },
      { x: 3, y: 3, val: 64 },
      { x: 4, y: 4, val: 2048 },

    ]
    this.AddTile();
    this.Draw();
  }

  public Move(direction: Direction) {
    this.AddTile();
    this.Draw();
  }

  private AddTile() {
    const empty: Tile[] = [];

    for (let x = 1; x <= 4; x++) {
      for (let y = 1; y <= 4; y++) {
        if (!this.board.find(tile => tile.x === x && tile.y === y)) empty.push({ x, y, val: 2 });
      }
    }
    if (!empty.length) return this.Lose();
    const index = Math.floor(Math.random() * empty.length);
    this.board.push(empty[index])
  }

  public Lose() {
    console.log('You lose')
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