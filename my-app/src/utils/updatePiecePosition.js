import get from "lodash.get";
import set from "lodash.set";
import { PIECES, COLOUR_TO_DIRECTION, MOVE_STATES } from "../constants";
import { checkIsTakeable } from "../utils";

function updatePiecePosition(
  newBoardArray,
  { selectedSquare, currentRow, currentColumn, turn, movedPiece },
  moveType
) {
  set(newBoardArray, [selectedSquare[0], selectedSquare[1]], {
    piece: PIECES.EMPTY,
  });
  set(newBoardArray, [currentRow, currentColumn], movedPiece);
  //complex move type en passant
  if ((moveType = MOVE_STATES.LEGAL_EN_PASSANT)) {
    for (
      let i = currentRow;
      i < newBoardArray.length && i > -1;
      i = i + COLOUR_TO_DIRECTION[turn]
    ) {
      if (
        get(newBoardArray, [i, currentColumn], {}).piece === PIECES.PAWN &&
        checkIsTakeable(newBoardArray[i][currentColumn], turn)
      ) {
        set(newBoardArray, [i, currentColumn], { piece: PIECES.EMPTY });
        break;
      }
    }
  }
  //check and movement for castling
  if (movedPiece.MOVE_STATES === MOVE_STATES.LEGAL_CASTLE) {
    if (selectedSquare[1] - currentColumn < 1) {
      for (let i = currentColumn; i < newBoardArray.length; i++) {
        if (get(newBoardArray, [selectedSquare[0], i]).piece === PIECES.ROOK) {
          set(
            newBoardArray,
            [selectedSquare[0], currentColumn - 1],
            get(newBoardArray, [selectedSquare[0], i])
          );
          set(newBoardArray, [selectedSquare[0], i], { piece: PIECES.EMPTY });
          break;
        }
      }
    }
    if (selectedSquare[1] - currentColumn > 1) {
      for (let i = currentColumn; i > -1; i--) {
        if (get(newBoardArray, [selectedSquare[0], i]).piece === PIECES.ROOK) {
          set(
            newBoardArray,
            [selectedSquare[0], currentColumn + 1],
            get(newBoardArray, [selectedSquare[0], i])
          );
          set(newBoardArray, [selectedSquare[0], i], { piece: PIECES.EMPTY });
          break;
        }
      }
    }
  }
  return newBoardArray;
}

export default updatePiecePosition;
