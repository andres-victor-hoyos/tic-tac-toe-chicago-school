import { Board, X, O, WinnerChecker } from "@tic-tac-toe-chicago-school/models";
[new X(), new O()].forEach((token) => {
    describe("winner-checker", () => {
        it("Given a Board with a winner, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(1))
                .withToken(position(2))
                .withToken(position(3))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board without a winner, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(1))
                .withToken(position(2))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });

        it("Given a Board with a winner, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(1))
                .withToken(position(5))
                .withToken(position(9))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board without a winner, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(1))
                .withToken(position(5))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });

        it("Given a Board with a winner, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(1))
                .withToken(position(4))
                .withToken(position(7))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board without a winner, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(1))
                .withToken(position(4))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });

        it("Given a Board with a winner, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(2))
                .withToken(position(5))
                .withToken(position(8))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board without a winner, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(2))
                .withToken(position(5))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });

        it("Given a Board with a winner, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(3))
                .withToken(position(6))
                .withToken(position(9))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board without a winner, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(3))
                .withToken(position(6))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });

        it("Given a Board with a winner, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(3))
                .withToken(position(5))
                .withToken(position(7))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board without a winner, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(3))
                .withToken(position(5))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });

        it("Given a Board with a winner, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(4))
                .withToken(position(5))
                .withToken(position(6))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board without a winner, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(4))
                .withToken(position(5))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });

        it("Given a Board with a winner, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(3))
                .withToken(position(6))
                .withToken(position(9))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board with a winner, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(7))
                .withToken(position(8))
                .withToken(position(9))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board without a winner, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(7))
                .withToken(position(8))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });

        it("Given an empty Board, when calling isTicTacToe, then should return false", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token).build();
            expect(winnerChecker.isTicTacToe()).toBe(false);
        });

        it("Given a Board with a winner in the first row, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(1))
                .withToken(position(2))
                .withToken(position(3))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board with a winner in the second row, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(4))
                .withToken(position(5))
                .withToken(position(6))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board with a winner in the third row, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(7))
                .withToken(position(8))
                .withToken(position(9))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board with a winner in the first column, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(1))
                .withToken(position(4))
                .withToken(position(7))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board with a winner in the second column, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(2))
                .withToken(position(5))
                .withToken(position(8))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board with a winner in the third column, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(3))
                .withToken(position(6))
                .withToken(position(9))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board with a winner in the first diagonal, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(1))
                .withToken(position(5))
                .withToken(position(9))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
        });

        it("Given a Board with a winner in the second diagonal, when calling isTicTacToe, then should return true", () => {
            const winnerChecker = new BuilderWinnerCheckerTest(token)
                .withToken(position(3))
                .withToken(position(5))
                .withToken(position(7))
                .build();
            expect(winnerChecker.isTicTacToe()).toBe(true);
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

const position = (position) => position;