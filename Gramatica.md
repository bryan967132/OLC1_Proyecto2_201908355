```java
%left '?' ':'
%left '||'
%left '&&'
%right '!'
%left '==' '!='
%left '<' '<=' '>' '>='
%left '+' '-'
%left '*' '/' '%'
%nonassoc '^'
%right uminus
%left '++' '--'
%left '.' '[' ']'

INIT: INSTRUCTIONS EOF ;

INSTRUCTIONS:
    INSTRUCTIONS INSTRUCTION |
    INSTRUCTION              

INSTRUCTION:
    MAIN_METHOD          |
    INIT_ID ';'          |
    ID_ASIGN ';'         |
    NEW_ARRAY ';'        |
    ARRAY_ASIGN ';'      |
    IF_STRCT             |
    SWITCH_STRCT         |
    LOOP                 |
    FUNCTION             |
    CALLED_FUNCTION ';'  |
    NATIVES_FUNCTION ';' |
    INCR_DECR ';'        |
    'break' ';'          |
    'continue' ';'       |
    'return' ';'         |
    'return' EXP ';'     |
    error                

MAIN_METHOD:
    main CALLED_FUNCTION ';' 

INIT_ID:
    TYPE TOK_id '=' EXP |
    TYPE TOK_id         

ID_ASIGN:
    TOK_id '=' EXP

NEW_ARRAY:
    TYPE '[' ']' TOK_id '=' ARRAY_VALUE       |
    'list' '<' TYPE '>' TOK_id '=' LIST_VALUE 

ARRAY_VALUE:
    'new' TYPE '[' EXP ']' |
    '{' VALUE_LIST '}'     |
    '{' '}'

LIST_VALUE:
    'new' 'list' '<' TYPE '>'   |
    'toCharArray' '(' EXP ')' 

ARRAY_ASIGN:
    TOK_id '[' EXP ']' '=' EXP         |
    TOK_id '.' add '(' EXP ')'         |
    TOK_id '[' '[' EXP ']' ']' '=' EXP 

VALUE_LIST:
    VALUE_LIST ',' EXP |
    EXP                

IF_STRCT:
    'if' '(' EXP ')' BLOCK                 |
    'if' '(' EXP ')' BLOCK 'else' BLOCK    |
    'if' '(' EXP ')' BLOCK 'else' IF_STRCT 

SWITCH_STRCT:
    'switch' '(' EXP ')' '{' CASE_BLOCK '}' 

CASE_BLOCK:
    CASE_LIST DEFAULT |
    CASE_LIST         |
    DEFAULT           

CASE_LIST:
    CASE_LIST CASE |
    CASE           

CASE:
    'case' EXP ':' INSTRUCTIONS |
    'case' EXP ':'              

DEFAULT:
    'default' ':' INSTRUCTIONS |
    'default' ':'              

LOOP:
    'while' '(' EXP ')' BLOCK          |
    'do' BLOCK 'while' '(' EXP ')' ';' |
    'for' '(' FOR_ARGS ')' BLOCK     

FOR_ARGS:
    ID_ASIGN_FOR ';' EXP ';' UPDATE 

ID_ASIGN_FOR:
    TYPE TOK_id '=' EXP |
    ID_ASIGN            

UPDATE:
    INCR_DECR |
    ID_ASIGN  

FUNCTION:
    TYPE   TOK_id '(' PARAMETERS ')' BLOCK |
    'void' TOK_id '(' PARAMETERS ')' BLOCK |
    TYPE   TOK_id '(' ')' BLOCK            |
    'void' TOK_id '(' ')' BLOCK            

PARAMETERS:
    PARAMETERS ',' PARAMETER |
    PARAMETER                      

PARAMETER:
    TYPE TOK_id 

BLOCK:
    '{' INSTRUCTIONS '}' |
    '{' '}'              

CALLED_FUNCTION:
    TOK_id '(' LIST_ARGS ')' |
    TOK_id '(' ')'           

LIST_ARGS:
    LIST_ARGS ',' EXP |
    EXP                     

NATIVES_FUNCTION:
    'print' '(' EXP ')'    |
    'print' '(' ')'        |
    NATIVES_FUNCTION_EXP

NATIVES_FUNCTION_EXP:
    'toLower'     '(' EXP ')' |
    'toUpper'     '(' EXP ')' |
    'length'      '(' EXP ')' |
    'truncate'    '(' EXP ')' |
    'round'       '(' EXP ')' |
    'typeOf'      '(' EXP ')' |
    'toString'    '(' EXP ')' |
    'toCharArray' '(' EXP ')' 

EXP:
    EXP '+' EXP                |
    EXP '-' EXP                |
    EXP '*' EXP                |
    EXP '/' EXP                |
    EXP '^' EXP                |
    EXP '%' EXP                |
    '-' EXP %prec uminus       |
    '(' EXP ')'                |
    EXP '==' EXP               |
    EXP '!=' EXP               |
    EXP '<'  EXP               |
    EXP '>'  EXP               |
    EXP '<=' EXP               |
    EXP '>=' EXP               |
    EXP '||' EXP               |
    EXP '&&' EXP               |
    '!' EXP                    |
    '(' TYPE ')' EXP           |
    EXP '?' EXP ':' EXP        |
    TOK_id '[' EXP ']'         |
    TOK_id '[' '[' EXP ']' ']' |
    CALLED_FUNCTION            |
    NATIVES_FUNCTION_EXP       |
    INCR_DECR                  |
    TOK_id                     |
    TOK_integer                |
    TOK_double                 |
    TOK_string                 |
    TOK_char                   |
    'true'                     |
    'false'                      

INCR_DECR:
    TOK_id '++' |
    TOK_id '--' 

TYPE:
    'int'     |
    'double'  |
    'boolean' |
    'char'    |
    'String'   
```