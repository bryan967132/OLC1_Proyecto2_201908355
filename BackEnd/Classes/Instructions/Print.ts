import { Instruction } from '../Abstracts/Instruction';
import { Expression } from '../Abstracts/Expression';
import { TypeInst } from '../Utils/Instructions';
import { Environment } from '../Env/Environment';
import { printConsole } from '../Utils/Reports';
export class Print extends Instruction {
    constructor(line: number,column: number,private expression: Expression) {
        super(line,column,TypeInst.PRINT)
    }
    public execute(env: Environment) {
        const value = this.expression ? this.expression.execute(env) : null
        printConsole.push(value ? value.value : '')
    }
}