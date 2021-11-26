import cloneDeep from "lodash.clonedeep";

export function updateBoardArray({
  boardArray,
  turn,
  clickedSquare,
  selectedSquare,
}) {
  const clonedBoardArray = cloneDeep(boardArray);
  boardArray[0][0].piece = "FLOWER";

  return boardArray;
}
