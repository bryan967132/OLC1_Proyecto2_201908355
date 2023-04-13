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
'add'                                   {return 'RW_add'}
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
'print'                                 {return 'RW_print'}
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
'%'                                     {return 'TOK_mod'}
'^'                                     {return 'TOK_pow'}
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
    
%}
//precedencia de operadores
//--Operaciones logicas
%left 'TOK_incr' 'TOK_decr'//
%left 'TOK_or'//7
%left 'TOK_and'//6
%right 'TOK_not'//5
%left 'TOK_equalequal' 'TOK_notequal' 'TOK_less' 'TOK_lessequal' 'TOK_great' 'TOK_greatequal'//4
//--Operaciones numericas
%left 'TOK_plus' 'TOK_minus'//3
%left 'TOK_mult' 'TOK_div' 'TOK_mod'//2
%nonassoc 'TOK_pow'
%right uminus

//análisis sintáctico
%start INIT

%%

INIT: INSTRUCTIONS EOF {};

INSTRUCTIONS:
    INSTRUCTIONS INSTRUCTION        {} |
    INSTRUCTION                     {};

INSTRUCTION:
    INIT_ID TOK_semicolon           {} |
    ID_ASIGN TOK_semicolon          {} |
    INCR_DECR TOK_semicolon         {} |
    NEW_ARRAY TOK_semicolon         {} |
    ARRAY_ASIGN TOK_semicolon       {} |
    IF_STRCT                        {} |
    SWITCH_STRCT                    {} |
    RW_break TOK_semicolon          {} |
    RW_continue TOK_semicolon       {} |
    LOOP                            {} |
    INCR_DECR TOK_semicolon         {};

INIT_ID:
    TYPE LIST_ID                    {};

LIST_ID:
    LIST_ID TOK_comma ID_ASIGN            {} |
    ID_ASIGN                              {};

ID_ASIGN:
    TOK_id TOK_equal EXP                                {} |
    TOK_id                                              {};

NEW_ARRAY:
    TYPE TOK_lbrckt TOK_rbrckt TOK_id TOK_equal ARRAY_VALUE         {} |
    RW_list TOK_less TYPE TOK_great TOK_id TOK_equal LIST_VALUE     {};

ARRAY_VALUE:
    RW_new TYPE TOK_lbrckt EXP TOK_rbrckt   {} |
    TOK_lbrc VALUE_LIST TOK_rbrc            {};

LIST_VALUE:
    RW_new RW_list TOK_less TYPE TOK_great  {};

ARRAY_ASIGN:
    TOK_id TOK_lbrckt EXP TOK_rbrckt TOK_equal EXP      {} |
    TOK_id TOK_dot RW_add TOK_lpar EXP TOK_rpar         {} |
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
    UPDATE_FOR TOK_comma UPDATE   {} |
    UPDATE              {};

UPDATE:
    INCR_DECR       {} |
    ID_ASIGN_FOR    {};

ID_ASIGN_FOR:
    TOK_id TOK_equal EXP    {};

BLOCK:
    TOK_lbrc INSTRUCTIONS TOK_rbrc      {} |
    TOK_lbrc TOK_rbrc                   {};

EXP:
    EXP TOK_plus  EXP                                       {} |
    EXP TOK_minus EXP                                       {} |
    EXP TOK_mult  EXP                                       {} |
    EXP TOK_div   EXP                                       {} |
    EXP TOK_mod   EXP                                       {} |
    TOK_minus EXP %prec uminus                              {} |
    TOK_lpar EXP TOK_rpar                                   {} |
    EXP TOK_equalequal EXP                                  {} |
    EXP TOK_notequal   EXP                                  {} |
    EXP TOK_less       EXP                                  {} |
    EXP TOK_great      EXP                                  {} |
    EXP TOK_lessequal  EXP                                  {} |
    EXP TOK_greatequal EXP                                  {} |
    EXP TOK_or  EXP                                         {} |
    EXP TOK_and EXP                                         {} |
    TOK_not EXP                                             {} |
    TOK_lpar TYPE TOK_rpar EXP                              {} |
    EXP TOK_question EXP TOK_colon EXP                      {} |
    TOK_id TOK_lbrckt EXP TOK_rbrckt                        {} |
    TOK_id TOK_lbrckt TOK_lbrckt EXP TOK_rbrckt TOK_rbrckt  {} |
    INCR_DECR                                               {} |
    TOK_id                                                  {} |
    TOK_double                                              {} |
    TOK_integer                                             {} |
    TOK_string                                              {} |
    TOK_char                                                {} |
    RW_true                                                 {} |
    RW_false                                                {};

INCR_DECR:
    TOK_id TOK_incr        {} |
    TOK_id TOK_decr        {};

TYPE:
    RW_int          {} |
    RW_double       {} |
    RW_boolean      {} |
    RW_char         {} |
    RW_string       {};