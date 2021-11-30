import get from "lodash.get";
import set from "lodash.set";
import { PIECES } from "../constants/pieces";
import { isTakeable } from "../utils";
import checkTrulyLegal from "./checkTrulyLegal";

function flowerLogic(newBoard, kingSquare, selectedSquare, flowerArray) {
  for (let petal of flowerArray) {
    let activeSquare = get(newBoard, [
      selectedSquare.y + petal[0],
      selectedSquare.x + petal[1],
    ]);
    if (activeSquare) {
      console.log(activeSquare);
      if (
        activeSquare.piece.type === PIECES.EMPTY ||
        !activeSquare.piece.type
      ) {
        if (checkTrulyLegal()) {
          newBoard[activeSquare.y][activeSquare.x].flags.isLegal = true;
        }
      } else if (isTakeable(selectedSquare, activeSquare)) {
        if (checkTrulyLegal()) {
          newBoard[activeSquare.y][activeSquare.x].flags.isLegal = true;
        }
      }
    }
  }
}

export default flowerLogic;
