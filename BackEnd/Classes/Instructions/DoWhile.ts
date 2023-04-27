import { Expression } from "../Abstracts/Expression";
import { Instruction } from "../Abstracts/Instruction";
import { Environment } from "../Env/Environment";
import { TypeInst } from "../Utils/Instructions";
import { ReturnType } from '../Utils/Type';
export class DoWhile extends Instruction {
    constructor(line: number,column: number,private condition: Expression,private block: Instruction) {
        super(line,column,TypeInst.LOOP_DOWHILE)
    }
    public execute(env: Environment) {
        let condition: ReturnType | null = null
        const doWhileEnv: Environment = new Environment(env,`${env.name} do while`)
        do {
            let block: ReturnType = this.block.execute(doWhileEnv)
            if(block) {
                if(block.value === TypeInst.CONTINUE) {
                    condition = this.condition.execute(doWhileEnv)
                    continue
                }
                else if(block.value === TypeInst.BREAK) {
                    break
                }
                return block
            }
            condition = this.condition.execute(doWhileEnv)
        } while(condition.value)
    }
}