import { Board, Direction } from './board'
import './scss/style.scss'

const game = new Board();
game.Start();


const onKeyPress = (evt: any) => {
  switch (evt.key) {
    case 'ArrowUp': game.Move(Direction.Up); break;
    case 'ArrowDown': game.Move(Direction.Down); break;
    case 'ArrowLeft': game.Move(Direction.Left); break;
    case 'ArrowRight': game.Move(Direction.Right); break;
  }
}

document.addEventListener('keyup', onKeyPress);