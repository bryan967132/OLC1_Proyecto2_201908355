clear
cd src/BackEnd/Language
jison Parser.jison
cd ../AST
jison Parser.jison
cd ../../
nodemon