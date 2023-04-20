import { Return, Type } from '../Utils/Type';
import { TypeExp } from '../Utils/Expressions';
import { Environment } from '../Env/Environment';
export abstract class Expression {
    constructor(public line: number,public column: number,public type: Type,public typeExp: TypeExp) {}
    public abstract execute(env: Environment): Return;
}