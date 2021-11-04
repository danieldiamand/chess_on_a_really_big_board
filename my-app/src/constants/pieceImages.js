import { PIECE_FEN_TYPES } from "../constants";

const pieceImages = {
  [PIECE_FEN_TYPES.whiteKnight]: require("../assets/whiteKnight.png").default,
  [PIECE_FEN_TYPES.whiteRook]: require("../assets/whiteRook.png").default,
  [PIECE_FEN_TYPES.whiteKing]: require("../assets/whiteKing.png").default,
  [PIECE_FEN_TYPES.whiteQueen]: require("../assets/whiteQueen.png").default,
  [PIECE_FEN_TYPES.whiteBishop]: require("../assets/whiteBishop.png").default,
  [PIECE_FEN_TYPES.whitePawn]: require("../assets/whitePawn.png").default,
  [PIECE_FEN_TYPES.whiteArchbishop]: require("../assets/whiteArchbishop.png")
    .default,
  [PIECE_FEN_TYPES.whiteChancellor]: require("../assets/whiteChancellor.png")
    .default,
  [PIECE_FEN_TYPES.whiteGrave]: require("../assets/whiteGrave.png").default,
  [PIECE_FEN_TYPES.whiteMoon]: require("../assets/whiteMoon.png").default,
  [PIECE_FEN_TYPES.whiteRose]: require("../assets/whiteRose.png").default,
  [PIECE_FEN_TYPES.whiteJester]: require("../assets/whiteJester.png").default,
  [PIECE_FEN_TYPES.blackKnight]: require("../assets/blackKnight.png").default,
  [PIECE_FEN_TYPES.blackRook]: require("../assets/blackRook.png").default,
  [PIECE_FEN_TYPES.blackKing]: require("../assets/blackKing.png").default,
  [PIECE_FEN_TYPES.blackQueen]: require("../assets/blackQueen.png").default,
  [PIECE_FEN_TYPES.blackBishop]: require("../assets/blackBishop.png").default,
  [PIECE_FEN_TYPES.blackPawn]: require("../assets/blackPawn.png").default,
  [PIECE_FEN_TYPES.blackArchbishop]: require("../assets/blackArchbishop.png")
    .default,
  [PIECE_FEN_TYPES.blackChancellor]: require("../assets/blackChancellor.png")
    .default,
  [PIECE_FEN_TYPES.blackGrave]: require("../assets/blackGrave.png").default,
  [PIECE_FEN_TYPES.blackMoon]: require("../assets/blackMoon.png").default,
  [PIECE_FEN_TYPES.blackRose]: require("../assets/blackRose.png").default,
  [PIECE_FEN_TYPES.blackJester]: require("../assets/blackJester.png").default,
};

export default pieceImages;
