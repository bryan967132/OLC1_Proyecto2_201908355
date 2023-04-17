import { Instruction } from '../Abstracts/Instruction';
import { Expression } from '../Abstracts/Expression';
export class Print extends Instruction {
    constructor(line: number,column: number,private expression: Expression) {
        super(line,column)
    }
    public execute() {
        const value = this.expression.execute()
        console.log('->',value.value)
    }
}