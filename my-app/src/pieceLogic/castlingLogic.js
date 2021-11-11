import { PIECES, MOVE_STATES } from "../constants";
import get from "lodash.get";
import set from "lodash.set";
import { psuedoLegalSet } from "../utils";

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
          psuedoLegalSet (
            newBoardArray,
            selectedSquare,
            selectedSquare[0],
            (selectedSquare[1] + i) / 2,
            moveState,
            turn,
          )
        } else {
          psuedoLegalSet (
            newBoardArray,
            selectedSquare,
            selectedSquare[0],
            Math.floor((selectedSquare[1] + i) / 2)+1,
            moveState,
            turn,
          )
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
