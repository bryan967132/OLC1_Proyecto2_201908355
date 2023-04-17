import { Instruction } from '../Abstracts/Instruction';
import { Expression } from '../Abstracts/Expression';
import { TypeInst } from '../Spec/Instructions';
export class Print extends Instruction {
    constructor(line: number,column: number,private expression: Expression) {
        super(line,column,TypeInst.PRINT)
    }
    public execute() {
        const value = this.expression.execute()
        console.log('->',value.value)
    }
}