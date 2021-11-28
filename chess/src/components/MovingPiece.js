import get from "lodash.get";

import { pieceImages } from "../constants/pieceImages";

import "./MovingPiece.css";

function MovingPiece({ config, x, y, square }) {
  const pieceImg = get(pieceImages, [square.piece.color, square.piece.type]);
  console.log(config.tileSize);
  return (
    <img
      className="movingPiece"
      src={pieceImg}
      alt=""
      style={{ left: x, top: y, height: config.tileSize * 0.8 }}
    />
  );
}

export default MovingPiece;
