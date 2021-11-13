import "./App.css";
import { useState } from "react";
import set from "lodash.set";
import cloneDeep from "lodash.clonedeep";
import get from "lodash.get";
import omit from "lodash.omit";
import updateBoardMoves from "./pieceLogic/genLegalSquares";
import {
  changeTurn,
  checkSquareMatch,
  checkIsTakeable,
  getMoveStateBoolean,
} from "./utils";
import MovingPiece from "./components/MovingPiece";
import Board from "./components/Board";
import { genBoardArray, updateBoardArray } from "./utils/boardArrayManager";
import { COLOURS } from "./constants";

let fenCode = "kr2/1P2/3R/1K2";
//rnmgboaqkcjbgmnr/pppppppppppppppp/16/16/16/16/16/16/16/16/16/16/16/16/PPPPPPPPPPPPPPPP/RNMGBOAQKCJBGMNR";
let mouseCurrentX = null;
let mouseCurrentY = null;

function clearBoardMoves(boardArray) {
  return cloneDeep(boardArray).map((row) =>
    row.map((square) => omit(square, ["moveState"]))
  );
}

function App() {
  const [mousePos, setMousePos] = useState([0, 0]);
  const [turn, setTurn] = useState(COLOURS.WHITE);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [boardArray, setBoardArray] = useState(genBoardArray(fenCode));
  function clickSquare(
    { currentPiece, currentRow, currentColumn },
    wasMouseDown
  ) {
    const isLegal = getMoveStateBoolean(
      get(boardArray, [currentRow, currentColumn])
    ).isLegal;
    if (
      selectedSquare &&
      checkSquareMatch(currentRow, currentColumn, selectedSquare) &&
      wasMouseDown
    ) {
      setBoardArray(clearBoardMoves(boardArray));
      setSelectedSquare(null);
    } else if (wasMouseDown && !checkIsTakeable(currentPiece, turn)) {
      setSelectedSquare([currentRow, currentColumn]);
      setBoardArray(
        updateBoardMoves(
          [currentRow, currentColumn],
          clearBoardMoves(boardArray),
          turn
        )
      );
    } else if (selectedSquare && isLegal) {
      const moveType = get(boardArray, [
        currentRow,
        currentColumn,
        "moveState",
      ]);
      setBoardArray(
        updateBoardArray(
          clearBoardMoves(boardArray),
          selectedSquare,
          currentRow,
          currentColumn,
          turn,
          moveType
        )
      );
      setTurn(changeTurn(turn));
      setSelectedSquare(null);
    }
  }

  return (
    <div className="App">
      <p>{turn} to move</p>
      <p>is mouse down: {isMouseDown ? "true" : "false"}</p>
      {isMouseDown && selectedSquare && (
        <MovingPiece
          x={mousePos[0]}
          y={mousePos[1]}
          selectedSquare={selectedSquare}
          boardArray={boardArray}
        />
      )}
      <div
        className="chessboard"
        onMouseMove={(event) => {
          setMousePos([event.clientX, event.clientY]);
        }}
        onMouseLeave={(event) => {
          setSelectedSquare(null);
          setIsMouseDown(false);
        }}
      >
        <Board
          boardArray={boardArray}
          selectedSquare={selectedSquare}
          turn={turn}
          onMouseMove={({ clientX, clientY }) => {
            mouseCurrentX = clientX;
            mouseCurrentY = clientY;
          }}
          onMouseUp={(args) => {
            setIsMouseDown(false);
            clickSquare(args, false);
          }}
          onMouseDown={(args) => {
            setIsMouseDown(true);
            clickSquare(args, true);
          }}
        />
      </div>
    </div>
  );
}

export default App;
