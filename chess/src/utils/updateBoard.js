import cloneDeep from "lodash.clonedeep";

export function updateBoard({ board, turn, clickedSquare, selectedSquare }) {
  const clonedBoard = cloneDeep(board);

  for (){
    
  }
  board.map(function (row, index) {
    return row.map(function (square, index) {
      return square;
    });
  });

  return board;
}
