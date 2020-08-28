goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__48843,p__48844){
var map__48845 = p__48843;
var map__48845__$1 = (((((!((map__48845 == null))))?(((((map__48845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48845):map__48845);
var svc = map__48845__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48845__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48845__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48845__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48846 = p__48844;
var map__48846__$1 = (((((!((map__48846 == null))))?(((((map__48846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48846):map__48846);
var msg = map__48846__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48846__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48846__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48846__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48846__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__48849,p__48850){
var map__48851 = p__48849;
var map__48851__$1 = (((((!((map__48851 == null))))?(((((map__48851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48851):map__48851);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__48852 = p__48850;
var map__48852__$1 = (((((!((map__48852 == null))))?(((((map__48852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48852):map__48852);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48852__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__48855,p__48856){
var map__48858 = p__48855;
var map__48858__$1 = (((((!((map__48858 == null))))?(((((map__48858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48858):map__48858);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48858__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48858__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48859 = p__48856;
var map__48859__$1 = (((((!((map__48859 == null))))?(((((map__48859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48859):map__48859);
var msg = map__48859__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48859__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__48863,tid){
var map__48864 = p__48863;
var map__48864__$1 = (((((!((map__48864 == null))))?(((((map__48864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48864):map__48864);
var svc = map__48864__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48864__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__48873 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__48874 = null;
var count__48875 = (0);
var i__48876 = (0);
while(true){
if((i__48876 < count__48875)){
var vec__48883 = chunk__48874.cljs$core$IIndexed$_nth$arity$2(null,i__48876);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48883,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48883,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48912 = seq__48873;
var G__48913 = chunk__48874;
var G__48914 = count__48875;
var G__48915 = (i__48876 + (1));
seq__48873 = G__48912;
chunk__48874 = G__48913;
count__48875 = G__48914;
i__48876 = G__48915;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48873);
if(temp__5735__auto__){
var seq__48873__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48873__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48873__$1);
var G__48916 = cljs.core.chunk_rest(seq__48873__$1);
var G__48917 = c__4556__auto__;
var G__48918 = cljs.core.count(c__4556__auto__);
var G__48919 = (0);
seq__48873 = G__48916;
chunk__48874 = G__48917;
count__48875 = G__48918;
i__48876 = G__48919;
continue;
} else {
var vec__48886 = cljs.core.first(seq__48873__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48886,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48886,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48920 = cljs.core.next(seq__48873__$1);
var G__48921 = null;
var G__48922 = (0);
var G__48923 = (0);
seq__48873 = G__48920;
chunk__48874 = G__48921;
count__48875 = G__48922;
i__48876 = G__48923;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__48868_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__48868_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__48869_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__48869_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__48870_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__48870_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__48871_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__48871_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__48892){
var map__48893 = p__48892;
var map__48893__$1 = (((((!((map__48893 == null))))?(((((map__48893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48893):map__48893);
var svc = map__48893__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48893__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
