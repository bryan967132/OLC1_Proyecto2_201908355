import { Expression } from "../Abstracts/Expression";
import { Instruction } from "../Abstracts/Instruction";
import { Environment } from "../Env/Environment";
import { TypeExp } from "../Utils/Expressions";
import { TypeInst } from "../Utils/Instructions";
import { ReturnType } from "../Utils/Type";
import { Case } from "./Case";
export class Switch extends Instruction {
    constructor(line: number,column: number,private arg: Expression,private cases: Array<Case>,private default_: Instruction) {
        super(line,column,TypeInst.SWITCH)
    }
    public execute(env: Environment) {
        const envSwitch: Environment = new Environment(env,'switch')
        if(this.cases) {
            let case_: Case
            let arg: ReturnType = this.arg.execute(env)
            for(case_ of this.cases) {
                case_.setCase(arg)
                let case_exe: ReturnType = case_.execute(envSwitch)
                if(case_exe) {
                    if(case_exe.value === TypeExp.RETURN) {
                        return
                    }
                    else if(case_exe.value === TypeInst.BREAK) {
                        return
                    }
                    return case_exe
                }
            }
        }
        if(this.default_) {
            let default_: ReturnType = this.default_.execute(envSwitch)
            if(default_) {
                if(default_.value === TypeExp.RETURN) {
                    return
                }
                else if(default_.value === TypeInst.BREAK) {
                    return
                }
                return default_
            }
        }
    }
}