import { printList } from "../Utils/Reports";
import { Return, Type } from "../Utils/Type";
import { Symbol } from "./Symbol"
export class Environment {
    private ids: Map<string,Symbol> = new Map<string,Symbol>()
    constructor(private previous: Environment | null) {}
    public saveID(id: string,value: any,type: Type,line: number,column: number) {
        let env: Environment = this
        if(!env.ids.has(id.toLowerCase())) {
            env.ids.set(id.toLowerCase(),new Symbol(value,id,type))
        }
        else {
            printList.push('Error, La variable "' + id + '" ya existe en el entorno, linea ' + line + ' columna ' + column)
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
}