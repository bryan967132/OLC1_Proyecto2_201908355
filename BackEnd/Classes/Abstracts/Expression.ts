import { Return, Type } from '../Spec/Type';
import { TypeExp } from '../Spec/Expressions';
export abstract class Expression {
    constructor(public line: number,public column: number,public type: Type,public typeExp: TypeExp) {}
    public abstract execute(): Return;
}