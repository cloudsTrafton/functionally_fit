goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48302 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48302(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48305 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48305(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47432 = coll;
var G__47433 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47432,G__47433) : shadow.dom.lazy_native_coll_seq.call(null,G__47432,G__47433));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47440 = arguments.length;
switch (G__47440) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47442 = arguments.length;
switch (G__47442) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47448 = arguments.length;
switch (G__47448) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47451 = arguments.length;
switch (G__47451) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47459 = arguments.length;
switch (G__47459) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47470 = arguments.length;
switch (G__47470) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47475){if((e47475 instanceof Object)){
var e = e47475;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47475;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47482 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47483 = null;
var count__47484 = (0);
var i__47485 = (0);
while(true){
if((i__47485 < count__47484)){
var el = chunk__47483.cljs$core$IIndexed$_nth$arity$2(null,i__47485);
var handler_48351__$1 = ((function (seq__47482,chunk__47483,count__47484,i__47485,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47482,chunk__47483,count__47484,i__47485,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48351__$1);


var G__48354 = seq__47482;
var G__48355 = chunk__47483;
var G__48356 = count__47484;
var G__48357 = (i__47485 + (1));
seq__47482 = G__48354;
chunk__47483 = G__48355;
count__47484 = G__48356;
i__47485 = G__48357;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47482);
if(temp__5735__auto__){
var seq__47482__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47482__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47482__$1);
var G__48359 = cljs.core.chunk_rest(seq__47482__$1);
var G__48360 = c__4556__auto__;
var G__48361 = cljs.core.count(c__4556__auto__);
var G__48362 = (0);
seq__47482 = G__48359;
chunk__47483 = G__48360;
count__47484 = G__48361;
i__47485 = G__48362;
continue;
} else {
var el = cljs.core.first(seq__47482__$1);
var handler_48365__$1 = ((function (seq__47482,chunk__47483,count__47484,i__47485,el,seq__47482__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47482,chunk__47483,count__47484,i__47485,el,seq__47482__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48365__$1);


var G__48370 = cljs.core.next(seq__47482__$1);
var G__48371 = null;
var G__48372 = (0);
var G__48373 = (0);
seq__47482 = G__48370;
chunk__47483 = G__48371;
count__47484 = G__48372;
i__47485 = G__48373;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47505 = arguments.length;
switch (G__47505) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47529 = cljs.core.seq(events);
var chunk__47530 = null;
var count__47531 = (0);
var i__47532 = (0);
while(true){
if((i__47532 < count__47531)){
var vec__47543 = chunk__47530.cljs$core$IIndexed$_nth$arity$2(null,i__47532);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47543,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47543,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48382 = seq__47529;
var G__48383 = chunk__47530;
var G__48384 = count__47531;
var G__48385 = (i__47532 + (1));
seq__47529 = G__48382;
chunk__47530 = G__48383;
count__47531 = G__48384;
i__47532 = G__48385;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47529);
if(temp__5735__auto__){
var seq__47529__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47529__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47529__$1);
var G__48387 = cljs.core.chunk_rest(seq__47529__$1);
var G__48388 = c__4556__auto__;
var G__48389 = cljs.core.count(c__4556__auto__);
var G__48390 = (0);
seq__47529 = G__48387;
chunk__47530 = G__48388;
count__47531 = G__48389;
i__47532 = G__48390;
continue;
} else {
var vec__47549 = cljs.core.first(seq__47529__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47549,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48395 = cljs.core.next(seq__47529__$1);
var G__48396 = null;
var G__48397 = (0);
var G__48398 = (0);
seq__47529 = G__48395;
chunk__47530 = G__48396;
count__47531 = G__48397;
i__47532 = G__48398;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47562 = cljs.core.seq(styles);
var chunk__47563 = null;
var count__47564 = (0);
var i__47565 = (0);
while(true){
if((i__47565 < count__47564)){
var vec__47578 = chunk__47563.cljs$core$IIndexed$_nth$arity$2(null,i__47565);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47578,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48402 = seq__47562;
var G__48403 = chunk__47563;
var G__48404 = count__47564;
var G__48405 = (i__47565 + (1));
seq__47562 = G__48402;
chunk__47563 = G__48403;
count__47564 = G__48404;
i__47565 = G__48405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47562);
if(temp__5735__auto__){
var seq__47562__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47562__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47562__$1);
var G__48406 = cljs.core.chunk_rest(seq__47562__$1);
var G__48407 = c__4556__auto__;
var G__48408 = cljs.core.count(c__4556__auto__);
var G__48409 = (0);
seq__47562 = G__48406;
chunk__47563 = G__48407;
count__47564 = G__48408;
i__47565 = G__48409;
continue;
} else {
var vec__47587 = cljs.core.first(seq__47562__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47587,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48410 = cljs.core.next(seq__47562__$1);
var G__48411 = null;
var G__48412 = (0);
var G__48413 = (0);
seq__47562 = G__48410;
chunk__47563 = G__48411;
count__47564 = G__48412;
i__47565 = G__48413;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47593_48415 = key;
var G__47593_48416__$1 = (((G__47593_48415 instanceof cljs.core.Keyword))?G__47593_48415.fqn:null);
switch (G__47593_48416__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48424 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_48424,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_48424,"aria-");
}
})())){
el.setAttribute(ks_48424,value);
} else {
(el[ks_48424] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47629){
var map__47630 = p__47629;
var map__47630__$1 = (((((!((map__47630 == null))))?(((((map__47630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47630):map__47630);
var props = map__47630__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47630__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47633 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47633,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47633,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47633,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47639 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47639,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47639;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47641 = arguments.length;
switch (G__47641) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47651){
var vec__47653 = p__47651;
var seq__47654 = cljs.core.seq(vec__47653);
var first__47655 = cljs.core.first(seq__47654);
var seq__47654__$1 = cljs.core.next(seq__47654);
var nn = first__47655;
var first__47655__$1 = cljs.core.first(seq__47654__$1);
var seq__47654__$2 = cljs.core.next(seq__47654__$1);
var np = first__47655__$1;
var nc = seq__47654__$2;
var node = vec__47653;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47663 = nn;
var G__47664 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47663,G__47664) : create_fn.call(null,G__47663,G__47664));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47667 = nn;
var G__47668 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47667,G__47668) : create_fn.call(null,G__47667,G__47668));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47671 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47671,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47671,(1),null);
var seq__47674_48448 = cljs.core.seq(node_children);
var chunk__47675_48449 = null;
var count__47676_48450 = (0);
var i__47677_48451 = (0);
while(true){
if((i__47677_48451 < count__47676_48450)){
var child_struct_48452 = chunk__47675_48449.cljs$core$IIndexed$_nth$arity$2(null,i__47677_48451);
var children_48453 = shadow.dom.dom_node(child_struct_48452);
if(cljs.core.seq_QMARK_(children_48453)){
var seq__47723_48454 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48453));
var chunk__47725_48455 = null;
var count__47726_48456 = (0);
var i__47727_48457 = (0);
while(true){
if((i__47727_48457 < count__47726_48456)){
var child_48458 = chunk__47725_48455.cljs$core$IIndexed$_nth$arity$2(null,i__47727_48457);
if(cljs.core.truth_(child_48458)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48458);


var G__48460 = seq__47723_48454;
var G__48461 = chunk__47725_48455;
var G__48462 = count__47726_48456;
var G__48463 = (i__47727_48457 + (1));
seq__47723_48454 = G__48460;
chunk__47725_48455 = G__48461;
count__47726_48456 = G__48462;
i__47727_48457 = G__48463;
continue;
} else {
var G__48464 = seq__47723_48454;
var G__48465 = chunk__47725_48455;
var G__48466 = count__47726_48456;
var G__48467 = (i__47727_48457 + (1));
seq__47723_48454 = G__48464;
chunk__47725_48455 = G__48465;
count__47726_48456 = G__48466;
i__47727_48457 = G__48467;
continue;
}
} else {
var temp__5735__auto___48468 = cljs.core.seq(seq__47723_48454);
if(temp__5735__auto___48468){
var seq__47723_48470__$1 = temp__5735__auto___48468;
if(cljs.core.chunked_seq_QMARK_(seq__47723_48470__$1)){
var c__4556__auto___48471 = cljs.core.chunk_first(seq__47723_48470__$1);
var G__48472 = cljs.core.chunk_rest(seq__47723_48470__$1);
var G__48473 = c__4556__auto___48471;
var G__48474 = cljs.core.count(c__4556__auto___48471);
var G__48475 = (0);
seq__47723_48454 = G__48472;
chunk__47725_48455 = G__48473;
count__47726_48456 = G__48474;
i__47727_48457 = G__48475;
continue;
} else {
var child_48479 = cljs.core.first(seq__47723_48470__$1);
if(cljs.core.truth_(child_48479)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48479);


var G__48481 = cljs.core.next(seq__47723_48470__$1);
var G__48482 = null;
var G__48483 = (0);
var G__48484 = (0);
seq__47723_48454 = G__48481;
chunk__47725_48455 = G__48482;
count__47726_48456 = G__48483;
i__47727_48457 = G__48484;
continue;
} else {
var G__48485 = cljs.core.next(seq__47723_48470__$1);
var G__48486 = null;
var G__48487 = (0);
var G__48488 = (0);
seq__47723_48454 = G__48485;
chunk__47725_48455 = G__48486;
count__47726_48456 = G__48487;
i__47727_48457 = G__48488;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48453);
}


var G__48490 = seq__47674_48448;
var G__48491 = chunk__47675_48449;
var G__48492 = count__47676_48450;
var G__48493 = (i__47677_48451 + (1));
seq__47674_48448 = G__48490;
chunk__47675_48449 = G__48491;
count__47676_48450 = G__48492;
i__47677_48451 = G__48493;
continue;
} else {
var temp__5735__auto___48495 = cljs.core.seq(seq__47674_48448);
if(temp__5735__auto___48495){
var seq__47674_48496__$1 = temp__5735__auto___48495;
if(cljs.core.chunked_seq_QMARK_(seq__47674_48496__$1)){
var c__4556__auto___48497 = cljs.core.chunk_first(seq__47674_48496__$1);
var G__48498 = cljs.core.chunk_rest(seq__47674_48496__$1);
var G__48499 = c__4556__auto___48497;
var G__48500 = cljs.core.count(c__4556__auto___48497);
var G__48501 = (0);
seq__47674_48448 = G__48498;
chunk__47675_48449 = G__48499;
count__47676_48450 = G__48500;
i__47677_48451 = G__48501;
continue;
} else {
var child_struct_48504 = cljs.core.first(seq__47674_48496__$1);
var children_48505 = shadow.dom.dom_node(child_struct_48504);
if(cljs.core.seq_QMARK_(children_48505)){
var seq__47760_48507 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48505));
var chunk__47762_48508 = null;
var count__47763_48509 = (0);
var i__47764_48510 = (0);
while(true){
if((i__47764_48510 < count__47763_48509)){
var child_48512 = chunk__47762_48508.cljs$core$IIndexed$_nth$arity$2(null,i__47764_48510);
if(cljs.core.truth_(child_48512)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48512);


var G__48513 = seq__47760_48507;
var G__48514 = chunk__47762_48508;
var G__48515 = count__47763_48509;
var G__48516 = (i__47764_48510 + (1));
seq__47760_48507 = G__48513;
chunk__47762_48508 = G__48514;
count__47763_48509 = G__48515;
i__47764_48510 = G__48516;
continue;
} else {
var G__48518 = seq__47760_48507;
var G__48519 = chunk__47762_48508;
var G__48520 = count__47763_48509;
var G__48521 = (i__47764_48510 + (1));
seq__47760_48507 = G__48518;
chunk__47762_48508 = G__48519;
count__47763_48509 = G__48520;
i__47764_48510 = G__48521;
continue;
}
} else {
var temp__5735__auto___48523__$1 = cljs.core.seq(seq__47760_48507);
if(temp__5735__auto___48523__$1){
var seq__47760_48524__$1 = temp__5735__auto___48523__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47760_48524__$1)){
var c__4556__auto___48525 = cljs.core.chunk_first(seq__47760_48524__$1);
var G__48526 = cljs.core.chunk_rest(seq__47760_48524__$1);
var G__48527 = c__4556__auto___48525;
var G__48528 = cljs.core.count(c__4556__auto___48525);
var G__48529 = (0);
seq__47760_48507 = G__48526;
chunk__47762_48508 = G__48527;
count__47763_48509 = G__48528;
i__47764_48510 = G__48529;
continue;
} else {
var child_48530 = cljs.core.first(seq__47760_48524__$1);
if(cljs.core.truth_(child_48530)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48530);


var G__48534 = cljs.core.next(seq__47760_48524__$1);
var G__48535 = null;
var G__48536 = (0);
var G__48537 = (0);
seq__47760_48507 = G__48534;
chunk__47762_48508 = G__48535;
count__47763_48509 = G__48536;
i__47764_48510 = G__48537;
continue;
} else {
var G__48538 = cljs.core.next(seq__47760_48524__$1);
var G__48539 = null;
var G__48540 = (0);
var G__48541 = (0);
seq__47760_48507 = G__48538;
chunk__47762_48508 = G__48539;
count__47763_48509 = G__48540;
i__47764_48510 = G__48541;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48505);
}


var G__48543 = cljs.core.next(seq__47674_48496__$1);
var G__48544 = null;
var G__48545 = (0);
var G__48546 = (0);
seq__47674_48448 = G__48543;
chunk__47675_48449 = G__48544;
count__47676_48450 = G__48545;
i__47677_48451 = G__48546;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47785 = cljs.core.seq(node);
var chunk__47786 = null;
var count__47787 = (0);
var i__47788 = (0);
while(true){
if((i__47788 < count__47787)){
var n = chunk__47786.cljs$core$IIndexed$_nth$arity$2(null,i__47788);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48552 = seq__47785;
var G__48553 = chunk__47786;
var G__48554 = count__47787;
var G__48555 = (i__47788 + (1));
seq__47785 = G__48552;
chunk__47786 = G__48553;
count__47787 = G__48554;
i__47788 = G__48555;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47785);
if(temp__5735__auto__){
var seq__47785__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47785__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47785__$1);
var G__48556 = cljs.core.chunk_rest(seq__47785__$1);
var G__48557 = c__4556__auto__;
var G__48558 = cljs.core.count(c__4556__auto__);
var G__48559 = (0);
seq__47785 = G__48556;
chunk__47786 = G__48557;
count__47787 = G__48558;
i__47788 = G__48559;
continue;
} else {
var n = cljs.core.first(seq__47785__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48561 = cljs.core.next(seq__47785__$1);
var G__48562 = null;
var G__48563 = (0);
var G__48564 = (0);
seq__47785 = G__48561;
chunk__47786 = G__48562;
count__47787 = G__48563;
i__47788 = G__48564;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47792 = arguments.length;
switch (G__47792) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47810 = arguments.length;
switch (G__47810) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47828 = arguments.length;
switch (G__47828) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48585 = arguments.length;
var i__4737__auto___48586 = (0);
while(true){
if((i__4737__auto___48586 < len__4736__auto___48585)){
args__4742__auto__.push((arguments[i__4737__auto___48586]));

var G__48587 = (i__4737__auto___48586 + (1));
i__4737__auto___48586 = G__48587;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47843_48590 = cljs.core.seq(nodes);
var chunk__47844_48591 = null;
var count__47845_48592 = (0);
var i__47846_48593 = (0);
while(true){
if((i__47846_48593 < count__47845_48592)){
var node_48594 = chunk__47844_48591.cljs$core$IIndexed$_nth$arity$2(null,i__47846_48593);
fragment.appendChild(shadow.dom._to_dom(node_48594));


var G__48596 = seq__47843_48590;
var G__48597 = chunk__47844_48591;
var G__48598 = count__47845_48592;
var G__48599 = (i__47846_48593 + (1));
seq__47843_48590 = G__48596;
chunk__47844_48591 = G__48597;
count__47845_48592 = G__48598;
i__47846_48593 = G__48599;
continue;
} else {
var temp__5735__auto___48601 = cljs.core.seq(seq__47843_48590);
if(temp__5735__auto___48601){
var seq__47843_48602__$1 = temp__5735__auto___48601;
if(cljs.core.chunked_seq_QMARK_(seq__47843_48602__$1)){
var c__4556__auto___48607 = cljs.core.chunk_first(seq__47843_48602__$1);
var G__48608 = cljs.core.chunk_rest(seq__47843_48602__$1);
var G__48609 = c__4556__auto___48607;
var G__48610 = cljs.core.count(c__4556__auto___48607);
var G__48611 = (0);
seq__47843_48590 = G__48608;
chunk__47844_48591 = G__48609;
count__47845_48592 = G__48610;
i__47846_48593 = G__48611;
continue;
} else {
var node_48612 = cljs.core.first(seq__47843_48602__$1);
fragment.appendChild(shadow.dom._to_dom(node_48612));


var G__48614 = cljs.core.next(seq__47843_48602__$1);
var G__48615 = null;
var G__48616 = (0);
var G__48617 = (0);
seq__47843_48590 = G__48614;
chunk__47844_48591 = G__48615;
count__47845_48592 = G__48616;
i__47846_48593 = G__48617;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47840){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47840));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47857_48623 = cljs.core.seq(scripts);
var chunk__47858_48624 = null;
var count__47859_48625 = (0);
var i__47860_48626 = (0);
while(true){
if((i__47860_48626 < count__47859_48625)){
var vec__47871_48628 = chunk__47858_48624.cljs$core$IIndexed$_nth$arity$2(null,i__47860_48626);
var script_tag_48629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47871_48628,(0),null);
var script_body_48630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47871_48628,(1),null);
eval(script_body_48630);


var G__48631 = seq__47857_48623;
var G__48632 = chunk__47858_48624;
var G__48633 = count__47859_48625;
var G__48634 = (i__47860_48626 + (1));
seq__47857_48623 = G__48631;
chunk__47858_48624 = G__48632;
count__47859_48625 = G__48633;
i__47860_48626 = G__48634;
continue;
} else {
var temp__5735__auto___48635 = cljs.core.seq(seq__47857_48623);
if(temp__5735__auto___48635){
var seq__47857_48636__$1 = temp__5735__auto___48635;
if(cljs.core.chunked_seq_QMARK_(seq__47857_48636__$1)){
var c__4556__auto___48637 = cljs.core.chunk_first(seq__47857_48636__$1);
var G__48638 = cljs.core.chunk_rest(seq__47857_48636__$1);
var G__48639 = c__4556__auto___48637;
var G__48640 = cljs.core.count(c__4556__auto___48637);
var G__48641 = (0);
seq__47857_48623 = G__48638;
chunk__47858_48624 = G__48639;
count__47859_48625 = G__48640;
i__47860_48626 = G__48641;
continue;
} else {
var vec__47875_48642 = cljs.core.first(seq__47857_48636__$1);
var script_tag_48643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47875_48642,(0),null);
var script_body_48644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47875_48642,(1),null);
eval(script_body_48644);


var G__48648 = cljs.core.next(seq__47857_48636__$1);
var G__48649 = null;
var G__48650 = (0);
var G__48651 = (0);
seq__47857_48623 = G__48648;
chunk__47858_48624 = G__48649;
count__47859_48625 = G__48650;
i__47860_48626 = G__48651;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47879){
var vec__47880 = p__47879;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47880,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47880,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47902 = arguments.length;
switch (G__47902) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47908 = cljs.core.seq(style_keys);
var chunk__47909 = null;
var count__47910 = (0);
var i__47911 = (0);
while(true){
if((i__47911 < count__47910)){
var it = chunk__47909.cljs$core$IIndexed$_nth$arity$2(null,i__47911);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48659 = seq__47908;
var G__48660 = chunk__47909;
var G__48661 = count__47910;
var G__48662 = (i__47911 + (1));
seq__47908 = G__48659;
chunk__47909 = G__48660;
count__47910 = G__48661;
i__47911 = G__48662;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47908);
if(temp__5735__auto__){
var seq__47908__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47908__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47908__$1);
var G__48663 = cljs.core.chunk_rest(seq__47908__$1);
var G__48664 = c__4556__auto__;
var G__48665 = cljs.core.count(c__4556__auto__);
var G__48666 = (0);
seq__47908 = G__48663;
chunk__47909 = G__48664;
count__47910 = G__48665;
i__47911 = G__48666;
continue;
} else {
var it = cljs.core.first(seq__47908__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48667 = cljs.core.next(seq__47908__$1);
var G__48668 = null;
var G__48669 = (0);
var G__48670 = (0);
seq__47908 = G__48667;
chunk__47909 = G__48668;
count__47910 = G__48669;
i__47911 = G__48670;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47920,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47924 = k47920;
var G__47924__$1 = (((G__47924 instanceof cljs.core.Keyword))?G__47924.fqn:null);
switch (G__47924__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47920,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47925){
var vec__47926 = p__47925;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47926,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47926,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47919){
var self__ = this;
var G__47919__$1 = this;
return (new cljs.core.RecordIter((0),G__47919__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47921,other47922){
var self__ = this;
var this47921__$1 = this;
return (((!((other47922 == null)))) && ((this47921__$1.constructor === other47922.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47921__$1.x,other47922.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47921__$1.y,other47922.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47921__$1.__extmap,other47922.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47919){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47937 = cljs.core.keyword_identical_QMARK_;
var expr__47938 = k__4388__auto__;
if(cljs.core.truth_((pred__47937.cljs$core$IFn$_invoke$arity$2 ? pred__47937.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47938) : pred__47937.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47938)))){
return (new shadow.dom.Coordinate(G__47919,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47937.cljs$core$IFn$_invoke$arity$2 ? pred__47937.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47938) : pred__47937.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47938)))){
return (new shadow.dom.Coordinate(self__.x,G__47919,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47919),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47919){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47919,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47923){
var extmap__4419__auto__ = (function (){var G__47949 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47923,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47923)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47949);
} else {
return G__47949;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47923),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47923),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47956,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47965 = k47956;
var G__47965__$1 = (((G__47965 instanceof cljs.core.Keyword))?G__47965.fqn:null);
switch (G__47965__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47956,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47968){
var vec__47969 = p__47968;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47955){
var self__ = this;
var G__47955__$1 = this;
return (new cljs.core.RecordIter((0),G__47955__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47957,other47958){
var self__ = this;
var this47957__$1 = this;
return (((!((other47958 == null)))) && ((this47957__$1.constructor === other47958.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47957__$1.w,other47958.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47957__$1.h,other47958.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47957__$1.__extmap,other47958.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47955){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47998 = cljs.core.keyword_identical_QMARK_;
var expr__47999 = k__4388__auto__;
if(cljs.core.truth_((pred__47998.cljs$core$IFn$_invoke$arity$2 ? pred__47998.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47999) : pred__47998.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47999)))){
return (new shadow.dom.Size(G__47955,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47998.cljs$core$IFn$_invoke$arity$2 ? pred__47998.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47999) : pred__47998.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47999)))){
return (new shadow.dom.Size(self__.w,G__47955,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47955),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47955){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47955,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47960){
var extmap__4419__auto__ = (function (){var G__48006 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47960,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47960)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48006);
} else {
return G__48006;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47960),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47960),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__48693 = (i + (1));
var G__48694 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48693;
ret = G__48694;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48021){
var vec__48022 = p__48021;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48022,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48022,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48026 = arguments.length;
switch (G__48026) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48696 = ps;
var G__48697 = (i + (1));
el__$1 = G__48696;
i = G__48697;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48066 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48066,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48066,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48066,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48072_48701 = cljs.core.seq(props);
var chunk__48074_48702 = null;
var count__48075_48703 = (0);
var i__48076_48704 = (0);
while(true){
if((i__48076_48704 < count__48075_48703)){
var vec__48088_48705 = chunk__48074_48702.cljs$core$IIndexed$_nth$arity$2(null,i__48076_48704);
var k_48706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48088_48705,(0),null);
var v_48707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48088_48705,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48706);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48706),v_48707);


var G__48708 = seq__48072_48701;
var G__48709 = chunk__48074_48702;
var G__48710 = count__48075_48703;
var G__48711 = (i__48076_48704 + (1));
seq__48072_48701 = G__48708;
chunk__48074_48702 = G__48709;
count__48075_48703 = G__48710;
i__48076_48704 = G__48711;
continue;
} else {
var temp__5735__auto___48712 = cljs.core.seq(seq__48072_48701);
if(temp__5735__auto___48712){
var seq__48072_48713__$1 = temp__5735__auto___48712;
if(cljs.core.chunked_seq_QMARK_(seq__48072_48713__$1)){
var c__4556__auto___48714 = cljs.core.chunk_first(seq__48072_48713__$1);
var G__48715 = cljs.core.chunk_rest(seq__48072_48713__$1);
var G__48716 = c__4556__auto___48714;
var G__48717 = cljs.core.count(c__4556__auto___48714);
var G__48718 = (0);
seq__48072_48701 = G__48715;
chunk__48074_48702 = G__48716;
count__48075_48703 = G__48717;
i__48076_48704 = G__48718;
continue;
} else {
var vec__48095_48719 = cljs.core.first(seq__48072_48713__$1);
var k_48720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48095_48719,(0),null);
var v_48721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48095_48719,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48720);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48720),v_48721);


var G__48723 = cljs.core.next(seq__48072_48713__$1);
var G__48724 = null;
var G__48725 = (0);
var G__48726 = (0);
seq__48072_48701 = G__48723;
chunk__48074_48702 = G__48724;
count__48075_48703 = G__48725;
i__48076_48704 = G__48726;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48110 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48110,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48110,(1),null);
var seq__48113_48728 = cljs.core.seq(node_children);
var chunk__48115_48729 = null;
var count__48116_48730 = (0);
var i__48117_48731 = (0);
while(true){
if((i__48117_48731 < count__48116_48730)){
var child_struct_48732 = chunk__48115_48729.cljs$core$IIndexed$_nth$arity$2(null,i__48117_48731);
if((!((child_struct_48732 == null)))){
if(typeof child_struct_48732 === 'string'){
var text_48733 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48733),child_struct_48732].join(''));
} else {
var children_48734 = shadow.dom.svg_node(child_struct_48732);
if(cljs.core.seq_QMARK_(children_48734)){
var seq__48157_48735 = cljs.core.seq(children_48734);
var chunk__48159_48736 = null;
var count__48160_48737 = (0);
var i__48161_48738 = (0);
while(true){
if((i__48161_48738 < count__48160_48737)){
var child_48739 = chunk__48159_48736.cljs$core$IIndexed$_nth$arity$2(null,i__48161_48738);
if(cljs.core.truth_(child_48739)){
node.appendChild(child_48739);


var G__48740 = seq__48157_48735;
var G__48741 = chunk__48159_48736;
var G__48742 = count__48160_48737;
var G__48743 = (i__48161_48738 + (1));
seq__48157_48735 = G__48740;
chunk__48159_48736 = G__48741;
count__48160_48737 = G__48742;
i__48161_48738 = G__48743;
continue;
} else {
var G__48744 = seq__48157_48735;
var G__48745 = chunk__48159_48736;
var G__48746 = count__48160_48737;
var G__48747 = (i__48161_48738 + (1));
seq__48157_48735 = G__48744;
chunk__48159_48736 = G__48745;
count__48160_48737 = G__48746;
i__48161_48738 = G__48747;
continue;
}
} else {
var temp__5735__auto___48748 = cljs.core.seq(seq__48157_48735);
if(temp__5735__auto___48748){
var seq__48157_48749__$1 = temp__5735__auto___48748;
if(cljs.core.chunked_seq_QMARK_(seq__48157_48749__$1)){
var c__4556__auto___48750 = cljs.core.chunk_first(seq__48157_48749__$1);
var G__48751 = cljs.core.chunk_rest(seq__48157_48749__$1);
var G__48752 = c__4556__auto___48750;
var G__48753 = cljs.core.count(c__4556__auto___48750);
var G__48754 = (0);
seq__48157_48735 = G__48751;
chunk__48159_48736 = G__48752;
count__48160_48737 = G__48753;
i__48161_48738 = G__48754;
continue;
} else {
var child_48755 = cljs.core.first(seq__48157_48749__$1);
if(cljs.core.truth_(child_48755)){
node.appendChild(child_48755);


var G__48756 = cljs.core.next(seq__48157_48749__$1);
var G__48757 = null;
var G__48758 = (0);
var G__48759 = (0);
seq__48157_48735 = G__48756;
chunk__48159_48736 = G__48757;
count__48160_48737 = G__48758;
i__48161_48738 = G__48759;
continue;
} else {
var G__48760 = cljs.core.next(seq__48157_48749__$1);
var G__48761 = null;
var G__48762 = (0);
var G__48763 = (0);
seq__48157_48735 = G__48760;
chunk__48159_48736 = G__48761;
count__48160_48737 = G__48762;
i__48161_48738 = G__48763;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48734);
}
}


var G__48764 = seq__48113_48728;
var G__48765 = chunk__48115_48729;
var G__48766 = count__48116_48730;
var G__48767 = (i__48117_48731 + (1));
seq__48113_48728 = G__48764;
chunk__48115_48729 = G__48765;
count__48116_48730 = G__48766;
i__48117_48731 = G__48767;
continue;
} else {
var G__48768 = seq__48113_48728;
var G__48769 = chunk__48115_48729;
var G__48770 = count__48116_48730;
var G__48771 = (i__48117_48731 + (1));
seq__48113_48728 = G__48768;
chunk__48115_48729 = G__48769;
count__48116_48730 = G__48770;
i__48117_48731 = G__48771;
continue;
}
} else {
var temp__5735__auto___48772 = cljs.core.seq(seq__48113_48728);
if(temp__5735__auto___48772){
var seq__48113_48773__$1 = temp__5735__auto___48772;
if(cljs.core.chunked_seq_QMARK_(seq__48113_48773__$1)){
var c__4556__auto___48774 = cljs.core.chunk_first(seq__48113_48773__$1);
var G__48775 = cljs.core.chunk_rest(seq__48113_48773__$1);
var G__48776 = c__4556__auto___48774;
var G__48777 = cljs.core.count(c__4556__auto___48774);
var G__48778 = (0);
seq__48113_48728 = G__48775;
chunk__48115_48729 = G__48776;
count__48116_48730 = G__48777;
i__48117_48731 = G__48778;
continue;
} else {
var child_struct_48779 = cljs.core.first(seq__48113_48773__$1);
if((!((child_struct_48779 == null)))){
if(typeof child_struct_48779 === 'string'){
var text_48780 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48780),child_struct_48779].join(''));
} else {
var children_48781 = shadow.dom.svg_node(child_struct_48779);
if(cljs.core.seq_QMARK_(children_48781)){
var seq__48184_48782 = cljs.core.seq(children_48781);
var chunk__48186_48783 = null;
var count__48187_48784 = (0);
var i__48188_48785 = (0);
while(true){
if((i__48188_48785 < count__48187_48784)){
var child_48786 = chunk__48186_48783.cljs$core$IIndexed$_nth$arity$2(null,i__48188_48785);
if(cljs.core.truth_(child_48786)){
node.appendChild(child_48786);


var G__48787 = seq__48184_48782;
var G__48788 = chunk__48186_48783;
var G__48789 = count__48187_48784;
var G__48790 = (i__48188_48785 + (1));
seq__48184_48782 = G__48787;
chunk__48186_48783 = G__48788;
count__48187_48784 = G__48789;
i__48188_48785 = G__48790;
continue;
} else {
var G__48791 = seq__48184_48782;
var G__48792 = chunk__48186_48783;
var G__48793 = count__48187_48784;
var G__48794 = (i__48188_48785 + (1));
seq__48184_48782 = G__48791;
chunk__48186_48783 = G__48792;
count__48187_48784 = G__48793;
i__48188_48785 = G__48794;
continue;
}
} else {
var temp__5735__auto___48795__$1 = cljs.core.seq(seq__48184_48782);
if(temp__5735__auto___48795__$1){
var seq__48184_48796__$1 = temp__5735__auto___48795__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48184_48796__$1)){
var c__4556__auto___48797 = cljs.core.chunk_first(seq__48184_48796__$1);
var G__48798 = cljs.core.chunk_rest(seq__48184_48796__$1);
var G__48799 = c__4556__auto___48797;
var G__48800 = cljs.core.count(c__4556__auto___48797);
var G__48801 = (0);
seq__48184_48782 = G__48798;
chunk__48186_48783 = G__48799;
count__48187_48784 = G__48800;
i__48188_48785 = G__48801;
continue;
} else {
var child_48802 = cljs.core.first(seq__48184_48796__$1);
if(cljs.core.truth_(child_48802)){
node.appendChild(child_48802);


var G__48803 = cljs.core.next(seq__48184_48796__$1);
var G__48804 = null;
var G__48805 = (0);
var G__48806 = (0);
seq__48184_48782 = G__48803;
chunk__48186_48783 = G__48804;
count__48187_48784 = G__48805;
i__48188_48785 = G__48806;
continue;
} else {
var G__48807 = cljs.core.next(seq__48184_48796__$1);
var G__48808 = null;
var G__48809 = (0);
var G__48810 = (0);
seq__48184_48782 = G__48807;
chunk__48186_48783 = G__48808;
count__48187_48784 = G__48809;
i__48188_48785 = G__48810;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48781);
}
}


var G__48811 = cljs.core.next(seq__48113_48773__$1);
var G__48812 = null;
var G__48813 = (0);
var G__48814 = (0);
seq__48113_48728 = G__48811;
chunk__48115_48729 = G__48812;
count__48116_48730 = G__48813;
i__48117_48731 = G__48814;
continue;
} else {
var G__48815 = cljs.core.next(seq__48113_48773__$1);
var G__48816 = null;
var G__48817 = (0);
var G__48818 = (0);
seq__48113_48728 = G__48815;
chunk__48115_48729 = G__48816;
count__48116_48730 = G__48817;
i__48117_48731 = G__48818;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48823 = arguments.length;
var i__4737__auto___48824 = (0);
while(true){
if((i__4737__auto___48824 < len__4736__auto___48823)){
args__4742__auto__.push((arguments[i__4737__auto___48824]));

var G__48827 = (i__4737__auto___48824 + (1));
i__4737__auto___48824 = G__48827;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48204){
var G__48205 = cljs.core.first(seq48204);
var seq48204__$1 = cljs.core.next(seq48204);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48205,seq48204__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48211 = arguments.length;
switch (G__48211) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33337__auto___48833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_48223){
var state_val_48224 = (state_48223[(1)]);
if((state_val_48224 === (1))){
var state_48223__$1 = state_48223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48223__$1,(2),once_or_cleanup);
} else {
if((state_val_48224 === (2))){
var inst_48220 = (state_48223[(2)]);
var inst_48221 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48223__$1 = (function (){var statearr_48230 = state_48223;
(statearr_48230[(7)] = inst_48220);

return statearr_48230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48223__$1,inst_48221);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33218__auto__ = null;
var shadow$dom$state_machine__33218__auto____0 = (function (){
var statearr_48232 = [null,null,null,null,null,null,null,null];
(statearr_48232[(0)] = shadow$dom$state_machine__33218__auto__);

(statearr_48232[(1)] = (1));

return statearr_48232;
});
var shadow$dom$state_machine__33218__auto____1 = (function (state_48223){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_48223);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e48234){var ex__33221__auto__ = e48234;
var statearr_48235_48836 = state_48223;
(statearr_48235_48836[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_48223[(4)]))){
var statearr_48238_48837 = state_48223;
(statearr_48238_48837[(1)] = cljs.core.first((state_48223[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48838 = state_48223;
state_48223 = G__48838;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
shadow$dom$state_machine__33218__auto__ = function(state_48223){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33218__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33218__auto____1.call(this,state_48223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33218__auto____0;
shadow$dom$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33218__auto____1;
return shadow$dom$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_48240 = f__33338__auto__();
(statearr_48240[(6)] = c__33337__auto___48833);

return statearr_48240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
