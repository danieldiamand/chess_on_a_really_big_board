import { COLORS } from "./colors";
import { PIECES } from "./pieces";

export const pieceImages = {
  [COLORS.BLACK]: {
    [PIECES.KNIGHT]: require("../assets/blackKnight.png").default,
    [PIECES.ROOK]: require("../assets/blackRook.png").default,
    [PIECES.KING]: require("../assets/blackKing.png").default,
    [PIECES.QUEEN]: require("../assets/blackQueen.png").default,
    [PIECES.BISHOP]: require("../assets/blackBishop.png").default,
    [PIECES.PAWN]: require("../assets/blackPawn.png").default,
    [PIECES.ARCHBISHOP]: require("../assets/blackArchbishop.png").default,
    [PIECES.CHANCELLOR]: require("../assets/blackChancellor.png").default,
    [PIECES.GRAVE]: require("../assets/blackGrave.png").default,
    [PIECES.MOON]: require("../assets/blackMoon.png").default,
    [PIECES.ROSE]: require("../assets/blackRose.png").default,
    [PIECES.JESTER]: require("../assets/blackJester.png").default,
  },
  [COLORS.WHITE]: {
    [PIECES.KNIGHT]: require("../assets/whiteKnight.png").default,
    [PIECES.ROOK]: require("../assets/whiteRook.png").default,
    [PIECES.KING]: require("../assets/whiteKing.png").default,
    [PIECES.QUEEN]: require("../assets/whiteQueen.png").default,
    [PIECES.BISHOP]: require("../assets/whiteBishop.png").default,
    [PIECES.PAWN]: require("../assets/whitePawn.png").default,
    [PIECES.ARCHBISHOP]: require("../assets/whiteArchbishop.png").default,
    [PIECES.CHANCELLOR]: require("../assets/whiteChancellor.png").default,
    [PIECES.GRAVE]: require("../assets/whiteGrave.png").default,
    [PIECES.MOON]: require("../assets/whiteMoon.png").default,
    [PIECES.ROSE]: require("../assets/whiteRose.png").default,
    [PIECES.JESTER]: require("../assets/whiteJester.png").default,
  },
};
