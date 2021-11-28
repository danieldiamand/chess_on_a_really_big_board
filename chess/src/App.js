import { Fragment, useEffect, useState } from "react";

import Board from "./components/Board";
import { COLORS } from "./constants/colors";
import { board3x3 } from "./fixtures/board3x3";
import { board7x4 } from "./fixtures/board7x4";
import { board9x9 } from "./fixtures/board9x9";
import { board26x26 } from "./fixtures/board26x26";
import { updateBoard } from "./utils/updateBoard";
import MovingPiece from "./components/MovingPiece";

import cloneDeep from "lodash.clonedeep";

import "./App.css";

let mouseX = null;
let mouseY = null;

function getConfig(board, windowSize) {
  const tileCountX = board[0].length;
  const tileCountY = board.length;
  const maxTileSize = 80;
  const defaultBoardWidth = maxTileSize * tileCountX; // + padding;
  const defaultBoardHeight = maxTileSize * tileCountY; //+ padding;
  const padding =
    (windowSize.width > windowSize.height
      ? windowSize.width
      : windowSize.height) * 0.03;
  const paddedWindowWidth = windowSize.width - padding;
  const paddedWindowHeight = windowSize.height - padding;

  let tileSize = maxTileSize;
  function setTileSize(newTileSize) {
    newTileSize = Math.floor(newTileSize);
    if (newTileSize < tileSize) {
      tileSize = newTileSize;
    }
  }

  if (defaultBoardWidth > paddedWindowWidth) {
    setTileSize(paddedWindowWidth / tileCountX);
  }
  if (defaultBoardHeight > paddedWindowHeight) {
    setTileSize(paddedWindowHeight / tileCountY);
  }

  return {
    tileCountX,
    tileCountY,
    tileSize,
  };
}

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [mousePos, setMousePos] = useState([0, 0]);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [turn, setTurn] = useState(COLORS.WHITE);
  const [board, setBoard] = useState(board9x9); //board26x26

  useEffect(() => {
    let timeoutId;
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150);
    }

    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const config = getConfig(board, windowSize);
  console.log(config);

  return (
    <Fragment>
      <div className="hud">
        <p>{turn} to move</p>
        <p>is square selected: {!!selectedSquare ? "true" : "false"}</p>
        <p>is mouse down: {isMouseDown ? "true" : "false"}</p>
      </div>
      {isMouseDown && selectedSquare && (
        <MovingPiece x={mousePos[0]} y={mousePos[1]} square={selectedSquare} />
      )}
      <div className="outer">
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
            config={config}
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
    </Fragment>
  );
}

export default App;
