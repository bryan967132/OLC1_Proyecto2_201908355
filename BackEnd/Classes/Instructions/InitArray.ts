import { Expression } from '../Abstracts/Expression';
import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
import { TypeInst } from '../Utils/Instructions';
import { ReturnType, Type } from '../Utils/Type';
export class InitArray extends Instruction {
    constructor(line: number,column: number,private id: string,private type: Type,private len: Expression,private values: any[]) {
        super(line,column,TypeInst.INIT_ARRAY)
    }
    public execute(env: Environment): any {
        if(this.values) {
            env.saveArray(this.id,this.values,this.type,this.line,this.column)
        }
        else {
            let len: ReturnType = this.len.execute(env)
            env.saveArray(this.id,new Array(len.value),this.type,this.line,this.column)
        }
    }
}