import { Expression } from '../Abstracts/Expression';
import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
import { TypeInst } from '../Utils/Instructions';
import { ReturnType } from '../Utils/Type';
export class Else extends Instruction {
    constructor(line: number,column: number,private block: Instruction) {
        super(line,column,TypeInst.ELSE)
    }
    public execute(env: Environment) {
        let envIf: Environment = new Environment(env)
        let block: ReturnType = this.block.execute(envIf)
        if(block) {
            return block
        }
    }
}