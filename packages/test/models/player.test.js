import { Board, X, NullToken, Player } from "@tic-tac-toe-chicago-school/models";

describe(('Player'), () => {
    it('Create player', () => {  
        expect(()=>new Player()).toThrow('Board is required.');
        expect(()=>new Player(new Board())).not.toThrow();
    });

    it('Given a Board and a Player, When assign an token a player and Player plays, Then the Board should have a token in the position', () => {
        const board = new Board();
        const player = new Player(board);
        player.assignToken(new X());
        player.moveTokenFromRackToBoard(1);
        expect(board.getTokenOn(1).isEqual(new X())).toBe(true);
    });

    it('Given a Player, When assing a NullToken, Then an error occurs', () => {
        const player = new Player(new Board());
        expect(()=>player.assignToken(new NullToken())).toThrow('Cannot assign a NullToken to a player.');
    });    

    it('Given a Board and a Player, When Player not assign a token and plays, Then an error occurs', () => {
        const board = new Board();
        const player = new Player(board);
        expect(()=>player.moveTokenFromRackToBoard(1)).toThrow('Player must assign a token before making a move.');
    });

    it('Given a Board and a Player, When Player plays more than three times, Then an error occurs', () => {
        const board = new Board();
        const player = new Player(board);
        player.assignToken(new X());
        player.moveTokenFromRackToBoard(1);
        player.moveTokenFromRackToBoard(2);
        player.moveTokenFromRackToBoard(3);
        expect(()=>player.moveTokenFromRackToBoard(4)).toThrow('Player must move an token of the board.');
    });
    
    it('Given a Board, a Player, and all the Player´s tokens on the Board, when the Player moves a token from its origin to a destination, the Board reflects the updated state.', () => {
        const board = new Board();
        const player = new Player(board);
        player.assignToken(new X());
        player.moveTokenFromRackToBoard(1);
        player.moveTokenFromRackToBoard(4);
        player.moveTokenFromRackToBoard(7);
        board.moveToken(1, 2);
        expect(board.getTokenOn(1).isNull()).toBe(true);
        expect(board.getTokenOn(2).isEqual(new X())).toBe(true);
    });

    it('Given an Board and rack with an token, when player try move token from board position a another position, Then an error occurs', () => {
        const board = new Board();
        const player = new Player(board);
        player.assignToken(new X());
        player.moveTokenFromRackToBoard(1);
        expect(()=>player.moveTokenFromBoardToBoard(1, 2)).toThrow('Player must move all token from rack to board.');
    });    
});