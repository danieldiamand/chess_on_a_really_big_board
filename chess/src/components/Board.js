import Row from "./Row";
import "./Board.css";

function Board({
  board,
  selectedSquare,
  turn,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  return board.map((rowArray, index) => {
    return (
      <div className="board">
        <Row
          rowArray={rowArray}
          currentRow={index}
          selectedSquare={selectedSquare}
          turn={turn}
          board={board}
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
