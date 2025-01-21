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

    moveTokenFromRackToBoard(position) {
        if (!this._token) {
            throw new Error('Player must assign a token before making a move.');
        }
        if(this._tokenCount === 0){
            throw new Error('Player must move an token of the board.');
        }
        this._tokenCount--;
        this._board.putToken(position, this._token);
    }

    moveTokenFromBoardToBoard(fromPosition, toPosition) {
        if(this._tokenCount > 0){
            throw new Error('Player must move all token from rack to board.');
        }
        this._board.moveToken(fromPosition, toPosition);
    }
}