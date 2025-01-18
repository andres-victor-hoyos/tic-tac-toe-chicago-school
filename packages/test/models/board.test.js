import { Board, NullToken, X, O } from '@tic-tac-toe-chicago-school/models';

describe('Board', () => {
    let builder;

    beforeEach(() => {
        builder = new BuilderBoardTest().empty();
    });

    it('Given a Board When it is initialized, then should have empty tokens in any position', () => {
        const board = builder.build();
        for (let p = 1; p < Board.SIZE; p++) {
            expect(board.getTokenOn(p).isNull(new NullToken())).toBe(true);
        }
    });

    it('Given a Board initialized, When put a token X on position n, Then getTokenOn has X token on position n', () => {
        const board = builder.putToken(at(1), new X()).build();
        expect(board.getTokenOn(1).isNull()).toBe(false);
    });

    it.each([
        [new X(), new X()],
        [new O(), new O()],
        [new X(), new O()],
        [new O(), new X()]
    ])('Given a Board with a token (X or O) played on position n, when trying to place a token on the same position, then an error occurs.',
        (token1, token2) => {
            expect(() => builder.putToken(at(1), token1).putToken(at(1), token2).build()).toThrow("Position is occupied.");
        });

    it('Given a Board, when trying to place a NullToken, then an error occurs', () => {
        const board = builder.build();
        const position = 1;

        expect(() => {
            board.putToken(at(position), new NullToken());
        }).toThrow('Cannot place a NullToken on the board.');
    });

    it('Given a Board with a token in position n, when moving the token to position m, then position n should be empty and position m should have the token.', () => {
        const board = builder.putToken(at(1), new X()).build();

        board.moveToken(from(1), at(2));
        expect(board.getTokenOn(at(1)).isNull()).toBe(true);
        expect(board.getTokenOn(at(2)).isEqual(new X())).toBe(true);
    });

    it('Given a Board, when trying to move a token to a position already occupied, then an error occurs.', () => {
        const board = builder.putToken(at(1), new X()).putToken(at(2), new X()).build();

        expect(() => {
            board.moveToken(from(1), to(2));
        }).toThrow('Position is occupied.');
    });

    it('Given a Board, when trying to move a token from an empty position, then an error occurs.', () => {
        const board = builder.build();

        expect(() => {
            board.moveToken(from(1), to(2));
        }).toThrow('No token to move in the given position.');
    });

    it('Given a Board, when trying to move a token to a non-neighbor position, then an error occurs.', () => {
        const board = builder.putToken(at(1), new X()).build();
        expect(() => {
            board.moveToken(from(1), to(3));
        }).toThrow('Cannot move token to a non-neighbor position.');
    });

    it('Given a Board, when moving a token to the right (neighbor position), then the move is performed.', () => {
        const board = builder.putToken(at(5), new X()).build();

        board.moveToken(from(5), to(6));
        expect(board.getTokenOn(at(5)).isNull()).toBe(true);
        expect(board.getTokenOn(at(6)).isEqual(new X())).toBe(true);
    });

    it('Given a Board, when moving a token to the left (neighbor position), then the move is performed.', () => {
        const board = builder.putToken(at(5), new X()).build();

        board.moveToken(from(5), to(4));
        expect(board.getTokenOn(at(5)).isNull()).toBe(true);
        expect(board.getTokenOn(at(4)).isEqual(new X())).toBe(true);
    });

    it('Given a Board, when moving a token to the up (neighbor position), then the move is performed.', () => {
        const board = builder.putToken(at(5), new X()).build();

        board.moveToken(from(5), to(2));
        expect(board.getTokenOn(at(5)).isNull()).toBe(true);
        expect(board.getTokenOn(at(2)).isEqual(new X())).toBe(true);
    });

    it('Given a Board, when moving a token to the left-up (neighbor position), then the move is performed.', () => {
        const board = builder.putToken(at(5), new X()).build();

        board.moveToken(from(5), to(1));
        expect(board.getTokenOn(at(5)).isNull()).toBe(true);
        expect(board.getTokenOn(at(1)).isEqual(new X())).toBe(true);
    });

    it('Given a Board, when moving a token to the right-up (neighbor position), then the move is performed.', () => {
        const board = builder.putToken(at(5), new X()).build();

        board.moveToken(from(5), to(3));
        expect(board.getTokenOn(at(5)).isNull()).toBe(true);
        expect(board.getTokenOn(at(3)).isEqual(new X())).toBe(true);
    });

    it('Given a Board, when moving a token to the down (neighbor position), then the move is performed.', () => {
        const board = builder.putToken(at(5), new X()).build();

        board.moveToken(from(5), to(8));
        expect(board.getTokenOn(at(5)).isNull()).toBe(true);
        expect(board.getTokenOn(at(8)).isEqual(new X())).toBe(true);
    });

    it('Given a Board, when moving a token to the right-down (neighbor position), then the move is performed.', () => {
        const board = builder.putToken(at(5), new X()).build();

        board.moveToken(from(5), to(7));
        expect(board.getTokenOn(at(5)).isNull()).toBe(true);
        expect(board.getTokenOn(at(7)).isEqual(new X())).toBe(true);
    });

    it('Given a Board, when moving a token to the right-down (neighbor position), then the move is performed.', () => {
        const board = builder.putToken(at(5), new X()).build();

        board.moveToken(from(5), to(9));
        expect(board.getTokenOn(at(5)).isNull()).toBe(true);
        expect(board.getTokenOn(at(9)).isEqual(new X())).toBe(true);
    });
});

class BuilderBoardTest{
    constructor(){        
    }
    
    empty(){
        this._board = new Board;
        this._pushes = [];
        return this;
    }

    putToken(position, token){
        this._pushes.push({position, token});
        return this
    }

    build(){
        this._pushes.map(p=>this._board.putToken(at(p.position), p.token));
        return this._board;
    }
}

function at(position){
    return position;
}

function from(position){
    return position;
}

function to(position){
    return position;
}