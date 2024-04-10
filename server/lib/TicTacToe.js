const EMPTY = 0; // empty board position specifier
const X = 1; // "player" X's integer to put in the board
const O = -1; // "player" O's integer to put in the board
const DEFAULT_BOARD = [
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
];

export class TicTacToe {
  constructor(board = DEFAULT_BOARD) {
    this.board = structuredClone(board)
    this.turn = X
    this.winner = null
    this.tie = false
  }

  toJSON() {
    return {
      board: this.board,
      turn: this.turn,
      winner: this.winner,
      tie: this.tie
    };
  }

  move(i, j) {
    if (i < 0 || i > this.board.length - 1 || j < 0 || j > this.board[0].length) {
      throw new Error("Index out of bounds")
    }

    if (this.board[i][j] !== EMPTY) {
      this.turn = this.nextTurn()
      throw new Error("Ilegal Move, not an empty square")
    }

    this.board[i][j] = this.turn
    this.winner = this.checkWinner(i, j)
    this.turn = this.nextTurn()
    this.tie = this.checkTie()
  }

  nextTurn() {
    return this.turn === X ? O : X
  }

  isRowComplete(i, j) {
    const value = this.board[i][j];
    for (let col = 0; col < 3; col++) {
      if (this.board[i][col] !== value) {
        return false;
      }
    }
    return true;
  }

  isColumnComplete(i, j) {
    const value = this.board[i][j];
    for (let row = 0; row < 3; row++) {
      if (this.board[row][j] !== value) {
        return false;
      }
    }
    return true;
  }

  isDiagonalComplete(i, j) {
    if (i === j) {
      // Check main diagonal
      const value = this.board[i][j];
      for (let k = 0; k < 3; k++) {
        if (this.board[k][k] !== value) {
          return false;
        }
      }
      return true;
    } else if (i + j === 2) {
      // Check anti-diagonal
      const value = this.board[i][j];
      for (let k = 0; k < 3; k++) {
        if (this.board[k][2 - k] !== value) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  checkWinner(i, j) {
    if (this.isRowComplete(i, j) || this.isColumnComplete(i, j) || this.isDiagonalComplete(i, j))
      return this.turn
    return null
  }

  checkTie() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === EMPTY) {
          return false;
        }
      }
    }

    return true;
  }
}