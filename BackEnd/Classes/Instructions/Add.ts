import { Expression } from "../Abstracts/Expression";
import { Instruction } from "../Abstracts/Instruction";
import { Environment } from "../Env/Environment";
import { TypeInst } from "../Utils/Instructions";
import { Return } from "../Utils/Type";
import { Primitive } from '../Expressions/Primitive';
export class Add extends Instruction {
    constructor(line: number,column: number,private id: string,private value: Expression) {
        super(line,column,TypeInst.ADD_LIST)
    }
    public execute(env: Environment) {
        let value: Return = this.value.execute(env)
        let primitive: Primitive = new Primitive(this.line,this.column,value.value,value.type)
        env.addList(this.id,primitive)
    }
}