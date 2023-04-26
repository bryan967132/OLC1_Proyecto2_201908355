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
    const {InitArray} = require('../Classes/Instructions/InitArray');
    const {InitList} = require('../Classes/Instructions/InitList');
    const {AsignArray} = require('../Classes/Instructions/AsignArray');
    const {AsignList} = require('../Classes/Instructions/AsignList');
    const {Add} = require('../Classes/Instructions/Add');
    const {Block} = require('../Classes/Instructions/Block');
    const {Function} = require('../Classes/Instructions/Function');
    const {If} = require('../Classes/Instructions/If');
    const {Break} = require('../Classes/Instructions/Break');
    const {Continue} = require('../Classes/Instructions/Continue');
    const {While} = require('../Classes/Instructions/While');
    const {DoWhile} = require('../Classes/Instructions/DoWhile');
    const {For} = require('../Classes/Instructions/For');
    const {Switch} = require('../Classes/Instructions/Switch');
    const {Case} = require('../Classes/Instructions/Case');
    const {MainMethod} = require('../Classes/Instructions/MainMethod');
    //Expresiones
    const {Primitive} = require('../Classes/Expressions/Primitive');
    const {Arithmetic} = require('../Classes/Expressions/Arithmetic');
    const {Logic} = require('../Classes/Expressions/Logic');
    const {Relational} = require('../Classes/Expressions/Relational');
    const {Ternary} = require('../Classes/Expressions/Ternary');
    const {AccessID} = require('../Classes/Expressions/AccessID');
    const {IncrDecr} = require('../Classes/Expressions/IncrDecr');
    const {NativeFunc} = require('../Classes/Expressions/NativeFunc');
    const {AccessArray} = require('../Classes/Expressions/AccessArray');
    const {AccessList} = require('../Classes/Expressions/AccessList');
    const {Cast} = require('../Classes/Expressions/Cast');
    const {Parameter} = require('../Classes/Expressions/Parameter');
    const {CallFunction} = require('../Classes/Expressions/CallFunction');
    const {Return} = require('../Classes/Expressions/Return');
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

INIT:
    INSTRUCTIONS EOF {return $1} |
    EOF              {return []} ;

INSTRUCTIONS:
    INSTRUCTIONS INSTRUCTION        {$$.push($2)} |
    INSTRUCTION                     {$$ = [$1]};

INSTRUCTION:
    MAIN_METHOD                     {$$ = $1} |
    INIT_ID TOK_semicolon           {$$ = $1} |
    ID_ASIGN TOK_semicolon          {$$ = $1} |
    NEW_ARRAY TOK_semicolon         {$$ = $1} |
    ARRAY_ASIGN TOK_semicolon       {$$ = $1} |
    IF_STRCT                        {$$ = $1} |
    SWITCH_STRCT                    {$$ = $1} |
    LOOP                            {$$ = $1} |
    FUNCTION                        {$$ = $1} |
    CALLED_FUNCTION TOK_semicolon   {$$ = $1} |
    NATIVES_FUNCTION TOK_semicolon  {$$ = $1} |
    INCR_DECR TOK_semicolon         {$$ = $1} |
    RW_break TOK_semicolon          {$$ = new Break(@1.first_line,@1.first_column)} |
    RW_continue TOK_semicolon       {$$ = new Continue(@1.first_line,@1.first_column)} |
    RW_return TOK_semicolon         {$$ = new Return(@1.first_line,@1.first_column,undefined)} |
    RW_return EXP TOK_semicolon     {$$ = new Return(@1.first_line,@1.first_column,$2)} |
    error                           {console.log({line: this._$.first_line, column: this._$.first_column, type: 'Sintáctico', message: `Error sintáctico, token no esperado '${yytext}' .`})};

MAIN_METHOD:
    RW_main CALLED_FUNCTION TOK_semicolon   {$$ = new MainMethod(@1.first_line,@1.first_column,$2)};

INIT_ID:
    TYPE TOK_id TOK_equal EXP       {$$ = new InitID(@1.first_line,@1.first_column,$2,$1,$4)} |
    TYPE TOK_id                     {$$ = new InitID(@1.first_line,@1.first_column,$2,$1,undefined)};

ID_ASIGN:
    TOK_id TOK_equal EXP            {$$ = new AsignID(@1.first_line,@1.first_column,$1,$3)};

NEW_ARRAY:
    TYPE TOK_lbrckt TOK_rbrckt TOK_id TOK_equal ARRAY_VALUE         {$$ = new InitArray(@1.first_line,@1.first_column,$4,$1,$6[0],$6[1])} |
    RW_list TOK_less TYPE TOK_great TOK_id TOK_equal LIST_VALUE     {$$ = new InitList(@1.first_line,@1.first_column,$5,$3,$7)};

