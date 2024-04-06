import { Primitive } from "../Expressions/Primitive";
import { Function } from "../Instructions/Function";
import { printList, symbolTable } from "../Utils/Reports";
import { ReturnType, Type } from "../Utils/Type";
import { Symbol } from "./Symbol"
import { Symbol as TabSym } from "../Utils/Symbol";
export class Environment {
    private ids: Map<string,Symbol> = new Map<string,Symbol>()
    private functions: Map<string,Function> = new Map<string,Function>()
    constructor(private previous: Environment | null,public name: string) {}
    public saveID(id: string,value: any,type: Type,line: number,column: number) {
        let env: Environment = this
        if(!env.ids.has(id.toLowerCase())) {
            env.ids.set(id.toLowerCase(),new Symbol(value,id,type,undefined))
            symbolTable.push(new TabSym(line,column,id.toLowerCase(),'Variable',this.getTypeOf(type),env.name))
        }
        else {
            printList.push(`Error, La variable "${id}" ya existe en el entorno, linea ${line} columna ${column}.`)
        }
    }
    public saveArray(id: string,value: any,type: Type,line: number,column: number) {
        let env: Environment = this
        if(!env.ids.has(id.toLowerCase())) {
            env.ids.set(id.toLowerCase(),new Symbol(value,id,Type.ARRAY,type))
            symbolTable.push(new TabSym(line,column,id.toLowerCase(),'Variable',`Array ${this.getTypeOf(type)}`,env.name))
        }
        else {
            printList.push(`Error, El vector "${id}" ya existe en el entorno, linea ${line} columna ${column}.`)
        }
    }
    public saveList(id: string,value: any,type: Type,line: number,column: number) {
        let env: Environment = this
        if(!env.ids.has(id.toLowerCase())) {
            env.ids.set(id.toLowerCase(),new Symbol(value,id,Type.LIST,type))
            symbolTable.push(new TabSym(line,column,id.toLowerCase(),'Variable',`List ${this.getTypeOf(type)}`,env.name))
        }
        else {
            printList.push(`Error, La lista "${id}" ya existe en el entorno, linea ${line} columna ${column}.`)
        }
    }
    public getValue(id: string): Symbol | null {
        let env: Environment | null = this
        while(env) {
            if(env.ids.has(id.toLowerCase())) {
                return env.ids.get(id.toLowerCase())!
            }
            env = env.previous
        }
        return null
    }
    public getValueArrayList(id: string,index: number): Symbol | null {
        let env: Environment | null = this
        while(env) {
            if(env.ids.has(id.toLowerCase())) {
                let symbol: Symbol = env.ids.get(id.toLowerCase())!
                return symbol.value[index]
            }
            env = env.previous
        }
        return null
    }
    public reasignID(id: string,value: ReturnType): boolean {
        let env: Environment | null = this
        while(env) {
            if(env.ids.has(id.toLowerCase())) {
                let symbol: Symbol = env.ids.get(id.toLowerCase())!
                symbol.value = value.value
                env.ids.set(id.toLowerCase(),symbol)
                return true
            }
            env = env.previous
        }
        printList.push(`Error, La variable "${id}" no ha sido declarada.`)
        return false
    }
    public reasignArrayList(id: string,index: number,value: Primitive): boolean {
        let env: Environment | null = this
        while(env) {
            if(env.ids.has(id.toLowerCase())) {
                let symbol: Symbol = env.ids.get(id.toLowerCase())!
                symbol.value[index] = value
                env.ids.set(id.toLowerCase(),symbol)
                return true
            }
            env = env.previous
        }
        printList.push(`Error, La variable "${id}" no ha sido declarada.`)
        return false
    }
    public addList(id: string,value: Primitive): boolean {
        let env: Environment | null = this
        while(env) {
            if(env.ids.has(id.toLowerCase())) {
                let symbol: Symbol = env.ids.get(id.toLowerCase())!
                symbol.value.push(value)
                env.ids.set(id.toLowerCase(),symbol)
                return true
            }
            env = env.previous
        }
        printList.push(`Error, La variable "${id}" no ha sido declarada.`)
        return false
    }
    public saveFunction(id: string,func: Function) {
        let env: Environment = this
        if(!env.functions.has(id.toLowerCase())) {
            env.functions.set(id.toLowerCase(),func)
            let typeFunc: string = this.getTypeOfFunc(func.type)
            symbolTable.push(new TabSym(func.line,func.column,id.toLowerCase(),typeFunc == 'void' ? 'Método' : 'Función',typeFunc,env.name))
        }
        else {
            printList.push(`Error, La función ${id} ya existe en el entorno`)
        }
    }
    public getFunction(id: string): Function | null {
        let env: Environment | null = this
        while(env) {
            if(env.functions.has(id.toLowerCase())) {
                return env.functions.get(id.toLowerCase())!
            }
            env = env.previous
        }
        return null
    }
    public getGlobal(): Environment {
        let env: Environment | null = this
        while(env.previous) {
            env = env.previous
        }
        return env
    }
    getTypeOf(type: Type): string {
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
    getTypeOfFunc(type: Type): string {
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
        return 'void'
    }
}