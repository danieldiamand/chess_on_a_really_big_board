import Row from "./Row";
import "./Board.css";

function Board({
  board,
  config,
  selectedSquare,
  turn,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  const style = {
    gridTemplateColumns: `repeat(${config.tileCountX}, ${config.tileSize}px)`,
    gridTemplateRows: `repeat(${config.tileCountY}, ${config.tileSize}px)`,
  };

  return (
    <div className="board" style={style}>
      {board.map((row, index) => {
        return (
          <Row
            key={`row${index}`}
            row={row}
            currentRow={index}
            selectedSquare={selectedSquare}
            turn={turn}
            board={board}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseDown={onMouseDown}
            key={index}
          />
        );
      })}
    </div>
  );
}
export default Board;
