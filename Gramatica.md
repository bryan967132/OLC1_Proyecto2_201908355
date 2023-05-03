## Expresiones Regulares
| Expresión Regular | Nombre del Token | | Expresión Regular | Nombre del Token |
| - | - | - | - | - |
| ```\s+```                    |                      |  |  ```[ \n\r]```                             |         |
| ```\/\/.*```                 |                      |  |  ```[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]``` |         |
| ```int```                    | ```RW_int```         |  |  ```double```                 | ```RW_double```      |
| ```boolean```                | ```RW_boolean```     |  |  ```char```                   | ```RW_char```        |
| ```string```                 | ```RW_string```      |  |  ```true```                   | ```RW_true```        |
| ```false```                  | ```RW_false```       |  |  ```new```                    | ```RW_new```         |
| ```list```                   | ```RW_list```        |  |  ```if```                     | ```RW_if```          |
| ```else```                   | ```RW_else```        |  |  ```switch```                 | ```RW_switch```      |
| ```case```                   | ```RW_case```        |  |  ```while```                  | ```RW_while```       |
| ```for```                    | ```RW_for```         |  |  ```do```                     | ```RW_do```          |
| ```break```                  | ```RW_break```       |  |  ```continue```               | ```RW_continue```    |
| ```default```                | ```RW_default```     |  |  ```return```                 | ```RW_return```      |
| ```void```                   | ```RW_void```        |  |  ```main```                   | ```RW_main```        |
| ```add```                    | ```FN_add```         |  |  ```toLower```                | ```FN_toLower```     |
| ```toUpper```                | ```FN_toUpper```     |  |  ```length```                 | ```FN_length```      |
| ```truncate```               | ```FN_truncate```    |  |  ```round```                  | ```FN_round```       |
| ```typeOf```                 | ```FN_typeOf```      |  |  ```toString```               | ```FN_toString```    |
| ```toCharArray```            | ```FN_toCharArray``` |  |  ```print```                  | ```FN_print```       |
| ```\"([^\n\"\\]?\|\\.)*\"``` | ```TOK_string```     |  |  ```\'([^\n\"\\]?\|\\.)\'```  | ```TOK_char```       |
| ```[a-zA-Z_][a-zA-Z0-9_]*``` | ```TOK_id```         |  |  ```[0-9]+\.[0-9]+\b```       | ```TOK_double```     |
| ```[0-9]+\b```               | ```TOK_integer```    |  |  ```++```                     | ```TOK_incr```       |
| ```--```                     | ```TOK_decr```       |  |  ```+```                      | ```TOK_plus```       |
| ```-```                      | ```TOK_minus```      |  |  ```*```                      | ```TOK_mult```       |
| ```/```                      | ```TOK_div```        |  |  ```^```                      | ```TOK_pow```        |
| ```%```                      | ```TOK_mod```        |  |  ```(```                      | ```TOK_lpar```       |
| ```)```                      | ```TOK_rpar```       |  |  ```[```                      | ```TOK_lbrckt```     |
| ```]```                      | ```TOK_rbrckt```     |  |  ```{```                      | ```TOK_lbrc```       |
| ```}```                      | ```TOK_rbrc```       |  |  ```==```                     | ```TOK_equalequal``` |
| ```=```                      | ```TOK_equal```      |  |  ```.```                      | ```TOK_dot```        |
| ```,```                      | ```TOK_comma```      |  |  ```:```                      | ```TOK_colon```      |
| ```;```                      | ```TOK_semicolon```  |  |  ```\|\|```                   | ```TOK_or```         |
| ```&&```                     | ```TOK_and```        |  |  ```!=```                     | ```TOK_notequal```   |
| ```!```                      | ```TOK_not```        |  |  ```<=```                     | ```TOK_lessequal```  |
| ```>=```                     | ```TOK_greatequal``` |  |  ```<```                      | ```TOK_less```       |
| ```>```                      | ```TOK_great```      |  |  ```?```                      | ```TOK_question```   |

## Terminales
| Terminal | Terminal | Terminal | Terminal | Terminal | Terminal |
| - | - | - | - | - | - |
| ```RW_int```         | ```RW_double```      | ```RW_boolean```     | ```RW_char```        | ```RW_string```      | ```RW_true```        |
| ```RW_false```       | ```RW_new```         | ```RW_list```        | ```RW_if```          | ```RW_else```        | ```RW_switch```      |
| ```RW_case```        | ```RW_while```       | ```RW_for```         | ```RW_do```          | ```RW_break```       | ```RW_continue```    |
| ```RW_default```     | ```RW_return```      | ```RW_void```        | ```RW_main```        | ```FN_add```         | ```FN_toLower```     |
| ```FN_toUpper```     | ```FN_length```      | ```FN_truncate```    | ```FN_round```       | ```FN_typeOf```      | ```FN_toString```    |
| ```FN_toCharArray``` | ```FN_print```       | ```TOK_string```     | ```TOK_char```       | ```TOK_id```         | ```TOK_double```     |
| ```TOK_integer```    | ```TOK_incr```       | ```TOK_decr```       | ```TOK_plus```       | ```TOK_minus```      | ```TOK_mult```       |
| ```TOK_div```        | ```TOK_pow```        | ```TOK_mod```        | ```TOK_lpar```       | ```TOK_rpar```       | ```TOK_lbrckt```     |
| ```TOK_rbrckt```     | ```TOK_lbrc```       | ```TOK_rbrc```       | ```TOK_equalequal``` | ```TOK_equal```      | ```TOK_dot```        |
| ```TOK_comma```      | ```TOK_colon```      | ```TOK_semicolon```  | ```TOK_or```         | ```TOK_and```        | ```TOK_notequal```   |
| ```TOK_not```        | ```TOK_lessequal```  | ```TOK_greatequal``` | ```TOK_less```       | ```TOK_great```      | ```TOK_question```   |

## No Terminales
| No Terminal | No Terminal | No Terminal | No Terminal |
| - | - | - | - |
| ```INIT```                 | ```INSTRUCTIONS```         | ```INSTRUCTION```          | ```MAIN_METHOD```          |
| ```INIT_ID```              | ```ID_ASIGN```             | ```NEW_ARRAY```            | ```ARRAY_ASIGN```          |
| ```IF_STRCT```             | ```SWITCH_STRCT```         | ```LOOP```                 | ```FUNCTION```             |
| ```CALLED_FUNCTION```      | ```NATIVES_FUNCTION```     | ```INCR_DECR```            | ```EXP```                  |
| ```TYPE```                 | ```ARRAY_VALUE```          | ```LIST_VALUE```           | ```VALUE_LIST```           |
| ```BLOCK```                | ```CASE_BLOCK```           | ```CASE_LIST```            | ```DEFAULT```              |
| ```CASE```                 | ```FOR_ARGS```             | ```ID_ASIGN_FOR```         | ```UPDATE```               |
| ```PARAMETERS```           | ```PARAMETER```            | ```LIST_ARGS```            | ```NATIVES_FUNCTION_EXP``` |

## Precedencia de Operadores
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
```

## Producciones
```java
INIT: INSTRUCTIONS EOF | EOF ;

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