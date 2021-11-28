import Column from "./Column";

function Row({
  row,
  currentRow,
  currentPiece,
  selectedSquare,
  turn,
  boardArray,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  return (
    <div>
      {row.map((piece, index) => {
        return (
          <Column
            currentPiece={piece}
            currentColumn={index}
            currentRow={currentRow}
            selectedSquare={selectedSquare}
            turn={turn}
            boardArray={boardArray}
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

export default Row;
