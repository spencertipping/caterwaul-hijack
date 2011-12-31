caterwaul.module( 'hijack' ,function($) {$.hijack=function( /* unary , node */options) {;
return(function( ) {var lex_table=function( /* unary , node */cs) {;
return(function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( (cs.indexOf(x) ?true:false) ) ;
return xr} ) .call(this, (function(i,u,s) {if( (u-i) *s<=0)return[ ] ;
for(var r= [ ] ,d=u-i;
d>0?i<u:i>u;
i+=s)r.push(i) ;
return r} ) ( (0) , (255) , (1) ) ) } ,hash=function( /* unary , node */xs) {;
return(function(o) {for(var r= { } ,i=0,l=o.length,x;
i<l;
 ++i)x=o[i] ,r[x[0] ] =x[1] ;
return r} ) .call(this, ( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( [x,true] ) ) ;
return xr} ) .call(this,xs) ) ) } ,default_tables= {lex_float: '.0123456789' ,lex_decimal: '0123456789' ,lex_integer: '0123456789abcdefABCDEFx' ,lex_exp: 'eE' ,lex_space: ' \n\t\r' ,lex_bracket: '()[]{}?:' ,lex_opener: '([{?:' ,lex_punct: '+-*/%&|^!~=<>?:;.,' ,lex_eol: '\n\r' ,lex_regexp_suffix: 'gims' ,lex_quote: '\'"/' ,lex_ident: '$_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' } ,default_codes= {lex_slash: '/' ,lex_zero: '0' ,lex_star: '*' ,lex_back: '\\' ,lex_x: 'x' ,lex_dot: '.' ,lex_hash: '#' } ,operators=function( /* unary , node */options) {;
return(function( ) {var lex_op= (function(it) {return(hash(it) ) } ) .call(this, ( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push.apply(xr,Array.prototype.slice.call( (x.split( /\s+/ ) ) ) ) ;
return xr} ) .call(this,options.precedence) ) ) ,parse_reduce_order= (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( (hash( /* unary , node */x.split( /\s+/ ) ) ) ) ;
return xr} ) .call(this,options.precedence) ,parse_associates_right=hash( /* unary , node */options.right.split( /\s+/ ) ) ,parse_lr=hash( /* unary , node */options.binary.split( /\s+/ ) ) ,parse_r=options.prefix||hash( /* unary , node */ [ 'u+' , 'u-' , 'u!' , 'u~' , 'u++' , 'u--' , 'new' , 'typeof' , 'finally' , 'case' , 'var' , 'const' , 'void' , 'delete' ] ) ,parse_l=options.postfix||hash( /* unary , node */ [ '--' , '++' ] ) ,parse_index_forward= (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( !parse_associates_right.hasOwnProperty( (function(it) {return(it[0] ) } ) .call(this, ( (function(o) {var ks= [ ] ;
for(var k in o)Object.prototype.hasOwnProperty.call(o,k) &&ks.push(k) ;
return ks} ) .call(this, (x) ) ) ) ) ) ) ;
return xr} ) .call(this,parse_reduce_order) ,parse_inverse_order= (function(xs) {var x,x0,xi,xl,xr;
var xr=new xs.constructor() ;
for(var k_b_KCH_UvYwqNA2WZogpa70Ib in xs)if(Object.prototype.hasOwnProperty.call(xs,k_b_KCH_UvYwqNA2WZogpa70Ib) )x=xs[k_b_KCH_UvYwqNA2WZogpa70Ib] ,xr[k_b_KCH_UvYwqNA2WZogpa70Ib] = ( +x) ;
return xr} ) .call(this, (function(o) {for(var r= { } ,i=0,l=o.length,x;
i<l;
 ++i)x=o[i] ,r[x[0] ] =x[1] ;
return r} ) .call(this, ( (function(xs) {var x,x0,xi,xl,xr;
for(var xr=new xs.constructor() ,xi=0,xl=xs.length;
xi<xl;
 ++xi)x=xs[xi] ,xr.push( ( [x[1] ,x[0] ] ) ) ;
return xr} ) .call(this, (function(o) {var ps= [ ] ;
for(var k in o)Object.prototype.hasOwnProperty.call(o,k) &&ps.push( [k,o[k] ] ) ;
return ps} ) .call(this, (parse_reduce_order) ) ) ) ) ) ,parse_accepts=options.accepts|| { 'if' : 'else' , 'do' : 'while' , 'catch' : 'finally' , 'try' : 'catch' } ,parse_r_until_block=options.blocks|| (function(xs) {var x,x0,xi,xl,xr;
var xr=new xs.constructor() ;
for(var k_b_KCH_UvYwqNA2WZogpa70Ib in xs)if(Object.prototype.hasOwnProperty.call(xs,k_b_KCH_UvYwqNA2WZogpa70Ib) )x=xs[k_b_KCH_UvYwqNA2WZogpa70Ib] ,xr[k_b_KCH_UvYwqNA2WZogpa70Ib] = ( +x) ;
return xr} ) .call(this, { 'function' : '2' , 'if' : '1' , 'do' : '1' , 'catch' : '1' , 'try' : '1' , 'for' : '1' , 'while' : '1' , 'with' : '1' , 'switch' : '1' } ) ,parse_invocation=options.invocation||hash( /* unary , node */ [ '()' , '[]' ] ) ,parse_r_optional=options.r_optional||hash( /* unary , node */ [ 'return' , 'throw' , 'break' , 'continue' , 'else' ] ) ,parse_group=options.group|| { '(' : ')' , '[' : ']' , '{' : '}' , '?' : ':' } ,parse_ambiguous_group=options.ambiguous_group||hash( /* unary , node */ [ '(' , '[' ] ) ,parse_block=options.block||hash( /* unary , node */ [ ';' , '{' ] ) ,parse_ternary=options.ternary||hash( /* unary , node */ [ /* unary , node */ '?' ] ) ,parse_not_a_value=options.not_a_value||hash( /* unary , node */ [ 'function' , 'if' , 'for' , 'while' , 'catch' , 'void' , 'delete' , 'new' , 'typeof' , 'in' , 'instanceof' ] ) ,parse_also_expression=options.also_expression||hash( /* unary , node */ [ /* unary , node */ 'function' ] ) ;
return( {lex_op:lex_op,parse_reduce_order:parse_reduce_order,parse_associates_right:parse_associates_right,parse_lr:parse_lr,parse_r:parse_r,parse_l:parse_l,parse_index_forward:parse_index_forward,parse_inverse_order:parse_inverse_order,parse_accepts:parse_accepts,parse_r_until_block:parse_r_until_block,parse_invocation:parse_invocation,parse_r_optional:parse_r_optional,parse_group:parse_group,parse_ambiguous_group:parse_ambiguous_group,parse_block:parse_block,parse_ternary:parse_ternary,parse_not_a_value:parse_not_a_value,parse_also_expression:parse_also_expression} ) } ) .call(this) } ,bindings_for=function( /* unary , node */options) {;
return $.merge( { } , (function(xs) {var x,x0,xi,xl,xr;
var xr=new xs.constructor() ;
for(var k_b_KCH_UvYwqNA2WZogpa70Ib in xs)if(Object.prototype.hasOwnProperty.call(xs,k_b_KCH_UvYwqNA2WZogpa70Ib) )x=xs[k_b_KCH_UvYwqNA2WZogpa70Ib] ,xr[k_b_KCH_UvYwqNA2WZogpa70Ib] = ( (lex_table) .call( {x0:x0,xi:xi,xl:xl,xs:xs,xr:xr} ,x) ) ;
return xr} ) .call(this,$.merge( { } ,default_tables,options.tables) ) , (function(xs) {var x,x0,xi,xl,xr;
var xr=new xs.constructor() ;
for(var k_b_KCH_UvYwqNA2WZogpa70Ib in xs)if(Object.prototype.hasOwnProperty.call(xs,k_b_KCH_UvYwqNA2WZogpa70Ib) )x=xs[k_b_KCH_UvYwqNA2WZogpa70Ib] ,xr[k_b_KCH_UvYwqNA2WZogpa70Ib] = (x.charCodeAt(0) ) ;
return xr} ) .call(this,$.merge( { } ,default_codes,options.codes) ) ,operators(options) ) } ;
return( (function( ) {var bindings=bindings_for(options) ;
return( {parse:$.compile($.parse( /* unary , node */$.parse) ,bindings) ,serialize:$.compile($.parse( /* unary , node */$.javascript_tree_serialization_methods.serialize) ,bindings) } ) } ) .call(this) ) } ) .call(this) } } ) ;