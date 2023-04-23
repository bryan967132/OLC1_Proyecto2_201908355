import { Expression } from "../Abstracts/Expression";
import { Environment } from "../Env/Environment";
import { Function } from "../Instructions/Function";
import { TypeExp } from "../Utils/Expressions";
import { printList } from "../Utils/Reports";
import { ReturnType, Type } from "../Utils/Type";
export class CallFunction extends Expression {
    constructor(line: number,column: number,private id: string,private args: Array<Expression>) {
        super(line,column,Type.NULL,TypeExp.CALL_FUNC)
    }
    public execute(env: Environment): ReturnType {
        const func: Function | null = env.getFunction(this.id)
        if(func) {
            const envFunc: Environment = new Environment(env.getGlobal())
            if(func.parameters.length == this.args.length) {
                for(let i = 0; i < func.parameters.length; i ++) {
                    const value: ReturnType = this.args[i].execute(env)
                    const param: ReturnType = func.parameters[i].execute(env)
                    if(value.type === param.type) {
                        envFunc.saveID(param.value,value.value,value.type,this.line,this.column)
                    }
                    else {
                        printList.push(`Error, El Parámetro "${param.value}" no es del tipo "${this.getType(param.type)}", linea ${this.line} columna ${this.column}`)
                    }
                }
                func.block.execute(envFunc)
            }
            else {
                printList.push(`Error, La Función "${this.id}" no tiene la cantidad correcta de parámetros, línea ${this.line} columna ${this.column}`)
            }
        }
        else {
            printList.push(`Error, La Función "${this.id}" no existe, línea ${this.line} columna ${this.column}`)
        }
        return {value: 'NULL',type: Type.NULL}
    }
    getType(type: Type): string {
        if(type === Type.INT) {
            return 'int'
        }
        if(type === Type.DOUBLE) {
            return 'double'
        }
        if(type === Type.BOOLEAN) {
            return 'boolean'
        }
        if(type === Type.CHAR) {
            return 'char'
        }
        if(type === Type.STRING) {
            return 'String'
        }
        if(type === Type.ARRAY) {
            return 'Array'
        }
        if(type === Type.LIST) {
            return 'List'
        }
        return 'NULL'
    }
}