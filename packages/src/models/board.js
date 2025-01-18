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
            throw new Error("Position is occupied.")    
        this._boardData[position-1]=token;
    }

    moveToken(fromPosition, toPosition){
       const from = this.getTokenOn(fromPosition);
       if (from.isNull()){
            throw new Error('No token to move in the given position.');
       }
       if(!this._neighbor(fromPosition, toPosition)){
            throw new Error('Cannot move token to a non-neighbor position.');
       }
       this.putToken(toPosition, from);
       this._boardData[this.index(fromPosition)] = NULL_TOKEN;
    }

    _neighbor(fromPosition, toPosition){
        const dimension = Math.sqrt(Board.SIZE);
        const [rowfrom, columnfrom] = [Math.floor(this.index(fromPosition)/dimension), this.index(fromPosition) % dimension];
        const [rowto, columnto] = [Math.floor(this.index(toPosition)/dimension), (this.index(toPosition) % dimension)];
        const distance =Math.floor(Math.sqrt(Math.pow(rowfrom - rowto, 2) + Math.pow(columnfrom - columnto, 2)));
        return distance === 1;
    }

    index(position){
        return position - 1
    }
}