import { Expression } from "../Abstracts/Expression";
import { Instruction } from "../Abstracts/Instruction";
import { Environment } from "../Env/Environment";
import { TypeInst } from "../Utils/Instructions";
import { Type } from "../Utils/Type";
export class Function extends Instruction {
    constructor(line: number,column: number,private id: string,public parameters: Array<Expression>,public block: Instruction,public type: Type) {
        super(line,column,TypeInst.INIT_FUNCTION)
    }
    public execute(env: Environment) {
        env.saveFunction(this.id,this)
    }
}