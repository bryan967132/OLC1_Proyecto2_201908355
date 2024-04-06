import { Expression } from '../Abstracts/Expression';
import { Environment } from '../Env/Environment';
import { TypeExp } from '../Utils/Expressions';
import { ReturnType, Type } from '../Utils/Type';
export class Logic extends Expression {
    constructor(line: number,column: number,public exp1: Expression,public sign: string,public exp2: Expression) {
        super(line,column,Type.NULL,TypeExp.LOGIC_OP)
    }
    public execute(env: Environment): ReturnType {
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
    and(env: Environment): ReturnType {
        let value1: ReturnType = this.getValue(this.exp1.execute(env))
        let value2: ReturnType = this.getValue(this.exp2.execute(env))
        this.type = Type.BOOLEAN
        return {value: value1.value && value2.value,type: this.type}
    }
    or(env: Environment): ReturnType {
        let value1: ReturnType = this.getValue(this.exp1.execute(env))
        let value2: ReturnType = this.getValue(this.exp2.execute(env))
        this.type = Type.BOOLEAN
        return {value: value1.value || value2.value,type: this.type}
    }
    not(env: Environment): ReturnType {
        let value: ReturnType = this.getValue(this.exp2.execute(env))
        this.type = Type.BOOLEAN
        return {value: !value.value,type: this.type}
    }
    getValue(value: ReturnType): ReturnType {
        return value.type != Type.BOOLEAN ? {value: true,type: Type.BOOLEAN} : value
    }
}