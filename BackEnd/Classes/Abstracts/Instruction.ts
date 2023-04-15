export abstract class Instruction {
    constructor(public line: number,public column: number) {}
    public abstract execute(): any;
}