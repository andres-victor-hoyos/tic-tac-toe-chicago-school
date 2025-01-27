import {Messages} from './messages';
class Token {
    constructor() {
        if (new.target === Token) {
            throw new Error(Messages.CANNOT_INSTANTIATE_ABSTRACT_CLASS_TOKEN);
        }
    }

    isEqual(token){
        return this.constructor === token.constructor && !token.isNull();
    }

    isNull(){
        return false;
    }
}

export class X extends Token{
    constructor(){
        super()
    }
}

export class O extends Token {
    constructor(){
        super();
    }
}

export class NullToken extends Token{
    constructor(){
        super();
    }

    isNull(){
        return true;
    }
}