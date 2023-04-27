import { Request, Response } from "express";
import { Node } from "../AST/Node";
import * as fs from 'fs'
import { Environment } from "../Classes/Env/Environment";
import { printErrors, printList, printConsole } from "../Classes/Utils/Reports";
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
            let ast = parser.parse(code)
            printList.splice(0,printList.length)
            printConsole.splice(0,printConsole.length)
            const global: Environment = new Environment(null)
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
                catch (error) {
                    
                }
            }
            if(mainExecute) {
                mainExecute.execute(global)
            }
            console.log(printErrors.map((errObj) => errObj.toString()).join('\n'))
            res.json({
                console: printConsole,
                errors: printErrors
            })
        }
        catch (error) {
            console.log(error)
            res.json({
                console: error
            })
        }
    }
    public parser_path(req: Request,res: Response) {
        let path = req.body.path
        let parser = require('../Language/Parser')
        fs.readFile(path,(err,data) => {
            try {
                let code = data.toString()
                let ast = parser.parse(code)
                printList.splice(0,printList.length)
                printConsole.splice(0,printConsole.length)
                console.log('════════════════════════════════════════════════════════')
                console.log(code)
                console.log('══ RESULT:')
                const global: Environment = new Environment(null)
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
                    catch (error) {
                        
                    }
                }
                if(mainExecute) {
                    mainExecute.execute(global)
                }
                res.json({
                    console: printConsole,
                    errors: printErrors
                })
            }
            catch (error) {
                console.log(error)
                res.json({
                    console: error
                })
            }
        })
    }
    public parserAST(req: Request,res: Response) {
        let code = req.body.code
        let parser = require('../AST/Parser')
        try {
            let ast: Node = parser.parse(code)
            res.json({
                console: ast.getDot(),
                errors: printErrors
            })
        }
        catch (error) {
            console.log(error)
            res.json({
                console: error
            })
        }
    }
    public parserAST_path(req: Request,res: Response) {
        let path = req.body.path
        let parser = require('../AST/Parser')
        fs.readFile(path,(err,data) => {
            try {
                let code = data.toString()
                let ast: Node = parser.parse(code)
                let dot = ast.getDot()
                fs.writeFile('./AST.dot',dot,(err) => {try {} catch(error) {}})
                res.json({
                    console: ast.getDot(),
                    errors: printErrors
                })
            }
            catch (error) {
                console.log(error)
                res.json({
                    console: error
                })
            }
        })
    }
}