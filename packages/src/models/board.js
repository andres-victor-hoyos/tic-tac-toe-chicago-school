import { NullToken } from "./token";

const NULL_TOKEN = new NullToken();
export class Board{
    static SIZE = 9;
    static NULL_TOKEN = new NullToken();
    constructor(){
        this._boardData = Array.from({length: Board.SIZE }).fill(NULL_TOKEN);
    }

    getTokenOn(position){
        return this._boardData[this.index(position)];
    }

    putToken(position, token){
        if(token.isNull())
            throw new Error('Cannot place a NullToken on the board.');
        if(!this.getTokenOn(position).isNull())
            throw new Error("Position is occuped.")    
        this._boardData[position-1]=token;   
        
    }

    moveToken(fromPosition, toPosition){
       const from = this.getTokenOn(fromPosition);
       if (from.isNull()){
            throw new Error('No token to move in the given position.');
       }
       this.putToken(toPosition, from);
       this._boardData[this.index(fromPosition)] = NULL_TOKEN;
    }

    index(position){
        return position - 1
    }
}