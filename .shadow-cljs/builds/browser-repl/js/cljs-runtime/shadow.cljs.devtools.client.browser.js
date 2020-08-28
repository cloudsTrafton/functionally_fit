goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49949 = arguments.length;
var i__4737__auto___49950 = (0);
while(true){
if((i__4737__auto___49950 < len__4736__auto___49949)){
args__4742__auto__.push((arguments[i__4737__auto___49950]));

var G__49951 = (i__4737__auto___49950 + (1));
i__4737__auto___49950 = G__49951;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49783){
var G__49784 = cljs.core.first(seq49783);
var seq49783__$1 = cljs.core.next(seq49783);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49784,seq49783__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49796 = cljs.core.seq(sources);
var chunk__49797 = null;
var count__49798 = (0);
var i__49799 = (0);
while(true){
if((i__49799 < count__49798)){
var map__49817 = chunk__49797.cljs$core$IIndexed$_nth$arity$2(null,i__49799);
var map__49817__$1 = (((((!((map__49817 == null))))?(((((map__49817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49817):map__49817);
var src = map__49817__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49817__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49819){var e_49952 = e49819;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49952);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49952.message)].join('')));
}

var G__49953 = seq__49796;
var G__49954 = chunk__49797;
var G__49955 = count__49798;
var G__49956 = (i__49799 + (1));
seq__49796 = G__49953;
chunk__49797 = G__49954;
count__49798 = G__49955;
i__49799 = G__49956;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49796);
if(temp__5735__auto__){
var seq__49796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49796__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49796__$1);
var G__49957 = cljs.core.chunk_rest(seq__49796__$1);
var G__49958 = c__4556__auto__;
var G__49959 = cljs.core.count(c__4556__auto__);
var G__49960 = (0);
seq__49796 = G__49957;
chunk__49797 = G__49958;
count__49798 = G__49959;
i__49799 = G__49960;
continue;
} else {
var map__49822 = cljs.core.first(seq__49796__$1);
var map__49822__$1 = (((((!((map__49822 == null))))?(((((map__49822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49822):map__49822);
var src = map__49822__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49822__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49822__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49822__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49822__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49824){var e_49961 = e49824;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49961);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49961.message)].join('')));
}

var G__49962 = cljs.core.next(seq__49796__$1);
var G__49963 = null;
var G__49964 = (0);
var G__49965 = (0);
seq__49796 = G__49962;
chunk__49797 = G__49963;
count__49798 = G__49964;
i__49799 = G__49965;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49825 = cljs.core.seq(js_requires);
var chunk__49826 = null;
var count__49827 = (0);
var i__49828 = (0);
while(true){
if((i__49828 < count__49827)){
var js_ns = chunk__49826.cljs$core$IIndexed$_nth$arity$2(null,i__49828);
var require_str_49966 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49966);


var G__49967 = seq__49825;
var G__49968 = chunk__49826;
var G__49969 = count__49827;
var G__49970 = (i__49828 + (1));
seq__49825 = G__49967;
chunk__49826 = G__49968;
count__49827 = G__49969;
i__49828 = G__49970;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49825);
if(temp__5735__auto__){
var seq__49825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49825__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49825__$1);
var G__49971 = cljs.core.chunk_rest(seq__49825__$1);
var G__49972 = c__4556__auto__;
var G__49973 = cljs.core.count(c__4556__auto__);
var G__49974 = (0);
seq__49825 = G__49971;
chunk__49826 = G__49972;
count__49827 = G__49973;
i__49828 = G__49974;
continue;
} else {
var js_ns = cljs.core.first(seq__49825__$1);
var require_str_49975 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49975);


var G__49976 = cljs.core.next(seq__49825__$1);
var G__49977 = null;
var G__49978 = (0);
var G__49979 = (0);
seq__49825 = G__49976;
chunk__49826 = G__49977;
count__49827 = G__49978;
i__49828 = G__49979;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__49833){
var map__49834 = p__49833;
var map__49834__$1 = (((((!((map__49834 == null))))?(((((map__49834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49834):map__49834);
var msg = map__49834__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49834__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49834__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49836(s__49837){
return (new cljs.core.LazySeq(null,(function (){
var s__49837__$1 = s__49837;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49837__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49842 = cljs.core.first(xs__6292__auto__);
var map__49842__$1 = (((((!((map__49842 == null))))?(((((map__49842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49842):map__49842);
var src = map__49842__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49842__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49842__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__49837__$1,map__49842,map__49842__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49834,map__49834__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49836_$_iter__49838(s__49839){
return (new cljs.core.LazySeq(null,((function (s__49837__$1,map__49842,map__49842__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49834,map__49834__$1,msg,info,reload_info){
return (function (){
var s__49839__$1 = s__49839;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49839__$1);
if(temp__5735__auto____$1){
var s__49839__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49839__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49839__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49841 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49840 = (0);
while(true){
if((i__49840 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__49840);
cljs.core.chunk_append(b__49841,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49980 = (i__49840 + (1));
i__49840 = G__49980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49841),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49836_$_iter__49838(cljs.core.chunk_rest(s__49839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49841),null);
}
} else {
var warning = cljs.core.first(s__49839__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49836_$_iter__49838(cljs.core.rest(s__49839__$2)));
}
} else {
return null;
}
break;
}
});})(s__49837__$1,map__49842,map__49842__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49834,map__49834__$1,msg,info,reload_info))
,null,null));
});})(s__49837__$1,map__49842,map__49842__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49834,map__49834__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49836(cljs.core.rest(s__49837__$1)));
} else {
var G__49981 = cljs.core.rest(s__49837__$1);
s__49837__$1 = G__49981;
continue;
}
} else {
var G__49982 = cljs.core.rest(s__49837__$1);
s__49837__$1 = G__49982;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__49846_49983 = cljs.core.seq(warnings);
var chunk__49847_49984 = null;
var count__49848_49985 = (0);
var i__49849_49986 = (0);
while(true){
if((i__49849_49986 < count__49848_49985)){
var map__49854_49987 = chunk__49847_49984.cljs$core$IIndexed$_nth$arity$2(null,i__49849_49986);
var map__49854_49988__$1 = (((((!((map__49854_49987 == null))))?(((((map__49854_49987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49854_49987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49854_49987):map__49854_49987);
var w_49989 = map__49854_49988__$1;
var msg_49990__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854_49988__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854_49988__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854_49988__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854_49988__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49993)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49991),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49992),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49990__$1)].join(''));


var G__49994 = seq__49846_49983;
var G__49995 = chunk__49847_49984;
var G__49996 = count__49848_49985;
var G__49997 = (i__49849_49986 + (1));
seq__49846_49983 = G__49994;
chunk__49847_49984 = G__49995;
count__49848_49985 = G__49996;
i__49849_49986 = G__49997;
continue;
} else {
var temp__5735__auto___49998 = cljs.core.seq(seq__49846_49983);
if(temp__5735__auto___49998){
var seq__49846_49999__$1 = temp__5735__auto___49998;
if(cljs.core.chunked_seq_QMARK_(seq__49846_49999__$1)){
var c__4556__auto___50000 = cljs.core.chunk_first(seq__49846_49999__$1);
var G__50001 = cljs.core.chunk_rest(seq__49846_49999__$1);
var G__50002 = c__4556__auto___50000;
var G__50003 = cljs.core.count(c__4556__auto___50000);
var G__50004 = (0);
seq__49846_49983 = G__50001;
chunk__49847_49984 = G__50002;
count__49848_49985 = G__50003;
i__49849_49986 = G__50004;
continue;
} else {
var map__49856_50005 = cljs.core.first(seq__49846_49999__$1);
var map__49856_50006__$1 = (((((!((map__49856_50005 == null))))?(((((map__49856_50005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49856_50005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49856_50005):map__49856_50005);
var w_50007 = map__49856_50006__$1;
var msg_50008__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856_50006__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856_50006__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856_50006__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49856_50006__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50011)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50009),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50010),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50008__$1)].join(''));


var G__50012 = cljs.core.next(seq__49846_49999__$1);
var G__50013 = null;
var G__50014 = (0);
var G__50015 = (0);
seq__49846_49983 = G__50012;
chunk__49847_49984 = G__50013;
count__49848_49985 = G__50014;
i__49849_49986 = G__50015;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__49832_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49832_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__49859){
var map__49860 = p__49859;
var map__49860__$1 = (((((!((map__49860 == null))))?(((((map__49860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49860):map__49860);
var msg = map__49860__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49863 = cljs.core.seq(updates);
var chunk__49865 = null;
var count__49866 = (0);
var i__49867 = (0);
while(true){
if((i__49867 < count__49866)){
var path = chunk__49865.cljs$core$IIndexed$_nth$arity$2(null,i__49867);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49893_50016 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49896_50017 = null;
var count__49897_50018 = (0);
var i__49898_50019 = (0);
while(true){
if((i__49898_50019 < count__49897_50018)){
var node_50020 = chunk__49896_50017.cljs$core$IIndexed$_nth$arity$2(null,i__49898_50019);
var path_match_50021 = shadow.cljs.devtools.client.browser.match_paths(node_50020.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50021)){
var new_link_50022 = (function (){var G__49903 = node_50020.cloneNode(true);
G__49903.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50021),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49903;
})();
(new_link_50022.onload = ((function (seq__49893_50016,chunk__49896_50017,count__49897_50018,i__49898_50019,seq__49863,chunk__49865,count__49866,i__49867,new_link_50022,path_match_50021,node_50020,path,map__49860,map__49860__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_50020);
});})(seq__49893_50016,chunk__49896_50017,count__49897_50018,i__49898_50019,seq__49863,chunk__49865,count__49866,i__49867,new_link_50022,path_match_50021,node_50020,path,map__49860,map__49860__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50021], 0));

goog.dom.insertSiblingAfter(new_link_50022,node_50020);


var G__50023 = seq__49893_50016;
var G__50024 = chunk__49896_50017;
var G__50025 = count__49897_50018;
var G__50026 = (i__49898_50019 + (1));
seq__49893_50016 = G__50023;
chunk__49896_50017 = G__50024;
count__49897_50018 = G__50025;
i__49898_50019 = G__50026;
continue;
} else {
var G__50027 = seq__49893_50016;
var G__50028 = chunk__49896_50017;
var G__50029 = count__49897_50018;
var G__50030 = (i__49898_50019 + (1));
seq__49893_50016 = G__50027;
chunk__49896_50017 = G__50028;
count__49897_50018 = G__50029;
i__49898_50019 = G__50030;
continue;
}
} else {
var temp__5735__auto___50031 = cljs.core.seq(seq__49893_50016);
if(temp__5735__auto___50031){
var seq__49893_50032__$1 = temp__5735__auto___50031;
if(cljs.core.chunked_seq_QMARK_(seq__49893_50032__$1)){
var c__4556__auto___50033 = cljs.core.chunk_first(seq__49893_50032__$1);
var G__50034 = cljs.core.chunk_rest(seq__49893_50032__$1);
var G__50035 = c__4556__auto___50033;
var G__50036 = cljs.core.count(c__4556__auto___50033);
var G__50037 = (0);
seq__49893_50016 = G__50034;
chunk__49896_50017 = G__50035;
count__49897_50018 = G__50036;
i__49898_50019 = G__50037;
continue;
} else {
var node_50038 = cljs.core.first(seq__49893_50032__$1);
var path_match_50039 = shadow.cljs.devtools.client.browser.match_paths(node_50038.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50039)){
var new_link_50040 = (function (){var G__49904 = node_50038.cloneNode(true);
G__49904.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50039),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49904;
})();
(new_link_50040.onload = ((function (seq__49893_50016,chunk__49896_50017,count__49897_50018,i__49898_50019,seq__49863,chunk__49865,count__49866,i__49867,new_link_50040,path_match_50039,node_50038,seq__49893_50032__$1,temp__5735__auto___50031,path,map__49860,map__49860__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_50038);
});})(seq__49893_50016,chunk__49896_50017,count__49897_50018,i__49898_50019,seq__49863,chunk__49865,count__49866,i__49867,new_link_50040,path_match_50039,node_50038,seq__49893_50032__$1,temp__5735__auto___50031,path,map__49860,map__49860__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50039], 0));

goog.dom.insertSiblingAfter(new_link_50040,node_50038);


var G__50041 = cljs.core.next(seq__49893_50032__$1);
var G__50042 = null;
var G__50043 = (0);
var G__50044 = (0);
seq__49893_50016 = G__50041;
chunk__49896_50017 = G__50042;
count__49897_50018 = G__50043;
i__49898_50019 = G__50044;
continue;
} else {
var G__50045 = cljs.core.next(seq__49893_50032__$1);
var G__50046 = null;
var G__50047 = (0);
var G__50048 = (0);
seq__49893_50016 = G__50045;
chunk__49896_50017 = G__50046;
count__49897_50018 = G__50047;
i__49898_50019 = G__50048;
continue;
}
}
} else {
}
}
break;
}


var G__50049 = seq__49863;
var G__50050 = chunk__49865;
var G__50051 = count__49866;
var G__50052 = (i__49867 + (1));
seq__49863 = G__50049;
chunk__49865 = G__50050;
count__49866 = G__50051;
i__49867 = G__50052;
continue;
} else {
var G__50053 = seq__49863;
var G__50054 = chunk__49865;
var G__50055 = count__49866;
var G__50056 = (i__49867 + (1));
seq__49863 = G__50053;
chunk__49865 = G__50054;
count__49866 = G__50055;
i__49867 = G__50056;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49863);
if(temp__5735__auto__){
var seq__49863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49863__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49863__$1);
var G__50057 = cljs.core.chunk_rest(seq__49863__$1);
var G__50058 = c__4556__auto__;
var G__50059 = cljs.core.count(c__4556__auto__);
var G__50060 = (0);
seq__49863 = G__50057;
chunk__49865 = G__50058;
count__49866 = G__50059;
i__49867 = G__50060;
continue;
} else {
var path = cljs.core.first(seq__49863__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49905_50061 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49908_50062 = null;
var count__49909_50063 = (0);
var i__49910_50064 = (0);
while(true){
if((i__49910_50064 < count__49909_50063)){
var node_50065 = chunk__49908_50062.cljs$core$IIndexed$_nth$arity$2(null,i__49910_50064);
var path_match_50066 = shadow.cljs.devtools.client.browser.match_paths(node_50065.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50066)){
var new_link_50067 = (function (){var G__49915 = node_50065.cloneNode(true);
G__49915.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50066),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49915;
})();
(new_link_50067.onload = ((function (seq__49905_50061,chunk__49908_50062,count__49909_50063,i__49910_50064,seq__49863,chunk__49865,count__49866,i__49867,new_link_50067,path_match_50066,node_50065,path,seq__49863__$1,temp__5735__auto__,map__49860,map__49860__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_50065);
});})(seq__49905_50061,chunk__49908_50062,count__49909_50063,i__49910_50064,seq__49863,chunk__49865,count__49866,i__49867,new_link_50067,path_match_50066,node_50065,path,seq__49863__$1,temp__5735__auto__,map__49860,map__49860__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50066], 0));

goog.dom.insertSiblingAfter(new_link_50067,node_50065);


var G__50068 = seq__49905_50061;
var G__50069 = chunk__49908_50062;
var G__50070 = count__49909_50063;
var G__50071 = (i__49910_50064 + (1));
seq__49905_50061 = G__50068;
chunk__49908_50062 = G__50069;
count__49909_50063 = G__50070;
i__49910_50064 = G__50071;
continue;
} else {
var G__50072 = seq__49905_50061;
var G__50073 = chunk__49908_50062;
var G__50074 = count__49909_50063;
var G__50075 = (i__49910_50064 + (1));
seq__49905_50061 = G__50072;
chunk__49908_50062 = G__50073;
count__49909_50063 = G__50074;
i__49910_50064 = G__50075;
continue;
}
} else {
var temp__5735__auto___50076__$1 = cljs.core.seq(seq__49905_50061);
if(temp__5735__auto___50076__$1){
var seq__49905_50077__$1 = temp__5735__auto___50076__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49905_50077__$1)){
var c__4556__auto___50078 = cljs.core.chunk_first(seq__49905_50077__$1);
var G__50079 = cljs.core.chunk_rest(seq__49905_50077__$1);
var G__50080 = c__4556__auto___50078;
var G__50081 = cljs.core.count(c__4556__auto___50078);
var G__50082 = (0);
seq__49905_50061 = G__50079;
chunk__49908_50062 = G__50080;
count__49909_50063 = G__50081;
i__49910_50064 = G__50082;
continue;
} else {
var node_50083 = cljs.core.first(seq__49905_50077__$1);
var path_match_50084 = shadow.cljs.devtools.client.browser.match_paths(node_50083.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50084)){
var new_link_50085 = (function (){var G__49916 = node_50083.cloneNode(true);
G__49916.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50084),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49916;
})();
(new_link_50085.onload = ((function (seq__49905_50061,chunk__49908_50062,count__49909_50063,i__49910_50064,seq__49863,chunk__49865,count__49866,i__49867,new_link_50085,path_match_50084,node_50083,seq__49905_50077__$1,temp__5735__auto___50076__$1,path,seq__49863__$1,temp__5735__auto__,map__49860,map__49860__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_50083);
});})(seq__49905_50061,chunk__49908_50062,count__49909_50063,i__49910_50064,seq__49863,chunk__49865,count__49866,i__49867,new_link_50085,path_match_50084,node_50083,seq__49905_50077__$1,temp__5735__auto___50076__$1,path,seq__49863__$1,temp__5735__auto__,map__49860,map__49860__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50084], 0));

goog.dom.insertSiblingAfter(new_link_50085,node_50083);


var G__50086 = cljs.core.next(seq__49905_50077__$1);
var G__50087 = null;
var G__50088 = (0);
var G__50089 = (0);
seq__49905_50061 = G__50086;
chunk__49908_50062 = G__50087;
count__49909_50063 = G__50088;
i__49910_50064 = G__50089;
continue;
} else {
var G__50090 = cljs.core.next(seq__49905_50077__$1);
var G__50091 = null;
var G__50092 = (0);
var G__50093 = (0);
seq__49905_50061 = G__50090;
chunk__49908_50062 = G__50091;
count__49909_50063 = G__50092;
i__49910_50064 = G__50093;
continue;
}
}
} else {
}
}
break;
}


var G__50094 = cljs.core.next(seq__49863__$1);
var G__50095 = null;
var G__50096 = (0);
var G__50097 = (0);
seq__49863 = G__50094;
chunk__49865 = G__50095;
count__49866 = G__50096;
i__49867 = G__50097;
continue;
} else {
var G__50098 = cljs.core.next(seq__49863__$1);
var G__50099 = null;
var G__50100 = (0);
var G__50101 = (0);
seq__49863 = G__50098;
chunk__49865 = G__50099;
count__49866 = G__50100;
i__49867 = G__50101;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__49917){
var map__49918 = p__49917;
var map__49918__$1 = (((((!((map__49918 == null))))?(((((map__49918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49918):map__49918);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49918__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__49920){
var map__49921 = p__49920;
var map__49921__$1 = (((((!((map__49921 == null))))?(((((map__49921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49921):map__49921);
var _ = map__49921__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49921__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__49923,done,error){
var map__49924 = p__49923;
var map__49924__$1 = (((((!((map__49924 == null))))?(((((map__49924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49924):map__49924);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49924__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__49926,done,error){
var map__49927 = p__49926;
var map__49927__$1 = (((((!((map__49927 == null))))?(((((map__49927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49927):map__49927);
var msg = map__49927__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49929){
var map__49930 = p__49929;
var map__49930__$1 = (((((!((map__49930 == null))))?(((((map__49930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49930):map__49930);
var src = map__49930__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49930__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__49932 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__49932) : done.call(null,G__49932));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__49933){
var map__49934 = p__49933;
var map__49934__$1 = (((((!((map__49934 == null))))?(((((map__49934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49934):map__49934);
var msg__$1 = map__49934__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49934__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e49936){var ex = e49936;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__49937){
var map__49938 = p__49937;
var map__49938__$1 = (((((!((map__49938 == null))))?(((((map__49938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49938):map__49938);
var env = map__49938__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49938__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__49940){
var map__49941 = p__49940;
var map__49941__$1 = (((((!((map__49941 == null))))?(((((map__49941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49941):map__49941);
var msg = map__49941__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49941__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__49943){
var map__49944 = p__49943;
var map__49944__$1 = (((((!((map__49944 == null))))?(((((map__49944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49944):map__49944);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49944__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49944__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__49946){
var map__49947 = p__49946;
var map__49947__$1 = (((((!((map__49947 == null))))?(((((map__49947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49947):map__49947);
var svc = map__49947__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49947__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
