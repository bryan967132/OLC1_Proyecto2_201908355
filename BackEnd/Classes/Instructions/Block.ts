import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
import { IncrDecr } from '../Expressions/IncrDecr';
import { TypeInst } from '../Utils/Instructions';
export class Block extends Instruction {
    constructor(line: number,column: number,private instructions: Array<Instruction>) {
        super(line,column,TypeInst.BLOCK_INST)
    }
    public execute(env: Environment): any {
        const newEnv: Environment = new Environment(env,env.name)
        for(const instruction of this.instructions) {
            try {
                const ret = instruction.execute(newEnv)
                if(ret && !(instruction instanceof IncrDecr)) {
                    return ret
                }
            }
            catch (error) {
                console.log(error)
            }
        }
    }
}