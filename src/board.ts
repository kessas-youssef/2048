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
    this.board = [];
    this.AddTile();
    this.AddTile();
    this.Draw();
  }

  public Move(direction: Direction) {

    switch (direction) {
      case Direction.Up:
        while (true) {
          let dirty = false;
          for (let i = 0; i < this.board.length; i++) {
            const tile = this.board[i];
            if (tile.y === 1) continue;
            const existing = this.board.find(t => t.y === tile.y - 1 && t.x === tile.x);
            if (existing) {
              if (existing.val === tile.val) {
                // Combine tiles
                existing.val = existing.val + tile.val;
                this.board = this.board.filter(t => !(t.x === tile.x && t.y === tile.y));
              }
              continue;
            }
            this.board[i].y--;
            dirty = true;
          }
          if (!dirty) break;
        }
    }

    this.AddTile();
    this.Draw();
  }

  private AddTile() {
    const empty: Tile[] = [];
    const val = Math.random() * 5 < 1 ? 4 : 2;

    for (let x = 1; x <= 4; x++) {
      for (let y = 1; y <= 4; y++) {
        if (!this.board.find(tile => tile.x === x && tile.y === y)) empty.push({ x, y, val });
      }
    }
    if (empty.length === 0) return this.Lose();
    const index = Math.floor(Math.random() * empty.length);
    this.board.push(empty[index])
  }

  public Lose() {
    console.log('You lose')
  }

  public Draw() {
    const tiles = document.querySelectorAll('.tile') as any;

    tiles?.forEach((t: any) => {
      t.className = 'tile';
      t.innerHTML = '';
    })

    for (const tile of this.board) {
      tiles?.forEach((t: any) => {
        if (t.dataset.col === String(tile.x) && t.dataset.row === String(tile.y)) {
          t.classList.add('active', `val_${tile.val}`);
          t.innerHTML = tile.val;
        }
      })
    }
  }
}