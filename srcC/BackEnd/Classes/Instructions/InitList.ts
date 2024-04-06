import { Expression } from '../Abstracts/Expression';
import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
import { TypeInst } from '../Utils/Instructions';
import { ReturnType, Type } from '../Utils/Type';
export class InitList extends Instruction {
    constructor(line: number,column: number,private id: string,private type: Type,private value: Expression) {
        super(line,column,TypeInst.INIT_LIST)
    }
    public execute(env: Environment): any {
        if(this.value) {
            let value: ReturnType = this.value.execute(env)
            env.saveList(this.id,value.value,this.type,this.line,this.column)
        }
        else {
            env.saveList(this.id,[],this.type,this.line,this.column)
        }
    }
}