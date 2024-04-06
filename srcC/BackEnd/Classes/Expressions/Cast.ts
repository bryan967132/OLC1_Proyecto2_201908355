import { Expression } from "../Abstracts/Expression";
import { Environment } from "../Env/Environment";
import { TypeExp } from "../Utils/Expressions";
import { ReturnType, Type } from "../Utils/Type";
export class Cast extends Expression {
    constructor(line: number,column: number,private destiny: Type,private value: Expression) {
        super(line,column,destiny,TypeExp.CAST)
    }
    public execute(env: Environment): ReturnType {
        let value: ReturnType = this.value.execute(env)
        if(this.destiny === Type.INT) {
            if(value.type === Type.DOUBLE) {
                return {value: parseInt(value.value),type: this.destiny}
            }
            if(value.type === Type.CHAR) {
                return {value: value.value.charCodeAt(0),type: this.destiny}
            }
            return {value: 'NULL',type: Type.NULL}
        }
        if(this.destiny === Type.DOUBLE) {
            if(value.type === Type.INT) {
                return {value: Number(value.value),type: this.destiny}
            }
            if(value.type === Type.CHAR) {
                return {value: Number(value.value.charCodeAt(0)),type: this.destiny}
            }
            return {value: 'NULL',type: Type.NULL}
        }
        if(this.destiny === Type.STRING) {
            if(value.type === Type.INT) {
                return {value: String(value.value),type: this.destiny}
            }
            if(value.type === Type.DOUBLE) {
                return {value: String(value.value),type: this.destiny}
            }
            return {value: 'NULL',type: Type.NULL}
        }
        if(this.destiny === Type.CHAR) {
            if(value.type === Type.INT) {
                return {value: String.fromCharCode(value.value),type: this.destiny}
            }
        }
        return {value: 'NULL',type: Type.NULL}
    }
}