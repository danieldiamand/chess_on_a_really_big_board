import { sumArray } from "../utils";
import { PIECES, MOVE_STATES } from "../constants";
import get from "lodash.get";
import set from "lodash.set";
import { psuedoLegalSet } from "../utils";

function roseLogic(
  { selectedPiece, selectedSquare, newBoardArray, turn },
  shiftArray
) {
  const permutationArray = [
    [1, 1, true],
    [1, -1, true],
    [-1, 1, true],
    [-1, -1, true],
    [1, 1, false],
    [1, -1, false],
    [-1, 1, false],
    [-1, -1, false],
  ];
  let currentSquare = selectedSquare;
  for (let j = 0; j < permutationArray.length; j++) {
    currentSquare = selectedSquare;
    for (let i = 0; i < shiftArray.length; i++) {
      currentSquare = sumArray(
        currentSquare,
        shiftArray[i],
        permutationArray[j][0],
        permutationArray[j][1],
        permutationArray[j][2]
      );
      if (
        currentSquare[0] < 0 ||
        currentSquare[0] > newBoardArray.length - 1 ||
        currentSquare[1] < 0 ||
        currentSquare[1] > newBoardArray.length - 1
      ) {
        break;
      } else {
        if (
          get(newBoardArray, [currentSquare[0], currentSquare[1], "piece"]) ===
          PIECES.EMPTY
        ) {
          psuedoLegalSet(
            newBoardArray,
            selectedSquare,
            currentSquare[0], currentSquare[1],
            MOVE_STATES.LEGAL_EMPTY,
            turn
          );
        } else if (
          get(newBoardArray, [currentSquare[0], currentSquare[1], "colour"]) !==
          selectedPiece.colour
        ) {
          psuedoLegalSet(
            newBoardArray,
            selectedSquare,
            currentSquare[0],
            currentSquare[1],
            MOVE_STATES.LEGAL_TAKING,
            turn,
            );
          break;
        } else {
          break;
        }
      }
    }
  }
}

export default roseLogic;
