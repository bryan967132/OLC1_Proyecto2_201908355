import { Instruction } from '../Abstracts/Instruction';
import { Expression } from '../Abstracts/Expression';
import { TypeInst } from '../Utils/Instructions';
import { Environment } from '../Env/Environment';
import { printConsole } from '../Utils/Reports';
import { ReturnType, Type } from '../Utils/Type';
export class Print extends Instruction {
    constructor(line: number,column: number,private expression: Expression) {
        super(line,column,TypeInst.PRINT)
    }
    public execute(env: Environment) {
        let value = this.expression ? this.expression.execute(env) : null
        if(value) {
            value = this.getArray(value)
        }
        printConsole.push(value ? value.value : '')
    }
    getArray(value: ReturnType) {
        if((typeof value.value) === 'object') {
            let content: string = ''
            for(let i = 0; i < value.value.length; i ++) {
                content += (content != '' ? ', ' : '') + this.getQuote(value.value[i].type) + String(value.value[i].value) + this.getQuote(value.value[i].type)
            }
            return {value: `[${content}]`,type: Type.STRING}
        }
        return value
    }
    getQuote(type: Type) {
        if(type === Type.STRING) {
            return '"'
        }
        if(type === Type.CHAR) {
            return "'"
        }
        return ''
    }
}