import { Expression } from "../Abstracts/Expression";
import { Instruction } from "../Abstracts/Instruction";
import { Environment } from "../Env/Environment";
import { TypeInst } from "../Utils/Instructions";
import { Return } from "../Utils/Type";
import { Primitive } from '../Expressions/Primitive';
export class AsignList extends Instruction {
    constructor(line: number,column: number,private id: string,private index: Expression,private value: Expression) {
        super(line,column,TypeInst.ASIGN_LIST)
    }
    public execute(env: Environment) {
        let index: Return = this.index.execute(env)
        let value: Return = this.value.execute(env)
        let primitive: Primitive = new Primitive(this.line,this.column,value.value,value.type)
        env.reasignArrayList(this.id,index.value,primitive)
    }
}