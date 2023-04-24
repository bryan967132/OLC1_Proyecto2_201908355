import { Expression } from "../Abstracts/Expression";
import { Instruction } from "../Abstracts/Instruction";
import { Environment } from "../Env/Environment";
import { TypeInst } from "../Utils/Instructions";
import { ReturnType } from '../Utils/Type';
export class While extends Instruction {
    constructor(line: number,column: number,private condition: Expression,private block: Instruction) {
        super(line,column,TypeInst.LOOP_WHILE)
    }
    public execute(env: Environment) {
        let condition: ReturnType | null = this.condition.execute(env)
        while(condition.value) {
            let block: ReturnType = this.block.execute(env)
            if(block) {
                if(block.value === TypeInst.CONTINUE) {
                    condition = this.condition.execute(env)
                    continue
                }
                else if(block.value === TypeInst.BREAK) {
                    break
                }
                return block
            }
            condition = this.condition.execute(env)
        }
    }
}