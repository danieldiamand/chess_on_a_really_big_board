import get from "lodash.get";
import set from "lodash.set";
import { PIECES } from "../constants/pieces";
import { isTakeable } from "../utils";
import checkTrulyLegal from "./checkTrulyLegal";

function lineLogic(newBoard, kingSquare, selectedSquare, lineArray) {
  for (let lines of lineArray) {
    for (
      let y = selectedSquare.y + lines[0], x = selectedSquare.x + lines[1];
      y > -1 && y < newBoard.length && x > -1 && x < newBoard[0].length;
      y = y + lines[0], x = x + lines[1]
    ) {
      let activeSquare = get(newBoard, [y, x]);
      console.log(activeSquare.piece.type);
      if (
        activeSquare.piece.type === PIECES.EMPTY ||
        !activeSquare.piece.type
      ) {
        if (checkTrulyLegal()) {
          newBoard[y][x].flags.isLegal = true;
        }
      } else if (isTakeable(selectedSquare, activeSquare)) {
        if (checkTrulyLegal()) {
          newBoard[y][x].flags.isLegal = true;
        }
        break;
      } else {
        break;
      }
    }
  }
  return newBoard;
}

export default lineLogic;
