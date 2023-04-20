import { Expression } from "../Abstracts/Expression";
import { Environment } from "../Env/Environment";
import { TypeExp } from "../Utils/Expressions";
import { Return, Type } from "../Utils/Type";
export class Ternary extends Expression {
    constructor(line: number,column: number,public condition: Expression,public yes: Expression,public no: Expression) {
        super(line,column,Type.NULL,TypeExp.TERNARY_OP)
    }
    public execute(env: Environment): Return {
        let condition = this.condition.execute(env)
        if(condition.value) {
            let yes = this.yes.execute(env)
            this.type = yes.type
            return {value: yes.value,type: this.type}
        }
        let no = this.no.execute(env)
        this.type = no.type
        return {value: no.value,type: this.type}
    }
}