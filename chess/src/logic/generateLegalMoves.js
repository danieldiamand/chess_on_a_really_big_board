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
    case selectedSquare.piece.type === PIECES.BISHOP:
      lineLogic(newBoard, kingSquare, selectedSquare, [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]);
      break;
    case selectedSquare.piece.type === PIECES.QUEEN:
      lineLogic(newBoard, kingSquare, selectedSquare, [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]);
      break;
    case selectedSquare.piece.type === PIECES.KNIGHT:
      break;
    case selectedSquare.piece.type === PIECES.KING:
      break;
    case selectedSquare.piece.type === PIECES.PAWN:
      break;
    case selectedSquare.piece.type === PIECES.CHANCELLOR:
      break;
    case selectedSquare.piece.type === PIECES.ARCHBISHOP:
      break;
    case selectedSquare.piece.type === PIECES.MOON:
      break;
    case selectedSquare.piece.type === PIECES.GRAVE:
      break;
    case selectedSquare.piece.type === PIECES.JESTER:
      break;
    case selectedSquare.piece.type === PIECES.ROSE:
      break;
    default:
  }
  return newBoard;
}

export default generateLegalMoves;
