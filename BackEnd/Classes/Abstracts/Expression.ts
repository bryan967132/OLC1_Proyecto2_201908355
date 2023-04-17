import { Return, Type } from './Type';
export abstract class Expression {
    constructor(public line: number,public column: number,public type: Type) {}
    public abstract execute(): Return;
}