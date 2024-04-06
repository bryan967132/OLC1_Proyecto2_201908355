import { Expression } from '../Abstracts/Expression';
import { Environment } from '../Env/Environment';
import { Symbol } from '../Env/Symbol';
import { TypeExp } from '../Utils/Expressions';
import { ReturnType, Type } from '../Utils/Type';
export class AccessArray extends Expression {
    constructor(line: number,column: number,private id: string,private index: Expression) {
        super(line,column,Type.NULL,TypeExp.ACCESS_ARRAY)
    }
    public execute(env: Environment): ReturnType {
        let index: ReturnType = this.index.execute(env)
        const value: Symbol | null = env.getValueArrayList(this.id,index.value)
        if(value) {
            this.type = value.type
            return {value: value.value,type: this.type}
        }
        return {value: 'NULL', type: Type.NULL}
    }
}