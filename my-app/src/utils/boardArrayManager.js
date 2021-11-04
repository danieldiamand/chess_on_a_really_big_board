import cloneDeep from "lodash.clonedeep";
import get from "lodash.get";
import { fenInitialStateMap, PIECES } from "../constants";
import updatePiecePosition from "./updatePiecePosition";
import updateEnPassant from "./updateEnPassant";
import updateCastling from "./updateCastling";

export function genBoardArray(fenCode) {
  let fenRows = fenCode.split("/");
  let board = [];
  for (let i = 0; i < fenRows.length; i++) {
    let row = [];
    var countNumber = 0;
    for (let j = 0; j < fenRows[i].length; j++) {
      if (!isNaN(fenRows[i][j])) {
        countNumber += fenRows[i][j];
      } else {
        if (countNumber !== "") {
          for (let k = 0; k < parseInt(countNumber); k++) {
            row.push({ piece: PIECES.EMPTY });
          }
          countNumber = "";
        }
        const fen = fenRows[i][j];
        const initialState = fenInitialStateMap[fen];
        row.push({
          fen: initialState.fen,
          piece: initialState.piece,
          colour: initialState.colour,
          isCastleable: initialState.isCastleable,
          enpassantable: initialState.enpassantable,
        });
      }
    }
    if (countNumber !== "") {
      for (let k = 0; k < parseInt(countNumber); k++) {
        row.push({ piece: PIECES.EMPTY });
      }
    }
    board.push(row);
  }
  return board;
}

export function updateBoardArray(
  boardArray,
  selectedSquare,
  currentRow,
  currentColumn,
  turn
) {
  let newBoardArray = cloneDeep(boardArray);
  const movedPiece = get(newBoardArray, [selectedSquare[0], selectedSquare[1]]);
  const args = {
    selectedSquare,
    currentRow,
    currentColumn,
    turn,
    movedPiece,
  };
  newBoardArray = updatePiecePosition(
    updateCastling(updateEnPassant(newBoardArray, args), args),
    args
  );
  logBoard(newBoardArray);
  console.log(newBoardArray);
  return newBoardArray;
}

function logBoard(board) {
  board.forEach((row, rowIndex) => {
    const values = [];
    const styles = [];
    row.forEach((piece, pieceIndex) => {
      const background =
        (rowIndex % 2 === 0 && pieceIndex % 2 === 1) ||
        (rowIndex % 2 === 1 && pieceIndex % 2 === 0)
          ? "Chocolate"
          : "SandyBrown";
      const color = piece.colour === "WHITE" ? "white" : "black";
      values.push(piece.fen ? `%c ${piece.fen} ` : "%c   ");
      styles.push(
        piece
          ? `font-weight: bold; background: ${background}; color: ${color}`
          : `background: ${background};`
      );
    });
    console.log(values.join(""), ...styles);
  });
}
