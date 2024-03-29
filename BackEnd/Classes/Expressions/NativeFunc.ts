import { Expression } from "../Abstracts/Expression";
import { Environment } from "../Env/Environment";
import { TypeExp } from "../Utils/Expressions";
import { ReturnType, Type } from "../Utils/Type";
import { Primitive } from './Primitive';
export class NativeFunc extends Expression {
    constructor(line: number,column: number,private func: string,private value: Expression) {
        super(line,column,Type.NULL,TypeExp.NATIVE_FUNC)
    }
    public execute(env: Environment): ReturnType {
        let value: ReturnType = this.value.execute(env)
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
                return {value: this.getCharArray(value.value),type: Type.LIST}
        }
        return {value: 'NULL',type: Type.NULL}
    }
    getTypeOf(value: ReturnType): string {
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
    getCharArray(string: string) {
        let charArray: Primitive[] = []
        for(let character of string) {
            charArray.push(new Primitive(this.line,this.column,character,Type.CHAR))
        }
        return charArray
    }
}