export function isTakeable(selectedSquare, attackedSquare) {
  if (attackedSquare.piece.color) {
    if (selectedSquare.piece.color !== attackedSquare.piece.color) {
      return true;
    }
  }
  return false;
}
