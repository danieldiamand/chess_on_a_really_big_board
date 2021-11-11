import { checkIsTakeable } from "../utils";
import { isMoveLegal } from "./isMoveLegal";
import { PIECES, MOVE_STATES } from "../constants";
import get from "lodash.get";
import set from "lodash.set";
import { psuedoLegalSet } from "../utils";

function flowerLogic(
  { selectedPiece, selectedSquare, newBoardArray, turn },
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
      currentYCoords < newBoardArray.length
    ) {
      if (
        get(newBoardArray, [currentXCoords, currentYCoords, "piece"]) ===
        PIECES.EMPTY
      ) {
        psuedoLegalSet (
            newBoardArray,
            selectedSquare,
            currentXCoords,
            currentYCoords,
            MOVE_STATES.LEGAL_EMPTY,
            turn
          )
        
      }else if (get(newBoardArray, [currentXCoords, currentYCoords, "colour"]) !==
      turn){

          psuedoLegalSet(
            newBoardArray,
            selectedSquare,
            currentXCoords,
            currentYCoords,
            MOVE_STATES.LEGAL_TAKING,
            turn
          )
        
      }
    }
    } 
}
export default flowerLogic;
