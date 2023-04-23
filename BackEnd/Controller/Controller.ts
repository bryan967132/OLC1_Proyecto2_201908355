import { Request, Response } from "express";
import { Node } from "../AST/Node";
import * as fs from 'fs'
import { Environment } from "../Classes/Env/Environment";
import { printList } from "../Classes/Utils/Reports";
import { Expression } from "../Classes/Abstracts/Expression";
import { Function } from "../Classes/Instructions/Function";
import { InitID } from '../Classes/Instructions/InitID';
import { MainMethod } from "../Classes/Instructions/MainMethod";
export class Controller {
    public runing(req: Request,res: Response) {
        res.send('Interpreter is running!!!')
    }
    public parser(req: Request,res: Response) {
        let code = req.body.code
        res.json({
            console: code
        })
    }
    public parser_path(req: Request,res: Response) {
        let path = req.body.path
        let parser = require('../Language/Parser')
        fs.readFile(path,(err,data) => {
            try {
                let code = data.toString()
                let ast = parser.parse(code)
                printList.splice(0,printList.length)
                console.log('════════════════════════════════════════════════════════')
                console.log(code)
                console.log('══ RESULT:')
                const global: Environment = new Environment(null)
                let mainExecute: MainMethod | null = null
                for(let instruction of ast) {
                    try {
                        if(instruction instanceof Function || instruction instanceof InitID) {
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
                console.log(printList.join('\n'))
                res.json({
                    code: code,
                    console: 'Finish Parser!!!'
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