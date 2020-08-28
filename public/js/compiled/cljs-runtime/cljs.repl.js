goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39315){
var map__39316 = p__39315;
var map__39316__$1 = (((((!((map__39316 == null))))?(((((map__39316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39316):map__39316);
var m = map__39316__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39316__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39316__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39318_39531 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39319_39532 = null;
var count__39320_39533 = (0);
var i__39321_39534 = (0);
while(true){
if((i__39321_39534 < count__39320_39533)){
var f_39535 = chunk__39319_39532.cljs$core$IIndexed$_nth$arity$2(null,i__39321_39534);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39535], 0));


var G__39536 = seq__39318_39531;
var G__39537 = chunk__39319_39532;
var G__39538 = count__39320_39533;
var G__39539 = (i__39321_39534 + (1));
seq__39318_39531 = G__39536;
chunk__39319_39532 = G__39537;
count__39320_39533 = G__39538;
i__39321_39534 = G__39539;
continue;
} else {
var temp__5735__auto___39540 = cljs.core.seq(seq__39318_39531);
if(temp__5735__auto___39540){
var seq__39318_39541__$1 = temp__5735__auto___39540;
if(cljs.core.chunked_seq_QMARK_(seq__39318_39541__$1)){
var c__4556__auto___39542 = cljs.core.chunk_first(seq__39318_39541__$1);
var G__39543 = cljs.core.chunk_rest(seq__39318_39541__$1);
var G__39544 = c__4556__auto___39542;
var G__39545 = cljs.core.count(c__4556__auto___39542);
var G__39546 = (0);
seq__39318_39531 = G__39543;
chunk__39319_39532 = G__39544;
count__39320_39533 = G__39545;
i__39321_39534 = G__39546;
continue;
} else {
var f_39547 = cljs.core.first(seq__39318_39541__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39547], 0));


var G__39548 = cljs.core.next(seq__39318_39541__$1);
var G__39549 = null;
var G__39550 = (0);
var G__39551 = (0);
seq__39318_39531 = G__39548;
chunk__39319_39532 = G__39549;
count__39320_39533 = G__39550;
i__39321_39534 = G__39551;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39552 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39552], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39552)))?cljs.core.second(arglists_39552):arglists_39552)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39325_39554 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39326_39555 = null;
var count__39327_39556 = (0);
var i__39328_39557 = (0);
while(true){
if((i__39328_39557 < count__39327_39556)){
var vec__39342_39558 = chunk__39326_39555.cljs$core$IIndexed$_nth$arity$2(null,i__39328_39557);
var name_39559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39342_39558,(0),null);
var map__39345_39560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39342_39558,(1),null);
var map__39345_39561__$1 = (((((!((map__39345_39560 == null))))?(((((map__39345_39560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39345_39560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39345_39560):map__39345_39560);
var doc_39562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39345_39561__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39345_39561__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39559], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39563], 0));

if(cljs.core.truth_(doc_39562)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39562], 0));
} else {
}


var G__39564 = seq__39325_39554;
var G__39565 = chunk__39326_39555;
var G__39566 = count__39327_39556;
var G__39567 = (i__39328_39557 + (1));
seq__39325_39554 = G__39564;
chunk__39326_39555 = G__39565;
count__39327_39556 = G__39566;
i__39328_39557 = G__39567;
continue;
} else {
var temp__5735__auto___39568 = cljs.core.seq(seq__39325_39554);
if(temp__5735__auto___39568){
var seq__39325_39569__$1 = temp__5735__auto___39568;
if(cljs.core.chunked_seq_QMARK_(seq__39325_39569__$1)){
var c__4556__auto___39570 = cljs.core.chunk_first(seq__39325_39569__$1);
var G__39571 = cljs.core.chunk_rest(seq__39325_39569__$1);
var G__39572 = c__4556__auto___39570;
var G__39573 = cljs.core.count(c__4556__auto___39570);
var G__39574 = (0);
seq__39325_39554 = G__39571;
chunk__39326_39555 = G__39572;
count__39327_39556 = G__39573;
i__39328_39557 = G__39574;
continue;
} else {
var vec__39348_39575 = cljs.core.first(seq__39325_39569__$1);
var name_39576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39348_39575,(0),null);
var map__39351_39577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39348_39575,(1),null);
var map__39351_39578__$1 = (((((!((map__39351_39577 == null))))?(((((map__39351_39577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39351_39577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39351_39577):map__39351_39577);
var doc_39579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39351_39578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39351_39578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39576], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39580], 0));

if(cljs.core.truth_(doc_39579)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39579], 0));
} else {
}


var G__39581 = cljs.core.next(seq__39325_39569__$1);
var G__39582 = null;
var G__39583 = (0);
var G__39584 = (0);
seq__39325_39554 = G__39581;
chunk__39326_39555 = G__39582;
count__39327_39556 = G__39583;
i__39328_39557 = G__39584;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39353 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39354 = null;
var count__39355 = (0);
var i__39356 = (0);
while(true){
if((i__39356 < count__39355)){
var role = chunk__39354.cljs$core$IIndexed$_nth$arity$2(null,i__39356);
var temp__5735__auto___39585__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39585__$1)){
var spec_39588 = temp__5735__auto___39585__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39588)], 0));
} else {
}


