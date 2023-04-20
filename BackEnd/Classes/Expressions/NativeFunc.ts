import { Expression } from "../Abstracts/Expression";
import { Environment } from "../Env/Environment";
import { TypeExp } from "../Utils/Expressions";
import { Return, Type } from "../Utils/Type";
export class NativeFunc extends Expression {
    constructor(line: number,column: number,private func: string,private value: Expression) {
        super(line,column,Type.NULL,TypeExp.NATIVE_FUNC)
    }
    public execute(env: Environment): Return {
        let value: Return = this.value.execute(env)
        switch(this.func.toLowerCase()) {
            case 'tolower':
                return {value: value.value.toString().toLowerCase(),type: Type.STRING}
            case 'toupper':
                return {value: value.value.toString().toUpperCase(),type: Type.STRING}
            case 'length':
                return {value: value.value.length,type: Type.INT}
            case 'truncate':
                return {value: Math.trunc(value.value),type: Type.INT}
            case 'round':
                return {value: Math.round(value.value),type: Type.INT}
            case 'typeof':
                return {value: this.getTypeOf(value),type: Type.STRING}
            case 'tostring':
                return {value: value.value.toString(),type: Type.STRING}
            case 'tochararray':
                return {value: value.value.split(''),type: Type.LIST}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    getTypeOf(value: Return): string {
        if(value.type === Type.INT) {
            return 'int'
        }
        if(value.type === Type.DOUBLE) {
            return 'double'
        }
        if(value.type === Type.BOOLEAN) {
            return 'boolean'
        }
        if(value.type === Type.CHAR) {
            return 'char'
        }
        if(value.type === Type.STRING) {
            return 'String'
        }
        if(value.type === Type.ARRAY) {
            return 'Array'
        }
        if(value.type === Type.LIST) {
            return 'List'
        }
        return 'NULL'
    }
}