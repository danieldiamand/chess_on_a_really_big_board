import { useState } from "react";

import Board from "./components/Board";
import { COLORS } from "./constants/colors";
import { board2x2 } from "./fixtures/boards";
import { updateBoard } from "./utils/updateBoard";
import MovingPiece from "./components/MovingPiece";

import cloneDeep from "lodash.clonedeep";

import "./App.css";

let mouseX = null;
let mouseY = null;

function App() {
  const [mousePos, setMousePos] = useState([0, 0]);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [turn, setTurn] = useState(COLORS.WHITE);
  const [board, setBoard] = useState(board2x2);

  function update({ clickedSquare, isMouseDown }) {
    const newBoard = updateBoard({
      board,
      turn,
      clickedSquare,
      selectedSquare,
    });
    setBoard(newBoard);
    if (selectedSquare && !isMouseDown) {
      setSelectedSquare(null);
    } else {
      setSelectedSquare(clickedSquare);
    }
    setIsMouseDown(isMouseDown);
  }

  return (
    <div className="outer">
      <p>{turn} to move</p>
      <p>is square selected: {!!selectedSquare ? "true" : "false"}</p>
      <p>is mouse down: {isMouseDown ? "true" : "false"}</p>
      {isMouseDown && selectedSquare && (
        <MovingPiece x={mousePos[0]} y={mousePos[1]} square={selectedSquare} />
      )}
      <div
        className="inner"
        onMouseMove={(event) => {
          setMousePos([event.clientX, event.clientY]);
        }}
        onMouseLeave={(event) => {
          update({ selectedSquare: null, isMouseDown: false });
        }}
      >
        <Board
          board={board}
          selectedSquare={selectedSquare}
          turn={turn}
          onMouseMove={({ clientX, clientY }) => {
            mouseX = clientX;
            mouseY = clientY;
          }}
          onMouseUp={(clickedSquare) => {
            update({ clickedSquare, isMouseDown: false });
          }}
          onMouseDown={(clickedSquare) => {
            update({ clickedSquare, isMouseDown: true });
          }}
        />
      </div>
    </div>
  );
}

export default App;
