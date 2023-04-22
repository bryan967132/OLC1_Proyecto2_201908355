import { Primitive } from "../Expressions/Primitive";
import { printList } from "../Utils/Reports";
import { Return, Type } from "../Utils/Type";
import { Symbol } from "./Symbol"
export class Environment {
    private ids: Map<string,Symbol> = new Map<string,Symbol>()
    constructor(private previous: Environment | null) {}
    public saveID(id: string,value: any,type: Type,line: number,column: number) {
        let env: Environment = this
        if(!env.ids.has(id.toLowerCase())) {
            env.ids.set(id.toLowerCase(),new Symbol(value,id,type,undefined))
        }
        else {
            printList.push('Error, La variable "' + id + '" ya existe en el entorno, linea ' + line + ' columna ' + column + '.')
        }
    }
    public saveArray(id: string,value: any,type: Type,line: number,column: number) {
        let env: Environment = this
        if(!env.ids.has(id.toLowerCase())) {
            env.ids.set(id.toLowerCase(),new Symbol(value,id,Type.ARRAY,type))
        }
        else {
            printList.push('Error, El vector "' + id + '" ya existe en el entorno, linea ' + line + ' columna ' + column + '.')
        }
    }
    public saveList(id: string,value: any,type: Type,line: number,column: number) {
        let env: Environment = this
        if(!env.ids.has(id.toLowerCase())) {
            env.ids.set(id.toLowerCase(),new Symbol(value,id,Type.LIST,type))
        }
        else {
            printList.push('Error, La lista "' + id + '" ya existe en el entorno, linea ' + line + ' columna ' + column + '.')
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
    public reasignID(id: string,value: Return): boolean {
        let env: Environment = this
        while(env) {
            if(env.ids.has(id.toLowerCase())) {
                let symbol: Symbol = env.ids.get(id.toLowerCase())!
                symbol.value = value.value
                env.ids.set(id.toLowerCase(),symbol)
                return true
            }
        }
        printList.push('Error, La variable "' + id + '" no ha sido declarada.')
        return false
    }
    public reasignArrayList(id: string,index: number,value: Primitive): boolean {
        let env: Environment = this
        while(env) {
            if(env.ids.has(id.toLowerCase())) {
                let symbol: Symbol = env.ids.get(id.toLowerCase())!
                symbol.value[index] = value
                env.ids.set(id.toLowerCase(),symbol)
                return true
            }
        }
        printList.push('Error, La variable "' + id + '" no ha sido declarada.')
        return false
    }
    public addList(id: string,value: Primitive): boolean {
        let env: Environment = this
        while(env) {
            if(env.ids.has(id.toLowerCase())) {
                let symbol: Symbol = env.ids.get(id.toLowerCase())!
                symbol.value.push(value)
                env.ids.set(id.toLowerCase(),symbol)
                return true
            }
        }
        printList.push('Error, La variable "' + id + '" no ha sido declarada.')
        return false
    }
}