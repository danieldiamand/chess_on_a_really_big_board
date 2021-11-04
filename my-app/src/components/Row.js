import Column from "./Column";

function Row({
  rowArray,
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
      {rowArray.map((piece, index) => {
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
