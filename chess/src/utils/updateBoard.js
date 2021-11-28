import cloneDeep from "lodash.clonedeep";
import set from "lodash.set";
import get from "lodash.get";
import { TILES } from "../constants/tiles";
import { COLORS } from "../constants/colors";

function colorToDirection(color) {
  if (color === COLORS.WHITE) {
    return -1;
  } else if (color === COLORS.BLACK) {
    return 1;
  } else {
    return 0;
  }
}

function getSelectedSquare({
  isMouseDown,
  clickedSquare,
  selectedSquare,
  turn,
}) {
  let newSelectedSquare = selectedSquare;
  if (
    (selectedSquare && !isMouseDown) ||
    turn !== get(clickedSquare, ["piece", "color"])
  ) {
    newSelectedSquare = null;
  } else {
    newSelectedSquare = clickedSquare;
  }
  return cloneDeep(newSelectedSquare);
}

export function updateBoard({
  board: NEVER_USE_THIS_BOARD,
  turn,
  clickedSquare,
  selectedSquare,
  isMouseDown,
}) {
  let newTurn = turn;
  let newBoard = cloneDeep(NEVER_USE_THIS_BOARD);
  let newSelectedSquare = getSelectedSquare({
    isMouseDown,
    clickedSquare,
    selectedSquare,
    turn,
  });

  for (let row of newBoard) {
    for (let square of row) {
      if (
        clickedSquare &&
        clickedSquare.x === square.x &&
        clickedSquare.y === square.y &&
        square.piece.color === turn
      ) {
        square.flags.isDragged = true;
      } else {
        square.flags.isDragged = false;
      }
      square.flags.isLegal = false;
    }
  }

  try {
    if (newSelectedSquare) {
      newBoard[newSelectedSquare.y + colorToDirection(turn)][
        newSelectedSquare.x
      ].flags.isLegal = true;
    }
  } catch (e) {
    console.error(e);
  }

  if (selectedSquare && clickedSquare && clickedSquare.flags.isLegal === true) {
    set(
      newBoard,
      [clickedSquare.y, clickedSquare.x],
      replaceSquare(clickedSquare, selectedSquare)
    );
    set(
      newBoard,
      [selectedSquare.y, selectedSquare.x],
      createEmptySquare(selectedSquare)
    );
    newTurn = swapTurn(turn);
  }

  return {
    board: newBoard,
    turn: newTurn,
    selectedSquare: newSelectedSquare,
  };
}

function replaceSquare(originalSquare, newSquare) {
  const returnedSquare = cloneDeep(newSquare);
  returnedSquare.x = originalSquare.x;
  returnedSquare.y = originalSquare.y;
  return returnedSquare;
}

function createEmptySquare({ x, y }) {
  return {
    x,
    y,
    piece: {
      type: null,
      color: null,
    },
    tile: {
      type: TILES.NORMAL,
    },
    flags: {},
  };
}

function swapTurn(turn) {
  if (turn === COLORS.WHITE) {
    return COLORS.BLACK;
  } else {
    return COLORS.WHITE;
  }
}
