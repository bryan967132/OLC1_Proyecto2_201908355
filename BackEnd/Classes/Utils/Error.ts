export class Error {
    public n: number = 0
    constructor(public line: number,public column: number,public type: TypeError,public description: string) {}
    public toString(): string {
        return `(${this.line}, ${this.column}) ERROR ${this.type}, ${this.description}`
    }
    public getDot(): string {
        return `<tr><td bgcolor="white">${this.n}</td><td bgcolor="white">${this.type}</td><td bgcolor="white">${this.description}</td><td bgcolor="white">${this.line}</td><td bgcolor="white">${this.column}</td></tr>`
    }
}
export enum TypeError {
    LEXICAL = "LEXICO",
    SYNTAX  = "SINTACTICO"
}