ARRAY_VALUE:
    RW_new TYPE TOK_lbrckt EXP TOK_rbrckt   {$$ = [$4,undefined]} |
    TOK_lbrc VALUE_LIST TOK_rbrc            {$$ = [undefined,$2]};

LIST_VALUE:
    RW_new RW_list TOK_less TYPE TOK_great  {$$ = undefined} |
    FN_toCharArray TOK_lpar EXP TOK_rpar    {$$ = new NativeFunc(@1.first_line,@1.first_column,$1,$3)};

ARRAY_ASIGN:
    TOK_id TOK_lbrckt EXP TOK_rbrckt TOK_equal EXP                          {$$ = new AsignArray(@1.first_line,@1.first_column,$1,$3,$6)} |
    TOK_id TOK_dot FN_add TOK_lpar EXP TOK_rpar                             {$$ = new Add(@1.first_line,@1.first_column,$1,$5)} |
    TOK_id TOK_lbrckt TOK_lbrckt EXP TOK_rbrckt TOK_rbrckt TOK_equal EXP    {$$ = new AsignList(@1.first_line,@1.first_column,$1,$4,$8)};

VALUE_LIST:
    VALUE_LIST TOK_comma EXP            {$$.push($3)} |
    EXP                                 {$$ = [$1]};

IF_STRCT:
    RW_if TOK_lpar EXP TOK_rpar BLOCK                   {$$ = new If(@1.first_line,@1.first_column,$3,$5,undefined)} |
    RW_if TOK_lpar EXP TOK_rpar BLOCK RW_else BLOCK     {$$ = new If(@1.first_line,@1.first_column,$3,$5,$7)} |
    RW_if TOK_lpar EXP TOK_rpar BLOCK RW_else IF_STRCT  {$$ = new If(@1.first_line,@1.first_column,$3,$5,$7)};

SWITCH_STRCT:
    RW_switch TOK_lpar EXP TOK_rpar TOK_lbrc CASE_BLOCK TOK_rbrc     {$$ = new Switch(@1.first_line,@1.first_column,$3,$6[0],$6[1])};

CASE_BLOCK:
    CASE_LIST DEFAULT   {$$ = [$1,$2]} |
    CASE_LIST           {$$ = [$1,undefined]} |
    DEFAULT             {$$ = [undefined,$1]};

CASE_LIST:
    CASE_LIST CASE              {$$.push($2)} |
    CASE                        {$$ = [$1]};

CASE:
    RW_case EXP TOK_colon INSTRUCTIONS      {$$ = new Case(@1.first_line,@1.first_column,$2,new Block(@4.first_line,@4.first_column,$4))} |
    RW_case EXP TOK_colon                   {$$ = new Case(@1.first_line,@1.first_column,$2,new Block(@4.first_line,@4.first_column,[]))};

DEFAULT:
    RW_default TOK_colon INSTRUCTIONS       {$$ = new Block(@1.first_line,@1.first_column,$3)} |
    RW_default TOK_colon                    {$$ = new Block(@1.first_line,@1.first_column,[])};

LOOP:
    RW_while TOK_lpar EXP TOK_rpar BLOCK                        {$$ = new While(@1.first_line,@1.first_column,$3,$5)} |
    RW_do BLOCK RW_while TOK_lpar EXP TOK_rpar TOK_semicolon    {$$ = new DoWhile(@1.first_line,@1.first_column,$5,$2)} |
    RW_for TOK_lpar FOR_ARGS TOK_rpar BLOCK                     {$$ = new For(@1.first_line,@1.first_column,$3,$5)};

FOR_ARGS:
    ID_ASIGN_FOR TOK_semicolon EXP TOK_semicolon UPDATE {$$ = [$1,$3,$5]};

ID_ASIGN_FOR:
    TYPE TOK_id TOK_equal EXP   {$$ = new InitID(@1.first_line,@1.first_column,$2,$1,$4)} |
    ID_ASIGN                    {$$ = $1};

UPDATE:
    INCR_DECR                   {$$ = $1} |
    ID_ASIGN                    {$$ = $1};

FUNCTION:
    TYPE TOK_id TOK_lpar PARAMETERS TOK_rpar BLOCK          {$$ = new Function(@2.first_line,@2.first_column,$2,$4,$6,$1)} |
    RW_void TOK_id TOK_lpar PARAMETERS TOK_rpar BLOCK       {$$ = new Function(@2.first_line,@2.first_column,$2,$4,$6,Type.NULL)} |
    TYPE TOK_id TOK_lpar TOK_rpar BLOCK                     {$$ = new Function(@2.first_line,@2.first_column,$2,[],$5,$1)} |
    RW_void TOK_id TOK_lpar TOK_rpar BLOCK                  {$$ = new Function(@2.first_line,@2.first_column,$2,[],$5,Type.NULL)};

