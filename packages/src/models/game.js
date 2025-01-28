import { Board } from "./board";
import { Player } from "./player";
import { Turn } from "./turn";
import { WinnerChecker } from "./winner-checker";
import { X, O } from "./token";
import { Messages } from "./messages";

export class Game {
  start() {
    this._board = new Board();
    this._players = [new Player(this._board),new Player(this._board)];
    this._turn = new Turn(this._players);
    this._winnerChecker = new WinnerChecker(this._board);
  }

  placeTokenIn(position) {
    if (this.hasWinner()) throw new Error(Messages.GAME_OVER);
    this._turn.moveTokenFromRackToBoard(position);
    this._turn.nextPlayer();
  }

  moveTokenFromTo(from, to) {
    this._turn.moveToken(from, to);
    this._turn.nextPlayer();
  }

  tokenInPosition(position) {
    const token = this._board.getTokenOn(position);
    return this._tokenSymbol(token);
  }

  tokensInRack(player) {
    return this._players[player-1].tokenRackCount();
  }

  tokensAssigned(player) {
    return this._tokenSymbol(this._players[player-1].tokenAssigned());
  }

  hasWinner() {
    return this._winnerChecker.isTicTacToe();
  }

  _tokenSymbol(token) {
    if (token.isNull()) return null;
    if (token instanceof X) return "X";
    if (token instanceof O) return "O";
  }
}
