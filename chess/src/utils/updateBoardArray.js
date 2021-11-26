import cloneDeep from "lodash.clonedeep";

export function updateBoardArray({
  boardArray,
  turn,
  clickedSquare,
  selectedSquare,
}) {
  const clonedBoardArray = cloneDeep(boardArray);

  return boardArray;
}
