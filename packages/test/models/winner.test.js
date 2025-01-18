import { Board, X, O, WinnerChecker } from "@tic-tac-toe-chicago-school/models";

const WINNING_COMBINATIONS = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],  // Rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9],  // Columns
    [1, 5, 9], [3, 5, 7]              // Diagonals
];

const NON_WINNING_COMBINATIONS = [
    [1, 2], [4, 5], [7, 8],  // Partial Rows
    [1, 4], [2, 5], [3, 6],  // Partial Columns
    [1, 5], [3, 5]           // Partial Diagonals
];

const testWinningCombination = (token, positions) => {
    const winnerChecker = new BuilderWinnerCheckerTest(token);
    positions.forEach(pos => winnerChecker.withToken(pos));
    expect(winnerChecker.build().isTicTacToe()).toBe(true);
}

const testNonWinningCombination = (token, positions) => {
    const winnerChecker = new BuilderWinnerCheckerTest(token);
    positions.forEach(pos => winnerChecker.withToken(pos));
    expect(winnerChecker.build().isTicTacToe()).toBe(false);
}

[new X(), new O()].forEach((token) => {
    describe("winner-checker", () => {
        WINNING_COMBINATIONS.forEach((combination) => {
            it(`Given a Board with a winner (${combination}), when calling isTicTacToe, then should return true`, () => {
                testWinningCombination(token, combination);
            });
        });

        NON_WINNING_COMBINATIONS.forEach((combination) => {
            it(`Given a Board without a winner (${combination}), when calling isTicTacToe, then should return false`, () => {
                testNonWinningCombination(token, combination);
            });
        });

        it("Given an empty Board, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token).build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });
    });
});

class BuilderWinnerCheckerTest {
    constructor(token) {
        this._token = token;
        this._board = new Board();
    }

    withToken(position) {
        this._board.putToken(position, this._token);
        return this;
    }

    build() {
        return new WinnerChecker(this._board);
    }
}