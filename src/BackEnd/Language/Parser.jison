//Código JavaScript necesario
%{
    let {printErrors} = require('../Classes/Utils/Reports')
    let {Error} = require('../Classes/Utils/Error')
    let {TypeError} = require('../Classes/Utils/Error')
%}

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
.                                       {printErrors.push(new Error(yylloc.first_line, yylloc.first_column, TypeError.LEXICAL, `El caracter "${yytext}" no pertenece al lenguaje`))}
<<EOF>>                                 {return 'EOF'}
/lex
//Código JavaScript necesario
%{
    const {Type} = require('../Classes/Utils/Type')
    //Instrucciones
    const {Print} = require('../Classes/Instructions/Print')
    const {InitID} = require('../Classes/Instructions/InitID')
    const {AsignID} = require('../Classes/Instructions/AsignID')
    const {InitArray} = require('../Classes/Instructions/InitArray')
    const {InitList} = require('../Classes/Instructions/InitList')
    const {AsignArray} = require('../Classes/Instructions/AsignArray')
    const {AsignList} = require('../Classes/Instructions/AsignList')
    const {Add} = require('../Classes/Instructions/Add')
    const {Block} = require('../Classes/Instructions/Block')
    const {Function} = require('../Classes/Instructions/Function')
    const {If} = require('../Classes/Instructions/If')
    const {Break} = require('../Classes/Instructions/Break')
    const {Continue} = require('../Classes/Instructions/Continue')
    const {While} = require('../Classes/Instructions/While')
    const {DoWhile} = require('../Classes/Instructions/DoWhile')
    const {For} = require('../Classes/Instructions/For')
    const {Switch} = require('../Classes/Instructions/Switch')
    const {Case} = require('../Classes/Instructions/Case')
    const {MainMethod} = require('../Classes/Instructions/MainMethod')
    //Expresiones
    const {Primitive} = require('../Classes/Expressions/Primitive')
    const {Arithmetic} = require('../Classes/Expressions/Arithmetic')
    const {Logic} = require('../Classes/Expressions/Logic')
    const {Relational} = require('../Classes/Expressions/Relational')
    const {Ternary} = require('../Classes/Expressions/Ternary')
    const {AccessID} = require('../Classes/Expressions/AccessID')
    const {IncrDecr} = require('../Classes/Expressions/IncrDecr')
    const {NativeFunc} = require('../Classes/Expressions/NativeFunc')
    const {AccessArray} = require('../Classes/Expressions/AccessArray')
    const {AccessList} = require('../Classes/Expressions/AccessList')
    const {Cast} = require('../Classes/Expressions/Cast')
    const {Parameter} = require('../Classes/Expressions/Parameter')
    const {CallFunction} = require('../Classes/Expressions/CallFunction')
    const {Return} = require('../Classes/Expressions/Return')
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
    INSTRUCTIONS EOF {return $1} |
    EOF              {return []} ;

INSTRUCTIONS :
    INSTRUCTIONS INSTRUCTION {$$.push($2)} |
    INSTRUCTION              {$$ = [$1]  } ;

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
    CALLFUNCTION TK_semicolon    {$$ = $1} |
    NATIVEFUNCTIONS TK_semicolon {$$ = $1} |
    INCDEC TK_semicolon          {$$ = $1} |
    RW_break TK_semicolon        {$$ = new Break(@1.first_line, @1.first_column)            } |
    RW_continue TK_semicolon     {$$ = new Continue(@1.first_line, @1.first_column)         } |
    RW_return TK_semicolon       {$$ = new Return(@1.first_line, @1.first_column, undefined)} |
    RW_return EXP TK_semicolon   {$$ = new Return(@1.first_line, @1.first_column, $2)       } |
    error                        {printErrors.push(new Error(this._$.first_line, this._$.first_column, TypeError.SYNTAX, `No se esperaba "${yytext}"`))} ;

MAINMETHOD :
    RW_main CALLFUNCTION TK_semicolon {$$ = new MainMethod(@1.first_line, @1.first_column, $2)} ;

INITID :
    TYPE TK_id TK_equal EXP {$$ = new InitID(@1.first_line, @1.first_column, $2, $1, $4)       } |
    TYPE TK_id              {$$ = new InitID(@1.first_line, @1.first_column, $2, $1, undefined)} ;

IDASIGN :
    TK_id TK_equal EXP {$$ = new AsignID(@1.first_line, @1.first_column, $1, $3)} ;

NEWARRAY :
    TYPE TK_lbrckt TK_rbrckt TK_id TK_equal ARRAYVALUE     {$$ = new InitArray(@1.first_line, @1.first_column, $4, $1, $6[0], $6[1])} |
    RW_list TK_less TYPE TK_great TK_id TK_equal LISTVALUE {$$ = new InitList(@1.first_line, @1.first_column, $5, $3, $7)           } ;

ARRAYVALUE :
    RW_new TYPE TK_lbrckt EXP TK_rbrckt {$$ = [$4, undefined]} |
    TK_lbrc VALUELIST TK_rbrc           {$$ = [undefined, $2]} |
    TK_lbrc TK_rbrc                     {$$ = [undefined, []]} ;

LISTVALUE :
    RW_new RW_list TK_less TYPE TK_great {$$ = undefined} |
    RW_toCharArray TK_lpar EXP TK_rpar   {$$ = new NativeFunc(@1.first_line, @1.first_column, $1, $3)} ;

ARRAYASIGN :
    TK_id TK_lbrckt EXP TK_rbrckt TK_equal EXP                     {$$ = new AsignArray(@1.first_line, @1.first_column, $1, $3, $6)} |
    TK_id TK_dot RW_add TK_lpar EXP TK_rpar                        {$$ = new Add(@1.first_line, @1.first_column, $1, $5)           } |
    TK_id TK_lbrckt TK_lbrckt EXP TK_rbrckt TK_rbrckt TK_equal EXP {$$ = new AsignList(@1.first_line, @1.first_column, $1, $4, $8) } ;

VALUELIST :
    VALUELIST TK_comma EXP {$$.push($3)} |
    EXP                    {$$ = [$1]  } ;

IF :
    RW_if TK_lpar EXP TK_rpar BLOCK               {$$ = new If(@1.first_line, @1.first_column, $3, $5, undefined)} |
    RW_if TK_lpar EXP TK_rpar BLOCK RW_else BLOCK {$$ = new If(@1.first_line, @1.first_column, $3, $5, $7)       } |
    RW_if TK_lpar EXP TK_rpar BLOCK RW_else IF    {$$ = new If(@1.first_line, @1.first_column, $3, $5, $7)       } ;

SWITCH :
    RW_switch TK_lpar EXP TK_rpar TK_lbrc CASEBLOCK TK_rbrc {$$ = new Switch(@1.first_line, @1.first_column, $3, $6[0], $6[1])};

CASEBLOCK :
    CASELIST DEFAULT {$$ = [$1, $2]       } |
    CASELIST         {$$ = [$1, undefined]} |
    DEFAULT          {$$ = [undefined, $1]} ;

CASELIST :
    CASELIST CASE {$$.push($2)} |
    CASE          {$$ = [$1]  } ;

CASE :
    RW_case EXP TK_colon INSTRUCTIONS {$$ = new Case(@1.first_line, @1.first_column, $2, new Block(@4.first_line, @4.first_column, $4))} |
    RW_case EXP TK_colon              {$$ = new Case(@1.first_line, @1.first_column, $2, new Block(@4.first_line, @4.first_column, []))} ;

DEFAULT :
    RW_default TK_colon INSTRUCTIONS  {$$ = new Block(@1.first_line, @1.first_column, $3)} |
    RW_default TK_colon               {$$ = new Block(@1.first_line, @1.first_column, [])} ;

LOOP :
    RW_while TK_lpar EXP TK_rpar BLOCK                    {$$ = new While(@1.first_line, @1.first_column, $3, $5)} |
    RW_do BLOCK RW_while TK_lpar EXP TK_rpar TK_semicolon {$$ = new DoWhile(@1.first_line, @1.first_column, $5, $2)} |
    RW_for TK_lpar FORARGS TK_rpar BLOCK                  {$$ = new For(@1.first_line, @1.first_column, $3, $5)} ;

FORARGS :
    IDASIGNFOR TK_semicolon EXP TK_semicolon UPDATE {$$ = [$1, $3, $5]} ;

IDASIGNFOR :
    TYPE TK_id TK_equal EXP {$$ = new InitID(@1.first_line, @1.first_column, $2, $1, $4)} |
    IDASIGN                 {$$ = $1} ;

UPDATE :
    INCDEC  {$$ = $1} |
    IDASIGN {$$ = $1};

FUNCTION :
    TYPE TK_id TK_lpar PARAMETERS TK_rpar BLOCK    {$$ = new Function(@2.first_line, @2.first_column, $2, $4, $6, $1)       } |
    RW_void TK_id TK_lpar PARAMETERS TK_rpar BLOCK {$$ = new Function(@2.first_line, @2.first_column, $2, $4, $6, Type.NULL)} |
    TYPE TK_id TK_lpar TK_rpar BLOCK               {$$ = new Function(@2.first_line, @2.first_column, $2, [], $5, $1)       } |
    RW_void TK_id TK_lpar TK_rpar BLOCK            {$$ = new Function(@2.first_line, @2.first_column, $2, [], $5, Type.NULL)} ;

PARAMETERS :
    PARAMETERS TK_comma PARAMETER {$$.push($3)} |
    PARAMETER                     {$$ = [$1]  } ;

PARAMETER :
    TYPE TK_id {$$ = new Parameter(@2.first_line, @2.first_column, $2, $1)} ;

BLOCK :
    TK_lbrc INSTRUCTIONS TK_rbrc {$$ = new Block(@1.first_line, @1.first_column, $2)} |
    TK_lbrc TK_rbrc              {$$ = new Block(@1.first_line, @1.first_column, [])} ;

CALLFUNCTION :
    TK_id TK_lpar LISTARGS TK_rpar {$$ = new CallFunction(@1.first_line, @1.first_column, $1, $3)} |
    TK_id TK_lpar TK_rpar          {$$ = new CallFunction(@1.first_line, @1.first_column, $1, [])} ;

LISTARGS :
    LISTARGS TK_comma EXP {$$.push($3)} |
    EXP                   {$$ = [$1]  } ;

NATIVEFUNCTIONS :
    RW_print TK_lpar EXP TK_rpar {$$ = new Print(@1.first_line, @1.first_column, $3)       } |
    RW_print TK_lpar TK_rpar     {$$ = new Print(@1.first_line, @1.first_column, undefined)} |
    NATIVESFUNCTIONSEXP          {$$ = $1} ;

NATIVESFUNCTIONSEXP :
    RW_toLower TK_lpar EXP TK_rpar     {$$ = new NativeFunc(@1.first_line, @1.first_column, $1, $3)} |
    RW_toUpper TK_lpar EXP TK_rpar     {$$ = new NativeFunc(@1.first_line, @1.first_column, $1, $3)} |
    RW_length TK_lpar EXP TK_rpar      {$$ = new NativeFunc(@1.first_line, @1.first_column, $1, $3)} |
    RW_truncate TK_lpar EXP TK_rpar    {$$ = new NativeFunc(@1.first_line, @1.first_column, $1, $3)} |
    RW_round TK_lpar EXP TK_rpar       {$$ = new NativeFunc(@1.first_line, @1.first_column, $1, $3)} |
    RW_typeOf TK_lpar EXP TK_rpar      {$$ = new NativeFunc(@1.first_line, @1.first_column, $1, $3)} |
    RW_toString TK_lpar EXP TK_rpar    {$$ = new NativeFunc(@1.first_line, @1.first_column, $1, $3)} |
    RW_toCharArray TK_lpar EXP TK_rpar {$$ = new NativeFunc(@1.first_line, @1.first_column, $1, $3)} ;

EXP :
    ARITHMETICS         {$$ = $1} |
    RELATIONALS         {$$ = $1} |
    LOGICS              {$$ = $1} |
    TERNARY             {$$ = $1} |
    CAST                {$$ = $1} |
    ACCESSVECTOR        {$$ = $1} |
    NATIVESFUNCTIONSEXP {$$ = $1} |
    CALLFUNCTION        {$$ = $1} |
    INCDEC              {$$ = $1} |
    TK_id               {$$ = new AccessID(@1.first_line, @1.first_column, $1)} |
    TK_integer          {$$ = new Primitive(@1.first_line, @1.first_column, $1, Type.INT)    } |
    TK_double           {$$ = new Primitive(@1.first_line, @1.first_column, $1, Type.DOUBLE) } |
    TK_string           {$$ = new Primitive(@1.first_line, @1.first_column, $1, Type.STRING) } |
    TK_char             {$$ = new Primitive(@1.first_line, @1.first_column, $1, Type.CHAR)   } |
    RW_true             {$$ = new Primitive(@1.first_line, @1.first_column, $1, Type.BOOLEAN)} |
    RW_false            {$$ = new Primitive(@1.first_line, @1.first_column, $1, Type.BOOLEAN)} |
    TK_lpar EXP TK_rpar {$$ = $2} ;

ARITHMETICS :
    EXP TK_plus  EXP             {$$ = new Arithmetic(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_minus EXP             {$$ = new Arithmetic(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_mult  EXP             {$$ = new Arithmetic(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_div   EXP             {$$ = new Arithmetic(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_pow   EXP             {$$ = new Arithmetic(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_mod   EXP             {$$ = new Arithmetic(@2.first_line, @2.first_column, $1, $2, $3)} |
    TK_minus EXP %prec TK_uminus {$$ = new Arithmetic(@1.first_line, @1.first_column, undefined, $1, $2)} ;

RELATIONALS :
    EXP TK_equalequal EXP {$$ = new Relational(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_notequal   EXP {$$ = new Relational(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_less       EXP {$$ = new Relational(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_great      EXP {$$ = new Relational(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_lessequal  EXP {$$ = new Relational(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_greatequal EXP {$$ = new Relational(@2.first_line, @2.first_column, $1, $2, $3)} ;

LOGICS :
    EXP TK_or  EXP {$$ = new Logic(@2.first_line, @2.first_column, $1, $2, $3)} |
    EXP TK_and EXP {$$ = new Logic(@2.first_line, @2.first_column, $1, $2, $3)} |
    TK_not EXP     {$$ = new Logic(@1.first_line, @1.first_column, undefined, $1, $2)} ;

TERNARY :
    EXP TK_question EXP TK_colon EXP {$$ = new Ternary(@1.first_line, @1.first_column, $1, $3, $5)} ;

CAST :
    TK_lpar TYPE TK_rpar EXP {$$ = new Cast(@2.first_line, @2.first_column, $2, $4)} ;

ACCESSVECTOR :
    TK_id TK_lbrckt EXP TK_rbrckt                     {$$ = new AccessArray(@1.first_line, @1.first_column, $1, $3)} |
    TK_id TK_lbrckt TK_lbrckt EXP TK_rbrckt TK_rbrckt {$$ = new AccessList(@1.first_line, @1.first_column, $1, $4) } ;

INCDEC :
    TK_id TK_incr {$$ = new IncrDecr(@2.first_line, @2.first_column, $1, $2)} |
    TK_id TK_decr {$$ = new IncrDecr(@2.first_line, @2.first_column, $1, $2)} ;

TYPE :
    RW_int     {$$ = Type.INT    } |
    RW_double  {$$ = Type.DOUBLE } |
    RW_boolean {$$ = Type.BOOLEAN} |
    RW_char    {$$ = Type.CHAR   } |
    RW_string  {$$ = Type.STRING } ;