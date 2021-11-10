import { updateBoardArray } from "../utils/boardArrayManager";
import get from "lodash.get";
export function isMoveLegal(
  newBoardArray,
  selectedSquare,
  y,
  x,
  moveState,
  turn
) {
  if (get(newBoardArray, [x, y])) {
    const psuedoLegalBoard = updateBoardArray(
      newBoardArray,
      selectedSquare,
      y,
      x,
      turn
    );
  }
  return true;
}
