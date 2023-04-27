export class Error {
    constructor(public line: number,public column: number,public type: TypeError,public description: string) {}
    public toString(): string {
        return `ERROR ${this.type}, ${this.description}`
    }
}
export enum TypeError {
    LEXICAL = "LEXICO",
    SYNTAX  = "SINTACTICO"
}