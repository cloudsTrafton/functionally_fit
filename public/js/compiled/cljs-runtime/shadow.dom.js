goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36292 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_36292(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36295 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_36295(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35451 = coll;
var G__35452 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35451,G__35452) : shadow.dom.lazy_native_coll_seq.call(null,G__35451,G__35452));
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
var G__35459 = arguments.length;
switch (G__35459) {
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
var G__35464 = arguments.length;
switch (G__35464) {
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
var G__35470 = arguments.length;
switch (G__35470) {
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
var G__35476 = arguments.length;
switch (G__35476) {
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
var G__35486 = arguments.length;
switch (G__35486) {
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
var G__35491 = arguments.length;
switch (G__35491) {
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
}catch (e35495){if((e35495 instanceof Object)){
var e = e35495;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35495;

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
var seq__35508 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35509 = null;
var count__35510 = (0);
var i__35511 = (0);
while(true){
if((i__35511 < count__35510)){
var el = chunk__35509.cljs$core$IIndexed$_nth$arity$2(null,i__35511);
var handler_36329__$1 = ((function (seq__35508,chunk__35509,count__35510,i__35511,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35508,chunk__35509,count__35510,i__35511,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36329__$1);


var G__36330 = seq__35508;
var G__36331 = chunk__35509;
var G__36332 = count__35510;
var G__36333 = (i__35511 + (1));
seq__35508 = G__36330;
chunk__35509 = G__36331;
count__35510 = G__36332;
i__35511 = G__36333;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35508);
if(temp__5735__auto__){
var seq__35508__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35508__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35508__$1);
var G__36336 = cljs.core.chunk_rest(seq__35508__$1);
var G__36337 = c__4556__auto__;
var G__36338 = cljs.core.count(c__4556__auto__);
var G__36339 = (0);
seq__35508 = G__36336;
chunk__35509 = G__36337;
count__35510 = G__36338;
i__35511 = G__36339;
continue;
} else {
var el = cljs.core.first(seq__35508__$1);
var handler_36340__$1 = ((function (seq__35508,chunk__35509,count__35510,i__35511,el,seq__35508__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35508,chunk__35509,count__35510,i__35511,el,seq__35508__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36340__$1);


var G__36344 = cljs.core.next(seq__35508__$1);
var G__36345 = null;
var G__36346 = (0);
var G__36347 = (0);
seq__35508 = G__36344;
chunk__35509 = G__36345;
count__35510 = G__36346;
i__35511 = G__36347;
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
var G__35525 = arguments.length;
switch (G__35525) {
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
var seq__35535 = cljs.core.seq(events);
var chunk__35536 = null;
var count__35537 = (0);
var i__35538 = (0);
while(true){
if((i__35538 < count__35537)){
var vec__35549 = chunk__35536.cljs$core$IIndexed$_nth$arity$2(null,i__35538);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35549,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36354 = seq__35535;
var G__36355 = chunk__35536;
var G__36356 = count__35537;
var G__36357 = (i__35538 + (1));
seq__35535 = G__36354;
chunk__35536 = G__36355;
count__35537 = G__36356;
i__35538 = G__36357;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35535);
if(temp__5735__auto__){
var seq__35535__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35535__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35535__$1);
var G__36358 = cljs.core.chunk_rest(seq__35535__$1);
var G__36359 = c__4556__auto__;
var G__36360 = cljs.core.count(c__4556__auto__);
var G__36361 = (0);
seq__35535 = G__36358;
chunk__35536 = G__36359;
count__35537 = G__36360;
i__35538 = G__36361;
continue;
} else {
var vec__35553 = cljs.core.first(seq__35535__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35553,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35553,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36363 = cljs.core.next(seq__35535__$1);
var G__36364 = null;
var G__36365 = (0);
var G__36366 = (0);
seq__35535 = G__36363;
chunk__35536 = G__36364;
count__35537 = G__36365;
i__35538 = G__36366;
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
var seq__35559 = cljs.core.seq(styles);
var chunk__35560 = null;
var count__35561 = (0);
var i__35562 = (0);
while(true){
if((i__35562 < count__35561)){
var vec__35573 = chunk__35560.cljs$core$IIndexed$_nth$arity$2(null,i__35562);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35573,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36370 = seq__35559;
var G__36371 = chunk__35560;
var G__36372 = count__35561;
var G__36373 = (i__35562 + (1));
seq__35559 = G__36370;
chunk__35560 = G__36371;
count__35561 = G__36372;
i__35562 = G__36373;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35559);
if(temp__5735__auto__){
var seq__35559__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35559__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35559__$1);
var G__36376 = cljs.core.chunk_rest(seq__35559__$1);
var G__36377 = c__4556__auto__;
var G__36378 = cljs.core.count(c__4556__auto__);
var G__36379 = (0);
seq__35559 = G__36376;
chunk__35560 = G__36377;
count__35561 = G__36378;
i__35562 = G__36379;
continue;
} else {
var vec__35578 = cljs.core.first(seq__35559__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35578,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36380 = cljs.core.next(seq__35559__$1);
var G__36381 = null;
var G__36382 = (0);
var G__36383 = (0);
seq__35559 = G__36380;
chunk__35560 = G__36381;
count__35561 = G__36382;
i__35562 = G__36383;
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
var G__35590_36385 = key;
var G__35590_36386__$1 = (((G__35590_36385 instanceof cljs.core.Keyword))?G__35590_36385.fqn:null);
switch (G__35590_36386__$1) {
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
var ks_36390 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_36390,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_36390,"aria-");
}
})())){
el.setAttribute(ks_36390,value);
} else {
(el[ks_36390] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35612){
var map__35613 = p__35612;
var map__35613__$1 = (((((!((map__35613 == null))))?(((((map__35613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35613):map__35613);
var props = map__35613__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35613__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35616 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35621 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35621,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35621;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35628 = arguments.length;
switch (G__35628) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35634){
var vec__35636 = p__35634;
var seq__35637 = cljs.core.seq(vec__35636);
var first__35638 = cljs.core.first(seq__35637);
var seq__35637__$1 = cljs.core.next(seq__35637);
var nn = first__35638;
var first__35638__$1 = cljs.core.first(seq__35637__$1);
var seq__35637__$2 = cljs.core.next(seq__35637__$1);
var np = first__35638__$1;
var nc = seq__35637__$2;
var node = vec__35636;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35642 = nn;
var G__35643 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35642,G__35643) : create_fn.call(null,G__35642,G__35643));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35645 = nn;
var G__35646 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35645,G__35646) : create_fn.call(null,G__35645,G__35646));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35648 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35648,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35648,(1),null);
var seq__35652_36414 = cljs.core.seq(node_children);
var chunk__35653_36415 = null;
var count__35654_36416 = (0);
var i__35655_36417 = (0);
while(true){
if((i__35655_36417 < count__35654_36416)){
var child_struct_36419 = chunk__35653_36415.cljs$core$IIndexed$_nth$arity$2(null,i__35655_36417);
var children_36421 = shadow.dom.dom_node(child_struct_36419);
if(cljs.core.seq_QMARK_(children_36421)){
var seq__35697_36423 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36421));
var chunk__35699_36424 = null;
var count__35700_36425 = (0);
var i__35701_36426 = (0);
while(true){
if((i__35701_36426 < count__35700_36425)){
var child_36428 = chunk__35699_36424.cljs$core$IIndexed$_nth$arity$2(null,i__35701_36426);
if(cljs.core.truth_(child_36428)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36428);


var G__36429 = seq__35697_36423;
var G__36430 = chunk__35699_36424;
var G__36431 = count__35700_36425;
var G__36432 = (i__35701_36426 + (1));
seq__35697_36423 = G__36429;
chunk__35699_36424 = G__36430;
count__35700_36425 = G__36431;
i__35701_36426 = G__36432;
continue;
} else {
var G__36435 = seq__35697_36423;
var G__36436 = chunk__35699_36424;
var G__36437 = count__35700_36425;
var G__36438 = (i__35701_36426 + (1));
seq__35697_36423 = G__36435;
chunk__35699_36424 = G__36436;
count__35700_36425 = G__36437;
i__35701_36426 = G__36438;
continue;
}
} else {
var temp__5735__auto___36440 = cljs.core.seq(seq__35697_36423);
if(temp__5735__auto___36440){
var seq__35697_36441__$1 = temp__5735__auto___36440;
if(cljs.core.chunked_seq_QMARK_(seq__35697_36441__$1)){
var c__4556__auto___36442 = cljs.core.chunk_first(seq__35697_36441__$1);
var G__36444 = cljs.core.chunk_rest(seq__35697_36441__$1);
var G__36445 = c__4556__auto___36442;
var G__36446 = cljs.core.count(c__4556__auto___36442);
var G__36447 = (0);
seq__35697_36423 = G__36444;
chunk__35699_36424 = G__36445;
count__35700_36425 = G__36446;
i__35701_36426 = G__36447;
continue;
} else {
var child_36448 = cljs.core.first(seq__35697_36441__$1);
if(cljs.core.truth_(child_36448)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36448);


var G__36449 = cljs.core.next(seq__35697_36441__$1);
var G__36450 = null;
var G__36451 = (0);
var G__36452 = (0);
seq__35697_36423 = G__36449;
chunk__35699_36424 = G__36450;
count__35700_36425 = G__36451;
i__35701_36426 = G__36452;
continue;
} else {
var G__36453 = cljs.core.next(seq__35697_36441__$1);
var G__36454 = null;
var G__36455 = (0);
var G__36456 = (0);
seq__35697_36423 = G__36453;
chunk__35699_36424 = G__36454;
count__35700_36425 = G__36455;
i__35701_36426 = G__36456;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36421);
}


var G__36458 = seq__35652_36414;
var G__36459 = chunk__35653_36415;
var G__36460 = count__35654_36416;
var G__36461 = (i__35655_36417 + (1));
seq__35652_36414 = G__36458;
chunk__35653_36415 = G__36459;
count__35654_36416 = G__36460;
i__35655_36417 = G__36461;
continue;
} else {
var temp__5735__auto___36462 = cljs.core.seq(seq__35652_36414);
if(temp__5735__auto___36462){
var seq__35652_36463__$1 = temp__5735__auto___36462;
if(cljs.core.chunked_seq_QMARK_(seq__35652_36463__$1)){
var c__4556__auto___36464 = cljs.core.chunk_first(seq__35652_36463__$1);
var G__36465 = cljs.core.chunk_rest(seq__35652_36463__$1);
var G__36466 = c__4556__auto___36464;
var G__36467 = cljs.core.count(c__4556__auto___36464);
var G__36468 = (0);
seq__35652_36414 = G__36465;
chunk__35653_36415 = G__36466;
count__35654_36416 = G__36467;
i__35655_36417 = G__36468;
continue;
} else {
var child_struct_36470 = cljs.core.first(seq__35652_36463__$1);
var children_36471 = shadow.dom.dom_node(child_struct_36470);
if(cljs.core.seq_QMARK_(children_36471)){
var seq__35713_36473 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36471));
var chunk__35715_36474 = null;
var count__35716_36475 = (0);
var i__35717_36476 = (0);
while(true){
if((i__35717_36476 < count__35716_36475)){
var child_36478 = chunk__35715_36474.cljs$core$IIndexed$_nth$arity$2(null,i__35717_36476);
if(cljs.core.truth_(child_36478)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36478);


var G__36480 = seq__35713_36473;
var G__36481 = chunk__35715_36474;
var G__36482 = count__35716_36475;
var G__36483 = (i__35717_36476 + (1));
seq__35713_36473 = G__36480;
chunk__35715_36474 = G__36481;
count__35716_36475 = G__36482;
i__35717_36476 = G__36483;
continue;
} else {
var G__36485 = seq__35713_36473;
var G__36486 = chunk__35715_36474;
var G__36487 = count__35716_36475;
var G__36488 = (i__35717_36476 + (1));
seq__35713_36473 = G__36485;
chunk__35715_36474 = G__36486;
count__35716_36475 = G__36487;
i__35717_36476 = G__36488;
continue;
}
} else {
var temp__5735__auto___36489__$1 = cljs.core.seq(seq__35713_36473);
if(temp__5735__auto___36489__$1){
var seq__35713_36490__$1 = temp__5735__auto___36489__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35713_36490__$1)){
var c__4556__auto___36491 = cljs.core.chunk_first(seq__35713_36490__$1);
var G__36492 = cljs.core.chunk_rest(seq__35713_36490__$1);
var G__36493 = c__4556__auto___36491;
var G__36494 = cljs.core.count(c__4556__auto___36491);
var G__36495 = (0);
seq__35713_36473 = G__36492;
chunk__35715_36474 = G__36493;
count__35716_36475 = G__36494;
i__35717_36476 = G__36495;
continue;
} else {
var child_36497 = cljs.core.first(seq__35713_36490__$1);
if(cljs.core.truth_(child_36497)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36497);


var G__36499 = cljs.core.next(seq__35713_36490__$1);
var G__36500 = null;
var G__36501 = (0);
var G__36502 = (0);
seq__35713_36473 = G__36499;
chunk__35715_36474 = G__36500;
count__35716_36475 = G__36501;
i__35717_36476 = G__36502;
continue;
} else {
var G__36505 = cljs.core.next(seq__35713_36490__$1);
var G__36506 = null;
var G__36507 = (0);
var G__36508 = (0);
seq__35713_36473 = G__36505;
chunk__35715_36474 = G__36506;
count__35716_36475 = G__36507;
i__35717_36476 = G__36508;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36471);
}


var G__36509 = cljs.core.next(seq__35652_36463__$1);
var G__36510 = null;
var G__36511 = (0);
var G__36512 = (0);
seq__35652_36414 = G__36509;
chunk__35653_36415 = G__36510;
count__35654_36416 = G__36511;
i__35655_36417 = G__36512;
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
var seq__35745 = cljs.core.seq(node);
var chunk__35746 = null;
var count__35747 = (0);
var i__35748 = (0);
while(true){
if((i__35748 < count__35747)){
var n = chunk__35746.cljs$core$IIndexed$_nth$arity$2(null,i__35748);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36521 = seq__35745;
var G__36522 = chunk__35746;
var G__36523 = count__35747;
var G__36524 = (i__35748 + (1));
seq__35745 = G__36521;
chunk__35746 = G__36522;
count__35747 = G__36523;
i__35748 = G__36524;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35745);
if(temp__5735__auto__){
var seq__35745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35745__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35745__$1);
var G__36526 = cljs.core.chunk_rest(seq__35745__$1);
var G__36527 = c__4556__auto__;
var G__36528 = cljs.core.count(c__4556__auto__);
var G__36529 = (0);
seq__35745 = G__36526;
chunk__35746 = G__36527;
count__35747 = G__36528;
i__35748 = G__36529;
continue;
} else {
var n = cljs.core.first(seq__35745__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36530 = cljs.core.next(seq__35745__$1);
var G__36531 = null;
var G__36532 = (0);
var G__36533 = (0);
seq__35745 = G__36530;
chunk__35746 = G__36531;
count__35747 = G__36532;
i__35748 = G__36533;
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
var G__35758 = arguments.length;
switch (G__35758) {
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
var G__35768 = arguments.length;
switch (G__35768) {
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
var G__35786 = arguments.length;
switch (G__35786) {
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
var len__4736__auto___36557 = arguments.length;
var i__4737__auto___36558 = (0);
while(true){
if((i__4737__auto___36558 < len__4736__auto___36557)){
args__4742__auto__.push((arguments[i__4737__auto___36558]));

var G__36559 = (i__4737__auto___36558 + (1));
i__4737__auto___36558 = G__36559;
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
var seq__35815_36561 = cljs.core.seq(nodes);
var chunk__35816_36562 = null;
var count__35817_36563 = (0);
var i__35818_36564 = (0);
while(true){
if((i__35818_36564 < count__35817_36563)){
var node_36565 = chunk__35816_36562.cljs$core$IIndexed$_nth$arity$2(null,i__35818_36564);
fragment.appendChild(shadow.dom._to_dom(node_36565));


var G__36567 = seq__35815_36561;
var G__36568 = chunk__35816_36562;
var G__36569 = count__35817_36563;
var G__36570 = (i__35818_36564 + (1));
seq__35815_36561 = G__36567;
chunk__35816_36562 = G__36568;
count__35817_36563 = G__36569;
i__35818_36564 = G__36570;
continue;
} else {
var temp__5735__auto___36571 = cljs.core.seq(seq__35815_36561);
if(temp__5735__auto___36571){
var seq__35815_36572__$1 = temp__5735__auto___36571;
if(cljs.core.chunked_seq_QMARK_(seq__35815_36572__$1)){
var c__4556__auto___36573 = cljs.core.chunk_first(seq__35815_36572__$1);
var G__36574 = cljs.core.chunk_rest(seq__35815_36572__$1);
var G__36575 = c__4556__auto___36573;
var G__36576 = cljs.core.count(c__4556__auto___36573);
var G__36577 = (0);
seq__35815_36561 = G__36574;
chunk__35816_36562 = G__36575;
count__35817_36563 = G__36576;
i__35818_36564 = G__36577;
continue;
} else {
var node_36579 = cljs.core.first(seq__35815_36572__$1);
fragment.appendChild(shadow.dom._to_dom(node_36579));


var G__36582 = cljs.core.next(seq__35815_36572__$1);
var G__36583 = null;
var G__36584 = (0);
var G__36585 = (0);
seq__35815_36561 = G__36582;
chunk__35816_36562 = G__36583;
count__35817_36563 = G__36584;
i__35818_36564 = G__36585;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35811){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35811));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35832_36587 = cljs.core.seq(scripts);
var chunk__35833_36588 = null;
var count__35834_36589 = (0);
var i__35835_36590 = (0);
while(true){
if((i__35835_36590 < count__35834_36589)){
var vec__35846_36591 = chunk__35833_36588.cljs$core$IIndexed$_nth$arity$2(null,i__35835_36590);
var script_tag_36592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35846_36591,(0),null);
var script_body_36593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35846_36591,(1),null);
eval(script_body_36593);


var G__36594 = seq__35832_36587;
var G__36595 = chunk__35833_36588;
var G__36596 = count__35834_36589;
var G__36597 = (i__35835_36590 + (1));
seq__35832_36587 = G__36594;
chunk__35833_36588 = G__36595;
count__35834_36589 = G__36596;
i__35835_36590 = G__36597;
continue;
} else {
var temp__5735__auto___36598 = cljs.core.seq(seq__35832_36587);
if(temp__5735__auto___36598){
var seq__35832_36599__$1 = temp__5735__auto___36598;
if(cljs.core.chunked_seq_QMARK_(seq__35832_36599__$1)){
var c__4556__auto___36600 = cljs.core.chunk_first(seq__35832_36599__$1);
var G__36602 = cljs.core.chunk_rest(seq__35832_36599__$1);
var G__36603 = c__4556__auto___36600;
var G__36604 = cljs.core.count(c__4556__auto___36600);
var G__36605 = (0);
seq__35832_36587 = G__36602;
chunk__35833_36588 = G__36603;
count__35834_36589 = G__36604;
i__35835_36590 = G__36605;
continue;
} else {
var vec__35854_36610 = cljs.core.first(seq__35832_36599__$1);
var script_tag_36611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854_36610,(0),null);
var script_body_36612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35854_36610,(1),null);
eval(script_body_36612);


var G__36616 = cljs.core.next(seq__35832_36599__$1);
var G__36617 = null;
var G__36618 = (0);
var G__36619 = (0);
seq__35832_36587 = G__36616;
chunk__35833_36588 = G__36617;
count__35834_36589 = G__36618;
i__35835_36590 = G__36619;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35859){
var vec__35861 = p__35859;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35861,(1),null);
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
var G__35879 = arguments.length;
switch (G__35879) {
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
var seq__35896 = cljs.core.seq(style_keys);
var chunk__35897 = null;
var count__35898 = (0);
var i__35899 = (0);
while(true){
if((i__35899 < count__35898)){
var it = chunk__35897.cljs$core$IIndexed$_nth$arity$2(null,i__35899);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36627 = seq__35896;
var G__36628 = chunk__35897;
var G__36629 = count__35898;
var G__36630 = (i__35899 + (1));
seq__35896 = G__36627;
chunk__35897 = G__36628;
count__35898 = G__36629;
i__35899 = G__36630;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35896);
if(temp__5735__auto__){
var seq__35896__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35896__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35896__$1);
var G__36631 = cljs.core.chunk_rest(seq__35896__$1);
var G__36632 = c__4556__auto__;
var G__36633 = cljs.core.count(c__4556__auto__);
var G__36634 = (0);
seq__35896 = G__36631;
chunk__35897 = G__36632;
count__35898 = G__36633;
i__35899 = G__36634;
continue;
} else {
var it = cljs.core.first(seq__35896__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36635 = cljs.core.next(seq__35896__$1);
var G__36636 = null;
var G__36637 = (0);
var G__36638 = (0);
seq__35896 = G__36635;
chunk__35897 = G__36636;
count__35898 = G__36637;
i__35899 = G__36638;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35913,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35923 = k35913;
var G__35923__$1 = (((G__35923 instanceof cljs.core.Keyword))?G__35923.fqn:null);
switch (G__35923__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35913,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35924){
var vec__35925 = p__35924;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35925,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35925,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35912){
var self__ = this;
var G__35912__$1 = this;
return (new cljs.core.RecordIter((0),G__35912__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35914,other35915){
var self__ = this;
var this35914__$1 = this;
return (((!((other35915 == null)))) && ((this35914__$1.constructor === other35915.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35914__$1.x,other35915.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35914__$1.y,other35915.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35914__$1.__extmap,other35915.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35912){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35950 = cljs.core.keyword_identical_QMARK_;
var expr__35951 = k__4388__auto__;
if(cljs.core.truth_((pred__35950.cljs$core$IFn$_invoke$arity$2 ? pred__35950.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35951) : pred__35950.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35951)))){
return (new shadow.dom.Coordinate(G__35912,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35950.cljs$core$IFn$_invoke$arity$2 ? pred__35950.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35951) : pred__35950.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35951)))){
return (new shadow.dom.Coordinate(self__.x,G__35912,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35912),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35912){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35912,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35916){
var extmap__4419__auto__ = (function (){var G__35970 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35916,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35916)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35970);
} else {
return G__35970;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35916),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35916),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35982,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35993 = k35982;
var G__35993__$1 = (((G__35993 instanceof cljs.core.Keyword))?G__35993.fqn:null);
switch (G__35993__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35982,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35997){
var vec__35998 = p__35997;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35998,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35998,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35981){
var self__ = this;
var G__35981__$1 = this;
return (new cljs.core.RecordIter((0),G__35981__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35983,other35984){
var self__ = this;
var this35983__$1 = this;
return (((!((other35984 == null)))) && ((this35983__$1.constructor === other35984.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35983__$1.w,other35984.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35983__$1.h,other35984.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35983__$1.__extmap,other35984.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35981){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36031 = cljs.core.keyword_identical_QMARK_;
var expr__36032 = k__4388__auto__;
if(cljs.core.truth_((pred__36031.cljs$core$IFn$_invoke$arity$2 ? pred__36031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36032) : pred__36031.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36032)))){
return (new shadow.dom.Size(G__35981,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36031.cljs$core$IFn$_invoke$arity$2 ? pred__36031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36032) : pred__36031.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36032)))){
return (new shadow.dom.Size(self__.w,G__35981,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35981),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35981){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35981,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35985){
var extmap__4419__auto__ = (function (){var G__36049 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35985,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35985)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36049);
} else {
return G__36049;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35985),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35985),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__36694 = (i + (1));
var G__36695 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36694;
ret = G__36695;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36081){
var vec__36082 = p__36081;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36082,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36091 = arguments.length;
switch (G__36091) {
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
var G__36711 = ps;
var G__36712 = (i + (1));
el__$1 = G__36711;
i = G__36712;
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
var vec__36134 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36134,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36134,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36134,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36139_36716 = cljs.core.seq(props);
var chunk__36140_36717 = null;
var count__36141_36718 = (0);
var i__36142_36719 = (0);
while(true){
if((i__36142_36719 < count__36141_36718)){
var vec__36152_36720 = chunk__36140_36717.cljs$core$IIndexed$_nth$arity$2(null,i__36142_36719);
var k_36721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152_36720,(0),null);
var v_36722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152_36720,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36721);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36721),v_36722);


var G__36723 = seq__36139_36716;
var G__36724 = chunk__36140_36717;
var G__36725 = count__36141_36718;
var G__36726 = (i__36142_36719 + (1));
seq__36139_36716 = G__36723;
chunk__36140_36717 = G__36724;
count__36141_36718 = G__36725;
i__36142_36719 = G__36726;
continue;
} else {
var temp__5735__auto___36727 = cljs.core.seq(seq__36139_36716);
if(temp__5735__auto___36727){
var seq__36139_36728__$1 = temp__5735__auto___36727;
if(cljs.core.chunked_seq_QMARK_(seq__36139_36728__$1)){
var c__4556__auto___36729 = cljs.core.chunk_first(seq__36139_36728__$1);
var G__36730 = cljs.core.chunk_rest(seq__36139_36728__$1);
var G__36731 = c__4556__auto___36729;
var G__36732 = cljs.core.count(c__4556__auto___36729);
var G__36733 = (0);
seq__36139_36716 = G__36730;
chunk__36140_36717 = G__36731;
count__36141_36718 = G__36732;
i__36142_36719 = G__36733;
continue;
} else {
var vec__36157_36734 = cljs.core.first(seq__36139_36728__$1);
var k_36735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157_36734,(0),null);
var v_36736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157_36734,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36735);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36735),v_36736);


var G__36737 = cljs.core.next(seq__36139_36728__$1);
var G__36738 = null;
var G__36739 = (0);
var G__36740 = (0);
seq__36139_36716 = G__36737;
chunk__36140_36717 = G__36738;
count__36141_36718 = G__36739;
i__36142_36719 = G__36740;
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
var vec__36169 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36169,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36169,(1),null);
var seq__36172_36743 = cljs.core.seq(node_children);
var chunk__36174_36744 = null;
var count__36175_36745 = (0);
var i__36176_36746 = (0);
while(true){
if((i__36176_36746 < count__36175_36745)){
var child_struct_36747 = chunk__36174_36744.cljs$core$IIndexed$_nth$arity$2(null,i__36176_36746);
if((!((child_struct_36747 == null)))){
if(typeof child_struct_36747 === 'string'){
var text_36748 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36748),child_struct_36747].join(''));
} else {
var children_36749 = shadow.dom.svg_node(child_struct_36747);
if(cljs.core.seq_QMARK_(children_36749)){
var seq__36207_36750 = cljs.core.seq(children_36749);
var chunk__36209_36751 = null;
var count__36210_36752 = (0);
var i__36211_36753 = (0);
while(true){
if((i__36211_36753 < count__36210_36752)){
var child_36756 = chunk__36209_36751.cljs$core$IIndexed$_nth$arity$2(null,i__36211_36753);
if(cljs.core.truth_(child_36756)){
node.appendChild(child_36756);


var G__36757 = seq__36207_36750;
var G__36758 = chunk__36209_36751;
var G__36759 = count__36210_36752;
var G__36760 = (i__36211_36753 + (1));
seq__36207_36750 = G__36757;
chunk__36209_36751 = G__36758;
count__36210_36752 = G__36759;
i__36211_36753 = G__36760;
continue;
} else {
var G__36761 = seq__36207_36750;
var G__36762 = chunk__36209_36751;
var G__36763 = count__36210_36752;
var G__36764 = (i__36211_36753 + (1));
seq__36207_36750 = G__36761;
chunk__36209_36751 = G__36762;
count__36210_36752 = G__36763;
i__36211_36753 = G__36764;
continue;
}
} else {
var temp__5735__auto___36765 = cljs.core.seq(seq__36207_36750);
if(temp__5735__auto___36765){
var seq__36207_36767__$1 = temp__5735__auto___36765;
if(cljs.core.chunked_seq_QMARK_(seq__36207_36767__$1)){
var c__4556__auto___36768 = cljs.core.chunk_first(seq__36207_36767__$1);
var G__36769 = cljs.core.chunk_rest(seq__36207_36767__$1);
var G__36770 = c__4556__auto___36768;
var G__36771 = cljs.core.count(c__4556__auto___36768);
var G__36772 = (0);
seq__36207_36750 = G__36769;
chunk__36209_36751 = G__36770;
count__36210_36752 = G__36771;
i__36211_36753 = G__36772;
continue;
} else {
var child_36773 = cljs.core.first(seq__36207_36767__$1);
if(cljs.core.truth_(child_36773)){
node.appendChild(child_36773);


var G__36774 = cljs.core.next(seq__36207_36767__$1);
var G__36775 = null;
var G__36776 = (0);
var G__36777 = (0);
seq__36207_36750 = G__36774;
chunk__36209_36751 = G__36775;
count__36210_36752 = G__36776;
i__36211_36753 = G__36777;
continue;
} else {
var G__36778 = cljs.core.next(seq__36207_36767__$1);
var G__36779 = null;
var G__36780 = (0);
var G__36781 = (0);
seq__36207_36750 = G__36778;
chunk__36209_36751 = G__36779;
count__36210_36752 = G__36780;
i__36211_36753 = G__36781;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36749);
}
}


var G__36783 = seq__36172_36743;
var G__36784 = chunk__36174_36744;
var G__36785 = count__36175_36745;
var G__36786 = (i__36176_36746 + (1));
seq__36172_36743 = G__36783;
chunk__36174_36744 = G__36784;
count__36175_36745 = G__36785;
i__36176_36746 = G__36786;
continue;
} else {
var G__36790 = seq__36172_36743;
var G__36791 = chunk__36174_36744;
var G__36792 = count__36175_36745;
var G__36793 = (i__36176_36746 + (1));
seq__36172_36743 = G__36790;
chunk__36174_36744 = G__36791;
count__36175_36745 = G__36792;
i__36176_36746 = G__36793;
continue;
}
} else {
var temp__5735__auto___36794 = cljs.core.seq(seq__36172_36743);
if(temp__5735__auto___36794){
var seq__36172_36795__$1 = temp__5735__auto___36794;
if(cljs.core.chunked_seq_QMARK_(seq__36172_36795__$1)){
var c__4556__auto___36796 = cljs.core.chunk_first(seq__36172_36795__$1);
var G__36798 = cljs.core.chunk_rest(seq__36172_36795__$1);
var G__36799 = c__4556__auto___36796;
var G__36800 = cljs.core.count(c__4556__auto___36796);
var G__36801 = (0);
seq__36172_36743 = G__36798;
chunk__36174_36744 = G__36799;
count__36175_36745 = G__36800;
i__36176_36746 = G__36801;
continue;
} else {
var child_struct_36802 = cljs.core.first(seq__36172_36795__$1);
if((!((child_struct_36802 == null)))){
if(typeof child_struct_36802 === 'string'){
var text_36803 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36803),child_struct_36802].join(''));
} else {
var children_36804 = shadow.dom.svg_node(child_struct_36802);
if(cljs.core.seq_QMARK_(children_36804)){
var seq__36222_36805 = cljs.core.seq(children_36804);
var chunk__36224_36806 = null;
var count__36225_36807 = (0);
var i__36226_36808 = (0);
while(true){
if((i__36226_36808 < count__36225_36807)){
var child_36809 = chunk__36224_36806.cljs$core$IIndexed$_nth$arity$2(null,i__36226_36808);
if(cljs.core.truth_(child_36809)){
node.appendChild(child_36809);


var G__36810 = seq__36222_36805;
var G__36811 = chunk__36224_36806;
var G__36812 = count__36225_36807;
var G__36813 = (i__36226_36808 + (1));
seq__36222_36805 = G__36810;
chunk__36224_36806 = G__36811;
count__36225_36807 = G__36812;
i__36226_36808 = G__36813;
continue;
} else {
var G__36814 = seq__36222_36805;
var G__36815 = chunk__36224_36806;
var G__36816 = count__36225_36807;
var G__36817 = (i__36226_36808 + (1));
seq__36222_36805 = G__36814;
chunk__36224_36806 = G__36815;
count__36225_36807 = G__36816;
i__36226_36808 = G__36817;
continue;
}
} else {
var temp__5735__auto___36818__$1 = cljs.core.seq(seq__36222_36805);
if(temp__5735__auto___36818__$1){
var seq__36222_36819__$1 = temp__5735__auto___36818__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36222_36819__$1)){
var c__4556__auto___36820 = cljs.core.chunk_first(seq__36222_36819__$1);
var G__36821 = cljs.core.chunk_rest(seq__36222_36819__$1);
var G__36822 = c__4556__auto___36820;
var G__36823 = cljs.core.count(c__4556__auto___36820);
var G__36824 = (0);
seq__36222_36805 = G__36821;
chunk__36224_36806 = G__36822;
count__36225_36807 = G__36823;
i__36226_36808 = G__36824;
continue;
} else {
var child_36825 = cljs.core.first(seq__36222_36819__$1);
if(cljs.core.truth_(child_36825)){
node.appendChild(child_36825);


var G__36826 = cljs.core.next(seq__36222_36819__$1);
var G__36827 = null;
var G__36828 = (0);
var G__36829 = (0);
seq__36222_36805 = G__36826;
chunk__36224_36806 = G__36827;
count__36225_36807 = G__36828;
i__36226_36808 = G__36829;
continue;
} else {
var G__36830 = cljs.core.next(seq__36222_36819__$1);
var G__36831 = null;
var G__36832 = (0);
var G__36833 = (0);
seq__36222_36805 = G__36830;
chunk__36224_36806 = G__36831;
count__36225_36807 = G__36832;
i__36226_36808 = G__36833;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36804);
}
}


var G__36834 = cljs.core.next(seq__36172_36795__$1);
var G__36835 = null;
var G__36836 = (0);
var G__36837 = (0);
seq__36172_36743 = G__36834;
chunk__36174_36744 = G__36835;
count__36175_36745 = G__36836;
i__36176_36746 = G__36837;
continue;
} else {
var G__36838 = cljs.core.next(seq__36172_36795__$1);
var G__36839 = null;
var G__36840 = (0);
var G__36841 = (0);
seq__36172_36743 = G__36838;
chunk__36174_36744 = G__36839;
count__36175_36745 = G__36840;
i__36176_36746 = G__36841;
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
var len__4736__auto___36843 = arguments.length;
var i__4737__auto___36844 = (0);
while(true){
if((i__4737__auto___36844 < len__4736__auto___36843)){
args__4742__auto__.push((arguments[i__4737__auto___36844]));

var G__36846 = (i__4737__auto___36844 + (1));
i__4737__auto___36844 = G__36846;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36251){
var G__36252 = cljs.core.first(seq36251);
var seq36251__$1 = cljs.core.next(seq36251);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36252,seq36251__$1);
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
var G__36265 = arguments.length;
switch (G__36265) {
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
var c__33337__auto___36858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_36279){
var state_val_36280 = (state_36279[(1)]);
if((state_val_36280 === (1))){
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36279__$1,(2),once_or_cleanup);
} else {
if((state_val_36280 === (2))){
var inst_36276 = (state_36279[(2)]);
var inst_36277 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36279__$1 = (function (){var statearr_36284 = state_36279;
(statearr_36284[(7)] = inst_36276);

return statearr_36284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36279__$1,inst_36277);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33218__auto__ = null;
var shadow$dom$state_machine__33218__auto____0 = (function (){
var statearr_36285 = [null,null,null,null,null,null,null,null];
(statearr_36285[(0)] = shadow$dom$state_machine__33218__auto__);

(statearr_36285[(1)] = (1));

return statearr_36285;
});
var shadow$dom$state_machine__33218__auto____1 = (function (state_36279){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_36279);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e36286){var ex__33221__auto__ = e36286;
var statearr_36287_36861 = state_36279;
(statearr_36287_36861[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_36279[(4)]))){
var statearr_36288_36862 = state_36279;
(statearr_36288_36862[(1)] = cljs.core.first((state_36279[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36864 = state_36279;
state_36279 = G__36864;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
shadow$dom$state_machine__33218__auto__ = function(state_36279){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33218__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33218__auto____1.call(this,state_36279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33218__auto____0;
shadow$dom$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33218__auto____1;
return shadow$dom$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_36289 = f__33338__auto__();
(statearr_36289[(6)] = c__33337__auto___36858);

return statearr_36289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
