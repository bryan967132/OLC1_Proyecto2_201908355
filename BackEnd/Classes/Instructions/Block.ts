import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
import { Return } from '../Expressions/Return';
import { TypeInst } from '../Utils/Instructions';
export class Block extends Instruction {
    constructor(line: number,column: number,private instructions: Array<Instruction>) {
        super(line,column,TypeInst.BLOCK_INST)
    }
    public execute(env: Environment) {
        const newEnv: Environment = new Environment(env)
        for(const instruction of this.instructions) {
            try {
                const ret = instruction.execute(newEnv)
                if(instruction instanceof Return && ret) {
                    return ret
                }
            }
            catch (error) {
                //console.log(error)
                //console.log('Error en ejecución de instrucciones')
            }
        }
    }
}