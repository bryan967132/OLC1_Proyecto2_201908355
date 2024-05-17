## Expresiones Regulares
| Expresión Regular | Nombre del Token | | Expresión Regular | Nombre del Token |
| - | - | - | - | - |
| ```\s+```                    |                      |  |  ```[ \n\r]```                             |        |
| ```\/\/.*```                 |                      |  |  ```[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]``` |        |
| ```int```                    | ```RW_int```         |  |  ```double```                | ```RW_double```      |
| ```boolean```                | ```RW_boolean```     |  |  ```char```                  | ```RW_char```        |
| ```string```                 | ```RW_string```      |  |  ```true```                  | ```RW_true```        |
| ```false```                  | ```RW_false```       |  |  ```new```                   | ```RW_new```         |
| ```list```                   | ```RW_list```        |  |  ```if```                    | ```RW_if```          |
| ```else```                   | ```RW_else```        |  |  ```switch```                | ```RW_switch```      |
| ```case```                   | ```RW_case```        |  |  ```while```                 | ```RW_while```       |
| ```for```                    | ```RW_for```         |  |  ```do```                    | ```RW_do```          |
| ```break```                  | ```RW_break```       |  |  ```continue```              | ```RW_continue```    |
| ```default```                | ```RW_default```     |  |  ```return```                | ```RW_return```      |
| ```void```                   | ```RW_void```        |  |  ```main```                  | ```RW_main```        |
| ```add```                    | ```RW_add```         |  |  ```toLower```               | ```RW_toLower```     |
| ```toUpper```                | ```RW_toUpper```     |  |  ```length```                | ```RW_length```      |
| ```truncate```               | ```RW_truncate```    |  |  ```round```                 | ```RW_round```       |
| ```typeOf```                 | ```RW_typeOf```      |  |  ```toString```              | ```RW_toString```    |
| ```toCharArray```            | ```RW_toCharArray``` |  |  ```print```                 | ```RW_print```       |
| ```\"([^\n\"\\]?\|\\.)*\"``` | ```TK_string```      |  |  ```\'([^\n\"\\]?\|\\.)\'``` | ```TK_char```        |
| ```[a-zA-Z_][a-zA-Z0-9_]*``` | ```TK_id```          |  |  ```[0-9]+\.[0-9]+\b```      | ```TK_double```      |
| ```[0-9]+\b```               | ```TK_integer```     |  |  ```++```                    | ```TK_incr```        |
| ```--```                     | ```TK_decr```        |  |  ```+```                     | ```TK_plus```        |
| ```-```                      | ```TK_minus```       |  |  ```*```                     | ```TK_mult```        |
| ```/```                      | ```TK_div```         |  |  ```^```                     | ```TK_pow```         |
| ```%```                      | ```TK_mod```         |  |  ```(```                     | ```TK_lpar```        |
| ```)```                      | ```TK_rpar```        |  |  ```[```                     | ```TK_lbrckt```      |
| ```]```                      | ```TK_rbrckt```      |  |  ```{```                     | ```TK_lbrc```        |
| ```}```                      | ```TK_rbrc```        |  |  ```==```                    | ```TK_equalequal```  |
| ```=```                      | ```TK_equal```       |  |  ```.```                     | ```TK_dot```         |
| ```,```                      | ```TK_comma```       |  |  ```:```                     | ```TK_colon```       |
| ```;```                      | ```TK_semicolon```   |  |  ```\|\|```                  | ```TK_or```          |
| ```&&```                     | ```TK_and```         |  |  ```!=```                    | ```TK_notequal```    |
| ```!```                      | ```TK_not```         |  |  ```<=```                    | ```TK_lessequal```   |
| ```>=```                     | ```TK_greatequal```  |  |  ```<```                     | ```TK_less```        |
| ```>```                      | ```TK_great```       |  |  ```?```                     | ```TK_question```    |

## Terminales
| Terminal | Terminal | Terminal | Terminal | Terminal | Terminal |
| - | - | - | - | - | - |
| ```RW_int```         | ```RW_double```    | ```RW_boolean```    | ```RW_char```       | ```RW_string``` | ```RW_true```     |
| ```RW_false```       | ```RW_new```       | ```RW_list```       | ```RW_if```         | ```RW_else```   | ```RW_switch```   |
| ```RW_case```        | ```RW_while```     | ```RW_for```        | ```RW_do```         | ```RW_break```  | ```RW_continue``` |
| ```RW_default```     | ```RW_return```    | ```RW_void```       | ```RW_main```       | ```RW_add```    | ```RW_toLower```  |
| ```RW_toUpper```     | ```RW_length```    | ```RW_truncate```   | ```RW_round```      | ```RW_typeOf``` | ```RW_toString``` |
| ```RW_toCharArray``` | ```RW_print```     | ```TK_string```     | ```TK_char```       | ```TK_id```     | ```TK_double```   |
| ```TK_integer```     | ```TK_incr```      | ```TK_decr```       | ```TK_plus```       | ```TK_minus```  | ```TK_mult```     |
| ```TK_div```         | ```TK_pow```       | ```TK_mod```        | ```TK_lpar```       | ```TK_rpar```   | ```TK_lbrckt```   |
| ```TK_rbrckt```      | ```TK_lbrc```      | ```TK_rbrc```       | ```TK_equalequal``` | ```TK_equal```  | ```TK_dot```      |
| ```TK_comma```       | ```TK_colon```     | ```TK_semicolon```  | ```TK_or```         | ```TK_and```    | ```TK_notequal``` |
| ```TK_not```         | ```TK_lessequal``` | ```TK_greatequal``` | ```TK_less```       | ```TK_great```  | ```TK_question``` |

## No Terminales
| No Terminal | No Terminal | No Terminal | No Terminal |
| - | - | - | - |
| ```INIT```         | ```INSTRUCTIONS```    | ```INSTRUCTION``` | ```MAINMETHOD```          |
| ```INITID```       | ```IDASIGN```         | ```NEWARRAY```    | ```ARRAYASIGN```          |
| ```IF```           | ```SWITCH```          | ```LOOP```        | ```FUNCTION```            |
| ```CALLFUNCTION``` | ```NATIVEFUNCTIONS``` | ```INCDEC```      | ```EXP```                 |
| ```TYPE```         | ```ARRAYVALUE```      | ```LISTVALUE```   | ```VALUELIST```           |
| ```BLOCK```        | ```CASEBLOCK```       | ```CASELIST```    | ```DEFAULT```             |
| ```CASE```         | ```FORARGS```         | ```IDASIGNFOR```  | ```UPDATE```              |
| ```PARAMETERS```   | ```PARAMETER```       | ```LISTARGS```    | ```NATIVESFUNCTIONSEXP``` |
| ```ARITHMETICS```  | ```RELATIONALS```     | ```LOGICS```      | ```TERNARY```             |
| ```CAST```         | ```ACCESSVECTOR```    |

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