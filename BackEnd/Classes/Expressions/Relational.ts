import { Expression } from '../Abstracts/Expression';
import { Environment } from '../Env/Environment';
import { TypeExp } from '../Utils/Expressions';
import { Return, Type } from '../Utils/Type';
export class Relational extends Expression {
    constructor(line: number,column: number,public exp1: Expression,public sign: string,public exp2: Expression) {
        super(line,column,Type.NULL,TypeExp.RELATIONAL_OP)
    }
    public execute(env: Environment): Return {
        switch(this.sign) {
            case '==':
                return this.equal(env)
            case '!=':
                return this.notEqual(env)
            case '>=':
                return this.greatEqual(env)
            case '<=':
                return this.lessEqual(env)
            case '>':
                return this.great(env)
            case '<':
                return this.less(env)
            default:
                return {value: -1,type: Type.NULL}
            }
        }
    equal(env: Environment): Return {
        let value1: Return = this.exp1.execute(env)
        let value2: Return = this.exp2.execute(env)
        if(value1.type === Type.INT || value1.type === Type.DOUBLE || value1.type === Type.CHAR) {
            if(value2.type === Type.INT || value2.type === Type.DOUBLE || value2.type === Type.CHAR) {
                value1 = this.getValue(value1)
                value2 = this.getValue(value2)
                return {value: value1.value === value2.value,type: Type.BOOLEAN}
            }
            return {value: 'NULL',type: Type.NULL}
        }
        if(value1.type === Type.STRING && value2.type === Type.STRING) {
            return {value: value1.value === value2.value,type: Type.BOOLEAN}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    notEqual(env: Environment): Return {
        let value1: Return = this.exp1.execute(env)
        let value2: Return = this.exp2.execute(env)
        if(value1.type === Type.INT || value1.type === Type.DOUBLE || value1.type === Type.CHAR) {
            if(value2.type === Type.INT || value2.type === Type.DOUBLE || value2.type === Type.CHAR) {
                value1 = this.getValue(value1)
                value2 = this.getValue(value2)
                return {value: value1.value !== value2.value,type: Type.BOOLEAN}
            }
            return {value: 'NULL',type: Type.NULL}
        }
        if(value1.type === Type.STRING && value2.type === Type.STRING) {
            return {value: value1.value !== value2.value,type: Type.BOOLEAN}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    greatEqual(env: Environment): Return {
        let value1: Return = this.exp1.execute(env)
        let value2: Return = this.exp2.execute(env)
        if(value1.type === Type.INT || value1.type === Type.DOUBLE || value1.type === Type.CHAR) {
            if(value2.type === Type.INT || value2.type === Type.DOUBLE || value2.type === Type.CHAR) {
                value1 = this.getValue(value1)
                value2 = this.getValue(value2)
                return {value: value1.value >= value2.value,type: Type.BOOLEAN}
            }
            return {value: 'NULL',type: Type.NULL}
        }
        if(value1.type === Type.STRING && value2.type === Type.STRING) {
            return {value: value1.value >= value2.value,type: Type.BOOLEAN}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    lessEqual(env: Environment): Return {
        let value1: Return = this.exp1.execute(env)
        let value2: Return = this.exp2.execute(env)
        if(value1.type === Type.INT || value1.type === Type.DOUBLE || value1.type === Type.CHAR) {
            if(value2.type === Type.INT || value2.type === Type.DOUBLE || value2.type === Type.CHAR) {
                value1 = this.getValue(value1)
                value2 = this.getValue(value2)
                return {value: value1.value <= value2.value,type: Type.BOOLEAN}
            }
            return {value: 'NULL',type: Type.NULL}
        }
        if(value1.type === Type.STRING && value2.type === Type.STRING) {
            return {value: value1.value <= value2.value,type: Type.BOOLEAN}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    great(env: Environment): Return {
        let value1: Return = this.exp1.execute(env)
        let value2: Return = this.exp2.execute(env)
        if(value1.type === Type.INT || value1.type === Type.DOUBLE || value1.type === Type.CHAR) {
            if(value2.type === Type.INT || value2.type === Type.DOUBLE || value2.type === Type.CHAR) {
                value1 = this.getValue(value1)
                value2 = this.getValue(value2)
                return {value: value1.value > value2.value,type: Type.BOOLEAN}
            }
            return {value: 'NULL',type: Type.NULL}
        }
        if(value1.type === Type.STRING && value2.type === Type.STRING) {
            return {value: value1.value > value2.value,type: Type.BOOLEAN}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    less(env: Environment): Return {
        let value1: Return = this.exp1.execute(env)
        let value2: Return = this.exp2.execute(env)
        if(value1.type === Type.INT || value1.type === Type.DOUBLE || value1.type === Type.CHAR) {
            if(value2.type === Type.INT || value2.type === Type.DOUBLE || value2.type === Type.CHAR) {
                value1 = this.getValue(value1)
                value2 = this.getValue(value2)
                return {value: value1.value < value2.value,type: Type.BOOLEAN}
            }
            return {value: 'NULL',type: Type.NULL}
        }
        if(value1.type === Type.STRING && value2.type === Type.STRING) {
            return {value: value1.value < value2.value,type: Type.BOOLEAN}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    getValue(value: Return): Return {
        return value.type === Type.CHAR ? {value: value.value.charCodeAt(0),type: Type.INT} : value
    }
}