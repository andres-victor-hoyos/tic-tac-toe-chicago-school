export class WinnerChecker {
    constructor(board) {
        this._board = board;
        this._winningCombinations = [
            [7, 8, 9],
            [4, 5, 6],
            [3, 5, 7],
            [3, 6, 9],
            [2, 5, 8],
            [1, 4, 7],
            [1, 5, 9],
            [1, 2, 3]
        ];
    }

    isTicTacToe() {
        return this._winningCombinations.some(([pos1, pos2, pos3]) => 
            this._areTokensEqual(pos1, pos2, pos3)
        );
    }

    _areTokensEqual(pos1, pos2, pos3) {
        const [token1, token2, token3] = [pos1, pos2, pos3].map(pos => this._board.getTokenOn(pos));
        return token1.isEqual(token2) && token2.isEqual(token3);
    }
}