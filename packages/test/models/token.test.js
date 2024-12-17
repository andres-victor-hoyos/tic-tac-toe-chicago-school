import { X, O, NullToken } from '@tic-tac-toe-chicago-school/models';

describe('Token', ()=>{
    const createInstances = (Class, count) => Array.from({ length: count }, () => new Class());

    const [x, x1, x2] = createInstances(X, 3);
    const [o, o1, o2] = createInstances(O, 3);
    const [nullToken, nullToken1, nullToken2] = createInstances(NullToken, 3);
    
    it('Given two X tokens, When they are compared, Then they should be equal', ()=>{
        expect(x1.isEqual(x2)).toBe(true);
    });

    it('Given an X token and an O token, When they are compared, Then they should not be equal', ()=>{
        expect(x.isEqual(o)).toBe(false);        
    });

    it('Given an O token and an X token, When they are compared, Then they should not be equal', ()=>{
        expect(o.isEqual(x)).toBe(false);
    });

    it('Given an NullToken token, When it is comparated with X or O token, Then they should not be equal', ()=>{
        expect(nullToken.isEqual(x)).toBe(false);
        expect(nullToken.isEqual(o)).toBe(false);
    });

    it('Given an NullToken token, When it is comparated with NullToken token, Then they should be equal', ()=>{
        expect(nullToken1.isEqual(nullToken2)).toBe(true);
    });

    it('Given an X or O tokens, When calling isNull, Then they should return false', ()=>{
        expect(x.isNull()).toBe(false);
        expect(o.isNull()).toBe(false);
    });

    it('Given an NullToken token, when calling isNull, Then it should return true', ()=>{
        expect(nullToken.isNull()).toBe(true);
    });
});

