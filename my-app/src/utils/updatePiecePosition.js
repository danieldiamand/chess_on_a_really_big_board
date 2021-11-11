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
  if (moveType === MOVE_STATES.LEGAL_EN_PASSANT) {
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
  if (moveType === MOVE_STATES.LEGAL_CASTLE_MINUS) {
    for (let x = selectedSquare[1]; x>-1; x=x- 1){
       const currentPiece = get(newBoardArray, [selectedSquare[0],x]) 
       if (currentPiece.piece === PIECES.ROOK){
         set(newBoardArray, [selectedSquare[0], x], {
           piece: PIECES.EMPTY,
         })
         console.log(currentPiece)
        set(newBoardArray, [currentRow, currentColumn+1], currentPiece)
       }
     }
  }
  if (moveType === MOVE_STATES.LEGAL_CASTLE_PLUS) {
    for (let x = selectedSquare[1]; x<newBoardArray.length; x=x+1){
       const currentPiece = get(newBoardArray, [selectedSquare[0],x]) 
       if (currentPiece.piece === PIECES.ROOK){
         set(newBoardArray, [selectedSquare[0], x], {
           piece: PIECES.EMPTY,
         })
         console.log(currentPiece)
        set(newBoardArray, [currentRow, currentColumn-1], currentPiece)
       }
     }
  }
  return newBoardArray;
}

export default updatePiecePosition;
