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
.                                       {}
<<EOF>>                                 {return 'EOF'}
/lex

%{
    let {Node} = require('../AST/Node')
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

INIT: INSTRUCTIONS EOF {
    $$ = new Node('INIT');
    $$.pushChild($1);
    return $$;
} ;

INSTRUCTIONS:
    INSTRUCTIONS INSTRUCTION      {
        $$ = new Node('INSTRUCTIONS');
        $$.pushChild($1)
        $$.pushChild($2)
    } |
    INSTRUCTION           {
        $$ = new Node('INSTRUCTIONS');
        $$.pushChild($1)
    } ;

INSTRUCTION:
    MAIN_METHOD                    {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
    } |
    INIT_ID TOK_semicolon          {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
    } |
    ID_ASIGN TOK_semicolon         {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
    } |
    NEW_ARRAY TOK_semicolon        {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
    } |
    ARRAY_ASIGN TOK_semicolon      {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
    } |
    IF_STRCT                       {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
    } |
    SWITCH_STRCT                   {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
    } |
    LOOP                           {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
    } |
    FUNCTION                       {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
    } |
    CALLED_FUNCTION TOK_semicolon  {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
    } |
    NATIVES_FUNCTION TOK_semicolon {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1[0])
        $$.pushChild($1[1])
        if($1[2]) {
            $$.pushChild($1[2])
        }
        $$.pushChild($1[3])
        $$.pushChild(new Node($2))
    } |
    INCR_DECR TOK_semicolon        {
        $$ = new Node('INSTRUCTION')
        $$.pushChild($1[0])
        $$.pushChild($1[1])
        $$.pushChild(new Node($2))
    } |
    RW_break TOK_semicolon         {
        $$ = new Node('INSTRUCTION')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
    } |
    RW_continue TOK_semicolon      {
        $$ = new Node('INSTRUCTION')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
    } |
    RW_return TOK_semicolon        {
        $$ = new Node('INSTRUCTION')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
    } |
    RW_return EXP TOK_semicolon    {
        $$ = new Node('INSTRUCTION')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild(new Node($3))
    } |
    error                          ;

MAIN_METHOD:
    RW_main CALLED_FUNCTION TOK_semicolon {
        $$ = new Node('MAIN_METHOD')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild(new Node($3))
    } ;

INIT_ID:
    TYPE TOK_id TOK_equal EXP {
        $$ = new Node('INIT_ID')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild($4)
    } |
    TYPE TOK_id               {
        $$ = new Node('INIT_ID')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
    } ;

ID_ASIGN:
    TOK_id TOK_equal EXP {
        $$ = new Node('ASIGN_ID')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } ;

NEW_ARRAY:
    TYPE TOK_lbrckt TOK_rbrckt TOK_id TOK_equal ARRAY_VALUE     {
        $$ = new Node('NEW_ARRAY')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild(new Node($4))
        $$.pushChild(new Node($5))
        $$.pushChild($6)
    } |
    RW_list TOK_less TYPE TOK_great TOK_id TOK_equal LIST_VALUE {
        $$ = new Node('NEW_ARRAY')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild(new Node($5))
        $$.pushChild(new Node($6))
        $$.pushChild($7)
    } ;

ARRAY_VALUE:
    RW_new TYPE TOK_lbrckt EXP TOK_rbrckt {
        $$ = new Node('ARRAY_VALUE')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild(new Node($3))
        $$.pushChild($4)
        $$.pushChild(new Node($5))
    } |
    TOK_lbrc VALUE_LIST TOK_rbrc          {
        $$ = new Node('ARRAY_VALUE')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild(new Node($3))
    } ;

LIST_VALUE:
    RW_new RW_list TOK_less TYPE TOK_great {
        $$ = new Node('LIST_VALUE')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild($4)
        $$.pushChild(new Node($5))
    } |
    FN_toCharArray TOK_lpar EXP TOK_rpar   {
        $$ = new Node('LIST_VALUE')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
    } ;

