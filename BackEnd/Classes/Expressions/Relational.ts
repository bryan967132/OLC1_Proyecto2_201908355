import { Expression } from '../Abstracts/Expression';
import { TypeExp } from '../Spec/Expressions';
import { Return, Type } from '../Spec/Type';
export class Relational extends Expression {
    constructor(line: number,column: number,public exp1: Expression,public sign: string,public exp2: Expression) {
        super(line,column,Type.NULL,TypeExp.RELATIONAL_OP)
    }
    public execute(): Return {
        switch(this.sign) {
            case '==':
                return this.equal()
            case '!=':
                return this.notEqual()
            case '>=':
                return this.greatEqual()
            case '<=':
                return this.lessEqual()
            case '>':
                return this.great()
            case '<':
                return this.less()
            default:
                return {value: -1,type: Type.NULL}
            }
        }
    equal(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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
    notEqual(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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
    greatEqual(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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
    lessEqual(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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
    great(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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
    less(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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