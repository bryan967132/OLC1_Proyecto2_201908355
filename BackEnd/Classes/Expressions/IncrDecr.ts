import { Expression } from "../Abstracts/Expression";
import { Environment } from "../Env/Environment";
import { Symbol } from "../Env/Symbol";
import { TypeExp } from "../Utils/Expressions";
import { Return, Type } from "../Utils/Type";
export class IncrDecr extends Expression {
    constructor(line: number,column: number,private id: string,private sign: string) {
        super(line,column,Type.INT,sign == '++' ? TypeExp.INCR : TypeExp.DECR)
    }
    public execute(env: Environment): Return {
        let value: Symbol | null = env.getValue(this.id)
        if(!value) {
            return {value: 'NULL',type: Type.NULL}
        }
        switch(this.sign) {
            case '++':
                value.value ++
                env.reasignID(this.id,{value: value.value,type: Type.INT})
                value = env.getValue(this.id)
                return {value: value?.value,type: Type.INT}
            default:
                value.value --
                env.reasignID(this.id,{value: value.value,type: Type.INT})
                value = env.getValue(this.id)
                return {value: value?.value,type: Type.INT}
        }
    }
}