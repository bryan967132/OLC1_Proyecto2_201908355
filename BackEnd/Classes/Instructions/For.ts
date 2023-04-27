import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
import { TypeInst } from '../Utils/Instructions';
import { ReturnType } from '../Utils/Type';
export class For extends Instruction {
    constructor(line: number,column: number,private args: Array<Instruction>,private block: Instruction) {
        super(line,column,TypeInst.LOOP_FOR)
    }
    public execute(env: Environment) {
        const envFor: Environment = new Environment(env,`${env.name} for`)
        this.args[0].execute(envFor)
        let condition: ReturnType = this.args[1].execute(envFor)
        while(condition.value) {
            let block: ReturnType = this.block.execute(envFor)
            if(block) {
                if(block.value === TypeInst.CONTINUE) {
                    this.args[2].execute(envFor)
                    condition = this.args[1].execute(envFor)
                    continue
                }
                else if(block.value === TypeInst.BREAK) {
                    break
                }
                return block
            }
            this.args[2].execute(envFor)
            condition = this.args[1].execute(envFor)
        }
    }
}