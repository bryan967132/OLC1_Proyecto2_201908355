import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
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
                if(ret) {
                    return ret
                }
            }
            catch (error) {
                console.log('Error en ejecución de instrucciones')
            }
        }
    }
}