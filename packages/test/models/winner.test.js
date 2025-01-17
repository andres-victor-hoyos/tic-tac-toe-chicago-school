import { Board, X, O, WinnerChecker } from '@tic-tac-toe-chicago-school/models';

describe('winner-checker',()=>{
    it('Given a Board with a winner, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(2, new X());
        board.putToken(3, new X());        
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board without a winner, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(2, new X());
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });

    it('Given a Board with a winner, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(5, new X());
        board.putToken(9, new X());        
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board without a winner, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(5, new X());
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });

    it('Given a Board with a winner, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(4, new X());
        board.putToken(7, new X());        
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board without a winner, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(4, new X());
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });

    it('Given a Board with a winner, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(2, new X());
        board.putToken(5, new X());
        board.putToken(8, new X());        
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board without a winner, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(2, new X());
        board.putToken(5, new X());
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });

    it('Given a Board with a winner, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(3, new X());
        board.putToken(6, new X());
        board.putToken(9, new X());        
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board without a winner, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(3, new X());
        board.putToken(6, new X());
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });
    
    it('Given a Board with a winner, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(3, new X());
        board.putToken(5, new X());
        board.putToken(7, new X());        
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board without a winner, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(3, new X());
        board.putToken(5, new X());
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });

    it('Given a Board with a winner, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(4, new X());
        board.putToken(5, new X());
        board.putToken(6, new X());        
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board without a winner, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(4, new X());
        board.putToken(5, new X());
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });

    it('Given a Board with a winner, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(3, new X());
        board.putToken(6, new X());
        board.putToken(9, new X());        
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board with a winner, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(7, new X());
        board.putToken(8, new X());
        board.putToken(9, new X());        
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board without a winner, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(7, new X());
        board.putToken(8, new X());
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });

    it('Given an empty Board, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });

    it('Given a Board with a draw, when calling isTicTacToe, then should return false', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(2, new O());
        board.putToken(3, new X());
        board.putToken(4, new O());
        board.putToken(5, new X());
        board.putToken(6, new O());
        board.putToken(7, new O());
        board.putToken(8, new X());
        board.putToken(9, new O());
        expect(winnerChecker.isTicTacToe()).toBe(false);
    });

    it('Given a Board with a winner in the first row, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(2, new X());
        board.putToken(3, new X());
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board with a winner in the second row, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(4, new X());
        board.putToken(5, new X());
        board.putToken(6, new X());
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board with a winner in the third row, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(7, new X());
        board.putToken(8, new X());
        board.putToken(9, new X());
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board with a winner in the first column, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(4, new X());
        board.putToken(7, new X());
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board with a winner in the second column, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(2, new X());
        board.putToken(5, new X());
        board.putToken(8, new X());
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board with a winner in the third column, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(3, new X());
        board.putToken(6, new X());
        board.putToken(9, new X());
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board with a winner in the first diagonal, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(1, new X());
        board.putToken(5, new X());
        board.putToken(9, new X());
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

    it('Given a Board with a winner in the second diagonal, when calling isTicTacToe, then should return true', ()=>{
        const board = new Board();
        const winnerChecker = new WinnerChecker(board);
        board.putToken(3, new X());
        board.putToken(5, new X());
        board.putToken(7, new X());
        expect(winnerChecker.isTicTacToe()).toBe(true);
    });

});  