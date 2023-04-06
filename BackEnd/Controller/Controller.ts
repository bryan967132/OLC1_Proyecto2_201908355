import { Request, Response } from "express";
import { Node } from "../AST/Node";
import * as fs from 'fs'
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
                /*let ast:Node = */parser.parse(code)
                //console.log(ast.getDot())
                console.log('════════════════════════════════════════════════════════')
                console.log(code)
                res.json({
                    code: code,
                    console: 'Finish Parser!!!'
                })
            }
            catch (error) {
                res.json({
                    console: error
                })
            }
        })
    }
}