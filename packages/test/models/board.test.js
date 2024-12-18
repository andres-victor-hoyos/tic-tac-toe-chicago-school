
import { Board, NullToken, X, O}  from '@tic-tac-toe-chicago-school/models';
describe('Board',()=>{
    it('Given an Board When it is initialiced, then should have empty tokens in any position', ()=>{
        const board = new BuilderBoardTest()
            .empty()
            .build();
        for(let p = 1; p<Board.SIZE; p++)
            expect(board.getTokenOn(p).isNull(new NullToken())).toBe(true);      
    });

    it('Given an Board initialiced, When put an token X on position n, Then getTokenOn have X token on positin n', ()=>{
        const board = new BuilderBoardTest()
            .empty()
            .putToken(1, new X())
            .build();
        expect(board.getTokenOn(1).isNull()).toBe(false);
    });

    it.each([
        [new X(), new X()], 
        [new O(), new O()],
        [new X(), new O()],
        [new O(), new X()]
    ])
    ('Given a Board with a token (X or O) played on position n, when trying to place a token on the same position, then an error occurs.', 
            (token1, token2)=>{
        expect(()=>new BuilderBoardTest()
            .empty()
            .putToken(1, token1)
            .putToken(1, token2)
            .build()).toThrow("Position is occuped.")
    });

    it('Given a Board, when trying to place a NullToken, then an error occurs', () => {
        const board = new BuilderBoardTest()
            .empty()
            .build();
        const position = 1;

        expect(() => {
            board.putToken(position, new NullToken());
        }).toThrow('Cannot place a NullToken on the board.');
    });

    it('Given a Board with a token in position n, when moving the token to position m, then position n should be empty and position m should have the token.', () => {
        const board = new BuilderBoardTest()
            .empty()
            .putToken(1, new X())
            .build();

        board.moveToken(1, 2); 
        expect(board.getTokenOn(1).isNull()).toBe(true);
        expect(board.getTokenOn(2).isEqual(new X())).toBe(true);
    });

    it('Given a Board, when trying to move a token to a position already occupied, then an error occurs.', () => {
        const board = new BuilderBoardTest()
            .empty()
            .putToken(1, new X())
            .putToken(2, new X())
            .build();

        expect(() => {
            board.moveToken(1, 2); // Intentar mover el token a una posición ocupada.
        }).toThrow('Position is occuped.');
    });

    it('Given a Board, when trying to move a token from an empty position, then an error occurs.', () => {
        const board = new BuilderBoardTest()
            .empty()
            .build();

        expect(() => {
            board.moveToken(1, 2); // Intentar mover desde una posición vacía.
        }).toThrow('No token to move in the given position.');
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
        this._pushes.map(p=>this._board.putToken(p.position, p.token));4
        return this._board;
    }
}