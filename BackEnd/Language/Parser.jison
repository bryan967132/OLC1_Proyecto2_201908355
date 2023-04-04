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
\/\/.*                                  {/*comentario simple*/}
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]     {/*comentario multilínea*/}
//palabras reservadas
'int'                                   {return 'RW_int'}
'double'                                {return 'RW_double'}
'boolean'                               {return 'RW_boolean'}
'char'                                  {return 'RW_char'}
'string'                                {return 'RW_string'}
'true'                                  {return 'RW_true'}
'false'                                 {return 'RW_false'}
'print'                                 {return 'RW_print'}
'if'                                    {return 'RW_if'}
'new'                                   {return 'RW_new'}
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
'=='                                    {return 'TOK_equalequal'}
'='                                     {return 'TOK_equal'}
','                                     {return 'TOK_comma'}
':'                                     {return 'TOK_colon'}
';'                                     {return 'TOK_semicolon'}
'||'                                    {return 'TOK_or'}
'&&'                                    {return 'TOK_and'}
'!='                                    {return 'TOK_notequal'}
'!'                                     {return 'TOK_not'}
'<='                                    {return 'TOK_lessequal'}
'>='                                    {return 'TOK_greatequal'}
'>'                                     {return 'TOK_less'}
'<'                                     {return 'TOK_great'}
'{'                                     {return 'TOK_lbracket'}
'}'                                     {return 'TOK_rbracket'}
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
%start INI

%%

INI: BODY EOF {};

BODY:
    BODY SENTENCES      {} |
    SENTENCES           {};

SENTENCES:
    INIT_STATEMENTS_VARIABLE    {} |
    STATEMENTS_VARIABLE         {};

INIT_STATEMENTS_VARIABLE:
    TIPO     LIST_ID_INT      TOK_semicolon{};

TIPO:
    RW_int          {} |
    RW_double       {} |
    RW_boolean      {} |
    RW_char         {} |
    RW_string       {};

STATEMENTS_VARIABLE:
    ID TOK_semicolon                {};

LIST_ID_INT:
    LIST_ID_INT TOK_comma ID        {} |
    ID                              {};

LIST_ID_DOUBLE:
    LIST_ID_DOUBLE TOK_comma ID     {} |
    ID                              {};

ID:
    TOK_id TOK_equal EXP            {} |
    TOK_id                          {};

EXP:
    EXP TOK_plus  EXP               {} |
    EXP TOK_minus EXP               {} |
    EXP TOK_mult  EXP               {} |
    EXP TOK_div   EXP               {} |
    TOK_minus EXP %prec uminus      {} |
    TOK_lpar EXP TOK_rpar           {} |
    EXP TOK_equalequal EXP          {} |
    EXP TOK_notequal   EXP          {} |
    EXP TOK_less       EXP          {} |
    EXP TOK_great      EXP          {} |
    EXP TOK_lessequal  EXP          {} |
    EXP TOK_greatequal EXP          {} |
    EXP TOK_or  EXP                 {} |
    EXP TOK_and EXP                 {} |
    TOK_not EXP                     {} |
    TOK_id                          {} |
    TOK_double                      {} |
    TOK_integer                     {} |
    TOK_string                      {} |
    TOK_char                        {} |
    RW_true                         {} |
    RW_false                        {};