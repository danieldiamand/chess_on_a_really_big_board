import { COLORS } from "../constants/colors";
import "./Row.css";

function Row({
  rowArray,
  selectedSquare,
  turn,
  boardArray,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  return (
    <div className="row">
      {rowArray.map((square, index) => {
        let color;
        if (square.color === COLORS.BLACK) {
          color = "black";
        } else if (square.color === COLORS.WHITE) {
          color = "white";
        }
        return (
          <span
            style={{ color: color }}
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
          >
            {square.piece}
          </span>
        );
      })}
    </div>
  );
}

export default Row;
