goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36016,p__36017){
var map__36018 = p__36016;
var map__36018__$1 = (((((!((map__36018 == null))))?(((((map__36018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36018):map__36018);
var svc = map__36018__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36019 = p__36017;
var map__36019__$1 = (((((!((map__36019 == null))))?(((((map__36019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36019):map__36019);
var msg = map__36019__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36019__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36019__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36019__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36019__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36029,p__36030){
var map__36034 = p__36029;
var map__36034__$1 = (((((!((map__36034 == null))))?(((((map__36034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36034):map__36034);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36034__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36035 = p__36030;
var map__36035__$1 = (((((!((map__36035 == null))))?(((((map__36035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36035):map__36035);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36035__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36041,p__36042){
var map__36043 = p__36041;
var map__36043__$1 = (((((!((map__36043 == null))))?(((((map__36043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36043):map__36043);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36043__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36043__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36045 = p__36042;
var map__36045__$1 = (((((!((map__36045 == null))))?(((((map__36045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36045):map__36045);
var msg = map__36045__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36045__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36050,tid){
var map__36053 = p__36050;
var map__36053__$1 = (((((!((map__36053 == null))))?(((((map__36053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36053):map__36053);
var svc = map__36053__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36060 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36061 = null;
var count__36062 = (0);
var i__36063 = (0);
while(true){
if((i__36063 < count__36062)){
var vec__36071 = chunk__36061.cljs$core$IIndexed$_nth$arity$2(null,i__36063);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36071,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36111 = seq__36060;
var G__36112 = chunk__36061;
var G__36113 = count__36062;
var G__36114 = (i__36063 + (1));
seq__36060 = G__36111;
chunk__36061 = G__36112;
count__36062 = G__36113;
i__36063 = G__36114;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36060);
if(temp__5735__auto__){
var seq__36060__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36060__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36060__$1);
var G__36116 = cljs.core.chunk_rest(seq__36060__$1);
var G__36117 = c__4556__auto__;
var G__36118 = cljs.core.count(c__4556__auto__);
var G__36119 = (0);
seq__36060 = G__36116;
chunk__36061 = G__36117;
count__36062 = G__36118;
i__36063 = G__36119;
continue;
} else {
var vec__36074 = cljs.core.first(seq__36060__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36074,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36122 = cljs.core.next(seq__36060__$1);
var G__36123 = null;
var G__36124 = (0);
var G__36125 = (0);
seq__36060 = G__36122;
chunk__36061 = G__36123;
count__36062 = G__36124;
i__36063 = G__36125;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36055_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36055_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36056_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36056_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36057_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36057_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36058_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36058_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36085){
var map__36086 = p__36085;
var map__36086__$1 = (((((!((map__36086 == null))))?(((((map__36086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36086):map__36086);
var svc = map__36086__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36086__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36086__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
