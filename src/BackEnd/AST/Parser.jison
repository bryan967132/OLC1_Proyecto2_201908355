//análisis léxico
%lex
%options case-insensitive

char ([^\n\"\\]|\\.)

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
'add'                                   {return 'RW_add'}
'toLower'                               {return 'RW_toLower'}
'toUpper'                               {return 'RW_toUpper'}
'length'                                {return 'RW_length'}
'truncate'                              {return 'RW_truncate'}
'round'                                 {return 'RW_round'}
'typeOf'                                {return 'RW_typeOf'}
'toString'                              {return 'RW_toString'}
'toCharArray'                           {return 'RW_toCharArray'}
'print'                                 {return 'RW_print'}
//expresiones regulares
\"{char}*\"                             {yytext = yytext.substr(1, yyleng - 2);return 'TK_string'; }
\'{char}\'                              {yytext = yytext.substr(1, yyleng - 2);return 'TK_char'; }
[a-zA-Z_][a-zA-Z0-9_]*                  {return 'TK_id'}
[0-9]+\.[0-9]+\b                        {return 'TK_double'}
[0-9]+\b                                {return 'TK_integer'}
//simbolos
"++"                                    {return 'TK_incr'}
"--"                                    {return 'TK_decr'}
'+'                                     {return 'TK_plus'}
'-'                                     {return 'TK_minus'}
'*'                                     {return 'TK_mult'}
'/'                                     {return 'TK_div'}
'^'                                     {return 'TK_pow'}
'%'                                     {return 'TK_mod'}
'('                                     {return 'TK_lpar'}
')'                                     {return 'TK_rpar'}
'['                                     {return 'TK_lbrckt'}
']'                                     {return 'TK_rbrckt'}
'{'                                     {return 'TK_lbrc'}
'}'                                     {return 'TK_rbrc'}
'=='                                    {return 'TK_equalequal'}
'='                                     {return 'TK_equal'}
'.'                                     {return 'TK_dot'}
','                                     {return 'TK_comma'}
':'                                     {return 'TK_colon'}
';'                                     {return 'TK_semicolon'}
'||'                                    {return 'TK_or'}
'&&'                                    {return 'TK_and'}
'!='                                    {return 'TK_notequal'}
'!'                                     {return 'TK_not'}
'<='                                    {return 'TK_lessequal'}
'>='                                    {return 'TK_greatequal'}
'<'                                     {return 'TK_less'}
'>'                                     {return 'TK_great'}
'?'                                     {return 'TK_question'}
.                                       {}
<<EOF>>                                 {return 'EOF'}
/lex

%{
    let {Node} = require('../AST/Node')
%}
//precedencia de operadores
%left 'TK_question' 'TK_colon'
%left 'TK_or'
%left 'TK_and'
%right 'TK_not'
%left 'TK_equalequal' 'TK_notequal'
%left 'TK_less' 'TK_lessequal' 'TK_great' 'TK_greatequal'
%left 'TK_plus' 'TK_minus'
%left 'TK_mult' 'TK_div' 'TK_mod'
%nonassoc 'TK_pow'
%right TK_uminus
%left 'TK_incr' 'TK_decr'
%left 'TK_dot' 'TK_lbrckt' 'TK_rbrckt' 'TK_lpar' 'TK_rpar'

//análisis sintáctico
%start INIT

%%

INIT :
    INSTRUCTIONS EOF {
        $$ = new Node('INIT');
        $$.pushChild($1);
        return $$;
    } |
    EOF              {
        $$ = new Node('INIT');
        $$.pushChild(new Node('EOF'))
        return $$;
    } ;

INSTRUCTIONS :
    INSTRUCTIONS INSTRUCTION {
        $$ = new Node('INSTRUCTIONS');
        $$.pushChild($1)
        $$.pushChild($2)
    } |
    INSTRUCTION              {
        $$ = $1
    } ;

INSTRUCTION :
    MAINMETHOD                   {$$ = $1} |
    INITID TK_semicolon          {$$ = $1} |
    IDASIGN TK_semicolon         {$$ = $1} |
    NEWARRAY TK_semicolon        {$$ = $1} |
    ARRAYASIGN TK_semicolon      {$$ = $1} |
    IF                           {$$ = $1} |
    SWITCH                       {$$ = $1} |
    LOOP                         {$$ = $1} |
    FUNCTION                     {$$ = $1} |
    CALLFUNCTION TK_semicolon    {
        $$ = new Node('CALL_FUNC')
        $$.pushChild($1[0])
        if($1[2]) {
            $$.pushChild($1[2])
        }
    } |
    NATIVEFUNCTIONS TK_semicolon {
        $$ = new Node('NATIVE')
        $$.pushChild($1[0])
        if($1[2]) {
            $$.pushChild($1[2])
        }
    } |
    INCDEC TK_semicolon          {
        $$ = new Node('INCDEC')
        $$.pushChild($1[0])
        $$.pushChild($1[1])
    } |
    RW_break TK_semicolon        {
        $$ = new Node('BREAK')
        $$.pushChild(new Node($1))
    } |
    RW_continue TK_semicolon     {
        $$ = new Node('CONTINUE')
        $$.pushChild(new Node($1))
    } |
    RW_return TK_semicolon       {
        $$ = new Node('RETURN')
        $$.pushChild(new Node($1))
    } |
    RW_return EXP TK_semicolon   {
        $$ = new Node('RETURN')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
    } |
    error ;

MAINMETHOD :
    RW_main CALLFUNCTION TK_semicolon {
        $$ = new Node('MAINMETHOD')
        $$.pushChild(new Node($1))
        $$.pushChild($2[0])
        if($2[2]) {
            $$.pushChild($2[2])
        }
    } ;

INITID :
    TYPE TK_id TK_equal EXP {
        $$ = new Node('INITID')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($4)
    } |
    TYPE TK_id              {
        $$ = new Node('INITID')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
    } ;

IDASIGN :
    TK_id TK_equal EXP {
        $$ = new Node('ASIGN_ID')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
    } ;

NEWARRAY :
    TYPE TK_lbrckt TK_rbrckt TK_id TK_equal ARRAYVALUE     {
        $$ = new Node('NEWARRAY')
        $$.pushChild($1)
        $$.pushChild(new Node($4))
        $$.pushChild($6)
    } |
    RW_list TK_less TYPE TK_great TK_id TK_equal LISTVALUE {
        $$ = new Node('NEW_LIST')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
        $$.pushChild(new Node($5))
        $$.pushChild($7)
    } ;

ARRAYVALUE :
    RW_new TYPE TK_lbrckt EXP TK_rbrckt {
        $$ = new Node('VALUE')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild($4)
    } |
    TK_lbrc VALUELIST TK_rbrc           {$$ = $2} |
    TK_lbrc TK_rbrc                     {$$ = new Node('VALUES')} ;

LISTVALUE :
    RW_new RW_list TK_less TYPE TK_great {
        $$ = new Node('VALUE')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($4)
    } |
    RW_toCharArray TK_lpar EXP TK_rpar   {
        $$ = new Node('LISTVALUE')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
    } ;

ARRAYASIGN :
    TK_id TK_lbrckt EXP TK_rbrckt TK_equal EXP                     {
        $$ = new Node('ASIGN_ARRAY')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
        $$.pushChild($6)
    } |
    TK_id TK_dot RW_add TK_lpar EXP TK_rpar                        {
        $$ = new Node('ADD')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($3))
        $$.pushChild($5)
    } |
    TK_id TK_lbrckt TK_lbrckt EXP TK_rbrckt TK_rbrckt TK_equal EXP {
        $$ = new Node('ASIGN_ARRAY')
        $$.pushChild(new Node($1))
        $$.pushChild($4)
        $$.pushChild(new Node($7))
        $$.pushChild($8)
    } ;

VALUELIST :
    VALUELIST TK_comma EXP {
        $$.pushChild($3)
    } |
    EXP                    {
        $$ = new Node('VALUES')
        $$.pushChild($1)
    } ;

IF :
    RW_if TK_lpar EXP TK_rpar BLOCK               {
        $$ = new Node('IF')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
        if($5[1]) {
            $$.pushChild($5[1])
        }
    } |
    RW_if TK_lpar EXP TK_rpar BLOCK RW_else BLOCK {
        $$ = new Node('IF')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
        if($5[1]) {
            $$.pushChild($5[1])
        }
        $$.pushChild(new Node($6))
        if($7[1]) {
            $$.pushChild($7[1])
        }
    } |
    RW_if TK_lpar EXP TK_rpar BLOCK RW_else IF    {
        $$ = new Node('IF')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
        if($5[1]) {
            $$.pushChild($5[1])
        }
        $$.pushChild(new Node($6))
        $$.pushChild($7)
    } ;

SWITCH :
    RW_switch TK_lpar EXP TK_rpar TK_lbrc CASEBLOCK TK_rbrc {
        $$ = new Node('SWITCH')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
        $$.pushChild($6)
    } ;

CASEBLOCK :
    CASELIST DEFAULT {
        $$ = new Node('CASES_BLOCK')
        $$.pushChild($1)
        $$.pushChild($2)
    } |
    CASELIST         {
        $$ = new Node('CASES_BLOCK')
        $$.pushChild($1)
    } |
    DEFAULT          {
        $$ = new Node('CASES_BLOCK')
        $$.pushChild($1)
    } ;

CASELIST :
    CASELIST CASE {
        $$ = new Node('CASES')
        $$.pushChild($1)
        $$.pushChild($2)
    } |
    CASE          {$$ = $1} ;

CASE :
    RW_case EXP TK_colon INSTRUCTIONS {
        $$ = new Node('CASE')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild($4)
    } |
    RW_case EXP TK_colon              {
        $$ = new Node('CASE')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
    } ;

DEFAULT :
    RW_default TK_colon INSTRUCTIONS {
        $$ = new Node('DEFAULT')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
    } |
    RW_default TK_colon              {
        $$ = new Node('DEFAULT')
        $$.pushChild(new Node($1))
    } ;

LOOP :
    RW_while TK_lpar EXP TK_rpar BLOCK                     {
        $$ = new Node('LOOP')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
        if($5[1]) {
            $$.pushChild($5[1])
        }
    } |
    RW_do BLOCK RW_while TK_lpar EXP TK_rpar TK_semicolon {
        $$ = new Node('LOOP')
        $$.pushChild(new Node($1))
        if($2[1]) {
            $$.pushChild($2[1])
        }
        $$.pushChild(new Node($3))
        $$.pushChild($5)
    } |
    RW_for TK_lpar FORARGS TK_rpar BLOCK                  {
        $$ = new Node('LOOP')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
        if($5[1]) {
            $$.pushChild($5[1])
        }
    } ;

FORARGS :
    IDASIGNFOR TK_semicolon EXP TK_semicolon UPDATE {
        $$ = new Node('ARGS')
        $$.pushChild($1)
        $$.pushChild($3)
        $$.pushChild($5)
    } ;

IDASIGNFOR :
    TYPE TK_id TK_equal EXP {
        $$ = new Node('INITID')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($4)
    } |
    IDASIGN                 {
        $$ = new Node('ASIGN_ID')
        $$.pushChild($1)
    } ;

UPDATE :
    INCDEC  {
        $$ = new Node('INCDEC')
        $$.pushChild($1[0])
        $$.pushChild($1[1])
    } |
    IDASIGN {
        $$ = $1
    } ;

FUNCTION :
    TYPE TK_id TK_lpar PARAMETERS TK_rpar BLOCK    {
        $$ = new Node('FUNCTION')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($4)
        if($6[1]) {
            $$.pushChild($6[1])
        }
        
    } |
    RW_void TK_id TK_lpar PARAMETERS TK_rpar BLOCK {
        $$ = new Node('FUNCTION')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        $$.pushChild($4)
        if($6[1]) {
            $$.pushChild($6[1])
        }
    } |
    TYPE TK_id TK_lpar TK_rpar BLOCK               {
        $$ = new Node('FUNCTION')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        if($5[1]) {
            $$.pushChild($5[1])
        }
    } |
    RW_void TK_id TK_lpar TK_rpar BLOCK            {
        $$ = new Node('FUNCTION')
        $$.pushChild(new Node($1))
        $$.pushChild(new Node($2))
        if($5[1]) {
            $$.pushChild($5[1])
        }
    } ;

PARAMETERS :
    PARAMETERS TK_comma PARAMETER {
        $$.pushChild($3)
    } |
    PARAMETER                     {
        $$ = new Node('PARAMS')
        $$.pushChild($1)
    } ;

PARAMETER :
    TYPE TK_id {
        $$ = new Node('PARAM')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
    } ;

BLOCK :
    TK_lbrc INSTRUCTIONS TK_rbrc {$$ = [new Node($1), $2, new Node($3)]       } |
    TK_lbrc TK_rbrc              {$$ = [new Node($1), undefined, new Node($2)]} ;

CALLFUNCTION :
    TK_id TK_lpar LISTARGS TK_rpar {$$ = [new Node($1), new Node($2), $3, new Node($4)]       } |
    TK_id TK_lpar TK_rpar          {$$ = [new Node($1), new Node($2), undefined, new Node($3)]} ;

LISTARGS :
    LISTARGS TK_comma EXP {
        $$.pushChild($3)
    } |
    EXP                   {
        $$ = new Node('ARGS')
        $$.pushChild($1)
    } ;

NATIVEFUNCTIONS :
    RW_print TK_lpar EXP TK_rpar {$$ = [new Node($1), new Node($2), $3, new Node($4)]       } |
    RW_print TK_lpar TK_rpar     {$$ = [new Node($1), new Node($2), undefined, new Node($3)]} |
    NATIVESFUNCTIONSEXP          {$$ = $1} ;

NATIVESFUNCTIONSEXP :
    RW_toLower TK_lpar EXP TK_rpar     {$$ = [new Node($1), new Node($2), $3, new Node($4)]} |
    RW_toUpper TK_lpar EXP TK_rpar     {$$ = [new Node($1), new Node($2), $3, new Node($4)]} |
    RW_length TK_lpar EXP TK_rpar      {$$ = [new Node($1), new Node($2), $3, new Node($4)]} |
    RW_truncate TK_lpar EXP TK_rpar    {$$ = [new Node($1), new Node($2), $3, new Node($4)]} |
    RW_round TK_lpar EXP TK_rpar       {$$ = [new Node($1), new Node($2), $3, new Node($4)]} |
    RW_typeOf TK_lpar EXP TK_rpar      {$$ = [new Node($1), new Node($2), $3, new Node($4)]} |
    RW_toString TK_lpar EXP TK_rpar    {$$ = [new Node($1), new Node($2), $3, new Node($4)]} |
    RW_toCharArray TK_lpar EXP TK_rpar {$$ = [new Node($1), new Node($2), $3, new Node($4)]} ;

EXP :
    ARITHMETICS         {$$ = $1} |
    RELATIONALS         {$$ = $1} |
    LOGICS              {$$ = $1} |
    TERNARY             {$$ = $1} |
    CAST                {$$ = $1} |
    ACCESSVECTOR        {$$ = $1} |
    NATIVESFUNCTIONSEXP {
        $$ = new Node('EXP')
        $$.pushChild($1[0])
        $$.pushChild($1[2])
    } |
    CALLFUNCTION        {
        $$ = new Node('EXP')
        $$.pushChild($1[0])
        if($1[2]) {
            $$.pushChild($1[2])
        }
    } |
    INCDEC              {
        $$ = new Node('EXP')
        $$.pushChild($1[0])
        $$.pushChild($1[1])
    } |
    TK_id               {$$ = new Node(yytext)} |
    TK_integer          {$$ = new Node(yytext)} |
    TK_double           {$$ = new Node(yytext)} |
    TK_string           {$$ = new Node(yytext)} |
    TK_char             {$$ = new Node(yytext)} |
    RW_true             {$$ = new Node(yytext)} |
    RW_false            {$$ = new Node(yytext)} |
    TK_lpar EXP TK_rpar {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
        $$.pushChild(new Node($3))
    } ;

ARITHMETICS :
    EXP TK_plus  EXP             {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_minus EXP             {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_mult  EXP             {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_div   EXP             {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_pow   EXP             {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_mod   EXP             {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    TK_minus EXP %prec TK_uminus {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
    } ;

RELATIONALS :
    EXP TK_equalequal EXP {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_notequal   EXP {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_less       EXP {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_great      EXP {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_lessequal  EXP {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_greatequal EXP {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } ;

LOGICS :
    EXP TK_or  EXP {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    EXP TK_and EXP {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
    } |
    TK_not EXP     {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild($2)
    } ;

TERNARY :
    EXP TK_question EXP TK_colon EXP {
        $$ = new Node('EXP')
        $$.pushChild($1)
        $$.pushChild(new Node($2))
        $$.pushChild($3)
        $$.pushChild(new Node($4))
        $$.pushChild($5)
    } ;

CAST :
    TK_lpar TYPE TK_rpar EXP {
        $$ = new Node('EXP')
        $$.pushChild($2)
        $$.pushChild($4)
    } ;

ACCESSVECTOR :
    TK_id TK_lbrckt EXP TK_rbrckt                     {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild($3)
    } |
    TK_id TK_lbrckt TK_lbrckt EXP TK_rbrckt TK_rbrckt {
        $$ = new Node('EXP')
        $$.pushChild(new Node($1))
        $$.pushChild($4)
    } ;


INCDEC :
    TK_id TK_incr {$$ = [new Node($1), new Node($2)]} |
    TK_id TK_decr {$$ = [new Node($1), new Node($2)]} ;

TYPE :
    RW_int      {$$ = new Node(yytext)} |
    RW_double   {$$ = new Node(yytext)} |
    RW_boolean  {$$ = new Node(yytext)} |
    RW_char     {$$ = new Node(yytext)} |
    RW_string   {$$ = new Node(yytext)} ;