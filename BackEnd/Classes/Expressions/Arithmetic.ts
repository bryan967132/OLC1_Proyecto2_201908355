import { Expression } from '../Abstracts/Expression';
import { Return, Type } from '../Abstracts/Type';
import { plus, minus, mult, div, pow, mod } from '../Spec/Operations';
export class Arithmetic extends Expression {
    constructor(line: number,column: number,public exp1: Expression,public sign: string,public exp2: Expression) {
        super(line,column,Type.NULL)
    }
    public execute(): Return {
        switch(this.sign) {
            case '+':
                return this.plus()
            case '-':
                if(this.exp1 != undefined){
                    return this.minus()
                }
                return this.negative()
            case '*':
                return this.mult()
            case '/':
                return this.div()
            case '^':
                return this.pow()
            case '%':
                return this.mod()
            default:
                return {value: -1,type: Type.NULL}
        }
    }
    plus(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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
    minus(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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
    negative(): Return {
        let value: Return = this.exp2.execute()
        this.type = value.type
        if(this.type === Type.INT || this.type === Type.DOUBLE) {
            return {value: -value.value,type: this.type}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    mult(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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
    div(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
        this.type = div[value1.type][value2.type]
        let result: any = 'NULL'
        if(this.type === Type.DOUBLE) {
            value1 = this.getValue(value1)
            value2 = this.getValue(value2)
            result = parseFloat(value1.value) / parseFloat(value2.value)
        }
        return {value: result,type: this.type}
    }
    pow(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
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
    mod(): Return {
        let value1: Return = this.exp1.execute()
        let value2: Return = this.exp2.execute()
        this.type = mod[value1.type][value2.type]
        let result: any = 'NULL'
        if(this.type === Type.DOUBLE) {
            result = parseFloat(value1.value) % parseFloat(value2.value)
        }
        return {value: result,type: this.type}
    }
    getValue(value: Return): Return {
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