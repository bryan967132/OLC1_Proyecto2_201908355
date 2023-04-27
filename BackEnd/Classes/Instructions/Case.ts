import { Expression } from "../Abstracts/Expression";
import { Instruction } from "../Abstracts/Instruction";
import { Environment } from "../Env/Environment";
import { TypeInst } from "../Utils/Instructions";
import { ReturnType } from "../Utils/Type";
import { Block } from './Block';
export class Case extends Instruction {
    private caseEvaluate: ReturnType | any
    constructor(line: number,column: number,private case_: Expression,private block: Instruction) {
        super(line,column,TypeInst.CASE)
    }
    public setCase(caseEvaluate: ReturnType) {
        this.caseEvaluate = caseEvaluate
    }
    public execute(env: Environment): ReturnType | any {
        const envCase: Environment = new Environment(env,`${env.name} case`)
        let caseE: ReturnType = this.caseEvaluate
        let case_: ReturnType = this.case_.execute(envCase)
        envCase.name = `${envCase.name} ${case_.value}`
        if(case_.value === caseE.value) {
            let block: ReturnType = this.block.execute(envCase)
            if(block) {
                return block
            }
        }
    }
}