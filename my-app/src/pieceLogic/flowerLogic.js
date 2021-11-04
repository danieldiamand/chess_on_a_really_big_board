import { checkIsTakeable } from "../utils";
import { PIECES, MOVE_STATES } from "../constants";
import get from "lodash.get";
import set from "lodash.set";

function flowerLogic(
  { selectedPiece, selectedSquare, newBoardArray },
  patternArray
) {
  for (let i = 0; i < patternArray.length; i++) {
    // do it by setting x pos and y pos for each thign and testign if within range
    let currentXCoords = selectedSquare[0] - patternArray[i][1];
    let currentYCoords = selectedSquare[1] - patternArray[i][0];
    if (
      currentXCoords > -1 &&
      currentXCoords < newBoardArray.length &&
      currentYCoords > -1 &&
      currentYCoords < newBoardArray.length &&
      checkIsTakeable(
        newBoardArray[currentXCoords][currentYCoords],
        selectedPiece.colour
      )
    ) {
      if (
        get(newBoardArray, [currentXCoords, currentYCoords, "piece"]) ===
        PIECES.EMPTY
      ) {
        set(
          newBoardArray,
          [currentXCoords, currentYCoords, "moveState"],
          MOVE_STATES.LEGAL_EMPTY
        );
      } else {
        set(
          newBoardArray,
          [currentXCoords, currentYCoords, "moveState"],
          MOVE_STATES.LEGAL_TAKING
        );
      }
    }
  }
}
export default flowerLogic;
