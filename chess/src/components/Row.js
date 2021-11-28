import { COLORS } from "../constants/colors";
import "./Row.css";
import Square from "./Square";

function Row({
  row,
  selectedSquare,
  turn,
  board,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  return row.map((square, index) => {
    return (
      <Square
        key={`${square.x}x${square.y}`}
        square={square}
        onMouseMove={(event) => {
          onMouseMove({
            clientX: event.clientX,
            clientY: event.clientY,
          });
        }}
        onMouseUp={(event) => {
          onMouseUp(square);
        }}
        onMouseDown={(event) => {
          onMouseDown(square);
          event.stopPropagation();
          event.preventDefault();
        }}
      />
    );
  });
}

export default Row;
