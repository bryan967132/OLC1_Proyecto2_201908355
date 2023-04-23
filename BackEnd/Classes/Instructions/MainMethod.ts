import { Expression } from "../Abstracts/Expression";
import { Instruction } from "../Abstracts/Instruction";
import { Environment } from "../Env/Environment";
import { TypeInst } from "../Utils/Instructions";
export class MainMethod extends Instruction {
    constructor(line: number,column: number,private callFunc: Expression) {
        super(line,column,TypeInst.MAIN)
    }
    public execute(env: Environment) {
        this.callFunc.execute(env)
    }
}