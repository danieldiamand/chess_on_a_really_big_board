import { useState } from "react";

import Board from "./components/Board";
import { COLORS } from "./constants/colors";
import { boardArray2x2 } from "./fixtures/boards";

import "./App.css";

function App() {
  const [mousePos, setMousePos] = useState([0, 0]);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [turn, setTurn] = useState(COLORS.WHITE);
  const [boardArray, setBoardArray] = useState(boardArray2x2);

  function clickSquare(square) {}

  let mouseX = null;
  let mouseY = null;

  return (
    <div className="outer">
      <p>{turn} to move</p>
      <p>is mouse down: {isMouseDown ? "true" : "false"}</p>
      <div
        className="inner"
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
            mouseX = clientX;
            mouseY = clientY;
          }}
          onMouseUp={(square) => {
            setIsMouseDown(false);
            clickSquare(square, false);
          }}
          onMouseDown={(square) => {
            setIsMouseDown(true);
            clickSquare(square, true);
          }}
        />
      </div>
    </div>
  );
}

export default App;
