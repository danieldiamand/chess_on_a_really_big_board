import Row from "./Row";

function Board({
  boardArray,
  currentPiece,
  selectedSquare,
  turn,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  return boardArray.map((row, index) => {
    return (
      <Row
        row={row}
        currentRow={index}
        selectedSquare={selectedSquare}
        turn={turn}
        boardArray={boardArray}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        key={index}
      />
    );
  });
}
export default Board;
