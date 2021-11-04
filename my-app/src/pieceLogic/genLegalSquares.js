import lineLogic from "./lineLogic";
import flowerLogic from "./flowerLogic";
import pawnLogic from "./pawnLogic";
import roseLogic from "./roseLogic";
import castlingLogic from "./castlingLogic";
import { PIECES } from "../constants";
import get from "lodash.get";
import cloneDeep from "lodash.clonedeep";

function updateBoardMoves(selectedSquare, boardArray, turn) {
  let newBoardArray = cloneDeep(boardArray);
  let selectedPiece = get(newBoardArray, [
    selectedSquare[0],
    selectedSquare[1],
  ]);
  let args = { selectedPiece, selectedSquare, newBoardArray };

  //main board logic below
  switch (true) {
    case selectedPiece.piece === PIECES.ROOK:
      lineLogic(args, 0, 1);
      lineLogic(args, 0, -1);
      lineLogic(args, 1, 0);
      lineLogic(args, -1, 0);
      break;
    case selectedPiece.piece === PIECES.BISHOP:
      lineLogic(args, 1, 1);
      lineLogic(args, 1, -1);
      lineLogic(args, -1, 1);
      lineLogic(args, -1, -1);
      break;
    case selectedPiece.piece === PIECES.QUEEN:
      lineLogic(args, 0, 1);
      lineLogic(args, 0, -1);
      lineLogic(args, 1, 0);
      lineLogic(args, -1, 0);
      lineLogic(args, 1, 1);
      lineLogic(args, 1, -1);
      lineLogic(args, -1, 1);
      lineLogic(args, -1, -1);
      break;
    case selectedPiece.piece === PIECES.KNIGHT:
      flowerLogic(args, [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1],
      ]);
      break;
    case selectedPiece.piece === PIECES.KING:
      flowerLogic(args, [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]);
      castlingLogic(args);
      break;
    case selectedPiece.piece === PIECES.PAWN:
      pawnLogic(args);
      break;
    case selectedPiece === "a":
      lineLogic(args, 1, 1);
      lineLogic(args, 1, -1);
      lineLogic(args, -1, 1);
      lineLogic(args, -1, -1);
      flowerLogic(args, [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1],
      ]);
      break;
    case selectedPiece.piece === PIECES.CHANCELLOR:
      lineLogic(args, 0, 1);
      lineLogic(args, 0, -1);
      lineLogic(args, 1, 0);
      lineLogic(args, -1, 0);
      flowerLogic(args, [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1],
      ]);
      break;
    case selectedPiece.piece === PIECES.MOON:
      flowerLogic(args, [
        [0, 2],
        [0, -2],
        [2, 0],
        [-2, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]);
      break;
    case selectedPiece.piece === PIECES.GRAVE:
      flowerLogic(args, [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
        [2, 2],
        [-2, 2],
        [2, -2],
        [-2, -2],
      ]);
      break;
    case selectedPiece.piece === PIECES.JESTER:
      flowerLogic(args, [
        [1, 2],
        [2, 1],
        [1, 3],
        [2, 3],
        [3, 2],
        [3, 1],
        [3, 2],
        [-1, -2],
        [-2, -1],
        [-1, -3],
        [-2, -3],
        [-3, -2],
        [-3, -1],
        [-3, -2],
        [-2, 1],
        [-1, 2],
        [-1, 3],
        [-2, 3],
        [-3, 2],
        [-3, 1],
        [-3, 2],
        [1, -2],
        [2, -1],
        [1, -3],
        [2, -3],
        [3, -2],
        [3, -1],
        [3, -2],
      ]);
      break;
    case selectedPiece.piece === PIECES.ROSE:
      roseLogic(args, [
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
      ]);
      roseLogic(args, [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
      ]);

      break;
    default:
  }
  return newBoardArray;
}

export default updateBoardMoves;
