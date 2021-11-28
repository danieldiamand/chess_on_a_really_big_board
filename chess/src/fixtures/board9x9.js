import { TILES } from "../constants/tiles";
import { COLORS } from "../constants/colors";
import { PIECES } from "../constants/pieces";

const board = [];

const maxX = 9;
const maxY = 9;

for (let y = 0; y < maxX; y++) {
  for (let x = 0; x < maxY; x++) {
    if (!board[y]) {
      board.push([]);
    }

    board[y].push({
      x,
      y,
      piece:
        y <= 1 || y >= maxY - 2
          ? {
              type: PIECES.PAWN,
              color: y < maxY / 2 ? COLORS.BLACK : COLORS.WHITE,
            }
          : {
              type: null,
              color: null,
            },
      tile: {
        type: TILES.NORMAL,
      },
      flags: {
        isCastleable: true,
        isEnpassantable: false,
      },
    });
  }
}

export { board as board9x9 };
