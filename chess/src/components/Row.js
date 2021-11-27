import { COLORS } from "../constants/colors";
import "./Row.css";
import Square from "./Square";

function Row({
  rowArray,
  selectedSquare,
  turn,
  board,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  return (
    <div className="row">
      {rowArray.map((square, index) => {
        return (
          <Square
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
      })}
    </div>
  );
}

export default Row;
