import { TILES } from "../constants/tiles";
import { COLORS } from "../constants/colors";
import { PIECES } from "../constants/pieces";

export const boardArray2x2 = [
  [
    {
      x: 0,
      y: 0,
      piece: {
        type: PIECES.ROOK,
        color: COLORS.BLACK,
      },
      tile: {
        type: TILES.NORMAL,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    },
    {
      x: 1,
      y: 0,
      piece: {
        type: PIECES.ROOK,
        color: COLORS.BLACK,
      },
      tile: {
        type: TILES.NORMAL,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    },
    {
      x: 2,
      y: 0,
      piece: {
        type: PIECES.ROOK,
        color: COLORS.BLACK,
      },
      tile: {
        type: TILES.NORMAL,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    },
  ],
  [
    {
      x: 0,
      y: 1,
      piece: {
        type: PIECES.EMPTY,
        color: null,
      },
      tile: {
        type: TILES.NORMAL,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    },
    {
      x: 1,
      y: 1,
      piece: {
        type: PIECES.EMPTY,
        color: null,
      },
      tile: {
        type: TILES.NORMAL,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    },
    {
      x: 2,
      y: 1,
      piece: {
        type: PIECES.EMPTY,
        color: null,
      },
      tile: {
        type: TILES.VOID,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    },
  ],
  [
    {
      x: 0,
      y: 2,
      piece: {
        type: PIECES.ROOK,
        color: COLORS.WHITE,
      },
      tile: {
        type: TILES.NORMAL,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    },
    {
      x: 1,
      y: 2,
      piece: {
        type: PIECES.ROOK,
        color: COLORS.WHITE,
      },
      tile: {
        type: TILES.NORMAL,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    },
    {
      x: 2,
      y: 2,
      piece: {
        type: PIECES.ROOK,
        color: COLORS.WHITE,
      },
      tile: {
        type: TILES.NORMAL,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    },
  ],
];
