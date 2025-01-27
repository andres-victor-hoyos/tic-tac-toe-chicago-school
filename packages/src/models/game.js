import { Board } from "./board";
import { Player } from "./player";
import { Turn } from "./turn";
import { WinnerChecker } from "./winner-checker";
import { X, O } from "./token";

export class Game {
  start() {
    this._board = new Board();
    this._player1 = new Player(this._board);
    this._player2 = new Player(this._board);
    this._turn = new Turn([this._player1, this._player2]);
    this._winnerChecker = new WinnerChecker(this._board);
  }

  placeTokenIn(position) {
    if (this.hasWinner()) throw new Error("Game is over.");
    this._turn.moveTokenFromRackToBoard(position);
    this._turn.nextPlayer();
  }

  moveTokenFromTo(from, to) {
    this._turn.moveToken(from, to);
    this._turn.nextPlayer();
  }

  tokenInPosition(position) {
    const token = this._board.getTokenOn(position);
    if (token.isNull()) return null;
    if (token instanceof X) return "X";
    if (token instanceof O) return "O";
  }

  playerRackTokenCount() {
    return this._turn.currentPlayer().TokenRackCount();
  }

  hasWinner() {
    return this._winnerChecker.isTicTacToe();
  }
}
