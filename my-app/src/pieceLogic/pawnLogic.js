import { turnToTurnDirection, checkIsTakeable } from "../utils";
import get from "lodash.get";
import set from "lodash.set";
import { PAWN_STATES, MOVE_STATES, PIECES, COLOURS } from "../constants";
import { isMoveLegal } from "./isMoveLegal";

function pawnLogic({ selectedPiece, selectedSquare, newBoardArray, turn }) {
  // set direction pawn moves
  const turnDirection = turnToTurnDirection(selectedPiece.colour);
  // check if can move 1 square forward, if at the end of board the move is considered a promotion.
  if (
    get(newBoardArray, [
      selectedSquare[0] - turnDirection,
      selectedSquare[1],
      "piece",
    ]) === PIECES.EMPTY
  ) {
    const newMoveState =
      selectedSquare[0] - turnDirection === 0 ||
      selectedSquare[0] - turnDirection === newBoardArray.length - 1
        ? MOVE_STATES.LEGAL_PROMOTION
        : MOVE_STATES.LEGAL_EMPTY;
    set(
      newBoardArray,
      [selectedSquare[0] - turnDirection, selectedSquare[1], "moveState"],
      newMoveState
    );
  }
  if (
    get(newBoardArray, [selectedSquare[0], selectedSquare[1]]).enpassantable ===
    PAWN_STATES.CAN_LEAP
  ) {
    let halfWay = null;
    if (selectedPiece.colour === COLOURS.BLACK) {
      halfWay = Math.floor(newBoardArray.length / 2);
    } else {
      halfWay = Math.floor(newBoardArray.length / 2) - 1;
    }
    for (
      let i = selectedSquare[0] - 1 * turnDirection;
      i !== halfWay;
      i = i - turnDirection
    ) {
      if (
        get(newBoardArray, [i, selectedSquare[1], "piece"]) === PIECES.EMPTY
      ) {
        if (
          isMoveLegal(
            newBoardArray,
            selectedSquare,
            i,
            selectedSquare[1],
            MOVE_STATES.LEGAL_EMPTY,
            turn
          )
        ) {
          set(
            newBoardArray,
            [i, selectedSquare[1], "moveState"],
            MOVE_STATES.LEGAL_EMPTY
          );
        }
      } else {
        break;
      }
    }
  }
  // check if enPassant possible doesn't work atm
  // if (selectedSquare[0] < newBoardArray.length - 3 && selectedSquare[0] > 2) {
  //   for (
  //     let j = selectedSquare[0];
  //     j < newBoardArray.length && j > -1;
  //     j = j + turnDirection
  //   ) {
  //     if (
  //       get(newBoardArray, [j, selectedSquare[1] - 1]) === PAWN_STATES.JUST_LEAPED
  //     ) {
  //       legalSquareArray.push([
  //         selectedSquare[0] - turnDirection,
  //         selectedSquare[1] - 1,
  //         true,
  //       ]);
  //       break;
  //     }
  //     if (
  //       get(newBoardArray, [j, selectedSquare[1] + 1]) === PAWN_STATES.JUST_LEAPED
  //     ) {
  //       legalSquareArray.push([
  //         selectedSquare[0] - turnDirection,
  //         selectedSquare[1] + 1,
  //         true,
  //       ]);
  //       break;
  //     }
  //   }
  // }

  //check if take diagnol
  if (
    get(newBoardArray, [
      selectedSquare[0] - turnDirection,
      selectedSquare[1] + 1,
      "piece",
    ]) !== PIECES.EMPTY &&
    checkIsTakeable(
      get(newBoardArray, [
        selectedSquare[0] - turnDirection,
        selectedSquare[1] + 1,
      ]),
      selectedPiece.colour
    )
  ) {
    if (
      isMoveLegal(
        newBoardArray,
        selectedSquare,
        selectedSquare[0] - turnDirection,
        selectedSquare[1] + 1,
        MOVE_STATES.LEGAL_EMPTY,
        turn
      )
    ) {
      set(
        newBoardArray,
        [selectedSquare[0] - turnDirection, selectedSquare[1] + 1, "moveState"],
        MOVE_STATES.LEGAL_TAKING
      );
    }
  } else {
    for (
      let i = selectedSquare[0];
      i > -1 && i < newBoardArray.length;
      i = i + turnDirection
    ) {
      if (
        get(newBoardArray, [i, selectedSquare[1] + 1, "enpassantable"]) ===
        PAWN_STATES.JUST_LEAPED
      ) {
        set(
          newBoardArray,
          [
            selectedSquare[0] - turnDirection,
            selectedSquare[1] + 1,
            "moveState",
          ],
          MOVE_STATES.LEGAL_EN_PASSANT
        );
        break;
      }
    }
  }

  if (
    get(newBoardArray, [
      selectedSquare[0] - turnDirection,
      selectedSquare[1] - 1,
      "piece",
    ]) !== PIECES.EMPTY &&
    checkIsTakeable(
      get(newBoardArray, [
        selectedSquare[0] - turnDirection,
        selectedSquare[1] - 1,
      ]),
      selectedPiece.colour
    )
  ) {
    set(
      newBoardArray,
      [selectedSquare[0] - turnDirection, selectedSquare[1] - 1, "moveState"],
      MOVE_STATES.LEGAL_TAKING
    );
  } else {
    for (
      let i = selectedSquare[0];
      i > -1 && i < newBoardArray.length;
      i = i + turnDirection
    ) {
      if (
        get(newBoardArray, [i, selectedSquare[1] - 1, "enpassantable"]) ===
        PAWN_STATES.JUST_LEAPED
      ) {
        set(
          newBoardArray,
          [
            selectedSquare[0] - turnDirection,
            selectedSquare[1] - 1,
            "moveState",
          ],
          MOVE_STATES.LEGAL_EN_PASSANT
        );
        break;
      }
    }
  }
}

export default pawnLogic;
