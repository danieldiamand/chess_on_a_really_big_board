import cloneDeep from "lodash.clonedeep";

export function updateBoard({ board, turn, clickedSquare, selectedSquare }) {
  const clonedBoard = cloneDeep(board);

  for (let row of board) {
    for (let square of row) {
      if (
        clickedSquare &&
        clickedSquare.x === square.x &&
        clickedSquare.y === square.y
      ) {
        square.flags.isDragged = true;
      } else {
        square.flags.isDragged = false;
      }
    }

    board[0][0].flags.isTakeable = true;
    board[0][1].flags.isLegal = true;
  }

  return board;
}
