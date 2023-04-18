import { Expression } from "../Abstracts/Expression";
import { TypeExp } from "../Spec/Expressions";
import { Return, Type } from "../Spec/Type";
export class Ternary extends Expression {
    constructor(line: number,column: number,public condition: Expression,public yes: Expression,public no: Expression) {
        super(line,column,Type.NULL,TypeExp.TERNARY_OP)
    }
    public execute(): Return {
        let condition = this.condition.execute()
        if(condition.value) {
            let yes = this.yes.execute()
            this.type = yes.type
            return {value: yes.value,type: this.type}
        }
        let no = this.no.execute()
        this.type = no.type
        return {value: no.value,type: this.type}
    }
}