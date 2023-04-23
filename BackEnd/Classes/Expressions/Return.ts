import { Expression } from '../Abstracts/Expression';
import { Environment } from '../Env/Environment';
import { TypeExp } from '../Utils/Expressions';
import { ReturnType, Type } from '../Utils/Type';
export class Return extends Expression {
    constructor(line: number,column: number,private exp: Expression) {
        super(line,column,Type.NULL,TypeExp.RETURN)
    }
    public execute(env: Environment): ReturnType {
        let value: ReturnType = this.exp.execute(env)
        this.type = value.type
        return {value: value.value,type: this.type}
    }
}