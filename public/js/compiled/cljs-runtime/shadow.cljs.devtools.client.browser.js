goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38197 = arguments.length;
var i__4737__auto___38198 = (0);
while(true){
if((i__4737__auto___38198 < len__4736__auto___38197)){
args__4742__auto__.push((arguments[i__4737__auto___38198]));

var G__38199 = (i__4737__auto___38198 + (1));
i__4737__auto___38198 = G__38199;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37905){
var G__37906 = cljs.core.first(seq37905);
var seq37905__$1 = cljs.core.next(seq37905);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37906,seq37905__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37925 = cljs.core.seq(sources);
var chunk__37926 = null;
var count__37927 = (0);
var i__37928 = (0);
while(true){
if((i__37928 < count__37927)){
var map__37950 = chunk__37926.cljs$core$IIndexed$_nth$arity$2(null,i__37928);
var map__37950__$1 = (((((!((map__37950 == null))))?(((((map__37950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37950):map__37950);
var src = map__37950__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37950__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37955){var e_38200 = e37955;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38200);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38200.message)].join('')));
}

var G__38201 = seq__37925;
var G__38202 = chunk__37926;
var G__38203 = count__37927;
var G__38204 = (i__37928 + (1));
seq__37925 = G__38201;
chunk__37926 = G__38202;
count__37927 = G__38203;
i__37928 = G__38204;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37925);
if(temp__5735__auto__){
var seq__37925__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37925__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37925__$1);
var G__38207 = cljs.core.chunk_rest(seq__37925__$1);
var G__38208 = c__4556__auto__;
var G__38209 = cljs.core.count(c__4556__auto__);
var G__38210 = (0);
seq__37925 = G__38207;
chunk__37926 = G__38208;
count__37927 = G__38209;
i__37928 = G__38210;
continue;
} else {
var map__37956 = cljs.core.first(seq__37925__$1);
var map__37956__$1 = (((((!((map__37956 == null))))?(((((map__37956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37956):map__37956);
var src = map__37956__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37956__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37958){var e_38211 = e37958;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38211);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38211.message)].join('')));
}

var G__38212 = cljs.core.next(seq__37925__$1);
var G__38213 = null;
var G__38214 = (0);
var G__38215 = (0);
seq__37925 = G__38212;
chunk__37926 = G__38213;
count__37927 = G__38214;
i__37928 = G__38215;
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
var seq__37959 = cljs.core.seq(js_requires);
var chunk__37960 = null;
var count__37961 = (0);
var i__37962 = (0);
while(true){
if((i__37962 < count__37961)){
var js_ns = chunk__37960.cljs$core$IIndexed$_nth$arity$2(null,i__37962);
var require_str_38216 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38216);


var G__38217 = seq__37959;
var G__38218 = chunk__37960;
var G__38219 = count__37961;
var G__38220 = (i__37962 + (1));
seq__37959 = G__38217;
chunk__37960 = G__38218;
count__37961 = G__38219;
i__37962 = G__38220;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37959);
if(temp__5735__auto__){
var seq__37959__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37959__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37959__$1);
var G__38221 = cljs.core.chunk_rest(seq__37959__$1);
var G__38222 = c__4556__auto__;
var G__38223 = cljs.core.count(c__4556__auto__);
var G__38224 = (0);
seq__37959 = G__38221;
chunk__37960 = G__38222;
count__37961 = G__38223;
i__37962 = G__38224;
continue;
} else {
var js_ns = cljs.core.first(seq__37959__$1);
var require_str_38225 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38225);


var G__38226 = cljs.core.next(seq__37959__$1);
var G__38227 = null;
var G__38228 = (0);
var G__38229 = (0);
seq__37959 = G__38226;
chunk__37960 = G__38227;
count__37961 = G__38228;
i__37962 = G__38229;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37969){
var map__37970 = p__37969;
var map__37970__$1 = (((((!((map__37970 == null))))?(((((map__37970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37970):map__37970);
var msg = map__37970__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37970__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37970__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37975(s__37976){
return (new cljs.core.LazySeq(null,(function (){
var s__37976__$1 = s__37976;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37976__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37982 = cljs.core.first(xs__6292__auto__);
var map__37982__$1 = (((((!((map__37982 == null))))?(((((map__37982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37982):map__37982);
var src = map__37982__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37976__$1,map__37982,map__37982__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37970,map__37970__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37975_$_iter__37977(s__37978){
return (new cljs.core.LazySeq(null,((function (s__37976__$1,map__37982,map__37982__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37970,map__37970__$1,msg,info,reload_info){
return (function (){
var s__37978__$1 = s__37978;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37978__$1);
if(temp__5735__auto____$1){
var s__37978__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37978__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37978__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37980 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37979 = (0);
while(true){
if((i__37979 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37979);
cljs.core.chunk_append(b__37980,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38235 = (i__37979 + (1));
i__37979 = G__38235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37980),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37975_$_iter__37977(cljs.core.chunk_rest(s__37978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37980),null);
}
} else {
var warning = cljs.core.first(s__37978__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37975_$_iter__37977(cljs.core.rest(s__37978__$2)));
}
} else {
return null;
}
break;
}
});})(s__37976__$1,map__37982,map__37982__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37970,map__37970__$1,msg,info,reload_info))
,null,null));
});})(s__37976__$1,map__37982,map__37982__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37970,map__37970__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37975(cljs.core.rest(s__37976__$1)));
} else {
var G__38237 = cljs.core.rest(s__37976__$1);
s__37976__$1 = G__38237;
continue;
}
} else {
var G__38239 = cljs.core.rest(s__37976__$1);
s__37976__$1 = G__38239;
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
var seq__37987_38240 = cljs.core.seq(warnings);
var chunk__37988_38241 = null;
var count__37989_38242 = (0);
var i__37990_38243 = (0);
while(true){
if((i__37990_38243 < count__37989_38242)){
var map__37995_38244 = chunk__37988_38241.cljs$core$IIndexed$_nth$arity$2(null,i__37990_38243);
var map__37995_38245__$1 = (((((!((map__37995_38244 == null))))?(((((map__37995_38244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37995_38244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37995_38244):map__37995_38244);
var w_38246 = map__37995_38245__$1;
var msg_38247__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37995_38245__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37995_38245__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37995_38245__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37995_38245__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38250)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38248),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38249),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38247__$1)].join(''));


var G__38251 = seq__37987_38240;
var G__38252 = chunk__37988_38241;
var G__38253 = count__37989_38242;
var G__38254 = (i__37990_38243 + (1));
seq__37987_38240 = G__38251;
chunk__37988_38241 = G__38252;
count__37989_38242 = G__38253;
i__37990_38243 = G__38254;
continue;
} else {
var temp__5735__auto___38255 = cljs.core.seq(seq__37987_38240);
if(temp__5735__auto___38255){
var seq__37987_38256__$1 = temp__5735__auto___38255;
if(cljs.core.chunked_seq_QMARK_(seq__37987_38256__$1)){
var c__4556__auto___38257 = cljs.core.chunk_first(seq__37987_38256__$1);
var G__38258 = cljs.core.chunk_rest(seq__37987_38256__$1);
var G__38259 = c__4556__auto___38257;
var G__38260 = cljs.core.count(c__4556__auto___38257);
var G__38261 = (0);
seq__37987_38240 = G__38258;
chunk__37988_38241 = G__38259;
count__37989_38242 = G__38260;
i__37990_38243 = G__38261;
continue;
} else {
var map__37997_38262 = cljs.core.first(seq__37987_38256__$1);
var map__37997_38263__$1 = (((((!((map__37997_38262 == null))))?(((((map__37997_38262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37997_38262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37997_38262):map__37997_38262);
var w_38264 = map__37997_38263__$1;
var msg_38265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997_38263__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997_38263__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997_38263__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37997_38263__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38268)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38266),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38267),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38265__$1)].join(''));


var G__38269 = cljs.core.next(seq__37987_38256__$1);
var G__38270 = null;
var G__38271 = (0);
var G__38272 = (0);
seq__37987_38240 = G__38269;
chunk__37988_38241 = G__38270;
count__37989_38242 = G__38271;
i__37990_38243 = G__38272;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37968_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37968_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38001){
var map__38002 = p__38001;
var map__38002__$1 = (((((!((map__38002 == null))))?(((((map__38002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38002):map__38002);
var msg = map__38002__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38002__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38004 = cljs.core.seq(updates);
var chunk__38006 = null;
var count__38007 = (0);
var i__38008 = (0);
while(true){
if((i__38008 < count__38007)){
var path = chunk__38006.cljs$core$IIndexed$_nth$arity$2(null,i__38008);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38051_38274 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38054_38275 = null;
var count__38055_38276 = (0);
var i__38056_38277 = (0);
while(true){
if((i__38056_38277 < count__38055_38276)){
var node_38281 = chunk__38054_38275.cljs$core$IIndexed$_nth$arity$2(null,i__38056_38277);
var path_match_38283 = shadow.cljs.devtools.client.browser.match_paths(node_38281.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38283)){
var new_link_38284 = (function (){var G__38067 = node_38281.cloneNode(true);
G__38067.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38283),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38067;
})();
(new_link_38284.onload = ((function (seq__38051_38274,chunk__38054_38275,count__38055_38276,i__38056_38277,seq__38004,chunk__38006,count__38007,i__38008,new_link_38284,path_match_38283,node_38281,path,map__38002,map__38002__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_38281);
});})(seq__38051_38274,chunk__38054_38275,count__38055_38276,i__38056_38277,seq__38004,chunk__38006,count__38007,i__38008,new_link_38284,path_match_38283,node_38281,path,map__38002,map__38002__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38283], 0));

goog.dom.insertSiblingAfter(new_link_38284,node_38281);


var G__38285 = seq__38051_38274;
var G__38286 = chunk__38054_38275;
var G__38287 = count__38055_38276;
var G__38288 = (i__38056_38277 + (1));
seq__38051_38274 = G__38285;
chunk__38054_38275 = G__38286;
count__38055_38276 = G__38287;
i__38056_38277 = G__38288;
continue;
} else {
var G__38289 = seq__38051_38274;
var G__38290 = chunk__38054_38275;
var G__38291 = count__38055_38276;
var G__38292 = (i__38056_38277 + (1));
seq__38051_38274 = G__38289;
chunk__38054_38275 = G__38290;
count__38055_38276 = G__38291;
i__38056_38277 = G__38292;
continue;
}
} else {
var temp__5735__auto___38293 = cljs.core.seq(seq__38051_38274);
if(temp__5735__auto___38293){
var seq__38051_38294__$1 = temp__5735__auto___38293;
if(cljs.core.chunked_seq_QMARK_(seq__38051_38294__$1)){
var c__4556__auto___38295 = cljs.core.chunk_first(seq__38051_38294__$1);
var G__38296 = cljs.core.chunk_rest(seq__38051_38294__$1);
var G__38297 = c__4556__auto___38295;
var G__38298 = cljs.core.count(c__4556__auto___38295);
var G__38299 = (0);
seq__38051_38274 = G__38296;
chunk__38054_38275 = G__38297;
count__38055_38276 = G__38298;
i__38056_38277 = G__38299;
continue;
} else {
var node_38300 = cljs.core.first(seq__38051_38294__$1);
var path_match_38301 = shadow.cljs.devtools.client.browser.match_paths(node_38300.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38301)){
var new_link_38302 = (function (){var G__38069 = node_38300.cloneNode(true);
G__38069.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38301),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38069;
})();
(new_link_38302.onload = ((function (seq__38051_38274,chunk__38054_38275,count__38055_38276,i__38056_38277,seq__38004,chunk__38006,count__38007,i__38008,new_link_38302,path_match_38301,node_38300,seq__38051_38294__$1,temp__5735__auto___38293,path,map__38002,map__38002__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_38300);
});})(seq__38051_38274,chunk__38054_38275,count__38055_38276,i__38056_38277,seq__38004,chunk__38006,count__38007,i__38008,new_link_38302,path_match_38301,node_38300,seq__38051_38294__$1,temp__5735__auto___38293,path,map__38002,map__38002__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38301], 0));

goog.dom.insertSiblingAfter(new_link_38302,node_38300);


var G__38305 = cljs.core.next(seq__38051_38294__$1);
var G__38306 = null;
var G__38307 = (0);
var G__38308 = (0);
seq__38051_38274 = G__38305;
chunk__38054_38275 = G__38306;
count__38055_38276 = G__38307;
i__38056_38277 = G__38308;
continue;
} else {
var G__38309 = cljs.core.next(seq__38051_38294__$1);
var G__38310 = null;
var G__38311 = (0);
var G__38312 = (0);
seq__38051_38274 = G__38309;
chunk__38054_38275 = G__38310;
count__38055_38276 = G__38311;
i__38056_38277 = G__38312;
continue;
}
}
} else {
}
}
break;
}


var G__38313 = seq__38004;
var G__38314 = chunk__38006;
var G__38315 = count__38007;
var G__38316 = (i__38008 + (1));
seq__38004 = G__38313;
chunk__38006 = G__38314;
count__38007 = G__38315;
i__38008 = G__38316;
continue;
} else {
var G__38317 = seq__38004;
var G__38318 = chunk__38006;
var G__38319 = count__38007;
var G__38320 = (i__38008 + (1));
seq__38004 = G__38317;
chunk__38006 = G__38318;
count__38007 = G__38319;
i__38008 = G__38320;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38004);
if(temp__5735__auto__){
var seq__38004__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38004__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38004__$1);
var G__38322 = cljs.core.chunk_rest(seq__38004__$1);
var G__38323 = c__4556__auto__;
var G__38324 = cljs.core.count(c__4556__auto__);
var G__38325 = (0);
seq__38004 = G__38322;
chunk__38006 = G__38323;
count__38007 = G__38324;
i__38008 = G__38325;
continue;
} else {
var path = cljs.core.first(seq__38004__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38070_38326 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38073_38327 = null;
var count__38074_38328 = (0);
var i__38075_38329 = (0);
while(true){
if((i__38075_38329 < count__38074_38328)){
var node_38332 = chunk__38073_38327.cljs$core$IIndexed$_nth$arity$2(null,i__38075_38329);
var path_match_38334 = shadow.cljs.devtools.client.browser.match_paths(node_38332.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38334)){
var new_link_38335 = (function (){var G__38083 = node_38332.cloneNode(true);
G__38083.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38334),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38083;
})();
(new_link_38335.onload = ((function (seq__38070_38326,chunk__38073_38327,count__38074_38328,i__38075_38329,seq__38004,chunk__38006,count__38007,i__38008,new_link_38335,path_match_38334,node_38332,path,seq__38004__$1,temp__5735__auto__,map__38002,map__38002__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_38332);
});})(seq__38070_38326,chunk__38073_38327,count__38074_38328,i__38075_38329,seq__38004,chunk__38006,count__38007,i__38008,new_link_38335,path_match_38334,node_38332,path,seq__38004__$1,temp__5735__auto__,map__38002,map__38002__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38334], 0));

goog.dom.insertSiblingAfter(new_link_38335,node_38332);


var G__38336 = seq__38070_38326;
var G__38337 = chunk__38073_38327;
var G__38338 = count__38074_38328;
var G__38339 = (i__38075_38329 + (1));
seq__38070_38326 = G__38336;
chunk__38073_38327 = G__38337;
count__38074_38328 = G__38338;
i__38075_38329 = G__38339;
continue;
} else {
var G__38340 = seq__38070_38326;
var G__38341 = chunk__38073_38327;
var G__38342 = count__38074_38328;
var G__38343 = (i__38075_38329 + (1));
seq__38070_38326 = G__38340;
chunk__38073_38327 = G__38341;
count__38074_38328 = G__38342;
i__38075_38329 = G__38343;
continue;
}
} else {
var temp__5735__auto___38344__$1 = cljs.core.seq(seq__38070_38326);
if(temp__5735__auto___38344__$1){
var seq__38070_38345__$1 = temp__5735__auto___38344__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38070_38345__$1)){
var c__4556__auto___38346 = cljs.core.chunk_first(seq__38070_38345__$1);
var G__38347 = cljs.core.chunk_rest(seq__38070_38345__$1);
var G__38348 = c__4556__auto___38346;
var G__38349 = cljs.core.count(c__4556__auto___38346);
var G__38350 = (0);
seq__38070_38326 = G__38347;
chunk__38073_38327 = G__38348;
count__38074_38328 = G__38349;
i__38075_38329 = G__38350;
continue;
} else {
var node_38351 = cljs.core.first(seq__38070_38345__$1);
var path_match_38352 = shadow.cljs.devtools.client.browser.match_paths(node_38351.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38352)){
var new_link_38353 = (function (){var G__38085 = node_38351.cloneNode(true);
G__38085.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38352),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38085;
})();
(new_link_38353.onload = ((function (seq__38070_38326,chunk__38073_38327,count__38074_38328,i__38075_38329,seq__38004,chunk__38006,count__38007,i__38008,new_link_38353,path_match_38352,node_38351,seq__38070_38345__$1,temp__5735__auto___38344__$1,path,seq__38004__$1,temp__5735__auto__,map__38002,map__38002__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_38351);
});})(seq__38070_38326,chunk__38073_38327,count__38074_38328,i__38075_38329,seq__38004,chunk__38006,count__38007,i__38008,new_link_38353,path_match_38352,node_38351,seq__38070_38345__$1,temp__5735__auto___38344__$1,path,seq__38004__$1,temp__5735__auto__,map__38002,map__38002__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38352], 0));

goog.dom.insertSiblingAfter(new_link_38353,node_38351);


var G__38354 = cljs.core.next(seq__38070_38345__$1);
var G__38355 = null;
var G__38356 = (0);
var G__38357 = (0);
seq__38070_38326 = G__38354;
chunk__38073_38327 = G__38355;
count__38074_38328 = G__38356;
i__38075_38329 = G__38357;
continue;
} else {
var G__38358 = cljs.core.next(seq__38070_38345__$1);
var G__38359 = null;
var G__38360 = (0);
var G__38361 = (0);
seq__38070_38326 = G__38358;
chunk__38073_38327 = G__38359;
count__38074_38328 = G__38360;
i__38075_38329 = G__38361;
continue;
}
}
} else {
}
}
break;
}


var G__38362 = cljs.core.next(seq__38004__$1);
var G__38363 = null;
var G__38364 = (0);
var G__38365 = (0);
seq__38004 = G__38362;
chunk__38006 = G__38363;
count__38007 = G__38364;
i__38008 = G__38365;
continue;
} else {
var G__38366 = cljs.core.next(seq__38004__$1);
var G__38367 = null;
var G__38368 = (0);
var G__38369 = (0);
seq__38004 = G__38366;
chunk__38006 = G__38367;
count__38007 = G__38368;
i__38008 = G__38369;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38089){
var map__38090 = p__38089;
var map__38090__$1 = (((((!((map__38090 == null))))?(((((map__38090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38090):map__38090);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38090__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38131){
var map__38136 = p__38131;
var map__38136__$1 = (((((!((map__38136 == null))))?(((((map__38136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38136):map__38136);
var _ = map__38136__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38152,done,error){
var map__38153 = p__38152;
var map__38153__$1 = (((((!((map__38153 == null))))?(((((map__38153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38153):map__38153);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38153__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38155,done,error){
var map__38156 = p__38155;
var map__38156__$1 = (((((!((map__38156 == null))))?(((((map__38156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38156):map__38156);
var msg = map__38156__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38158){
var map__38159 = p__38158;
var map__38159__$1 = (((((!((map__38159 == null))))?(((((map__38159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38159):map__38159);
var src = map__38159__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38159__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38164 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38164) : done.call(null,G__38164));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38167){
var map__38168 = p__38167;
var map__38168__$1 = (((((!((map__38168 == null))))?(((((map__38168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38168):map__38168);
var msg__$1 = map__38168__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38170){var ex = e38170;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38172){
var map__38173 = p__38172;
var map__38173__$1 = (((((!((map__38173 == null))))?(((((map__38173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38173):map__38173);
var env = map__38173__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38173__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__38182){
var map__38183 = p__38182;
var map__38183__$1 = (((((!((map__38183 == null))))?(((((map__38183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38183):map__38183);
var msg = map__38183__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38183__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38190){
var map__38191 = p__38190;
var map__38191__$1 = (((((!((map__38191 == null))))?(((((map__38191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38191):map__38191);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38191__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38191__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38194){
var map__38195 = p__38194;
var map__38195__$1 = (((((!((map__38195 == null))))?(((((map__38195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38195):map__38195);
var svc = map__38195__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38195__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
