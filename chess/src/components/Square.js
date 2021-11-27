import cx from "classnames";
import get from "lodash.get";

import { pieceImages } from "../constants/pieceImages";
import { COLORS } from "../constants/colors";
import { TILES } from "../constants/tiles";
// import pieceImages from "../constants/pieceImages";
// import { checkSquareMatch, getMoveStateBoolean } from "../utils";
import movableHighlight from "../assets/movableHighlight.png";
import takeableHighlight from "../assets/takeableHighlight.png";

import "./Square.css";

function getSquareClassName(square) {
  let typeClassName;
  let colorClassName = "squareBlack";

  if (square.tile.type === TILES.VOID) {
    typeClassName = "squareVoid";
  }

  if (square.x % 2 === 0) {
    if (square.y % 2 === 0) {
      colorClassName = "squareWhite";
    }
  } else if (square.y % 2 !== 0) {
    colorClassName = "squareWhite";
  }

  return cx(colorClassName, typeClassName);
}

function Square({
  //   currentPiece,
  //   currentSquare,
  //   currentRow,
  //   selectedSquare,
  //   turn,
  //   board,
  square,
  onMouseMove,
  onMouseUp,
  onMouseDown,
}) {
  //   const {
  //     className,
  //     isTakeable,
  //     isLegal,
  //     isCheck,
  //     isSelected,
  //   } = getMoveStateBoolean(currentPiece);

  //   const currentSquareDragMatch =
  //     selectedSquare &&
  //     checkSquareMatch(currentRow, currentSquare, selectedSquare);
  //   return (
  //     <div
  //       className={className}
  //       onMouseMove={(event) => {
  //         onMouseMove({
  //           clientX: event.clientX,
  //           clientY: event.clientY,
  //         });
  //       }}
  //       onMouseUp={(event) => {
  //         onMouseUp({ currentPiece, currentRow, currentSquare });
  //       }}
  //       onMouseDown={(event) => {
  //         onMouseDown({ currentPiece, currentRow, currentSquare });
  //         event.stopPropagation();
  //         event.preventDefault();
  //       }}
  //     >
  //       <div className="squareHighlight">
  //         {isTakeable && <img src={takeableHighlight} alt="" />}
  //         {isLegal && <img src={movableHighlight} alt="" />}
  //       </div>
  //       {pieceImages[currentPiece.fen] && (
  //         <img
  //           src={pieceImages[currentPiece.fen]}
  //           alt=""
  //           className={currentSquareDragMatch ? "opaque" : ""}
  //         />
  //       )}
  //     </div>

  const { isTakeable, isLegal, isDragged } = square.flags;

  const pieceImg = get(pieceImages, [square.piece.color, square.piece.type]);

  const className = getSquareClassName(square);

  return (
    <div
      className={cx("square", className)}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      <div className="squareHighlight">
        {isTakeable && <img src={takeableHighlight} alt="" />}
        {isLegal && <img src={movableHighlight} alt="" />}
      </div>
      {pieceImg && (
        <img src={pieceImg} alt="" className={isDragged ? "opaque" : ""} />
      )}
    </div>
  );
}

export default Square;
