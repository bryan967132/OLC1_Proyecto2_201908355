//código para ejecutar la entrada

var fs = require('fs')
var parser = require('../Language/Parser')
fs.readFile('../../../Inputs/Input.txt',(err,data) => {
    if(err) throw err
    let string = data.toString()
    console.log(string,'\n')
    parser.parse(string)
    console.log('FINISH PARSER')
})