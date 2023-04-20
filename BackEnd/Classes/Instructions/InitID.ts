import { Expression } from '../Abstracts/Expression';
import { Instruction } from '../Abstracts/Instruction';
import { Environment } from '../Env/Environment';
import { TypeInst } from '../Utils/Instructions';
import { Return, Type } from '../Utils/Type';
export class InitID extends Instruction {
    constructor(line: number,column: number,private id: string,private type: Type,private value: Expression) {
        super(line,column,TypeInst.INIT_ID)
    }
    public execute(env: Environment): any {
        if(this.value) {
            const value: Return = this.value.execute(env)
            env.saveID(this.id,value.value,this.type,this.line,this.column)
        }
        else {
            switch(this.type) {
                case Type.INT:
                    env.saveID(this.id,0,this.type,this.line,this.column)
                    break
                case Type.DOUBLE:
                    env.saveID(this.id,0.0,this.type,this.line,this.column)
                    break
                case Type.BOOLEAN:
                    env.saveID(this.id,true,this.type,this.line,this.column)
                    break
                case Type.CHAR:
                    env.saveID(this.id,'0',this.type,this.line,this.column)
                    break
                case Type.STRING:
                    env.saveID(this.id,"",this.type,this.line,this.column)
                    break
            }
        }
    }
}