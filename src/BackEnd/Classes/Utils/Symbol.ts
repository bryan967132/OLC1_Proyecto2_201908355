export class Symbol {
    public n: number = 0
    constructor(public line: number,public column: number,public id: string,public typeId: string,public type: string,public env: string) {}
    public toString(): string {
        return `Identificador: ${this.id}, Tipo ID: ${this.typeId}, Tipo: ${this.type}, Entorno: ${this.env}. ${this.line}:${this.column}`
    }
    public getDot(): string {
        return `<tr><td bgcolor="white">${this.n}</td><td bgcolor="white">${this.id}</td><td bgcolor="white">${this.typeId}</td><td bgcolor="white">${this.type}</td><td bgcolor="white">${this.env}</td><td bgcolor="white">${this.line}</td><td bgcolor="white">${this.column}</td></tr>`
    }
}