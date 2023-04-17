import { TypeInst } from '../Spec/Instructions';
export abstract class Instruction {
    constructor(public line: number,public column: number,public typeInst: TypeInst) {}
    public abstract execute(): any;
}