PARAMETERS:
    PARAMETERS TOK_comma PARAMETER  {$$.push($3)} |
    PARAMETER                       {$$ = [$1]};

PARAMETER:
    TYPE TOK_id                     {$$ = new Parameter(@2.first_line,@2.first_column,$2,$1)};

BLOCK:
    TOK_lbrc INSTRUCTIONS TOK_rbrc      {$$ = new Block(@1.first_line,@1.first_column,$2)} |
    TOK_lbrc TOK_rbrc                   {$$ = new Block(@1.first_line,@1.first_column,[])};

CALLED_FUNCTION:
    TOK_id TOK_lpar LIST_ARGS TOK_rpar    {$$ = new CallFunction(@1.first_line,@1.first_column,$1,$3)} |
    TOK_id TOK_lpar TOK_rpar              {$$ = new CallFunction(@1.first_line,@1.first_column,$1,[])};

LIST_ARGS:
    LIST_ARGS TOK_comma EXP     {$$.push($3)} |
    EXP                         {$$ = [$1]};

NATIVES_FUNCTION:
    FN_print TOK_lpar EXP TOK_rpar      {$$ = new Print(@1.first_line,@1.first_column,$3)} |
    FN_print TOK_lpar TOK_rpar          {$$ = new Print(@1.first_line,@1.first_column,undefined)} |
    NATIVES_FUNCTION_EXP                {$$ = $1};

NATIVES_FUNCTION_EXP:
    FN_toLower TOK_lpar EXP TOK_rpar        {$$ = new NativeFunc(@1.first_line,@1.first_column,$1,$3)} |
    FN_toUpper TOK_lpar EXP TOK_rpar        {$$ = new NativeFunc(@1.first_line,@1.first_column,$1,$3)} |
    FN_length TOK_lpar EXP TOK_rpar         {$$ = new NativeFunc(@1.first_line,@1.first_column,$1,$3)} |
    FN_truncate TOK_lpar EXP TOK_rpar       {$$ = new NativeFunc(@1.first_line,@1.first_column,$1,$3)} |
    FN_round TOK_lpar EXP TOK_rpar          {$$ = new NativeFunc(@1.first_line,@1.first_column,$1,$3)} |
    FN_typeOf TOK_lpar EXP TOK_rpar         {$$ = new NativeFunc(@1.first_line,@1.first_column,$1,$3)} |
    FN_toString TOK_lpar EXP TOK_rpar       {$$ = new NativeFunc(@1.first_line,@1.first_column,$1,$3)} |
    FN_toCharArray TOK_lpar EXP TOK_rpar    {$$ = new NativeFunc(@1.first_line,@1.first_column,$1,$3)};

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
    TOK_lpar TYPE TOK_rpar EXP                              {$$ = new Cast(@2.first_line,@2.first_column,$2,$4)} |
    EXP TOK_question EXP TOK_colon EXP                      {$$ = new Ternary(@1.first_line,@1.first_column,$1,$3,$5)} |
    TOK_id TOK_lbrckt EXP TOK_rbrckt                        {$$ = new AccessArray(@1.first_line,@1.first_column,$1,$3)} |
    TOK_id TOK_lbrckt TOK_lbrckt EXP TOK_rbrckt TOK_rbrckt  {$$ = new AccessList(@1.first_line,@1.first_column,$1,$4)} |
    CALLED_FUNCTION                                         {$$ = $1} |
    NATIVES_FUNCTION_EXP                                    {$$ = $1} |
    INCR_DECR                                               {$$ = $1} |
    TOK_id                                                  {$$ = new AccessID(@1.first_line,@1.first_column,$1)} |
    TOK_integer                                             {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.INT)} |
    TOK_double                                              {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.DOUBLE)} |
    TOK_string                                              {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.STRING)} |
    TOK_char                                                {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.CHAR)} |
    RW_true                                                 {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.BOOLEAN)} |
    RW_false                                                {$$ = new Primitive(@1.first_line,@1.first_column,$1,Type.BOOLEAN)};

INCR_DECR:
    TOK_id TOK_incr        {$$ = new IncrDecr(@2.first_line,@2.first_column,$1,$2)} |
    TOK_id TOK_decr        {$$ = new IncrDecr(@2.first_line,@2.first_column,$1,$2)};

TYPE:
    RW_int          {$$ = Type.INT} |
    RW_double       {$$ = Type.DOUBLE} |
    RW_boolean      {$$ = Type.BOOLEAN} |
    RW_char         {$$ = Type.CHAR} |
    RW_string       {$$ = Type.STRING};