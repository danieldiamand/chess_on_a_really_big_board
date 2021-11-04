import pieceImages from "../constants/pieceImages";
import { checkSquareMatch, getMoveStateBoolean } from "../utils";
import movableHighlight from "../assets/movableHighlight.png";
import takeableHighlight from "../assets/takeableHighlight.png";

function Column({
  currentPiece,
  currentColumn,
  currentRow,
  selectedSquare,
  turn,
  boardArray,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  const {
    className,
    isTakeable,
    isLegal,
    isCheck,
    isSelected,
  } = getMoveStateBoolean(currentPiece);

  const currentSquareDragMatch =
    selectedSquare &&
    checkSquareMatch(currentRow, currentColumn, selectedSquare);
  return (
    <div
      className={className}
      onMouseMove={(event) => {
        onMouseMove({
          clientX: event.clientX,
          clientY: event.clientY,
        });
      }}
      onMouseUp={(event) => {
        onMouseUp({ currentPiece, currentRow, currentColumn });
      }}
      onMouseDown={(event) => {
        onMouseDown({ currentPiece, currentRow, currentColumn });
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      <div className="squareHighlight">
        {isTakeable && <img src={takeableHighlight} alt="" />}
        {isLegal && <img src={movableHighlight} alt="" />}
      </div>
      {pieceImages[currentPiece.fen] && (
        <img
          src={pieceImages[currentPiece.fen]}
          alt=""
          className={currentSquareDragMatch ? "opaque" : ""}
        />
      )}
    </div>
  );
}

export default Column;
