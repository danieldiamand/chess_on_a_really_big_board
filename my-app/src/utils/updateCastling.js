// 0 - not a king/rook, 1 - king never moved, 2 - rook never moved or taken,
import { PIECES } from "../constants";
import get from "lodash.get";
import set from "lodash.set";

function updateCastling(
  newBoardArray,
  { selectedSquare, currentRow, currentColumn, turn, movedPiece }
) {
  console.log(movedPiece);
  if (movedPiece.piece === PIECES.KING) {
    for (let i = 0; i < newBoardArray.length; i++) {
      if (
        get(newBoardArray, [selectedSquare[0], i]).piece === PIECES.ROOK ||
        get(newBoardArray, [selectedSquare[0], i]).piece === PIECES.KING
      )
        set(newBoardArray, [selectedSquare[0], i, "isCastleable"], false);
    }
  } else {
    if (movedPiece.piece === PIECES.ROOK) {
      console.log("moved");
      set(
        newBoardArray,
        [selectedSquare[0], selectedSquare[1], "isCastleable"],
        false
      );
    }
    if (get(newBoardArray, [currentRow, currentColumn]).piece === PIECES.ROOK) {
      console.log("taken");
      set(newBoardArray, [currentRow, currentColumn, "isCastleable"], false);
    }
  }
  return newBoardArray;
}

export default updateCastling;
