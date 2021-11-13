import { updateBoardArray } from "../utils/boardArrayManager";
import { PIECES } from "../constants";
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
    return !isSquareChecked(psuedoLegalBoard, y, x, turn);
  }
}

export function isSquareChecked(boardArray, xPos, yPos, turn) {
  function lineCheck(directionArray, pieceCheckArray) {
    let isChecked = false;
    //for of loop ineffectient here cannot break
    for (let directions of directionArray) {
      for (
        let x = xPos + directions[0], y = yPos + directions[1];
        x < boardArray.length && x > -1 && y < boardArray.length && y > -1;
        x = x + directions[0], y = y + directions[1]
      ) {
        let currentSquare = get(boardArray, [y, x]);
        if (currentSquare.piece !== PIECES.EMPTY) {
          for (let i = 0; i < pieceCheckArray.length; i += 1) {
            if (
              currentSquare.piece === pieceCheckArray[i] &&
              currentSquare.colour !== turn
            ) {
              isChecked = true;
            }
          }
          break;
        }
      }
    }
    return isChecked;
  }
  lineCheck(
    [
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0],
    ],
    [PIECES.ROOK, PIECES.QUEEN, PIECES.CHANCELLOR]
  );
  return false;
}
