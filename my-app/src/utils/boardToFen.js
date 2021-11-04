export function boardToFen(board) {
  var fen = "";
  var count = 0;
  for (let i in board) {
    for (let j in board[i]) {
      if (board[i][j] === 0) {
        count += 1;
      } else {
        if (count !== 0) fen += count;
        fen += board[i][j];
        count = 0;
      }
    }
    if (count !== 0) fen += count;
    count = 0;
    fen += "/";
  }
  return fen.substring(0, fen.length - 1);
}
