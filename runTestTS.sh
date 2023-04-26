clear
cd BackEnd/Language
jison Parser.jison
cd ../AST
jison Parser.jison
cd ../../
nodemon