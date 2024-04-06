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
                content += (content != '' ? ', ' : '') + this.getQuote(value.value[i].type) + this.getCharacter(value.value[i]) + this.getQuote(value.value[i].type)
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
    getCharacter(element: ReturnType) {
        if(element.type === Type.CHAR) {
            element.value = element.value.replace(/\\/g,'\\\\')
            element.value = element.value.replace(/\t/g,'    ')
            element.value = element.value.replace(/\r?\n|\r/g,'\\n')
            element.value = element.value.replace(/"/g,'\\"')
        }
        return element.value
    }
}