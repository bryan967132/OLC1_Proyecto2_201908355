import { Expression } from '../Abstracts/Expression';
import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
import { TypeInst } from '../Utils/Instructions';
import { ReturnType } from '../Utils/Type';
export class If extends Instruction {
    constructor(line: number,column: number,private condition: Expression,private block: Instruction,private except: Instruction) {
        super(line,column,TypeInst.IF)
    }
    public execute(env: Environment) {
        let condition: ReturnType = this.condition.execute(env)
        if(condition.value) {
            let block: ReturnType = this.block.execute(env)
            if(block) {
                return block
            }
            return
        }
        if(this.except) {
            let except: ReturnType = this.except.execute(env)
            if(except) {
                return except
            }
        }
    }
}