import Row from "./Row";
import "./Board.css";

function Board({
  boardArray,
  selectedSquare,
  turn,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  return boardArray.map((rowArray, index) => {
    return (
      <div className="board">
        <Row
          rowArray={rowArray}
          currentRow={index}
          selectedSquare={selectedSquare}
          turn={turn}
          boardArray={boardArray}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
          key={index}
        />
      </div>
    );
  });
}
export default Board;
