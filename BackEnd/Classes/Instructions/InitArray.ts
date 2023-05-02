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
            for(let i = 0; i < this.values.length; i ++) {
                this.values[i] = this.values[i].execute(env)
            }
            env.saveArray(this.id,this.values,this.type,this.line,this.column)
        }
        else {
            let len: ReturnType = this.len.execute(env)
            env.saveArray(this.id,this.getArrayL(len.value,this.type),this.type,this.line,this.column)
        }
    }
    getArrayL(length: number,type: Type): Array<any> {
        let l = new Array(length)
        for(let i = 0; i < l.length; i ++) {
            l[i] = this.getValueDefault(type)
        }
        return l
    }
    getValueDefault(type: Type) {
        switch(this.type) {
            case Type.INT:
                return {value:0,type: type}
            case Type.DOUBLE:
                return {value:0.0,type: type}
            case Type.BOOLEAN:
                return {value:true,type: type}
            case Type.CHAR:
                return {value:'0',type: type}
            case Type.STRING:
                return {value:"",type: type}
        }
    }
}