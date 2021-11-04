import pieceImages from "../constants/pieceImages";
import get from "lodash.get";

function MovingPiece({ x, y, selectedSquare, boardArray }) {
  const piece = get(boardArray, [selectedSquare[0], selectedSquare[1]]);
  return (
    <div className="movingPiece" style={{ left: x, top: y }}>
      <img src={pieceImages[piece.fen]} alt="" />
    </div>
  );
}

export default MovingPiece;
