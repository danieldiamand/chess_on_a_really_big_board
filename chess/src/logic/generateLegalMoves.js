import { PIECES } from "../constants/pieces";
import lineLogic from "./lineLogic";

function generateLegalMoves(newBoard, kingSquare, selectedSquare) {
  switch (true) {
    case selectedSquare.piece.type === PIECES.ROOK:
      lineLogic(newBoard, kingSquare, selectedSquare, [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]);
      break;
    case selectedSquare.piece === PIECES.BISHOP:
      break;
    case selectedSquare.piece === PIECES.QUEEN:
      break;
    case selectedSquare.piece === PIECES.KNIGHT:
      break;
    case selectedSquare.piece === PIECES.KING:
      break;
    case selectedSquare.piece === PIECES.PAWN:
      break;
    case selectedSquare.piece === PIECES.CHANCELLOR:
      break;
    case selectedSquare.piece === PIECES.ARCHBISHOP:
      break;
    case selectedSquare.piece === PIECES.MOON:
      break;
    case selectedSquare.piece === PIECES.GRAVE:
      break;
    case selectedSquare.piece === PIECES.JESTER:
      break;
    case selectedSquare.piece === PIECES.ROSE:
      break;
    default:
  }
  return newBoard;
}

export default generateLegalMoves;
