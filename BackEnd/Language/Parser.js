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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[1,9],$V2=[1,10],$V3=[1,11],$V4=[1,12],$V5=[1,13],$V6=[5,12,13,14,15,16,20],$V7=[11,18],$V8=[1,26],$V9=[1,23],$Va=[1,24],$Vb=[1,25],$Vc=[1,27],$Vd=[1,28],$Ve=[1,29],$Vf=[1,30],$Vg=[1,31],$Vh=[1,32],$Vi=[1,34],$Vj=[1,35],$Vk=[1,36],$Vl=[1,37],$Vm=[1,38],$Vn=[1,39],$Vo=[1,40],$Vp=[1,41],$Vq=[1,42],$Vr=[1,43],$Vs=[1,44],$Vt=[1,45],$Vu=[11,18,23,24,25,26,28,29,30,31,32,33,34,35,36],$Vv=[11,18,28,35,36],$Vw=[11,18,23,24,28,29,30,31,32,33,34,35,36],$Vx=[11,18,28,29,30,31,32,33,34,35,36];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INI":3,"BODY":4,"EOF":5,"SENTENCES":6,"INIT_STATEMENTS_VARIABLE":7,"STATEMENTS_VARIABLE":8,"TIPO":9,"LIST_ID_INT":10,"TOK_semicolon":11,"RW_int":12,"RW_double":13,"RW_boolean":14,"RW_char":15,"RW_string":16,"ID":17,"TOK_comma":18,"LIST_ID_DOUBLE":19,"TOK_id":20,"TOK_equal":21,"EXP":22,"TOK_plus":23,"TOK_minus":24,"TOK_mult":25,"TOK_div":26,"TOK_lpar":27,"TOK_rpar":28,"TOK_equalequal":29,"TOK_notequal":30,"TOK_less":31,"TOK_great":32,"TOK_lessequal":33,"TOK_greatequal":34,"TOK_or":35,"TOK_and":36,"TOK_not":37,"TOK_double":38,"TOK_integer":39,"TOK_string":40,"TOK_char":41,"RW_true":42,"RW_false":43,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"TOK_semicolon",12:"RW_int",13:"RW_double",14:"RW_boolean",15:"RW_char",16:"RW_string",18:"TOK_comma",20:"TOK_id",21:"TOK_equal",23:"TOK_plus",24:"TOK_minus",25:"TOK_mult",26:"TOK_div",27:"TOK_lpar",28:"TOK_rpar",29:"TOK_equalequal",30:"TOK_notequal",31:"TOK_less",32:"TOK_great",33:"TOK_lessequal",34:"TOK_greatequal",35:"TOK_or",36:"TOK_and",37:"TOK_not",38:"TOK_double",39:"TOK_integer",40:"TOK_string",41:"TOK_char",42:"RW_true",43:"RW_false"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[7,3],[9,1],[9,1],[9,1],[9,1],[9,1],[8,2],[10,3],[10,1],[19,3],[19,1],[17,3],[17,1],[22,3],[22,3],[22,3],[22,3],[22,2],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,1],[22,1],[22,1],[22,1],[22,1],[22,1],[22,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,12:$V0,13:$V1,14:$V2,15:$V3,16:$V4,17:7,20:$V5},{1:[3]},{5:[1,14],6:15,7:4,8:5,9:6,12:$V0,13:$V1,14:$V2,15:$V3,16:$V4,17:7,20:$V5},o($V6,[2,3]),o($V6,[2,4]),o($V6,[2,5]),{10:16,17:17,20:$V5},{11:[1,18]},{20:[2,7]},{20:[2,8]},{20:[2,9]},{20:[2,10]},{20:[2,11]},o($V7,[2,18],{21:[1,19]}),{1:[2,1]},o($V6,[2,2]),{11:[1,20],18:[1,21]},o($V7,[2,14]),o($V6,[2,12]),{20:$V8,22:22,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},o($V6,[2,6]),{17:33,20:$V5},o($V7,[2,17],{23:$Vi,24:$Vj,25:$Vk,26:$Vl,29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt}),{20:$V8,22:46,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:47,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:48,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},o($Vu,[2,34]),o($Vu,[2,35]),o($Vu,[2,36]),o($Vu,[2,37]),o($Vu,[2,38]),o($Vu,[2,39]),o($Vu,[2,40]),o($V7,[2,13]),{20:$V8,22:49,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:50,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:51,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:52,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:53,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:54,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:55,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:56,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:57,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:58,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:59,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},{20:$V8,22:60,24:$V9,27:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh},o($Vu,[2,23]),{23:$Vi,24:$Vj,25:$Vk,26:$Vl,28:[1,61],29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr,35:$Vs,36:$Vt},o($Vv,[2,33],{23:$Vi,24:$Vj,25:$Vk,26:$Vl,29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr}),o($Vw,[2,19],{25:$Vk,26:$Vl}),o($Vw,[2,20],{25:$Vk,26:$Vl}),o($Vu,[2,21]),o($Vu,[2,22]),o($Vx,[2,25],{23:$Vi,24:$Vj,25:$Vk,26:$Vl}),o($Vx,[2,26],{23:$Vi,24:$Vj,25:$Vk,26:$Vl}),o($Vx,[2,27],{23:$Vi,24:$Vj,25:$Vk,26:$Vl}),o($Vx,[2,28],{23:$Vi,24:$Vj,25:$Vk,26:$Vl}),o($Vx,[2,29],{23:$Vi,24:$Vj,25:$Vk,26:$Vl}),o($Vx,[2,30],{23:$Vi,24:$Vj,25:$Vk,26:$Vl}),o([11,18,28,35],[2,31],{23:$Vi,24:$Vj,25:$Vk,26:$Vl,29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr,36:$Vt}),o($Vv,[2,32],{23:$Vi,24:$Vj,25:$Vk,26:$Vl,29:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq,34:$Vr}),o($Vu,[2,24])],
defaultActions: {8:[2,7],9:[2,8],10:[2,9],11:[2,10],12:[2,11],14:[2,1]},
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
case 2:/*comentario simple*/
break;
case 3:/*comentario multilínea*/
break;
case 4:return 12
break;
case 5:return 13
break;
case 6:return 14
break;
case 7:return 15
break;
case 8:return 16
break;
case 9:return 42
break;
case 10:return 43
break;
case 11:return 'RW_print'
break;
case 12:return 'RW_if'
break;
case 13:return 'RW_new'
break;
case 14:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng - 2);return 40; 
break;
case 15:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng - 2);return 41; 
break;
case 16:return 20
break;
case 17:return 38
break;
case 18:return 39
break;
case 19:return 'TOK_incr'
break;
case 20:return 'TOK_decr'
break;
case 21:return 23
break;
case 22:return 24
break;
case 23:return 25
break;
case 24:return 26
break;
case 25:return 'TOK_mod'
break;
case 26:return 'TOK_pow'
break;
case 27:return 27
break;
case 28:return 28
break;
case 29:return 29
break;
case 30:return 21
break;
case 31:return 18
break;
case 32:return 'TOK_colon'
break;
case 33:return 11
break;
case 34:return 35
break;
case 35:return 36
break;
case 36:return 30
break;
case 37:return 37
break;
case 38:return 33
break;
case 39:return 34
break;
case 40:return 31
break;
case 41:return 32
break;
case 42:return 'TOK_lbracket'
break;
case 43:return 'TOK_rbracket'
break;
case 44:console.log('Error: ' + yy_.yytext)
break;
case 45:return 5
break;
}
},
rules: [/^(?:\s+)/i,/^(?:[ \n\r])/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:int\b)/i,/^(?:double\b)/i,/^(?:boolean\b)/i,/^(?:char\b)/i,/^(?:string\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:print\b)/i,/^(?:if\b)/i,/^(?:new\b)/i,/^(?:"(([^\n\"\\]?|\\.))*")/i,/^(?:'(([^\n\"\\]?|\\.))')/i,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/i,/^(?:[0-9]+\.[0-9]+\b)/i,/^(?:[0-9]+\b)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\^)/i,/^(?:\()/i,/^(?:\))/i,/^(?:==)/i,/^(?:=)/i,/^(?:,)/i,/^(?::)/i,/^(?:;)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:<)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],"inclusive":true}}
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