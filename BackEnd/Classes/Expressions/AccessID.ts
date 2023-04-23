import { Expression } from "../Abstracts/Expression";
import { Environment } from "../Env/Environment";
import { Symbol } from "../Env/Symbol";
import { TypeExp } from "../Utils/Expressions";
import { ReturnType, Type } from "../Utils/Type";
export class AccessID extends Expression {
    constructor(line: number,column: number,private id: string) {
        super(line,column,Type.NULL,TypeExp.ACCESS_ID)
    }
    public execute(env: Environment): ReturnType {
        const value: Symbol | null = env.getValue(this.id)
        if(value) {
            this.type = value.type
            return {value: value.value,type: this.type}
        }
        return {value: 'NULL', type: Type.NULL}
    }
}