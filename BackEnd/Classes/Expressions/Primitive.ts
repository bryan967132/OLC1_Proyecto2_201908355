import { Expression } from "../Abstracts/Expression";
import { TypeExp } from "../Utils/Expressions";
import { ReturnType, Type } from "../Utils/Type";
export class Primitive extends Expression {
    constructor(line: number,column: number,public value: any,type: Type) {
        super(line,column,type,TypeExp.PRIMITIVE)
    }
    public execute(): ReturnType {
        switch(this.type) {
            case Type.INT:
                return {value: parseInt(this.value),type: this.type}
            case Type.DOUBLE:
                return {value: parseFloat(this.value),type: this.type}
            case Type.BOOLEAN:
                return {value: this.value.toString().toLowerCase() === 'true',type: this.type}
            case Type.CHAR:
                this.value = this.value.replace(/\\n/g,'\n')
                this.value = this.value.replace(/\\t/g,'\t')
                this.value = this.value.replace(/\\"/g,'\"')
                this.value = this.value.replace(/\\'/g,'\'')
                this.value = this.value.replace(/\\\\/g,'\\')
                return {value: this.value,type: this.type}
            default:
                this.value = this.value.replace(/\\n/g,'\n')
                this.value = this.value.replace(/\\t/g,'\t')
                this.value = this.value.replace(/\\"/g,'\"')
                this.value = this.value.replace(/\\'/g,'\'')
                this.value = this.value.replace(/\\\\/g,'\\')
                return {value: this.value,type: this.type}
        }
    }
}