ARRAY_ASIGN:
    TOK_id TOK_lbrckt EXP TOK_rbrckt TOK_equal EXP                       {
        $$ = new Node('ASIGN_ARRAY')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild(new Node($5))
        $$.pushChild($6)
    } |
    TOK_id TOK_dot FN_add TOK_lpar EXP TOK_rpar                          {
        $$ = new Node('ASIGN_ARRAY')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild(new Node($4))
        $$.pushChild($5)
        $$.pushChild(new Node($6))
    } |
    TOK_id TOK_lbrckt TOK_lbrckt EXP TOK_rbrckt TOK_rbrckt TOK_equal EXP {
        $$ = new Node('ASIGN_ARRAY')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild($4)
        $$.pushChild(new Node($5))
        $$.pushChild(new Node($6))
        $$.pushChild(new Node($7))
        $$.pushChild($8)
    } ;

VALUE_LIST:
    VALUE_LIST TOK_comma EXP {
        $$ = new Node('VALUES')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP                      {
        $$ = new Node('VALUE')
        $$.pushChild(new Node($1))
    } ;

IF_STRCT:
    RW_if TOK_lpar EXP TOK_rpar BLOCK                  {
        $$ = new Node('IF_STRCT')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild($5[0])
        if($5[1]) {
            $$.pushChild($5[1])
        }
        $$.pushChild($5[2])
    } |
    RW_if TOK_lpar EXP TOK_rpar BLOCK RW_else BLOCK    {
        $$ = new Node('IF_STRCT')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild($5[0])
        if($5[1]) {
            $$.pushChild($5[1])
        }
        $$.pushChild($5[2])
        $$.pushChild(new Node($6))
        $$.pushChild($7[0])
        if($7[1]) {
            $$.pushChild($7[1])
        }
        $$.pushChild($7[2])
    } |
    RW_if TOK_lpar EXP TOK_rpar BLOCK RW_else IF_STRCT {
        $$ = new Node('IF_STRCT')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild($5[0])
        if($5[1]) {
            $$.pushChild($5[1])
        }
        $$.pushChild($5[2])
        $$.pushChild(new Node($6))
        $$.pushChild($7)
    } ;

SWITCH_STRCT:
    RW_switch TOK_lpar EXP TOK_rpar TOK_lbrc CASE_BLOCK TOK_rbrc {
        $$ = new Node('SWITCH_STRCT')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild(new Node($5))
        $$.pushChild($6)
        $$.pushChild(new Node($7))
    } ;

CASE_BLOCK:
    CASE_LIST DEFAULT {
        $$ = new Node('CASES_BLOCK')
        $$.pushChild($1)
        $$.pushChild($2)
    } |
    CASE_LIST         {
        $$ = new Node('CASES_BLOCK')
        $$.pushChild($1)
    } |
    DEFAULT           {
        $$ = new Node('CASES_BLOCK')
        $$.pushChild($1)
    } ;

CASE_LIST:
    CASE_LIST CASE {
        $$ = new Node('CASES')
        $$.pushChild($1)
        $$.pushChild($2)
    } |
    CASE           {
        $$ = $1
    } ;

CASE:
    RW_case EXP TOK_colon INSTRUCTIONS {
        $$ = new Node('CASE')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild(new Node($3))
        $$.pushChild($4)
    } |
    RW_case EXP TOK_colon              {
        $$ = new Node('CASE')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild(new Node($3))
    } ;

DEFAULT:
    RW_default TOK_colon INSTRUCTIONS {
        $$ = new Node('DEFAULT')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    RW_default TOK_colon              {
        $$ = new Node('DEFAULT')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
    } ;

LOOP:
    RW_while TOK_lpar EXP TOK_rpar BLOCK                     {
        $$ = new Node('LOOP')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild($5[0])
        if($5[1]) {
            $$.pushChild($5[1])
        }
        $$.pushChild($5[2])
    } |
    RW_do BLOCK RW_while TOK_lpar EXP TOK_rpar TOK_semicolon {
        $$ = new Node('LOOP')
        $$.pushChild(new Node($1))
        $$.pushChild($2[0])
        if($2[1]) {
            $$.pushChild($2[1])
        }
        $$.pushChild($2[2])
        $$.pushChild(new Node($3))
        $$.pushChild(new Node($4))
        $$.pushChild($5)
        $$.pushChild(new Node($6))
        $$.pushChild(new Node($7))
    } |
    RW_for TOK_lpar FOR_ARGS TOK_rpar BLOCK                  {
        $$ = new Node('LOOP')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild($5[0])
        if($5[1]) {
            $$.pushChild($5[1])
        }
        $$.pushChild($5[2])
    } ;

FOR_ARGS:
    ID_ASIGN_FOR TOK_semicolon EXP TOK_semicolon UPDATE {
        $$ = new Node('ARGS')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild($5)
    } ;

ID_ASIGN_FOR:
    TYPE TOK_id TOK_equal EXP {
        $$ = new Node('INIT_ID')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild($4)
    } |
    ID_ASIGN                  {
        $$ = new Node('ASIGN_ID')
        $$.pushChild($1)
    } ;

UPDATE:
    INCR_DECR {
        $$ = new Node('INCR_DECR')
        $$.pushChild($1[0])
        $$.pushChild($1[1])
    } |
    ID_ASIGN  {
        $$ = $1
    } ;

FUNCTION:
    TYPE TOK_id TOK_lpar PARAMETERS TOK_rpar BLOCK      {
        $$ = new Node('FUNCTION')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild($4)
        $$.pushChild(new Node($5))
        $$.pushChild($6[0])
        if($6[1]) {
            $$.pushChild($6[1])
        }
        $$.pushChild($6[2])
        
    } |
    RW_void TOK_id TOK_lpar PARAMETERS TOK_rpar BLOCK   {
        $$ = new Node('FUNCTION')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild($4)
        $$.pushChild(new Node($5))
        $$.pushChild($6[0])
        if($6[1]) {
            $$.pushChild($6[1])
        }
        $$.pushChild($6[2])
    } |
    TYPE TOK_id TOK_lpar TOK_rpar BLOCK                 {
        $$ = new Node('FUNCTION')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild(new Node($4))
        $$.pushChild($5[0])
        if($5[1]) {
            $$.pushChild($5[1])
        }
        $$.pushChild($5[2])
    } |
    RW_void TOK_id TOK_lpar TOK_rpar BLOCK              {
        $$ = new Node('FUNCTION')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild(new Node($4))
        $$.pushChild($5[0])
        if($5[1]) {
            $$.pushChild($5[1])
        }
        $$.pushChild($5[2])
    } ;

PARAMETERS:
    PARAMETERS TOK_comma PARAMETER {
        $$ = new Node('PARAMS')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    PARAMETER                      {
        $$ = new Node('PARAMS')
        $$.pushChild($1)
    } ;

PARAMETER:
    TYPE TOK_id {
        $$ = new Node('PARAM')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
    } ;

BLOCK:
    TOK_lbrc INSTRUCTIONS TOK_rbrc {$$ = [new Node($1),$2,new Node($3)]} |
    TOK_lbrc TOK_rbrc              {$$ = [new Node($1),undefined,new Node($3)]} ;

CALLED_FUNCTION:
    TOK_id TOK_lpar LIST_ARGS TOK_rpar {
        $$ = new Node('CALL_FUNC')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
    } |
    TOK_id TOK_lpar TOK_rpar           {
        $$ = new Node('CALL_FUNC')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
    } ;

LIST_ARGS:
    LIST_ARGS TOK_comma EXP {
        $$ = new Node('ARGS')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP                     {
        $$ = new Node('ARGS')
        $$.pushChild($1)
    } ;

NATIVES_FUNCTION:
    FN_print TOK_lpar EXP TOK_rpar {$$ = [new Node($1),new Node($2),$3,new Node($4)]} |
    FN_print TOK_lpar TOK_rpar     {$$ = [new Node($1),new Node($2),undefined,new Node($4)]} |
    NATIVES_FUNCTION_EXP           {$$ = $1} ;

NATIVES_FUNCTION_EXP:
    FN_toLower TOK_lpar EXP TOK_rpar     {$$ = [new Node($1),new Node($2),$3,new Node($4)]} |
    FN_toUpper TOK_lpar EXP TOK_rpar     {$$ = [new Node($1),new Node($2),$3,new Node($4)]} |
    FN_length TOK_lpar EXP TOK_rpar      {$$ = [new Node($1),new Node($2),$3,new Node($4)]} |
    FN_truncate TOK_lpar EXP TOK_rpar    {$$ = [new Node($1),new Node($2),$3,new Node($4)]} |
    FN_round TOK_lpar EXP TOK_rpar       {$$ = [new Node($1),new Node($2),$3,new Node($4)]} |
    FN_typeOf TOK_lpar EXP TOK_rpar      {$$ = [new Node($1),new Node($2),$3,new Node($4)]} |
    FN_toString TOK_lpar EXP TOK_rpar    {$$ = [new Node($1),new Node($2),$3,new Node($4)]} |
    FN_toCharArray TOK_lpar EXP TOK_rpar {$$ = [new Node($1),new Node($2),$3,new Node($4)]} ;

EXP:
    EXP TOK_plus  EXP                                      {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_minus EXP                                      {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_mult  EXP                                      {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_div   EXP                                      {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_pow   EXP                                      {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_mod   EXP                                      {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    TOK_minus EXP %prec uminus                             {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
    } |
    TOK_lpar EXP TOK_rpar                                  {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild(new Node($3))
    } |
    EXP TOK_equalequal EXP                                 {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_notequal   EXP                                 {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_less       EXP                                 {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_great      EXP                                 {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_lessequal  EXP                                 {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_greatequal EXP                                 {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_or  EXP                                        {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TOK_and EXP                                        {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    TOK_not EXP                                            {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
    } |
    TOK_lpar TYPE TOK_rpar EXP                             {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild(new Node($3))
        $$.pushChild($4)
    } |
    EXP TOK_question EXP TOK_colon EXP                     {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild($5)
    } |
    TOK_id TOK_lbrckt EXP TOK_rbrckt                       {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
    } |
    TOK_id TOK_lbrckt TOK_lbrckt EXP TOK_rbrckt TOK_rbrckt {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild(new Node($3))
        $$.pushChild($4)
        $$.pushChild(new Node($5))
        $$.pushChild(new Node($6))
    } |
    CALLED_FUNCTION                                        {
        $$ = new Node('EXP')
        $$.pushChild($1)
    } |
    NATIVES_FUNCTION_EXP                                   {
        $$ = new Node('EXP')
        $$.pushChild($1[0])
        $$.pushChild($1[1])
        $$.pushChild($1[2])
        $$.pushChild($1[3])
    } |
    INCR_DECR                                              {
        $$ = new Node('EXP')
        $$.pushChild($1[0])
        $$.pushChild($1[1])
    } |
    TOK_id                                                 {
        $$ = new Node('ID')
        $$.pushChild(new Node(yytext))
    } |
    TOK_integer                                            {
        $$ = new Node('int')
        $$.pushChild(new Node(yytext))
    } |
    TOK_double                                             {
        $$ = new Node('double')
        $$.pushChild(new Node(yytext))
    } |
    TOK_string                                             {
        $$ = new Node('string')
        $$.pushChild(new Node(yytext))
    } |
    TOK_char                                               {
        $$ = new Node('char')
        $$.pushChild(new Node(yytext))
    } |
    RW_true                                                {
        $$ = new Node('boolean')
        $$.pushChild(new Node(yytext))
    } |
    RW_false                                               {
        $$ = new Node('boolean')
        $$.pushChild(new Node(yytext))
    } ;

INCR_DECR:
    TOK_id TOK_incr {$$ = [new Node($1),new Node($2)]} |
    TOK_id TOK_decr {$$ = [new Node($1),new Node($2)]} ;

TYPE:
    RW_int      {$$ = new Node(yytext)} |
    RW_double   {$$ = new Node(yytext)} |
    RW_boolean  {$$ = new Node(yytext)} |
    RW_char     {$$ = new Node(yytext)} |
    RW_string   {$$ = new Node(yytext)} ;