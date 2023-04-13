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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,12],$V2=[1,17],$V3=[1,19],$V4=[1,20],$V5=[1,21],$V6=[1,22],$V7=[1,23],$V8=[1,24],$V9=[1,25],$Va=[1,26],$Vb=[1,27],$Vc=[1,28],$Vd=[1,29],$Ve=[1,30],$Vf=[1,31],$Vg=[1,32],$Vh=[5,15,16,21,26,31,38,43,46,51,53,54,55,57,62,64,86,87,88,89,90],$Vi=[1,49],$Vj=[1,47],$Vk=[1,46],$Vl=[1,48],$Vm=[1,52],$Vn=[1,53],$Vo=[1,54],$Vp=[1,55],$Vq=[1,56],$Vr=[1,57],$Vs=[2,24],$Vt=[1,62],$Vu=[1,67],$Vv=[1,63],$Vw=[1,64],$Vx=[1,74],$Vy=[26,28,33,42],$Vz=[1,85],$VA=[1,86],$VB=[1,78],$VC=[1,79],$VD=[1,80],$VE=[1,81],$VF=[1,82],$VG=[1,83],$VH=[1,84],$VI=[1,87],$VJ=[1,88],$VK=[1,89],$VL=[1,90],$VM=[1,91],$VN=[8,25,29,32,33,38,42,52,65,66,67,68,69,70,71,72,73,74,75,77],$VO=[8,25],$VP=[8,25,29,32,33,38,42,52,65,66,67,68,69,70,71,72,73,74,75],$VQ=[8,25,29,38,42,52,74,75],$VR=[1,139],$VS=[25,42],$VT=[5,15,16,21,26,31,38,43,45,46,51,53,54,55,57,62,64,86,87,88,89,90],$VU=[8,25,29,32,33,38,42,52,65,66,70,71,72,73,74,75],$VV=[8,25,29,32,33,38,42,52,70,71,72,73,74,75],$VW=[1,166],$VX=[8,25,29,38,42,52],$VY=[1,199],$VZ=[1,198],$V_=[38,51,53],$V$=[1,222],$V01=[25,38];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INIT":3,"INSTRUCTIONS":4,"EOF":5,"INSTRUCTION":6,"INIT_ID":7,"TOK_semicolon":8,"ID_ASIGN":9,"INCR_DECR":10,"NEW_ARRAY":11,"ARRAY_ASIGN":12,"IF_STRCT":13,"SWITCH_STRCT":14,"RW_break":15,"RW_continue":16,"LOOP":17,"FUNCTION":18,"CALLED_FUNCTION":19,"PRINT":20,"RW_return":21,"EXP":22,"TYPE":23,"LIST_ID":24,"TOK_comma":25,"TOK_id":26,"TOK_equal":27,"TOK_lbrckt":28,"TOK_rbrckt":29,"ARRAY_VALUE":30,"RW_list":31,"TOK_less":32,"TOK_great":33,"LIST_VALUE":34,"RW_new":35,"TOK_lbrc":36,"VALUE_LIST":37,"TOK_rbrc":38,"TOK_dot":39,"RW_add":40,"TOK_lpar":41,"TOK_rpar":42,"RW_if":43,"BLOCK":44,"RW_else":45,"RW_switch":46,"CASE_BLOCK":47,"CASE_LIST":48,"DEFAULT":49,"CASE":50,"RW_case":51,"TOK_colon":52,"RW_default":53,"RW_while":54,"RW_for":55,"FOR_PARAMS":56,"RW_do":57,"UPDATE_FOR":58,"UPDATE":59,"ID_ASIGN_FOR":60,"PARAMETERS":61,"RW_void":62,"LIST_EXPS":63,"RW_print":64,"TOK_plus":65,"TOK_minus":66,"TOK_mult":67,"TOK_div":68,"TOK_mod":69,"TOK_equalequal":70,"TOK_notequal":71,"TOK_lessequal":72,"TOK_greatequal":73,"TOK_or":74,"TOK_and":75,"TOK_not":76,"TOK_question":77,"TOK_double":78,"TOK_integer":79,"TOK_string":80,"TOK_char":81,"RW_true":82,"RW_false":83,"TOK_incr":84,"TOK_decr":85,"RW_int":86,"RW_double":87,"RW_boolean":88,"RW_char":89,"RW_string":90,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"TOK_semicolon",15:"RW_break",16:"RW_continue",21:"RW_return",25:"TOK_comma",26:"TOK_id",27:"TOK_equal",28:"TOK_lbrckt",29:"TOK_rbrckt",31:"RW_list",32:"TOK_less",33:"TOK_great",35:"RW_new",36:"TOK_lbrc",38:"TOK_rbrc",39:"TOK_dot",40:"RW_add",41:"TOK_lpar",42:"TOK_rpar",43:"RW_if",45:"RW_else",46:"RW_switch",51:"RW_case",52:"TOK_colon",53:"RW_default",54:"RW_while",55:"RW_for",57:"RW_do",62:"RW_void",64:"RW_print",65:"TOK_plus",66:"TOK_minus",67:"TOK_mult",68:"TOK_div",69:"TOK_mod",70:"TOK_equalequal",71:"TOK_notequal",72:"TOK_lessequal",73:"TOK_greatequal",74:"TOK_or",75:"TOK_and",76:"TOK_not",77:"TOK_question",78:"TOK_double",79:"TOK_integer",80:"TOK_string",81:"TOK_char",82:"RW_true",83:"RW_false",84:"TOK_incr",85:"TOK_decr",86:"RW_int",87:"RW_double",88:"RW_boolean",89:"RW_char",90:"RW_string"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[6,2],[6,2],[6,2],[6,1],[6,1],[6,2],[6,2],[6,1],[6,1],[6,2],[6,2],[6,2],[6,2],[6,3],[7,2],[24,3],[24,1],[9,3],[9,1],[11,6],[11,7],[30,5],[30,3],[34,5],[12,6],[12,6],[12,8],[37,3],[37,1],[13,5],[13,7],[13,7],[14,7],[47,2],[47,1],[47,1],[48,2],[48,1],[50,4],[49,3],[17,5],[17,5],[17,7],[56,5],[58,3],[58,1],[59,1],[59,1],[60,3],[18,6],[18,6],[18,5],[18,5],[61,4],[61,2],[44,3],[44,2],[19,4],[19,3],[63,3],[63,1],[20,4],[20,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,4],[22,5],[22,4],[22,6],[22,1],[22,1],[22,1],[22,1],[22,1],[22,1],[22,1],[22,1],[22,1],[10,2],[10,2],[23,1],[23,1],[23,1],[23,1],[23,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,19:15,20:16,21:$V2,23:18,26:$V3,31:$V4,43:$V5,46:$V6,54:$V7,55:$V8,57:$V9,62:$Va,64:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{1:[3]},{5:[1,33],6:34,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,19:15,20:16,21:$V2,23:18,26:$V3,31:$V4,43:$V5,46:$V6,54:$V7,55:$V8,57:$V9,62:$Va,64:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},o($Vh,[2,3]),{8:[1,35]},{8:[1,36]},{8:[1,37]},{8:[1,38]},{8:[1,39]},o($Vh,[2,9]),o($Vh,[2,10]),{8:[1,40]},{8:[1,41]},o($Vh,[2,13]),o($Vh,[2,14]),{8:[1,42]},{8:[1,43]},{8:[1,44],10:51,19:50,22:45,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{9:61,24:58,26:[1,60],28:[1,59]},{8:$Vs,27:$Vt,28:[1,65],39:[1,66],41:$Vu,84:$Vv,85:$Vw},{32:[1,68]},{41:[1,69]},{41:[1,70]},{41:[1,71]},{41:[1,72]},{36:$Vx,44:73},{26:[1,75]},{41:[1,76]},o($Vy,[2,100]),o($Vy,[2,101]),o($Vy,[2,102]),o($Vy,[2,103]),o($Vy,[2,104]),{1:[2,1]},o($Vh,[2,2]),o($Vh,[2,4]),o($Vh,[2,5]),o($Vh,[2,6]),o($Vh,[2,7]),o($Vh,[2,8]),o($Vh,[2,11]),o($Vh,[2,12]),o($Vh,[2,15]),o($Vh,[2,16]),o($Vh,[2,18]),{8:[1,77],32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{10:51,19:50,22:92,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:93,23:94,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{10:51,19:50,22:95,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},o($VN,[2,91],{28:[1,96],41:$Vu,84:$Vv,85:$Vw}),o($VN,[2,89]),o($VN,[2,90]),o($VN,[2,92]),o($VN,[2,93]),o($VN,[2,94]),o($VN,[2,95]),o($VN,[2,96]),o($VN,[2,97]),{8:[2,20],25:[1,97]},{29:[1,98]},o($VO,$Vs,{27:$Vt,41:[1,99]}),o($VO,[2,22]),{10:51,19:50,22:100,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},o($VN,[2,98]),o($VN,[2,99]),{10:51,19:50,22:101,26:$Vi,28:[1,102],41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{40:[1,103]},{10:51,19:50,22:106,26:$Vi,41:$Vj,42:[1,105],63:104,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{23:107,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{10:51,19:50,22:108,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:109,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:110,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{7:112,23:113,56:111,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{54:[1,114]},{4:115,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,19:15,20:16,21:$V2,23:18,26:$V3,31:$V4,38:[1,116],43:$V5,46:$V6,54:$V7,55:$V8,57:$V9,62:$Va,64:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{41:[1,117]},{10:51,19:50,22:118,26:$Vi,41:$Vj,42:[1,119],66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},o($Vh,[2,19]),{10:51,19:50,22:120,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:121,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:122,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:123,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:124,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:125,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:126,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:127,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:128,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:129,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:130,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:131,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:132,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:133,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},o($VP,[2,74],{77:$VM}),{32:$Vz,33:$VA,42:[1,134],65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{42:[1,135]},o($VQ,[2,84],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,77:$VM}),{10:51,19:50,22:136,26:$Vi,28:[1,137],41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{9:138,26:$VR},{26:[1,140]},{23:143,42:[1,142],61:141,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},o($VO,[2,23],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM}),{29:[1,144],32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{10:51,19:50,22:145,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{41:[1,146]},{25:[1,148],42:[1,147]},o($VN,[2,64]),o($VS,[2,66],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM}),{33:[1,149]},{32:$Vz,33:$VA,42:[1,150],65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{32:$Vz,33:$VA,42:[1,151],65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{32:$Vz,33:$VA,42:[1,152],65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{42:[1,153]},{8:[1,154]},{9:61,24:58,26:$VR},{41:[1,155]},{6:34,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,19:15,20:16,21:$V2,23:18,26:$V3,31:$V4,38:[1,156],43:$V5,46:$V6,54:$V7,55:$V8,57:$V9,62:$Va,64:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},o($VT,[2,62]),{23:143,42:[1,158],61:157,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{32:$Vz,33:$VA,42:[1,159],65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{8:[2,68]},o($VU,[2,69],{67:$VD,68:$VE,69:$VF,77:$VM}),o($VU,[2,70],{67:$VD,68:$VE,69:$VF,77:$VM}),o($VP,[2,71],{77:$VM}),o($VP,[2,72],{77:$VM}),o($VP,[2,73],{77:$VM}),o($VV,[2,76],{65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,77:$VM}),o($VV,[2,77],{65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,77:$VM}),o($VV,[2,78],{65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,77:$VM}),o($VV,[2,79],{65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,77:$VM}),o($VV,[2,80],{65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,77:$VM}),o($VV,[2,81],{65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,77:$VM}),o([8,25,29,38,42,52,74],[2,82],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,75:$VL,77:$VM}),o($VQ,[2,83],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,77:$VM}),{32:$Vz,33:$VA,52:[1,160],65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},o($VN,[2,75]),{10:51,19:50,22:161,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{29:[1,162],32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{10:51,19:50,22:163,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},o($VO,[2,21]),o($VO,$Vs,{27:$Vt}),{27:[1,164]},{25:$VW,42:[1,165]},{36:$Vx,44:167},{26:[1,168]},{27:[1,169]},{29:[1,170],32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{10:51,19:50,22:171,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},o($VN,[2,63]),{10:51,19:50,22:172,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{26:[1,173]},{36:$Vx,44:174},{36:[1,175]},{36:$Vx,44:176},{36:$Vx,44:177},{10:51,19:50,22:178,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:51,19:50,22:179,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},o($VT,[2,61]),{25:$VW,42:[1,180]},{36:$Vx,44:181},{8:[2,67]},{10:51,19:50,22:182,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},o($VX,[2,85],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM}),o($VN,[2,87]),{29:[1,183],32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{30:184,35:[1,185],36:[1,186]},{36:$Vx,44:187},{23:188,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},o($Vh,[2,57]),o($VS,[2,60]),{10:51,19:50,22:189,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{29:[1,190]},{32:$Vz,33:$VA,42:[1,191],65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},o($VS,[2,65],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM}),{27:[1,192]},o($Vh,[2,35],{45:[1,193]}),{47:194,48:195,49:196,50:197,51:$VY,53:$VZ},o($Vh,[2,46]),o($Vh,[2,47]),{8:[1,200],32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{32:$Vz,33:$VA,42:[1,201],65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{36:$Vx,44:202},o($Vh,[2,58]),o($VX,[2,86],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM}),{29:[1,203]},{8:[2,25]},{23:204,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{10:51,19:50,22:206,26:$Vi,37:205,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},o($Vh,[2,55]),{26:[1,207]},{8:[2,30],32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{27:[1,208]},{8:[2,31]},{34:209,35:[1,210]},{13:212,36:$Vx,43:$V5,44:211},{38:[1,213]},{38:[2,40],49:214,50:215,51:$VY,53:$VZ},{38:[2,41]},o($V_,[2,43]),{52:[1,216]},{10:51,19:50,22:217,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{10:220,26:$V$,58:218,59:219,60:221},{8:[1,223]},o($Vh,[2,56]),o($VN,[2,88]),{28:[1,224]},{25:[1,226],38:[1,225]},o($V01,[2,34],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM}),o($VS,[2,59]),{10:51,19:50,22:227,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{8:[2,26]},{31:[1,228]},o($Vh,[2,36]),o($Vh,[2,37]),o($Vh,[2,38]),{38:[2,39]},o($V_,[2,42]),{4:229,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,19:15,20:16,21:$V2,23:18,26:$V3,31:$V4,43:$V5,46:$V6,54:$V7,55:$V8,57:$V9,62:$Va,64:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{32:$Vz,33:$VA,52:[1,230],65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{25:[1,231],42:[2,49]},o($VS,[2,51]),o($VS,[2,52]),o($VS,[2,53]),{27:[1,232],84:$Vv,85:$Vw},o($Vh,[2,48]),{10:51,19:50,22:233,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{8:[2,28]},{10:51,19:50,22:234,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{8:[2,32],32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},{32:[1,235]},{6:34,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,19:15,20:16,21:$V2,23:18,26:$V3,31:$V4,38:[2,45],43:$V5,46:$V6,54:$V7,55:$V8,57:$V9,62:$Va,64:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{4:236,6:3,7:4,9:5,10:6,11:7,12:8,13:9,14:10,15:$V0,16:$V1,17:13,18:14,19:15,20:16,21:$V2,23:18,26:$V3,31:$V4,43:$V5,46:$V6,54:$V7,55:$V8,57:$V9,62:$Va,64:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},{10:220,26:$V$,59:237,60:221},{10:51,19:50,22:238,26:$Vi,41:$Vj,66:$Vk,76:$Vl,78:$Vm,79:$Vn,80:$Vo,81:$Vp,82:$Vq,83:$Vr},{29:[1,239],32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM},o($V01,[2,33],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM}),{23:240,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg},o($V_,[2,44],{7:4,9:5,10:6,11:7,12:8,13:9,14:10,17:13,18:14,19:15,20:16,23:18,6:34,15:$V0,16:$V1,21:$V2,26:$V3,31:$V4,43:$V5,46:$V6,54:$V7,55:$V8,57:$V9,62:$Va,64:$Vb,86:$Vc,87:$Vd,88:$Ve,89:$Vf,90:$Vg}),o($VS,[2,50]),o($VS,[2,54],{32:$Vz,33:$VA,65:$VB,66:$VC,67:$VD,68:$VE,69:$VF,70:$VG,71:$VH,72:$VI,73:$VJ,74:$VK,75:$VL,77:$VM}),{8:[2,27]},{33:[1,241]},{8:[2,29]}],
defaultActions: {33:[2,1],119:[2,68],159:[2,67],184:[2,25],191:[2,31],196:[2,41],209:[2,26],214:[2,39],225:[2,28],239:[2,27],241:[2,29]},
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
case 4:return 86
break;
case 5:return 87
break;
case 6:return 88
break;
case 7:return 89
break;
case 8:return 90
break;
case 9:return 82
break;
case 10:return 83
break;
case 11:return 35
break;
case 12:return 31
break;
case 13:return 40
break;
case 14:return 43
break;
case 15:return 45
break;
case 16:return 46
break;
case 17:return 51
break;
case 18:return 54
break;
case 19:return 55
break;
case 20:return 57
break;
case 21:return 15
break;
case 22:return 16
break;
case 23:return 53
break;
case 24:return 21
break;
case 25:return 62
break;
case 26:return 64
break;
case 27:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng - 2);return 80; 
break;
case 28:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng - 2);return 81; 
break;
case 29:return 26
break;
case 30:return 78
break;
case 31:return 79
break;
case 32:return 84
break;
case 33:return 85
break;
case 34:return 65
break;
case 35:return 66
break;
case 36:return 67
break;
case 37:return 68
break;
case 38:return 69
break;
case 39:return 'TOK_pow'
break;
case 40:return 41
break;
case 41:return 42
break;
case 42:return 28
break;
case 43:return 29
break;
case 44:return 36
break;
case 45:return 38
break;
case 46:return 70
break;
case 47:return 27
break;
case 48:return 39
break;
case 49:return 25
break;
case 50:return 52
break;
case 51:return 8
break;
case 52:return 74
break;
case 53:return 75
break;
case 54:return 71
break;
case 55:return 76
break;
case 56:return 72
break;
case 57:return 73
break;
case 58:return 32
break;
case 59:return 33
break;
case 60:return 77
break;
case 61:console.log('Error: ' + yy_.yytext)
break;
case 62:return 5
break;
}
},
rules: [/^(?:\s+)/i,/^(?:[ \n\r])/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:string\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:new\b)/i,/^(?:list\b)/i,/^(?:add\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:while\b)/i,/^(?:for\b)/i,/^(?:do\b)/i,/^(?:break\b)/i,/^(?:continue\b)/i,/^(?:default\b)/i,/^(?:return\b)/i,/^(?:void\b)/i,/^(?:print\b)/i,/^(?:"(([^\n\"\\]?|\\.))*")/i,/^(?:'(([^\n\"\\]?|\\.))')/i,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/i,/^(?:[0-9]+\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\^)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\{)/i,/^(?:\})/i,/^(?:==)/i,/^(?:=)/i,/^(?:\.)/i,/^(?:,)/i,/^(?::)/i,/^(?:;)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:\?)/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62],"inclusive":true}}
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