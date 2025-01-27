import { Board, X, O, NullToken, Player } from "@tic-tac-toe-chicago-school/models";

describe('Player', () => {
    let board;
    let player;

    beforeEach(() => {
        board = new Board();
        player = new Player(board);
    });

    it('Create player', () => {  
        expect(() => new Player()).toThrow('Board is required.');
        expect(() => new Player(new Board())).not.toThrow();
    });

    it('Given a Board and a Player, When assign a token to a player and Player plays, Then the Board should have a token in the position', () => {
        player.assignToken(new X());
        player.moveTokenFromRackToBoard(1);
        expect(board.getTokenOn(1).isEqual(new X())).toBe(true);
    });

    it('Given a Player, When assign a NullToken, Then an error occurs', () => {
        expect(() => player.assignToken(new NullToken())).toThrow('Cannot assign a NullToken to a player.');
    });    

    it('Given a Board and a Player, When Player does not assign a token and plays, Then an error occurs', () => {
        expect(() => player.moveTokenFromRackToBoard(1)).toThrow('Player must assign a token before making a move.');
    });

    it('Given a Board and a Player, When Player plays more than three times, Then an error occurs', () => {
        player.assignToken(new X());
        player.moveTokenFromRackToBoard(1);
        player.moveTokenFromRackToBoard(2);
        player.moveTokenFromRackToBoard(3);
        expect(() => player.moveTokenFromRackToBoard(4)).toThrow('Player must move a token of the board.');
    });
    
    it('Given a Board, a Player, and all the Player\'s tokens on the Board, when the Player moves a token from its origin to a destination, the Board reflects the updated state.', () => {
        player.assignToken(new X());
        player.moveTokenFromRackToBoard(1);
        player.moveTokenFromRackToBoard(4);
        player.moveTokenFromRackToBoard(7);
        board.moveToken(1, 2);
        expect(board.getTokenOn(1).isNull()).toBe(true);
        expect(board.getTokenOn(2).isEqual(new X())).toBe(true);
    });

    it('Given a Board and a rack with a token, when player tries to move a token from one board position to another, Then an error occurs', () => {
        player.assignToken(new X());
        player.moveTokenFromRackToBoard(1);
        expect(() => player.moveTokenFromBoardToBoard(1, 2)).toThrow('Player must move all tokens from rack to board.');
    });
    
    it('Given a Board and a rack without tokens, when the player tries to move a token from one board position to another, Then the Board should have the same token assigned to the player in the new position', () => {
        const player1 = new Player(board);
        const player2 = new Player(board);
        player1.assignToken(new X());
        player2.assignToken(new O());
        player1.moveTokenFromRackToBoard(1);
        player2.moveTokenFromRackToBoard(2);
        player1.moveTokenFromRackToBoard(3);
        player2.moveTokenFromRackToBoard(4);
        player1.moveTokenFromRackToBoard(5);
        player2.moveTokenFromRackToBoard(6);
        expect(() => player1.moveTokenFromBoardToBoard(6, 9)).toThrow('Player must move a token that belongs to him.');        
    });    
});
