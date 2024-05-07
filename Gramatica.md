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
| Nivel | Asociatividad | Operador |
| :-: | :- | :- |
| 11 | Izquierda | ```?``` ```:``` |
| 10 | Izquierda | ```\|\|``` |
| 9 | Izquierda | ```&&``` |
| 8 | Derecha | ```!``` |
| 7 | Izquierda | ```==``` ```!=``` |
| 6 | Izquierda | ```<``` ```<=``` ```>``` ```>=``` |
| 5 | Izquierda | ```+``` ```-``` |
| 4 | Izquierda | ```*``` ```/``` ```%``` |
| 3 | No Asociativa | ```^``` |
| 2 | Derecha | ```TK_uminus``` |
| 1 | Izquierda | ```++``` ```--``` |
| 0 | Izquierda | ```.``` ```[``` ```]``` ```(``` ```)``` |

## Producciones
```html
<INIT> ::=
    <INSTRUCTIONS> <EOF> |
    <EOF>                

<INSTRUCTIONS> ::=
    <INSTRUCTIONS> <INSTRUCTION> |
    <INSTRUCTION>                

<INSTRUCTION> ::=
    <MAINMETHOD>          |
    <INITID> ';'          |
    <IDASIGN> ';'         |
    <NEWARRAY> ';'        |
    <ARRAYASIGN> ';'      |
    <IF>                  |
    <SWITCH>              |
    <LOOP>                |
    <FUNCTION>            |
    <CALLFUNCTION> ';'    |
    <NATIVEFUNCTIONS> ';' |
    <INCDEC> ';'          |
    'break' ';'           |
    'continue' ';'        |
    'return' ';'          |
    'return' <EXP> ';'    

<MAINMETHOD> ::=
    RW_main <CALLFUNCTION> ';' 

<INITID> ::=
    <TYPE> TK_id '=' <EXP> |
    <TYPE> TK_id           

<IDASIGN> ::=
    TK_id '=' <EXP> 

<NEWARRAY> ::=
    <TYPE> '[' ']' TK_id '=' <ARRAYVALUE>       |
    'list' '<' <TYPE> '>' TK_id '=' <LISTVALUE> 

<ARRAYVALUE> ::=
    'new' <TYPE> '[' <EXP> ']' |
    '{' <VALUELIST> '}'        |
    '{' '}'                    

<LISTVALUE> ::=
    'new' 'list' '<' <TYPE> '>'  |
    RW_toCharArray '(' <EXP> ')' 

<ARRAYASIGN> ::=
    TK_id '[' <EXP> ']' '=' <EXP>         |
    TK_id '.' 'add' '(' <EXP> ')'         |
    TK_id '[' '[' <EXP> ']' ']' '=' <EXP> 

<VALUELIST> ::=
    <VALUELIST> ',' <EXP> |
    <EXP>                 

<IF> ::=
    'if' '(' <EXP> ')' <BLOCK>                |
    'if' '(' <EXP> ')' <BLOCK> 'else' <BLOCK> |
    'if' '(' <EXP> ')' <BLOCK> 'else' <IF>    

<SWITCH> ::=
    'switch' '(' <EXP> ')' '{' <CASEBLOCK> '}' 

<CASEBLOCK> ::=
    <CASELIST> <DEFAULT> |
    <CASELIST>           |
    <DEFAULT>            

<CASELIST> ::=
    <CASELIST> <CASE> |
    <CASE>            

<CASE> ::=
    'case' <EXP> ':' <INSTRUCTIONS> |
    'case' <EXP> ':'                

<DEFAULT> ::=
    'default' ':' <INSTRUCTIONS> |
    'default' ':'                

<LOOP> ::=
    'while' '(' <EXP> ')' <BLOCK>          |
    'do' <BLOCK> 'while' '(' <EXP> ')' ';' |
    'for' '(' <FORARGS> ')' <BLOCK>        

<FORARGS> ::=
    <IDASIGNFOR> ';' <EXP> ';' <UPDATE> 

<IDASIGNFOR> ::=
    <TYPE> TK_id '=' <EXP> |
    <IDASIGN>                 

<UPDATE> ::=
    <INCDEC>  |
    <IDASIGN> 

<FUNCTION> ::=
    <TYPE> TK_id '(' <PARAMETERS> ')' <BLOCK> |
    'void' TK_id '(' <PARAMETERS> ')' <BLOCK> |
    <TYPE> TK_id '(' ')' <BLOCK>              |
    'void' TK_id '(' ')' <BLOCK>              

<PARAMETERS> ::=
    <PARAMETERS> ',' <PARAMETER> |
    <PARAMETER>                  

<PARAMETER> ::=
    <TYPE> TK_id 

<BLOCK> ::=
    '{' <INSTRUCTIONS> '}' |
    '{' '}'                

<CALLFUNCTION> ::=
    TK_id '(' <LISTARGS> ')' |
    TK_id '(' ')'          

<LISTARGS> ::=
    <LISTARGS> ',' <EXP> |
    <EXP>                

<NATIVEFUNCTIONS> ::=
    'print' '(' <EXP> ')' |
    'print' '(' ')'       |
    <NATIVESFUNCTIONSEXP> 

<NATIVESFUNCTIONSEXP> ::=
    'toLower'     '(' <EXP> ')' |
    'toUpper'     '(' <EXP> ')' |
    'length'      '(' <EXP> ')' |
    'truncate'    '(' <EXP> ')' |
    'round'       '(' <EXP> ')' |
    'typeOf'      '(' <EXP> ')' |
    'toString'    '(' <EXP> ')' |
    'toCharArray' '(' <EXP> ')' 

<EXP> ::=
    <ARITHMETICS>         |
    <RELATIONALS>         |
    <LOGICS>              |
    <TERNARY>             |
    <CAST>                |
    <ACCESSVECTOR>        |
    <NATIVESFUNCTIONSEXP> |
    <CALLFUNCTION>        |
    <INCDEC>              |
    TK_id                 |
    TK_integer            |
    TK_double             |
    TK_string             |
    TK_char               |
    'true'                |
    'false'               |
    '(' <EXP> ')'         

<ARITHMETICS> ::=
    <EXP> '+' <EXP> |
    <EXP> '-' <EXP> |
    <EXP> '*' <EXP> |
    <EXP> '/' <EXP> |
    <EXP> '^' <EXP> |
    <EXP> '%' <EXP> |
    '-' <EXP> %prec TK_uminus 

<RELATIONALS> ::=
    <EXP> '==' <EXP> |
    <EXP> '!=' <EXP> |
    <EXP> '<'  <EXP> |
    <EXP> '>'  <EXP> |
    <EXP> '<=' <EXP> |
    <EXP> '>=' <EXP> 

<LOGICS> ::=
    <EXP> '||' <EXP> |
    <EXP> '&&' <EXP> |
    '!' <EXP>        

<TERNARY> ::=
    <EXP> '?' <EXP> ':' <EXP> 

<CAST> ::=
    '(' <TYPE> ')' <EXP> 

<ACCESSVECTOR> ::=
    TK_id '[' <EXP> ']'         |
    TK_id '[' '[' <EXP> ']' ']' 

<INCDEC> ::=
    TK_id '++' |
    TK_id '--' 

<TYPE> ::=
    'int'     |
    'double'  |
    'boolean' |
    'char'    |
    'String'  
```