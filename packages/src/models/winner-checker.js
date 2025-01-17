export class WinnerChecker{
    constructor(board){
        this._board = board;
    }
    
    isTicTacToe(){
        return this._board.getTokenOn(7).isEqual(this._board.getTokenOn(8)) && this._board.getTokenOn(8).isEqual(this._board.getTokenOn(9)) ||
            this._board.getTokenOn(4).isEqual(this._board.getTokenOn(5)) && this._board.getTokenOn(5).isEqual(this._board.getTokenOn(6)) ||
            this._board.getTokenOn(3).isEqual(this._board.getTokenOn(5)) && this._board.getTokenOn(5).isEqual(this._board.getTokenOn(7)) ||        
            this._board.getTokenOn(3).isEqual(this._board.getTokenOn(6)) && this._board.getTokenOn(6).isEqual(this._board.getTokenOn(9)) ||
            this._board.getTokenOn(2).isEqual(this._board.getTokenOn(5)) && this._board.getTokenOn(5).isEqual(this._board.getTokenOn(8)) ||
            this._board.getTokenOn(1).isEqual(this._board.getTokenOn(4)) && this._board.getTokenOn(4).isEqual(this._board.getTokenOn(7)) || 
            this._board.getTokenOn(1).isEqual(this._board.getTokenOn(5)) && this._board.getTokenOn(5).isEqual(this._board.getTokenOn(9)) || 
            this._board.getTokenOn(1).isEqual(this._board.getTokenOn(2)) && this._board.getTokenOn(2).isEqual(this._board.getTokenOn(3));
    }   
};