var G__39591 = seq__39353;
var G__39592 = chunk__39354;
var G__39593 = count__39355;
var G__39594 = (i__39356 + (1));
seq__39353 = G__39591;
chunk__39354 = G__39592;
count__39355 = G__39593;
i__39356 = G__39594;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__39353);
if(temp__5735__auto____$1){
var seq__39353__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39353__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39353__$1);
var G__39595 = cljs.core.chunk_rest(seq__39353__$1);
var G__39596 = c__4556__auto__;
var G__39597 = cljs.core.count(c__4556__auto__);
var G__39598 = (0);
seq__39353 = G__39595;
chunk__39354 = G__39596;
count__39355 = G__39597;
i__39356 = G__39598;
continue;
} else {
var role = cljs.core.first(seq__39353__$1);
var temp__5735__auto___39599__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___39599__$2)){
var spec_39602 = temp__5735__auto___39599__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39602)], 0));
} else {
}


var G__39605 = cljs.core.next(seq__39353__$1);
var G__39606 = null;
var G__39607 = (0);
var G__39608 = (0);
seq__39353 = G__39605;
chunk__39354 = G__39606;
count__39355 = G__39607;
i__39356 = G__39608;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39609 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39610 = cljs.core.ex_cause(t);
via = G__39609;
t = G__39610;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39363 = datafied_throwable;
var map__39363__$1 = (((((!((map__39363 == null))))?(((((map__39363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39363):map__39363);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39363__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39363__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39363__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39364 = cljs.core.last(via);
var map__39364__$1 = (((((!((map__39364 == null))))?(((((map__39364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39364):map__39364);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39364__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39364__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39364__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39365 = data;
var map__39365__$1 = (((((!((map__39365 == null))))?(((((map__39365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39365):map__39365);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39365__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39365__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39365__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39366 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39366__$1 = (((((!((map__39366 == null))))?(((((map__39366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39366):map__39366);
var top_data = map__39366__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39366__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39372 = phase;
var G__39372__$1 = (((G__39372 instanceof cljs.core.Keyword))?G__39372.fqn:null);
switch (G__39372__$1) {
case "read-source":
var map__39373 = data;
var map__39373__$1 = (((((!((map__39373 == null))))?(((((map__39373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39373):map__39373);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39373__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39373__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39375 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39375__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39375,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39375);
var G__39375__$2 = (cljs.core.truth_((function (){var fexpr__39376 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39376.cljs$core$IFn$_invoke$arity$1 ? fexpr__39376.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39376.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39375__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39375__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39375__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39375__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39377 = top_data;
var G__39377__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39377,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39377);
var G__39377__$2 = (cljs.core.truth_((function (){var fexpr__39378 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39378.cljs$core$IFn$_invoke$arity$1 ? fexpr__39378.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39378.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39377__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39377__$1);
var G__39377__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39377__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39377__$2);
var G__39377__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39377__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39377__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39377__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39377__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39396 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39396,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39396,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39396,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39396,(3),null);
var G__39399 = top_data;
var G__39399__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39399,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39399);
var G__39399__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39399__$1);
var G__39399__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39399__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39399__$2);
var G__39399__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39399__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39399__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39399__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39399__$4;
}

break;
case "execution":
var vec__39407 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39361_SHARP_){
var or__4126__auto__ = (p1__39361_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__39425 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39425.cljs$core$IFn$_invoke$arity$1 ? fexpr__39425.cljs$core$IFn$_invoke$arity$1(p1__39361_SHARP_) : fexpr__39425.call(null,p1__39361_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__39426 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39426__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39426,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39426);
var G__39426__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39426__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39426__$1);
var G__39426__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39426__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39426__$2);
var G__39426__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39426__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39426__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39426__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39426__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39372__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39467){
var map__39472 = p__39467;
var map__39472__$1 = (((((!((map__39472 == null))))?(((((map__39472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39472):map__39472);
var triage_data = map__39472__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39489 = phase;
var G__39489__$1 = (((G__39489 instanceof cljs.core.Keyword))?G__39489.fqn:null);
switch (G__39489__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39490 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39491 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39492 = loc;
var G__39493 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39495_39615 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39496_39616 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39497_39617 = true;
var _STAR_print_fn_STAR__temp_val__39498_39618 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39497_39617);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39498_39618);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39458_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39458_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39496_39616);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39495_39615);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39490,G__39491,G__39492,G__39493) : format.call(null,G__39490,G__39491,G__39492,G__39493));

break;
case "macroexpansion":
var G__39500 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39501 = cause_type;
var G__39502 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39503 = loc;
var G__39504 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39500,G__39501,G__39502,G__39503,G__39504) : format.call(null,G__39500,G__39501,G__39502,G__39503,G__39504));

break;
case "compile-syntax-check":
var G__39505 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39506 = cause_type;
var G__39507 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39508 = loc;
var G__39509 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39505,G__39506,G__39507,G__39508,G__39509) : format.call(null,G__39505,G__39506,G__39507,G__39508,G__39509));

break;
case "compilation":
var G__39510 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39511 = cause_type;
var G__39512 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39513 = loc;
var G__39514 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39510,G__39511,G__39512,G__39513,G__39514) : format.call(null,G__39510,G__39511,G__39512,G__39513,G__39514));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39515 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39516 = symbol;
var G__39517 = loc;
var G__39518 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39519_39619 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39520_39620 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39521_39621 = true;
var _STAR_print_fn_STAR__temp_val__39522_39622 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39521_39621);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39522_39622);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39459_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39459_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39520_39620);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39519_39619);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39515,G__39516,G__39517,G__39518) : format.call(null,G__39515,G__39516,G__39517,G__39518));
} else {
var G__39523 = "Execution error%s at %s(%s).\n%s\n";
var G__39524 = cause_type;
var G__39525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39526 = loc;
var G__39527 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39523,G__39524,G__39525,G__39526,G__39527) : format.call(null,G__39523,G__39524,G__39525,G__39526,G__39527));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39489__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
