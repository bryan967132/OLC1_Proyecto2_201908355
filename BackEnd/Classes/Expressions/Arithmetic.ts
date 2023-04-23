import { Expression } from '../Abstracts/Expression';
import { ReturnType, Type } from '../Utils/Type';
import { plus, minus, mult, div, pow, mod } from '../Utils/Operations';
import { TypeExp } from '../Utils/Expressions';
import { Environment } from '../Env/Environment';
export class Arithmetic extends Expression {
    constructor(line: number,column: number,public exp1: Expression,public sign: string,public exp2: Expression) {
        super(line,column,Type.NULL,TypeExp.ARITHMETIC_OP)
    }
    public execute(env: Environment): ReturnType {
        switch(this.sign) {
            case '+':
                return this.plus(env)
            case '-':
                if(this.exp1 != undefined){
                    return this.minus(env)
                }
                return this.negative(env)
            case '*':
                return this.mult(env)
            case '/':
                return this.div(env)
            case '^':
                return this.pow(env)
            case '%':
                return this.mod(env)
            default:
                return {value: -1,type: Type.NULL}
        }
    }
    plus(env: Environment): ReturnType {
        let value1: ReturnType = this.exp1.execute(env)
        let value2: ReturnType = this.exp2.execute(env)
        this.type = plus[value1.type][value2.type]
        let result: any = 'NULL'
        if(this.type === Type.INT) {
            value1 = this.getValue(value1)
            value2 = this.getValue(value2)
            result = value1.value + value2.value
        }
        else if(this.type === Type.DOUBLE) {
            value1 = this.getValue(value1)
            value2 = this.getValue(value2)
            result = parseFloat(value1.value) + parseFloat(value2.value)
        }
        else if(this.type === Type.STRING) {
            result = value1.value + value2.value
        }
        return {value: result,type: this.type}
    }
    minus(env: Environment): ReturnType {
        let value1: ReturnType = this.exp1.execute(env)
        let value2: ReturnType = this.exp2.execute(env)
        this.type = minus[value1.type][value2.type]
        let result: any = 'NULL'
        if(this.type === Type.INT) {
            value1 = this.getValue(value1)
            value2 = this.getValue(value2)
            result = value1.value - value2.value
        }
        else if(this.type === Type.DOUBLE) {
            value1 = this.getValue(value1)
            value2 = this.getValue(value2)
            result = parseFloat(value1.value) - parseFloat(value2.value)
        }
        return {value: result,type: this.type}
    }
    negative(env: Environment): ReturnType {
        let value: ReturnType = this.exp2.execute(env)
        this.type = value.type
        if(this.type === Type.INT || this.type === Type.DOUBLE) {
            return {value: -value.value,type: this.type}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    mult(env: Environment): ReturnType {
        let value1: ReturnType = this.exp1.execute(env)
        let value2: ReturnType = this.exp2.execute(env)
        this.type = mult[value1.type][value2.type]
        let result: any = 'NULL'
        if(this.type === Type.INT) {
            value1 = this.getValue(value1)
            value2 = this.getValue(value2)
            result = value1.value * value2.value
        }
        else if(this.type === Type.DOUBLE) {
            value1 = this.getValue(value1)
            value2 = this.getValue(value2)
            result = parseFloat(value1.value) * parseFloat(value2.value)
        }
        return {value: result,type: this.type}
    }
    div(env: Environment): ReturnType {
        let value1: ReturnType = this.exp1.execute(env)
        let value2: ReturnType = this.exp2.execute(env)
        this.type = div[value1.type][value2.type]
        let result: any = 'NULL'
        if(this.type === Type.DOUBLE) {
            value1 = this.getValue(value1)
            value2 = this.getValue(value2)
            result = parseFloat(value1.value) / parseFloat(value2.value)
        }
        return {value: result,type: this.type}
    }
    pow(env: Environment): ReturnType {
        let value1: ReturnType = this.exp1.execute(env)
        let value2: ReturnType = this.exp2.execute(env)
        this.type = pow[value1.type][value2.type]
        let result: any = 'NULL'
        if(this.type === Type.INT) {
            result = value1.value ** value2.value
        }
        else if(this.type === Type.DOUBLE) {
            result = parseFloat(value1.value) ** parseFloat(value2.value)
        }
        return {value: result,type: this.type}
    }
    mod(env: Environment): ReturnType {
        let value1: ReturnType = this.exp1.execute(env)
        let value2: ReturnType = this.exp2.execute(env)
        this.type = mod[value1.type][value2.type]
        let result: any = 'NULL'
        if(this.type === Type.DOUBLE) {
            result = parseFloat(value1.value) % parseFloat(value2.value)
        }
        return {value: result,type: this.type}
    }
    getValue(value: ReturnType): ReturnType {
        if(value.type === Type.BOOLEAN) {
            if(value.value) {
                return {value: 1,type: Type.INT}
            }
            return {value: 0,type: Type.INT}
        }
        else if(value.type === Type.CHAR) {
            return {value: value.value.charCodeAt(0),type: Type.INT}
        }
        return value
    }
}