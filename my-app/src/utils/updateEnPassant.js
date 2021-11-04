import get from "lodash.get";
import set from "lodash.set";
import { PAWN_STATES } from "../constants";

function updateEnPassant(
  newBoardArray,
  { selectedSquare, currentRow, currentColumn, turn, movedPiece }
) {
  for (let i = 0; i < newBoardArray.length; i++) {
    for (let j = 0; j < newBoardArray.length; j++) {
      if (
        get(newBoardArray, [i, j]).enpassantable === PAWN_STATES.JUST_LEAPED
      ) {
        set(newBoardArray, [i, j, "enpassantable"], PAWN_STATES.CANT_LEAP);
      }
    }
  }
  if (movedPiece.enpassantable === PAWN_STATES.CAN_LEAP) {
    //two senarious either was big first move or wasnt
    if (Math.abs(selectedSquare[0] - currentRow) > 1) {
      set(
        newBoardArray,
        [selectedSquare[0], selectedSquare[1], "enpassantable"],
        PAWN_STATES.JUST_LEAPED
      );
    } else {
      set(
        newBoardArray,
        [selectedSquare[0], selectedSquare[1], "enpassantable"],
        PAWN_STATES.CANT_LEAP
      );
    }
  }
  return newBoardArray;
}

export default updateEnPassant;
