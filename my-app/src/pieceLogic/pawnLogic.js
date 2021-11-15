import { turnToTurnDirection, checkIsTakeable } from "../utils";
import get from "lodash.get";
import set from "lodash.set";
import { PAWN_STATES, MOVE_STATES, PIECES, COLOURS } from "../constants";
import { isMoveLegal } from "./isMoveLegal";
import { psuedoLegalSet } from "../utils";

function pawnLogic({
  selectedPiece,
  selectedSquare,
  newBoardArray,
  turn,
  kingPos,
}) {
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

    psuedoLegalSet(
      newBoardArray,
      selectedSquare,
      selectedSquare[0] - turnDirection,
      selectedSquare[1],
      newMoveState,
      turn,
      kingPos
    );
  }
  // let pawn leap up to half way across the board, if it hasn't moved before

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
        psuedoLegalSet(
          newBoardArray,
          selectedSquare,
          i,
          selectedSquare[1],
          MOVE_STATES.LEGAL_EMPTY,
          turn,
          kingPos
        );
      } else {
        break;
      }
    }
  }
  function leftRightPawnActions(shiftDirection) {
    //check if can take diagnolly
    if (
      get(newBoardArray, [
        selectedSquare[0] - turnDirection,
        selectedSquare[1] + shiftDirection,
        "piece",
      ]) !== PIECES.EMPTY &&
      checkIsTakeable(
        get(newBoardArray, [
          selectedSquare[0] - turnDirection,
          selectedSquare[1] + shiftDirection,
        ]),
        selectedPiece.colour
      )
    ) {
      psuedoLegalSet(
        newBoardArray,
        selectedSquare,
        selectedSquare[0] - turnDirection,
        selectedSquare[1] + shiftDirection,
        MOVE_STATES.LEGAL_TAKING,
        turn,
        kingPos
      );
    } else {
      for (
        let i = selectedSquare[0];
        i > -1 && i < newBoardArray.length;
        i = i + turnDirection
      ) {
        if (
          get(newBoardArray, [
            i,
            selectedSquare[1] + shiftDirection,
            "enpassantable",
          ]) === PAWN_STATES.JUST_LEAPED
        ) {
          psuedoLegalSet(
            newBoardArray,
            selectedSquare,
            selectedSquare[0] - turnDirection,
            selectedSquare[1] + shiftDirection,
            MOVE_STATES.LEGAL_EN_PASSANT,
            turn,
            kingPos
          );
          break;
        }
      }
    }
  }
  leftRightPawnActions(1);
  leftRightPawnActions(-1);
}

export default pawnLogic;
