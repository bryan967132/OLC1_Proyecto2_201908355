import { Expression } from '../Abstracts/Expression';
import { Return, Type } from '../Abstracts/Type';
export class Logic extends Expression {
    constructor(line: number,column: number,public exp1: Expression,public sign: string,public exp2: Expression) {
        super(line,column,Type.NULL)
    }
    public execute(): Return {
        switch(this.sign) {
            case '&&':
                return this.and()
            case '||':
                return this.or()
            case '!':
                return this.not()
            default:
                return {value: -1,type: Type.NULL}
        }
    }
    and(): Return {
        let value1: Return = this.getValue(this.exp1.execute())
        let value2: Return = this.getValue(this.exp2.execute())
        this.type = Type.BOOLEAN
        return {value: value1.value && value2.value,type: this.type}
    }
    or(): Return {
        let value1: Return = this.getValue(this.exp1.execute())
        let value2: Return = this.getValue(this.exp2.execute())
        this.type = Type.BOOLEAN
        return {value: value1.value || value2.value,type: this.type}
    }
    not(): Return {
        let value: Return = this.getValue(this.exp2.execute())
        this.type = Type.BOOLEAN
        return {value: !value.value,type: this.type}
    }
    getValue(value: Return): Return {
        return value.type != Type.BOOLEAN ? {value: true,type: Type.BOOLEAN} : value
    }
}