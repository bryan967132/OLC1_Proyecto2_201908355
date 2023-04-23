import { Expression } from "../Abstracts/Expression";
import { Environment } from "../Env/Environment";
import { TypeExp } from "../Utils/Expressions";
import { Return, Type } from "../Utils/Type";
export class Parameter extends Expression {
    constructor(line: number,column: number,private id:string,type: Type) {
        super(line,column,type,TypeExp.PARAMETER)
    }
    public execute(env: Environment): Return {
        return {value: this.id,type: this.type}
    }
}