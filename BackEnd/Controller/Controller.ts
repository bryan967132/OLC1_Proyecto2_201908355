import { Request, Response } from "express";
import { Node } from "../AST/Node";
import { Environment } from "../Classes/Env/Environment";
import { printErrors, printList, printConsole, symbolTable } from "../Classes/Utils/Reports";
import { Function } from "../Classes/Instructions/Function";
import { InitID } from '../Classes/Instructions/InitID';
import { MainMethod } from "../Classes/Instructions/MainMethod";
import { InitArray } from '../Classes/Instructions/InitArray';
import { InitList } from '../Classes/Instructions/InitList';
export class Controller {
    public runing(req: Request,res: Response) {
        res.send('Interpreter is running!!!')
    }
    public parser(req: Request,res: Response) {
        let code = req.body.code
        let parser = require('../Language/Parser')
        try {
            printList.splice(0,printList.length)
            printConsole.splice(0,printConsole.length)
            printErrors.splice()
            symbolTable.splice()
            let ast = parser.parse(code)
            const global: Environment = new Environment(null,'Global')
            let mainExecute: MainMethod | null = null
            for(let instruction of ast) {
                try {
                    if(instruction instanceof Function || instruction instanceof InitID || instruction instanceof InitArray || instruction instanceof InitList) {
                        instruction.execute(global)
                    }
                    else if(instruction instanceof MainMethod) {
                        mainExecute = instruction
                    }
                }
                catch (error) {}
            }
            if(mainExecute) {
                mainExecute.execute(global)
            }
            if(printErrors.length() > 0) {
                printConsole.push('Errores Encontrados.')
            }
            res.json({
                console: printConsole
            })
        }
        catch (error) {
            res.json({
                console: error
            })
        }
    }
    public getAST(req: Request,res: Response) {
        let code = req.body.code
        let parser = require('../AST/Parser')
        try {
            let ast: Node = parser.parse(code)
            res.json({
                ast: ast.getDot()
            })
        }
        catch (error) {
            res.json({
                ast: error
            })
        }
    }
    public getSymbolsTable(req: Request,res: Response) {
        try {
            res.json({
                table: symbolTable.getDot()
            })
        }
        catch (error) {
            res.json({
                table: error
            })
        }
    }
    public getErrors(req: Request,res: Response) {
        try {
            res.json({
                errors: printErrors.getDot()
            })
        }
        catch (error) {
            res.json({
                errors: error
            })
        }
    }
}