//Código JavaScript necesario
%{
    
%}

//análisis léxico
%lex
%options case-insensitive

char1    ([^\n\"\\]?|\\.)
char2    ([^\n\"\\]?|[\\][n\\\"t\'])

%%
\s+                                     {}
[ \n\r]                                 {}
\/\/.*                                  {}//comentario simple
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]     {}//comentario multilínea
//palabras reservadas
'int'                                   {return 'RW_int'}
'double'                                {return 'RW_double'}
'boolean'                               {return 'RW_boolean'}
'char'                                  {return 'RW_char'}
'string'                                {return 'RW_string'}
'true'                                  {return 'RW_true'}
'false'                                 {return 'RW_false'}
'new'                                   {return 'RW_new'}
'list'                                  {return 'RW_list'}
'if'                                    {return 'RW_if'}
'else'                                  {return 'RW_else'}
'switch'                                {return 'RW_switch'}
'case'                                  {return 'RW_case'}
'while'                                 {return 'RW_while'}
'for'                                   {return 'RW_for'}
'do'                                    {return 'RW_do'}
'break'                                 {return 'RW_break'}
'continue'                              {return 'RW_continue'}
'default'                               {return 'RW_default'}
'return'                                {return 'RW_return'}
'void'                                  {return 'RW_void'}
'main'                                  {return 'RW_main'}
//funciones nativas
'add'                                   {return 'FN_add'}
'toLower'                               {return 'FN_toLower'}
'toUpper'                               {return 'FN_toUpper'}
'length'                                {return 'FN_length'}
'truncate'                              {return 'FN_truncate'}
'round'                                 {return 'FN_round'}
'typeOf'                                {return 'FN_typeOf'}
'toString'                              {return 'FN_toString'}
'toCharArray'                           {return 'FN_toCharArray'}
'print'                                 {return 'FN_print'}
//expresiones regulares
\"{char1}*\"                            {yytext = yytext.substr(1,yyleng - 2);return 'TOK_string'; }
\'{char1}\'                             {yytext = yytext.substr(1,yyleng - 2);return 'TOK_char'; }
[a-zA-Z_][a-zA-Z0-9_]*                  {return 'TOK_id'}
[0-9]+\.[0-9]+\b                        {return 'TOK_double'}
[0-9]+\b                                {return 'TOK_integer'}
//simbolos
"++"                                    {return 'TOK_incr'}
"--"                                    {return 'TOK_decr'}
'+'                                     {return 'TOK_plus'}
'-'                                     {return 'TOK_minus'}
'*'                                     {return 'TOK_mult'}
'/'                                     {return 'TOK_div'}
'^'                                     {return 'TOK_pow'}
'%'                                     {return 'TOK_mod'}
'('                                     {return 'TOK_lpar'}
')'                                     {return 'TOK_rpar'}
'['                                     {return 'TOK_lbrckt'}
']'                                     {return 'TOK_rbrckt'}
'{'                                     {return 'TOK_lbrc'}
'}'                                     {return 'TOK_rbrc'}
'=='                                    {return 'TOK_equalequal'}
'='                                     {return 'TOK_equal'}
'.'                                     {return 'TOK_dot'}
','                                     {return 'TOK_comma'}
':'                                     {return 'TOK_colon'}
';'                                     {return 'TOK_semicolon'}
'||'                                    {return 'TOK_or'}
'&&'                                    {return 'TOK_and'}
'!='                                    {return 'TOK_notequal'}
'!'                                     {return 'TOK_not'}
'<='                                    {return 'TOK_lessequal'}
'>='                                    {return 'TOK_greatequal'}
'<'                                     {return 'TOK_less'}
'>'                                     {return 'TOK_great'}
'?'                                     {return 'TOK_question'}
.                                       {console.log('Error: ' + yytext)}
<<EOF>>                                 {return 'EOF'}
/lex
//Código JavaScript necesario
%{
    const {Type} = require('../Classes/Utils/Type');
    //Instrucciones
    const {Print} = require('../Classes/Instructions/Print');
    const {InitID} = require('../Classes/Instructions/InitID');
    const {AsignID} = require('../Classes/Instructions/AsignID');
    //Expresiones
    const {Primitive} = require('../Classes/Expressions/Primitive');
    const {Arithmetic} = require('../Classes/Expressions/Arithmetic');
    const {Logic} = require('../Classes/Expressions/Logic');
    const {Relational} = require('../Classes/Expressions/Relational');
    const {Ternary} = require('../Classes/Expressions/Ternary');
    const {AccessID} = require('../Classes/Expressions/AccessID');
%}
//precedencia de operadores
%left 'TOK_question' 'TOK_colon'
%left 'TOK_or'
%left 'TOK_and'
%right 'TOK_not'
%left 'TOK_equalequal' 'TOK_notequal'
%left 'TOK_less' 'TOK_lessequal' 'TOK_great' 'TOK_greatequal'
%left 'TOK_plus' 'TOK_minus'
%left 'TOK_mult' 'TOK_div' 'TOK_mod'
%nonassoc 'TOK_pow'
%right uminus
%left 'TOK_incr' 'TOK_decr'
%left 'TOK_dot' 'TOK_lbrckt' 'TOK_rbrckt'

//análisis sintáctico
%start INIT

%%

INIT: INSTRUCTIONS EOF {return $1};

INSTRUCTIONS:
    INSTRUCTIONS INSTRUCTION        {$$.push($2)} |
    INSTRUCTION                     {$$ = [$1]};

INSTRUCTION:
    MAIN_METHOD                     {} |
    INIT_ID TOK_semicolon           {$$ = $1} |
    ID_ASIGN TOK_semicolon          {$$ = $1} |
    INCR_DECR TOK_semicolon         {} |
    NEW_ARRAY TOK_semicolon         {} |
    ARRAY_ASIGN TOK_semicolon       {} |
    IF_STRCT                        {} |
    SWITCH_STRCT                    {} |
    RW_break TOK_semicolon          {} |
    RW_continue TOK_semicolon       {} |
    LOOP                            {} |
    FUNCTION                        {} |
    CALLED_FUNCTION TOK_semicolon   {} |
    NATIVES_FUNCTION TOK_semicolon  {$$ = $1} |
    INCR_DECR TOK_semicolon         {} |
    RW_return TOK_semicolon         {} |
    RW_return EXP TOK_semicolon     {} |
    error                           {console.log({ line: this._$.first_line, column: this._$.first_column, type: 'Sintáctico', message: `Error sintáctico, token no esperado '${yytext}' .`})};

MAIN_METHOD:
    RW_main CALLED_FUNCTION TOK_semicolon   {};

INIT_ID:
    TYPE TOK_id TOK_equal EXP       {$$ = new InitID(@1.first_line,@1.first_column,$2,$1,$4)} |
    TYPE TOK_id                     {$$ = new InitID(@1.first_line,@1.first_column,$2,$1,undefined)};

ID_ASIGN:
    TOK_id TOK_equal EXP            {$$ = new AsignID(@1.first_line,@1.first_column,$1,$3)};

NEW_ARRAY:
    TYPE TOK_lbrckt TOK_rbrckt TOK_id TOK_equal ARRAY_VALUE         {} |
    RW_list TOK_less TYPE TOK_great TOK_id TOK_equal LIST_VALUE     {};

ARRAY_VALUE:
    RW_new TYPE TOK_lbrckt EXP TOK_rbrckt   {} |
    TOK_lbrc VALUE_LIST TOK_rbrc            {};

LIST_VALUE:
    RW_new RW_list TOK_less TYPE TOK_great  {} |
    FN_toCharArray TOK_lpar EXP TOK_rpar    {};

ARRAY_ASIGN:
    TOK_id TOK_lbrckt EXP TOK_rbrckt TOK_equal EXP      {} |
    TOK_id TOK_dot FN_add TOK_lpar EXP TOK_rpar         {} |
    TOK_id TOK_lbrckt TOK_lbrckt EXP TOK_rbrckt TOK_rbrckt TOK_equal EXP      {};

VALUE_LIST:
    VALUE_LIST TOK_comma EXP            {} |
    EXP                                 {};

IF_STRCT:
    RW_if TOK_lpar EXP TOK_rpar BLOCK                   {} |
    RW_if TOK_lpar EXP TOK_rpar BLOCK RW_else BLOCK     {} |
    RW_if TOK_lpar EXP TOK_rpar BLOCK RW_else IF_STRCT  {};

SWITCH_STRCT:
    RW_switch TOK_lpar EXP TOK_rpar TOK_lbrc CASE_BLOCK TOK_rbrc     {};

CASE_BLOCK:
    CASE_LIST DEFAULT   {} |
    CASE_LIST           {} |
    DEFAULT             {};

CASE_LIST:
    CASE_LIST CASE              {} |
    CASE                        {};

CASE:
    RW_case EXP TOK_colon INSTRUCTIONS      {};

DEFAULT:
    RW_default TOK_colon INSTRUCTIONS       {};

LOOP:
    RW_while TOK_lpar EXP TOK_rpar BLOCK                        {} |
    RW_for TOK_lpar FOR_PARAMS TOK_rpar BLOCK                   {} |
    RW_do BLOCK RW_while TOK_lpar EXP TOK_rpar TOK_semicolon    {};

FOR_PARAMS:
    INIT_ID TOK_semicolon EXP TOK_semicolon UPDATE_FOR {};

UPDATE_FOR:
    UPDATE_FOR TOK_comma UPDATE     {} |
    UPDATE                          {};

UPDATE:
    INCR_DECR       {} |
    ID_ASIGN_FOR    {};

ID_ASIGN_FOR:
    TOK_id TOK_equal EXP    {};

FUNCTION:
    TYPE TOK_id TOK_lpar PARAMETERS TOK_rpar BLOCK          {} |
    RW_void TOK_id TOK_lpar PARAMETERS TOK_rpar BLOCK       {} |
    TYPE TOK_id TOK_lpar TOK_rpar BLOCK                     {} |
    RW_void TOK_id TOK_lpar TOK_rpar BLOCK                  {};

PARAMETERS:
    PARAMETERS TOK_comma TYPE TOK_id    {} |
    TYPE TOK_id                         {};

BLOCK:
    TOK_lbrc INSTRUCTIONS TOK_rbrc      {} |
    TOK_lbrc TOK_rbrc                   {};

CALLED_FUNCTION:
    TOK_id TOK_lpar LIST_EXPS TOK_rpar    {} |
    TOK_id TOK_lpar TOK_rpar              {};

LIST_EXPS:
    LIST_EXPS TOK_comma EXP     {} |
    EXP                         {};

NATIVES_FUNCTION:
    FN_print TOK_lpar EXP TOK_rpar      {$$ = new Print(@1.first_line,@1.first_column,$3)} |
    FN_print TOK_lpar TOK_rpar          {$$ = new Print(@1.first_line,@1.first_column,'')} |
    NATIVES_FUNCTION_EXP                {$$ = $1};

NATIVES_FUNCTION_EXP:
    FN_toLower TOK_lpar EXP TOK_rpar        {} |
    FN_toUpper TOK_lpar EXP TOK_rpar        {} |
    FN_length TOK_lpar EXP TOK_rpar         {} |
    FN_truncate TOK_lpar EXP TOK_rpar       {} |
    FN_round TOK_lpar EXP TOK_rpar          {} |
    FN_typeOf TOK_lpar EXP TOK_rpar         {} |
    FN_toString TOK_lpar EXP TOK_rpar       {} |
    FN_toCharArray TOK_lpar EXP TOK_rpar    {};

EXP:
    EXP TOK_plus  EXP                                       {$$ = new Arithmetic(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_minus EXP                                       {$$ = new Arithmetic(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_mult  EXP                                       {$$ = new Arithmetic(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_div   EXP                                       {$$ = new Arithmetic(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_pow   EXP                                       {$$ = new Arithmetic(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_mod   EXP                                       {$$ = new Arithmetic(@2.first_line,@2.first_column,$1,$2,$3)} |
    TOK_minus EXP %prec uminus                              {$$ = new Arithmetic(@1.first_line,@1.first_column,undefined,$1,$2)} |
    TOK_lpar EXP TOK_rpar                                   {$$ = $2} |
    EXP TOK_equalequal EXP                                  {$$ = new Relational(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_notequal   EXP                                  {$$ = new Relational(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_less       EXP                                  {$$ = new Relational(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_great      EXP                                  {$$ = new Relational(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_lessequal  EXP                                  {$$ = new Relational(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_greatequal EXP                                  {$$ = new Relational(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_or  EXP                                         {$$ = new Logic(@2.first_line,@2.first_column,$1,$2,$3)} |
    EXP TOK_and EXP                                         {$$ = new Logic(@2.first_line,@2.first_column,$1,$2,$3)} |
    TOK_not EXP                                             {$$ = new Logic(@1.first_line,@1.first_column,undefined,$1,$2)} |
    TOK_lpar TYPE TOK_rpar EXP                              {} |
    EXP TOK_question EXP TOK_colon EXP                      {$$ = new Ternary(@1.first_line,@1.first_column,$1,$3,$5)} |
    TOK_id TOK_lbrckt EXP TOK_rbrckt                        {} |
    TOK_id TOK_lbrckt TOK_lbrckt EXP TOK_rbrckt TOK_rbrckt  {} |
    CALLED_FUNCTION                                         {} |
    NATIVES_FUNCTION_EXP                                    {} |
    INCR_DECR                                               {} |
    TOK_id                                                  {$$ = new AccessID(@1.first_line,@1.first_column,$1)} |
    TOK_integer                                             {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.INT)} |
    TOK_double                                              {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.DOUBLE)} |
    TOK_string                                              {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.STRING)} |
    TOK_char                                                {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.CHAR)} |
    RW_true                                                 {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.BOOLEAN)} |
    RW_false                                                {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.BOOLEAN)};

INCR_DECR:
    TOK_id TOK_incr        {} |
    TOK_id TOK_decr        {};

TYPE:
    RW_int          {$$ = Type.INT} |
    RW_double       {$$ = Type.DOUBLE} |
    RW_boolean      {$$ = Type.BOOLEAN} |
    RW_char         {$$ = Type.CHAR} |
    RW_string       {$$ = Type.STRING};