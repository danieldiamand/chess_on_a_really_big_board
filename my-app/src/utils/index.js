import { COLOURS, PIECES, MOVE_STATES } from "../constants";
import get from "lodash.get";

export function checkSquareMatch(row, col, square) {
  if (row === square[0] && col === square[1]) {
    return true;
  }
  return false;
}

export function sumArray(array1, array2, multiply1, multiply2, isFlip) {
  if (isFlip) {
    return [
      array1[0] + multiply1 * array2[1],
      array1[1] + multiply2 * array2[0],
    ];
  } else {
    return [
      array1[0] + multiply1 * array2[0],
      array1[1] + multiply2 * array2[1],
    ];
  }
}

export function checkSquareMatchTemp(row, col, square) {
  if (row === square[0] && col === square[1] && square[2]) {
    return true;
  }
  return false;
}

export function checkIsTakeable(currentPiece, turn) {
  if (currentPiece) {
    return (
      currentPiece.piece === PIECES.EMPTY ||
      (currentPiece.colour === COLOURS.WHITE && turn === COLOURS.BLACK) ||
      (currentPiece.colour === COLOURS.BLACK && turn === COLOURS.WHITE)
    );
  }
}

export function turnToTurnDirection(turn) {
  if (turn === COLOURS.WHITE) {
    return 1;
  } else {
    return -1;
  }
}

export function changeTurn(turn) {
  if (turn === COLOURS.WHITE) {
    return COLOURS.BLACK;
  } else {
    return COLOURS.WHITE;
  }
}

export function getMoveStateBoolean(selectedSquare) {
  let className = "";
  let isTakeable = false;
  let isLegal = false;
  let isCheck = false;
  let isSelected = false;
  switch (get(selectedSquare, "moveState")) {
    case MOVE_STATES.NONE: {
      // nothing
      break;
    }
    case MOVE_STATES.SELECTED: {
      isSelected = true;
      break;
    }
    case MOVE_STATES.IN_CHECK: {
      // for now do nothing
      break;
    }
    case MOVE_STATES.LEGAL_EMPTY:
    case MOVE_STATES.LEGAL_CASTLE_MINUS:
    case MOVE_STATES.LEGAL_CASTLE_PLUS:
    case MOVE_STATES.LEGAL_PROMOTION: {
      isLegal = true;
      break;
    }
    case MOVE_STATES.LEGAL_TAKING:
    case MOVE_STATES.LEGAL_EN_PASSANT: {
      isLegal = true;
      break;
    }
    default: {
      // do nada
      break;
    }
  }
  return { className, isTakeable, isLegal, isCheck, isSelected };
}
