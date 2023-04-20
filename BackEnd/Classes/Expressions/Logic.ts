import { Expression } from '../Abstracts/Expression';
import { Environment } from '../Env/Environment';
import { TypeExp } from '../Utils/Expressions';
import { Return, Type } from '../Utils/Type';
export class Logic extends Expression {
    constructor(line: number,column: number,public exp1: Expression,public sign: string,public exp2: Expression) {
        super(line,column,Type.NULL,TypeExp.LOGIC_OP)
    }
    public execute(env: Environment): Return {
        switch(this.sign) {
            case '&&':
                return this.and(env)
            case '||':
                return this.or(env)
            case '!':
                return this.not(env)
            default:
                return {value: -1,type: Type.NULL}
        }
    }
    and(env: Environment): Return {
        let value1: Return = this.getValue(this.exp1.execute(env))
        let value2: Return = this.getValue(this.exp2.execute(env))
        this.type = Type.BOOLEAN
        return {value: value1.value && value2.value,type: this.type}
    }
    or(env: Environment): Return {
        let value1: Return = this.getValue(this.exp1.execute(env))
        let value2: Return = this.getValue(this.exp2.execute(env))
        this.type = Type.BOOLEAN
        return {value: value1.value || value2.value,type: this.type}
    }
    not(env: Environment): Return {
        let value: Return = this.getValue(this.exp2.execute(env))
        this.type = Type.BOOLEAN
        return {value: !value.value,type: this.type}
    }
    getValue(value: Return): Return {
        return value.type != Type.BOOLEAN ? {value: true,type: Type.BOOLEAN} : value
    }
}