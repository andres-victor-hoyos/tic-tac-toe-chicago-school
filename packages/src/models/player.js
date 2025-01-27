export class Player {
    constructor(board) {
        if (!board) {
            throw new Error('Board is required.');
        }
        this._board = board;
        this._tokenCount = 3;
    }
    
    assignToken(token) {
        if (token.isNull()) {
            throw new Error('Cannot assign a NullToken to a player.');
        }
        this._token = token;
    }

    TokenRackCount(){
        return this._tokenCount;
    }

    moveTokenFromRackToBoard(position) {
        if (!this._token) {
            throw new Error('Player must assign a token before making a move.');
        }
        if(this._tokenCount === 0){
            throw new Error('Player must move a token of the board.');
        }
        this._tokenCount--;
        this._board.putToken(position, this._token);
    }

    moveTokenFromBoardToBoard(fromPosition, toPosition) {
        if(this._tokenCount > 0){
            throw new Error('Player must move all tokens from rack to board.');
        }
        if(!this._token.isEqual(this._board.getTokenOn(fromPosition))){
            throw new Error('Player must move a token that belongs to him.');
        }
        this._board.moveToken(fromPosition, toPosition);
    }
}