import get from "lodash.get";

import { pieceImages } from "../constants/pieceImages";

import "./MovingPiece.css";

function MovingPiece({ x, y, square }) {
  const pieceImg = get(pieceImages, [square.piece.color, square.piece.type]);
  return (
    <div className="movingPiece" style={{ left: x, top: y }}>
      <img src={pieceImg} alt="" />
    </div>
  );
}

export default MovingPiece;
