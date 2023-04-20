import { Expression } from '../Abstracts/Expression';
import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
import { TypeInst } from '../Utils/Instructions';
import { Return } from '../Utils/Type';
export class AsignID extends Instruction {
    constructor(line: number,column: number,private id: string,private value: Expression) {
        super(line,column,TypeInst.ASIGN_ID)
    }
    public execute(env: Environment): any {
        const value: Return = this.value.execute(env)
        env.reasignID(this.id,value)
    }
}