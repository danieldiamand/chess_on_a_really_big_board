export const PIECE_FEN_TYPES = {
  // TODO make key name's UPPER CASE
  blackRook: "r",
  blackKnight: "n",
  blackBishop: "b",
  blackQueen: "q",
  blackKing: "k",
  blackPawn: "p",
  blackMoon: "m",
  blackGrave: "g",
  blackJester: "j",
  blackArchbishop: "a",
  blackChancellor: "c",
  blackRose: "o",
  whiteRook: "R",
  whiteKnight: "N",
  whiteBishop: "B",
  whiteQueen: "Q",
  whiteKing: "K",
  whitePawn: "P",
  whiteMoon: "M",
  whiteGrave: "G",
  whiteJester: "J",
  whiteArchbishop: "A",
  whiteChancellor: "C",
  whiteRose: "O",
};

export const PIECES = {
  EMPTY: "EMPTY",
  ROOK: "ROOK",
  KNIGHT: "KNIGHT",
  BISHOP: "BISHOP",
  QUEEN: "QUEEN",
  KING: "KING",
  PAWN: "PAWN",
  MOON: "MOON",
  GRAVE: "GRAVE",
  JESTER: "JESTER",
  ARCHBISHOP: "ARCHBISHOP",
  CHANCELLOR: "CHANCELLOR",
  ROSE: "ROSE",
};

export const COLOURS = {
  BLACK: "BLACK",
  WHITE: "WHITE",
};

export const PAWN_STATES = {
  JUST_LEAPED: "JUST_LEAPED",
  CAN_LEAP: "CAN_LEAP",
  CANT_LEAP: "CANT_LEAP",
};

export const PAWN_DIRECTION = {
  [COLOURS.WHITE]: 1,
  [COLOURS.BLACK]: -1,
};

export const MOVE_STATES = {
  //none moves
  NONE: "NONE",
  SELECTED: "SELECTED",
  IN_CHECK: "IN_CHECK",
  //empty moves
  LEGAL_EMPTY: "LEGAL_EMPTY",
  LEGAL_CASTLE: "LEGAL_CASTLE",
  LEGAL_PROMOTION: "LEGAL_PROMOTION",
  //taking moves
  LEGAL_TAKING: "LEGAL_TAKING",
  LEGAL_EN_PASSANT: "LEGAL_EN_PASSANT",
};

export const fenInitialStateMap = {
  [PIECE_FEN_TYPES.blackRook]: {
    fen: PIECE_FEN_TYPES.blackRook,
    piece: PIECES.ROOK,
    colour: COLOURS.BLACK,
    isCastleable: true,
  },
  [PIECE_FEN_TYPES.blackKnight]: {
    fen: PIECE_FEN_TYPES.blackKnight,
    piece: PIECES.KNIGHT,
    colour: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackBishop]: {
    fen: PIECE_FEN_TYPES.blackBishop,
    piece: PIECES.BISHOP,
    colour: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackQueen]: {
    fen: PIECE_FEN_TYPES.blackQueen,
    piece: PIECES.QUEEN,
    colour: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackKing]: {
    fen: PIECE_FEN_TYPES.blackKing,
    piece: PIECES.KING,
    colour: COLOURS.BLACK,
    isCastleable: true,
  },
  [PIECE_FEN_TYPES.blackPawn]: {
    fen: PIECE_FEN_TYPES.blackPawn,
    piece: PIECES.PAWN,
    colour: COLOURS.BLACK,
    enpassantable: PAWN_STATES.CAN_LEAP,
  },
  [PIECE_FEN_TYPES.blackMoon]: {
    fen: PIECE_FEN_TYPES.blackMoon,
    piece: PIECES.MOON,
    colour: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackGrave]: {
    fen: PIECE_FEN_TYPES.blackGrave,
    piece: PIECES.GRAVE,
    colour: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackJester]: {
    fen: PIECE_FEN_TYPES.blackJester,
    piece: PIECES.JESTER,
    colour: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackArchbishop]: {
    fen: PIECE_FEN_TYPES.blackArchbishop,
    piece: PIECES.ARCHBISHOP,
    colour: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackChancellor]: {
    fen: PIECE_FEN_TYPES.blackChancellor,
    piece: PIECES.CHANCELLOR,
    colour: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.blackRose]: {
    fen: PIECE_FEN_TYPES.blackRose,
    piece: PIECES.ROSE,
    colour: COLOURS.BLACK,
  },
  [PIECE_FEN_TYPES.whiteRook]: {
    fen: PIECE_FEN_TYPES.whiteRook,
    piece: PIECES.ROOK,
    colour: COLOURS.WHITE,
    isCastleable: true,
  },
  [PIECE_FEN_TYPES.whiteKnight]: {
    fen: PIECE_FEN_TYPES.whiteKnight,
    piece: PIECES.KNIGHT,
    colour: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteBishop]: {
    fen: PIECE_FEN_TYPES.whiteBishop,
    piece: PIECES.BISHOP,
    colour: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteQueen]: {
    fen: PIECE_FEN_TYPES.whiteQueen,
    piece: PIECES.QUEEN,
    colour: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteKing]: {
    fen: PIECE_FEN_TYPES.whiteKing,
    piece: PIECES.KING,
    colour: COLOURS.WHITE,
    isCastleable: true,
  },
  [PIECE_FEN_TYPES.whitePawn]: {
    fen: PIECE_FEN_TYPES.whitePawn,
    piece: PIECES.PAWN,
    colour: COLOURS.WHITE,
    enpassantable: PAWN_STATES.CAN_LEAP,
  },
  [PIECE_FEN_TYPES.whiteMoon]: {
    fen: PIECE_FEN_TYPES.whiteMoon,
    piece: PIECES.MOON,
    colour: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteGrave]: {
    fen: PIECE_FEN_TYPES.whiteGrave,
    piece: PIECES.GRAVE,
    colour: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteJester]: {
    fen: PIECE_FEN_TYPES.whiteJester,
    piece: PIECES.JESTER,
    colour: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteArchbishop]: {
    fen: PIECE_FEN_TYPES.whiteArchbishop,
    piece: PIECES.ARCHBISHOP,
    colour: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteChancellor]: {
    fen: PIECE_FEN_TYPES.whiteChancellor,
    piece: PIECES.CHANCELLOR,
    colour: COLOURS.WHITE,
  },
  [PIECE_FEN_TYPES.whiteRose]: {
    fen: PIECE_FEN_TYPES.whiteRose,
    piece: PIECES.ROSE,
    colour: COLOURS.WHITE,
  },
};
