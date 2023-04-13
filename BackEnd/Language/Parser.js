/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,12],$V2=[1,15],$V3=[1,16],$V4=[1,17],$V5=[1,18],$V6=[1,19],$V7=[1,20],$V8=[1,21],$V9=[1,22],$Va=[1,23],$Vb=[1,24],$Vc=[1,25],$Vd=[1,26],$Ve=[5,15,16,21,27,34,39,42,47,49,50,51,53,78,79,80,81,82],$Vf=[1,39],$Vg=[2,19],$Vh=[1,40],$Vi=[1,41],$Vj=[1,42],$Vk=[1,51],$Vl=[21,24,29,38],$Vm=[8,20],$Vn=[1,58],$Vo=[1,56],$Vp=[1,55],$Vq=[1,57],$Vr=[1,60],$Vs=[1,61],$Vt=[1,62],$Vu=[1,63],$Vv=[1,64],$Vw=[1,65],$Vx=[8,20,25,28,29,34,38,48,57,58,59,60,61,62,63,64,65,66,67,69],$Vy=[1,88],$Vz=[1,89],$VA=[1,81],$VB=[1,82],$VC=[1,83],$VD=[1,84],$VE=[1,85],$VF=[1,86],$VG=[1,87],$VH=[1,90],$VI=[1,91],$VJ=[1,92],$VK=[1,93],$VL=[1,94],$VM=[5,15,16,21,27,34,39,41,42,47,49,50,51,53,78,79,80,81,82],$VN=[8,20,25,28,29,34,38,48,57,58,59,60,61,62,63,64,65,66,67],$VO=[8,20,25,34,38,48,66,67],$VP=[8,20,25,28,29,34,38,48,57,58,62,63,64,65,66,67],$VQ=[8,20,25,28,29,34,38,48,62,63,64,65,66,67],$VR=[1,157],$VS=[1,156],$VT=[8,20,25,34,38,48],$VU=[34,47,49],$VV=[1,179],$VW=[20,34],$VX=[20,38];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INIT":3,"INSTRUCTIONS":4,"EOF":5,"INSTRUCTION":6,"INIT_ID":7,"TOK_semicolon":8,"ID_ASIGN":9,"INCR_DECR":10,"NEW_ARRAY":11,"ARRAY_ASIGN":12,"IF_STRCT":13,"SWITCH_STRCT":14,"RW_break":15,"RW_continue":16,"LOOP":17,"TYPE":18,"LIST_ID":19,"TOK_comma":20,"TOK_id":21,"TOK_equal":22,"EXP":23,"TOK_lbrckt":24,"TOK_rbrckt":25,"ARRAY_VALUE":26,"RW_list":27,"TOK_less":28,"TOK_great":29,"LIST_VALUE":30,"RW_new":31,"TOK_lbrc":32,"VALUE_LIST":33,"TOK_rbrc":34,"TOK_dot":35,"RW_add":36,"TOK_lpar":37,"TOK_rpar":38,"RW_if":39,"BLOCK":40,"RW_else":41,"RW_switch":42,"CASE_BLOCK":43,"CASE_LIST":44,"DEFAULT":45,"CASE":46,"RW_case":47,"TOK_colon":48,"RW_default":49,"RW_while":50,"RW_for":51,"FOR_PARAMS":52,"RW_do":53,"UPDATE_FOR":54,"UPDATE":55,"ID_ASIGN_FOR":56,"TOK_plus":57,"TOK_minus":58,"TOK_mult":59,"TOK_div":60,"TOK_mod":61,"TOK_equalequal":62,"TOK_notequal":63,"TOK_lessequal":64,"TOK_greatequal":65,"TOK_or":66,"TOK_and":67,"TOK_not":68,"TOK_question":69,"TOK_double":70,"TOK_integer":71,"TOK_string":72,"TOK_char":73,"RW_true":74,"RW_false":75,"TOK_incr":76,"TOK_decr":77,"RW_int":78,"RW_double":79,"RW_boolean":80,"RW_char":81,"RW_string":82,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"TOK_semicolon",15:"RW_break",16:"RW_continue",20:"TOK_comma",21:"TOK_id",22:"TOK_equal",24:"TOK_lbrckt",25:"TOK_rbrckt",27:"RW_list",28:"TOK_less",29:"TOK_great",31:"RW_new",32:"TOK_lbrc",34:"TOK_rbrc",35:"TOK_dot",36:"RW_add",37:"TOK_lpar",38:"TOK_rpar",39:"RW_if",41:"RW_else",42:"RW_switch",47:"RW_case",48:"TOK_colon",49:"RW_default",50:"RW_while",51:"RW_for",53:"RW_do",57:"TOK_plus",58:"TOK_minus",59:"TOK_mult",60:"TOK_div",61:"TOK_mod",62:"TOK_equalequal",63:"TOK_notequal",64:"TOK_lessequal",65:"TOK_greatequal",66:"TOK_or",67:"TOK_and",68:"TOK_not",69:"TOK_question",70:"TOK_double",71:"TOK_integer",72:"TOK_string",73:"TOK_char",74:"RW_true",75:"RW_false",76:"TOK_incr",77:"TOK_decr",78:"RW_int",79:"RW_double",80:"RW_boolean",81:"RW_char",82:"RW_string"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,2],[6,2],[6,2],[6,1],[6,1],[6,2],[6,2],[6,1],[6,2],[7,2],[19,3],[19,1],[9,3],[9,1],[11,6],[11,7],[26,5],[26,3],[30,5],[12,6],[12,6],[12,8],[33,3],[33,1],[13,5],[13,7],[13,7],[14,7],[43,2],[43,1],[43,1],[44,2],[44,1],[46,4],[45,3],[17,5],[17,5],[17,7],[52,5],[54,3],[54,1],[55,1],[55,1],[56,3],[40,3],[40,2],[23,3],[23,3],[23,3],[23,3],[23,3],[23,2],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,2],[23,4],[23,5],[23,4],[23,6],[23,1],[23,1],[23,1],[23,1],[23,1],[23,1],[23,1],[23,1],[10,2],[10,2],[18,1],[18,1],[18,1],[18,1],[18,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,21:$V2,27:$V3,39:$V4,42:$V5,50:$V6,51:$V7,53:$V8,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},{1:[3]},{5:[1,27],6:28,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,21:$V2,27:$V3,39:$V4,42:$V5,50:$V6,51:$V7,53:$V8,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},o($Ve,[2,3]),{8:[1,29]},{8:[1,30]},{8:[1,31]},{8:[1,32]},{8:[1,33]},o($Ve,[2,9]),o($Ve,[2,10]),{8:[1,34]},{8:[1,35]},o($Ve,[2,13]),{9:38,19:36,21:$Vf,24:[1,37]},{8:$Vg,22:$Vh,24:[1,43],35:[1,44],76:$Vi,77:$Vj},{28:[1,45]},{37:[1,46]},{37:[1,47]},{37:[1,48]},{37:[1,49]},{32:$Vk,40:50},o($Vl,[2,82]),o($Vl,[2,83]),o($Vl,[2,84]),o($Vl,[2,85]),o($Vl,[2,86]),{1:[2,1]},o($Ve,[2,2]),o($Ve,[2,4]),o($Ve,[2,5]),o($Ve,[2,6]),o($Ve,[2,7]),o($Ve,[2,8]),o($Ve,[2,11]),o($Ve,[2,12]),{8:[2,15],20:[1,52]},{25:[1,53]},o($Vm,[2,17]),o($Vm,$Vg,{22:$Vh}),{10:59,21:$Vn,23:54,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},o($Vx,[2,80]),o($Vx,[2,81]),{10:59,21:$Vn,23:66,24:[1,67],37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{36:[1,68]},{18:69,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},{10:59,21:$Vn,23:70,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:71,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:72,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{7:74,18:75,52:73,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},{50:[1,76]},{4:77,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,21:$V2,27:$V3,34:[1,78],39:$V4,42:$V5,50:$V6,51:$V7,53:$V8,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},{9:79,21:$Vf},{21:[1,80]},o($Vm,[2,18],{28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL}),{10:59,21:$Vn,23:95,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,18:97,21:$Vn,23:96,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},{10:59,21:$Vn,23:98,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},o($Vx,[2,73],{24:[1,99],76:$Vi,77:$Vj}),o($Vx,[2,72]),o($Vx,[2,74]),o($Vx,[2,75]),o($Vx,[2,76]),o($Vx,[2,77]),o($Vx,[2,78]),o($Vx,[2,79]),{25:[1,100],28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{10:59,21:$Vn,23:101,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{37:[1,102]},{29:[1,103]},{28:$Vy,29:$Vz,38:[1,104],57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{28:$Vy,29:$Vz,38:[1,105],57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{28:$Vy,29:$Vz,38:[1,106],57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{38:[1,107]},{8:[1,108]},{9:38,19:36,21:$Vf},{37:[1,109]},{6:28,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,21:$V2,27:$V3,34:[1,110],39:$V4,42:$V5,50:$V6,51:$V7,53:$V8,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},o($VM,[2,51]),o($Vm,[2,16]),{22:[1,111]},{10:59,21:$Vn,23:112,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:113,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:114,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:115,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:116,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:117,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:118,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:119,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:120,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:121,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:122,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:123,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:124,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:125,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},o($VN,[2,57],{69:$VL}),{28:$Vy,29:$Vz,38:[1,126],57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{38:[1,127]},o($VO,[2,67],{28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,69:$VL}),{10:59,21:$Vn,23:128,24:[1,129],37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{22:[1,130]},{25:[1,131],28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{10:59,21:$Vn,23:132,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{21:[1,133]},{32:$Vk,40:134},{32:[1,135]},{32:$Vk,40:136},{32:$Vk,40:137},{10:59,21:$Vn,23:138,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:139,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},o($VM,[2,50]),{26:140,31:[1,141],32:[1,142]},o($VP,[2,52],{59:$VC,60:$VD,61:$VE,69:$VL}),o($VP,[2,53],{59:$VC,60:$VD,61:$VE,69:$VL}),o($VN,[2,54],{69:$VL}),o($VN,[2,55],{69:$VL}),o($VN,[2,56],{69:$VL}),o($VQ,[2,59],{57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,69:$VL}),o($VQ,[2,60],{57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,69:$VL}),o($VQ,[2,61],{57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,69:$VL}),o($VQ,[2,62],{57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,69:$VL}),o($VQ,[2,63],{57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,69:$VL}),o($VQ,[2,64],{57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,69:$VL}),o([8,20,25,34,38,48,66],[2,65],{28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,67:$VK,69:$VL}),o($VO,[2,66],{28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,69:$VL}),{28:$Vy,29:$Vz,48:[1,143],57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},o($Vx,[2,58]),{10:59,21:$Vn,23:144,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{25:[1,145],28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{10:59,21:$Vn,23:146,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:147,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{25:[1,148]},{28:$Vy,29:$Vz,38:[1,149],57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{22:[1,150]},o($Ve,[2,30],{41:[1,151]}),{43:152,44:153,45:154,46:155,47:$VR,49:$VS},o($Ve,[2,41]),o($Ve,[2,42]),{8:[1,158],28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{28:$Vy,29:$Vz,38:[1,159],57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{8:[2,20]},{18:160,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},{10:59,21:$Vn,23:162,33:161,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:59,21:$Vn,23:163,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},o($VT,[2,68],{28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL}),o($Vx,[2,70]),{25:[1,164],28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{8:[2,25],28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{22:[1,165]},{8:[2,26]},{30:166,31:[1,167]},{13:169,32:$Vk,39:$V4,40:168},{34:[1,170]},{34:[2,35],45:171,46:172,47:$VR,49:$VS},{34:[2,36]},o($VU,[2,38]),{48:[1,173]},{10:59,21:$Vn,23:174,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{10:177,21:$VV,54:175,55:176,56:178},{8:[1,180]},{24:[1,181]},{20:[1,183],34:[1,182]},o($VW,[2,29],{28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL}),o($VT,[2,69],{28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL}),{25:[1,184]},{10:59,21:$Vn,23:185,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{8:[2,21]},{27:[1,186]},o($Ve,[2,31]),o($Ve,[2,32]),o($Ve,[2,33]),{34:[2,34]},o($VU,[2,37]),{4:187,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,21:$V2,27:$V3,39:$V4,42:$V5,50:$V6,51:$V7,53:$V8,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},{28:$Vy,29:$Vz,48:[1,188],57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{20:[1,189],38:[2,44]},o($VX,[2,46]),o($VX,[2,47]),o($VX,[2,48]),{22:[1,190],76:$Vi,77:$Vj},o($Ve,[2,43]),{10:59,21:$Vn,23:191,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{8:[2,23]},{10:59,21:$Vn,23:192,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},o($Vx,[2,71]),{8:[2,27],28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},{28:[1,193]},{6:28,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,21:$V2,27:$V3,34:[2,40],39:$V4,42:$V5,50:$V6,51:$V7,53:$V8,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},{4:194,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,21:$V2,27:$V3,39:$V4,42:$V5,50:$V6,51:$V7,53:$V8,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},{10:177,21:$VV,55:195,56:178},{10:59,21:$Vn,23:196,37:$Vo,58:$Vp,68:$Vq,70:$Vr,71:$Vs,72:$Vt,73:$Vu,74:$Vv,75:$Vw},{25:[1,197],28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL},o($VW,[2,28],{28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL}),{18:198,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd},o($VU,[2,39],{7:4,9:5,10:6,11:7,12:8,13:9,14:10,17:13,18:14,6:28,15:$V0,16:$V1,21:$V2,27:$V3,39:$V4,42:$V5,50:$V6,51:$V7,53:$V8,78:$V9,79:$Va,80:$Vb,81:$Vc,82:$Vd}),o($VX,[2,45]),o($VX,[2,49],{28:$Vy,29:$Vz,57:$VA,58:$VB,59:$VC,60:$VD,61:$VE,62:$VF,63:$VG,64:$VH,65:$VI,66:$VJ,67:$VK,69:$VL}),{8:[2,22]},{29:[1,199]},{8:[2,24]}],
defaultActions: {27:[2,1],140:[2,20],149:[2,26],154:[2,36],166:[2,21],171:[2,34],182:[2,23],197:[2,22],199:[2,24]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    

    
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1:
break;
case 2:
break;
case 3:
break;
case 4:return 78
break;
case 5:return 79
break;
case 6:return 80
break;
case 7:return 81
break;
case 8:return 82
break;
case 9:return 74
break;
case 10:return 75
break;
case 11:return 31
break;
case 12:return 27
break;
case 13:return 36
break;
case 14:return 39
break;
case 15:return 41
break;
case 16:return 42
break;
case 17:return 47
break;
case 18:return 50
break;
case 19:return 51
break;
case 20:return 53
break;
case 21:return 15
break;
case 22:return 16
break;
case 23:return 49
break;
case 24:return 'RW_return'
break;
case 25:return 'RW_print'
break;
case 26:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng - 2);return 72; 
break;
case 27:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng - 2);return 73; 
break;
case 28:return 21
break;
case 29:return 70
break;
case 30:return 71
break;
case 31:return 76
break;
case 32:return 77
break;
case 33:return 57
break;
case 34:return 58
break;
case 35:return 59
break;
case 36:return 60
break;
case 37:return 61
break;
case 38:return 'TOK_pow'
break;
case 39:return 37
break;
case 40:return 38
break;
case 41:return 24
break;
case 42:return 25
break;
case 43:return 32
break;
case 44:return 34
break;
case 45:return 62
break;
case 46:return 22
break;
case 47:return 35
break;
case 48:return 20
break;
case 49:return 48
break;
case 50:return 8
break;
case 51:return 66
break;
case 52:return 67
break;
case 53:return 63
break;
case 54:return 68
break;
case 55:return 64
break;
case 56:return 65
break;
case 57:return 28
break;
case 58:return 29
break;
case 59:return 69
break;
case 60:console.log('Error: ' + yy_.yytext)
break;
case 61:return 5
break;
}
},
rules: [/^(?:\s+)/i,/^(?:[ \n\r])/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:string\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:new\b)/i,/^(?:list\b)/i,/^(?:add\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:while\b)/i,/^(?:for\b)/i,/^(?:do\b)/i,/^(?:break\b)/i,/^(?:continue\b)/i,/^(?:default\b)/i,/^(?:return\b)/i,/^(?:print\b)/i,/^(?:"(([^\n\"\\]?|\\.))*")/i,/^(?:'(([^\n\"\\]?|\\.))')/i,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/i,/^(?:[0-9]+\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\^)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\{)/i,/^(?:\})/i,/^(?:==)/i,/^(?:=)/i,/^(?:\.)/i,/^(?:,)/i,/^(?::)/i,/^(?:;)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:\?)/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Parser;
exports.Parser = Parser.Parser;
exports.parse = function () { return Parser.parse.apply(Parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}