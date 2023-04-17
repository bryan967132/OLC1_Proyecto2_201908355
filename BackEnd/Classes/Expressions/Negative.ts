import { Expression } from "../Abstracts/Expression";
import { Return, Type } from "../Abstracts/Type";
export class Negative extends Expression {
    constructor(line: number,column: number,public exp: Expression) {
        super(line,column,Type.NULL)
    }
    public execute(): Return {
        let value: Return = this.exp.execute()
        this.type = value.type
        if(this.type === Type.INT || this.type === Type.DOUBLE) {
            return {value: -value.value,type: this.type}
        }
        return {value: 'NULL',type: Type.NULL}
    }
}