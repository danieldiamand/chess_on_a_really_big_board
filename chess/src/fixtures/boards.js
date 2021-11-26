import { COLORS } from "../constants/colors";
import { PIECES } from "../constants/pieces";

export const boardArray2x2 = [
  [
    {
      x: 0,
      y: 0,
      piece: PIECES.ROOK,
      color: COLORS.BLACK,
      isCastleable: true,
      enpassantable: false,
    },
    {
      x: 1,
      y: 0,
      piece: PIECES.ROOK,
      color: COLORS.BLACK,
      isCastleable: true,
      enpassantable: false,
    },
  ],
  [
    {
      x: 0,
      y: 1,
      piece: PIECES.ROOK,
      color: COLORS.WHITE,
      isCastleable: true,
      enpassantable: false,
    },
    {
      x: 1,
      y: 1,
      piece: PIECES.ROOK,
      color: COLORS.WHITE,
      isCastleable: true,
      enpassantable: false,
    },
  ],
];
