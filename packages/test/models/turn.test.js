import { Board, Player, Turn } from "@tic-tac-toe-chicago-school/models";

describe('Turn', () => {
    let board, players, turn;

    const createBoard = () => new Board();
    const createPlayers = (board) => [new Player(board), new Player(board)];
    const createTurn = (players) => new Turn(players);

    beforeEach(() => {
        board = createBoard();
        players = createPlayers(board);
        turn = createTurn(players);
    });

    describe('Given players are not provided', () => {
        it('Then it should throw an error', () => {
            expect(() => new Turn()).toThrow('Players are required.');
        });
    });

    describe('Given players are provided', () => {
        beforeEach(() => {
            players = createPlayers(board);
            turn = createTurn(players);
        });

        it('Then it should assign a token to each player upon initialization', () => {
            players.forEach((player, index) => {
                player.moveTokenFromRackToBoard(index + 1);
                expect(board.getTokenOn(index + 1).isNull()).toBe(false);
            });
            expect(board.getTokenOn(1).isEqual(board.getTokenOn(2))).toBe(false);
        });

        describe('When it is a player\'s turn', () => {
            it('Then it should allow the correct player to play on their turn', () => {
                let currentPlayer = turn.nextPlayer();
                currentPlayer.moveTokenFromRackToBoard(1);
                expect(board.getTokenOn(1).isNull()).toBe(false);

                currentPlayer = turn.nextPlayer();
                currentPlayer.moveTokenFromRackToBoard(2);
                expect(board.getTokenOn(2).isNull()).toBe(false);

                expect(board.getTokenOn(1).isEqual(board.getTokenOn(2))).toBe(false);
            });

            it('Then it should allow querying the current player', () => {
                const player = turn.nextPlayer();
                expect(player).toStrictEqual(turn.currentPlayer());
            });
        });
    });
});