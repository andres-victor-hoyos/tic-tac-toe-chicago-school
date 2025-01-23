import {X,O} from './token';

export class Turn {
    constructor(players) {
        if (!players) {
            throw new Error('Players are required.');
        }
        this._players = players;
        this._turnCount = 0;
        this._init();
    }

    _init() {
        let tokens = [new X(), new O()];
        if (Math.random() < 0.5) {
            tokens = [tokens[1], tokens[0]];
        }
        for(let i=0; i<this._players.length; i++) {
            this._players[i].assignToken(tokens[i]);
        }
    }

    nextPlayer() {
        return this._players[++this._turnCount % this._players.length];
    }

    currentPlayer() {
        return this._players[this._turnCount % this._players.length];
    }
}