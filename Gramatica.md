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
//Inicio de Gramática
INIT -> INSTRUCTIONS EOF | EOF ;

//Instrucciones
INSTRUCTIONS ->
    INSTRUCTIONS INSTRUCTION |
    INSTRUCTION              

INSTRUCTION ->
    //Método Principal
    MAIN_METHOD          |
    //Finalización de Instrucción con ';'
    INIT_ID ';'          |
    ID_ASIGN ';'         |
    NEW_ARRAY ';'        |
    ARRAY_ASIGN ';'      |
    //Estructuras de Control
    IF_STRCT             |
    SWITCH_STRCT         |
    //Ciclos
    LOOP                 |
    FUNCTION             |
    //Finalización de Instrucción con ';'
    CALLED_FUNCTION ';'  |
    NATIVES_FUNCTION ';' |
    INCR_DECR ';'        |
    //Instrucciones de Transferencia
    'break' ';'          |
    'continue' ';'       |
    'return' ';'         |
    'return' EXP ';'     |
    error                

//Llamada a Método Principal
MAIN_METHOD ->
    main CALLED_FUNCTION ';' 

//Inicialización de Variable
INIT_ID ->
    TYPE TOK_id '=' EXP |
    TYPE TOK_id         

//Asignación de Valor a Identificador
ID_ASIGN ->
    TOK_id '=' EXP

//Declaración de Arreglos y Listas
NEW_ARRAY ->
    //Arreglo
    TYPE '[' ']' TOK_id '=' ARRAY_VALUE       |
    //Lista
    'list' '<' TYPE '>' TOK_id '=' LIST_VALUE 

//Valor de Un Arreglo
ARRAY_VALUE ->
    //Con Longitud
    'new' TYPE '[' EXP ']' |
    //Con Valores
    '{' VALUE_LIST '}'     |
    //Vacío
    '{' '}'

LIST_VALUE ->
    //Inicialización de una Lista Vacía
    'new' 'list' '<' TYPE '>'   |
    //Cadena a Lista de Caracteres
    'toCharArray' '(' EXP ')' 

//Asignación de Valores a Arreglos y Listas
ARRAY_ASIGN ->
    //Arreglo
    TOK_id '[' EXP ']' '=' EXP         |
    //Lista con método Add
    TOK_id '.' add '(' EXP ')'         |
    //Lista
    TOK_id '[' '[' EXP ']' ']' '=' EXP 

//Lista de Valores para Arreglo
VALUE_LIST ->
    VALUE_LIST ',' EXP |
    EXP                

//Estructura If
IF_STRCT ->
    //If
    'if' '(' EXP ')' BLOCK                 |
    //If Else
    'if' '(' EXP ')' BLOCK 'else' BLOCK    |
    //If Else If
    'if' '(' EXP ')' BLOCK 'else' IF_STRCT 

//Estructura Switch Case
SWITCH_STRCT ->
    'switch' '(' EXP ')' '{' CASE_BLOCK '}' 

CASE_BLOCK ->
    //Casos y Default
    CASE_LIST DEFAULT |
    //Solo Casos
    CASE_LIST         |
    //Solo Default
    DEFAULT           

//Lista de Casos de Switch
CASE_LIST ->
    CASE_LIST CASE |
    CASE           

//Case en Switch (Con y sin instrucciones)
CASE ->
    'case' EXP ':' INSTRUCTIONS |
    'case' EXP ':'              

//Default en Switch (Con y sin instrucciones)
DEFAULT ->
    'default' ':' INSTRUCTIONS |
    'default' ':'              

LOOP ->
    //Bucle While
    'while' '(' EXP ')' BLOCK          |
    //Bucle Do While
    'do' BLOCK 'while' '(' EXP ')' ';' |
    //Bucle For
    'for' '(' FOR_ARGS ')' BLOCK     

//Lista de Argumentos de For
FOR_ARGS ->
    ID_ASIGN_FOR ';' EXP ';' UPDATE 

//Asignacion de Variable para For
ID_ASIGN_FOR ->
    TYPE TOK_id '=' EXP |
    ID_ASIGN            

//Actualización de Variable en For
UPDATE ->
    INCR_DECR |
    ID_ASIGN  

//Declaración de Funciones con y sin parámetros
FUNCTION ->
    TYPE   TOK_id '(' PARAMETERS ')' BLOCK |
    'void' TOK_id '(' PARAMETERS ')' BLOCK |
    TYPE   TOK_id '(' ')' BLOCK            |
    'void' TOK_id '(' ')' BLOCK            

//Lista de Parmáetros
PARAMETERS ->
    PARAMETERS ',' PARAMETER |
    PARAMETER                      

//Parámetro
PARAMETER ->
    TYPE TOK_id 

//Bloque de Instrucciones para Entornos Locales
BLOCK ->
    '{' INSTRUCTIONS '}' |
    '{' '}'              

//Llamada a métodos y funciones con y sin parámetros
CALLED_FUNCTION ->
    TOK_id '(' LIST_ARGS ')' |
    TOK_id '(' ')'           

//Lista de Argumentos
LIST_ARGS ->
    LIST_ARGS ',' EXP |
    EXP                     

NATIVES_FUNCTION ->
    //Función Nativa Print
    'print' '(' EXP ')'    |
    'print' '(' ')'        |
    //Funciones Nativas que retornan un Valor
    NATIVES_FUNCTION_EXP

NATIVES_FUNCTION_EXP ->
    //Funciones Nativas que retornan un Valor
    'toLower'     '(' EXP ')' |
    'toUpper'     '(' EXP ')' |
    'length'      '(' EXP ')' |
    'truncate'    '(' EXP ')' |
    'round'       '(' EXP ')' |
    'typeOf'      '(' EXP ')' |
    'toString'    '(' EXP ')' |
    'toCharArray' '(' EXP ')' 

EXP ->
    //Aritméticas
    EXP '+' EXP                |
    EXP '-' EXP                |
    EXP '*' EXP                |
    EXP '/' EXP                |
    EXP '^' EXP                |
    EXP '%' EXP                |
    '-' EXP %prec uminus       |
    '(' EXP ')'                |
    //Relacionales
    EXP '==' EXP               |
    EXP '!=' EXP               |
    EXP '<'  EXP               |
    EXP '>'  EXP               |
    EXP '<=' EXP               |
    EXP '>=' EXP               |
    //Lógicas
    EXP '||' EXP               |
    EXP '&&' EXP               |
    '!' EXP                    |
    //Casteo
    '(' TYPE ')' EXP           |
    //Operador Ternario
    EXP '?' EXP ':' EXP        |
    //Acceso a Arreglos
    TOK_id '[' EXP ']'         |
    //Acceso a Listas
    TOK_id '[' '[' EXP ']' ']' |
    //Llamada a Funciones
    CALLED_FUNCTION            |
    //Llamada a Funciones Nativas
    NATIVES_FUNCTION_EXP       |
    //Incremento y Decremento
    INCR_DECR                  |
    //Acceso a Identificador
    TOK_id                     |
    //Acceso a Primitivos
    TOK_integer                |
    TOK_double                 |
    TOK_string                 |
    TOK_char                   |
    'true'                     |
    'false'                      

//Incremento y Decremento
INCR_DECR ->
    TOK_id '++' |
    TOK_id '--' 

//Tipos
TYPE ->
    'int'     |
    'double'  |
    'boolean' |
    'char'    |
    'String'   
```