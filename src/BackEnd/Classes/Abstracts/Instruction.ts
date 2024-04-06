import { Environment } from '../Env/Environment';
import { TypeInst } from '../Utils/Instructions';
export abstract class Instruction {
    constructor(public line: number,public column: number,public typeInst: TypeInst) {}
    public abstract execute(env: Environment): any;
}