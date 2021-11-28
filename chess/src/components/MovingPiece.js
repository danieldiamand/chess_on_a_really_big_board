import { Fragment, useEffect, useState } from "react";

import get from "lodash.get";

import { pieceImages } from "../constants/pieceImages";

import "./MovingPiece.css";

function MovingPiece({ config, isMouseDown, selectedSquare }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(event) {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMove);
    return function () {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  if (isMouseDown && selectedSquare) {
    const pieceImg = get(pieceImages, [
      selectedSquare.piece.color,
      selectedSquare.piece.type,
    ]);

    return (
      <img
        className="movingPiece"
        src={pieceImg}
        alt=""
        style={{
          left: mousePos.x,
          top: mousePos.y,
          height: config.tileSize * 0.8,
        }}
      />
    );
  }
  return null;
}

export default MovingPiece;
