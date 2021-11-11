import { PIECES, MOVE_STATES } from "../constants";
import get from "lodash.get";
import set from "lodash.set";

function castlingLogic({ selectedSquare, newBoardArray, turn }) {
  function countToRook(turnDirection, moveState) {
    for (
      let i = selectedSquare[1] + turnDirection;
      -1 < i && i < newBoardArray.length;
      i = i + turnDirection
    ) {
      if (get(newBoardArray, [selectedSquare[0], i, "isCastleable"])) {
        //king moves to exact centre or centre plus one away from starting pos
        if (((selectedSquare[1] + i) / 2) % 1 === 0) {
          set(
            newBoardArray,
            [selectedSquare[0], (selectedSquare[1] + i) / 2, "moveState"],
            moveState
          );
        } else {
          set(
            newBoardArray,
            [
              selectedSquare[0],
              Math.floor((selectedSquare[1] + i) / 2) + 1,
              "moveState",
            ],
            moveState
          );
        }
        break;
      } else if (
        get(newBoardArray, [selectedSquare[0], i, "piece"]) !== PIECES.EMPTY
      ) {
        break;
      }
    }
  }

  if (
    get(newBoardArray, [selectedSquare[0], selectedSquare[1]], "isCastleable")
  ) {
    countToRook(1, MOVE_STATES.LEGAL_CASTLE_PLUS);
    countToRook(-1, MOVE_STATES.LEGAL_CASTLE_MINUS);
  }
}

export default castlingLogic;
