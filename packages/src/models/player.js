import { Messages } from './messages';
export class Player {
    constructor(board) {
        if (!board) {
            throw new Error(Messages.BOARD_REQUIRED);
        }
        this._board = board;
        this._tokenCount = 3;
    }
    
    assignToken(token) {
        if (token.isNull()) {
            throw new Error(Messages.NULL_TOKEN_ASSIGNMENT);
        }
        this._token = token;
    }

    TokenRackCount(){
        return this._tokenCount;
    }

    moveTokenFromRackToBoard(position) {
        if (!this._token) {
            throw new Error(Messages.TOKEN_REQUIRED);
        }
        if(this._tokenCount === 0){
            throw new Error(Messages.TOKEN_ON_BOARD);
        }
        this._tokenCount--;
        this._board.putToken(position, this._token);
    }

    moveTokenFromBoardToBoard(fromPosition, toPosition) {
        if(this._tokenCount > 0){
            throw new Error(Messages.TOKEN_FROM_RACK);
        }
        if(!this._token.isEqual(this._board.getTokenOn(fromPosition))){
            throw new Error(Messages.TOKEN_BELONGS);
        }
        this._board.moveToken(fromPosition, toPosition);
    }
}