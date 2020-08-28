goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33461 = arguments.length;
switch (G__33461) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33466 = (function (f,blockable,meta33467){
this.f = f;
this.blockable = blockable;
this.meta33467 = meta33467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33468,meta33467__$1){
var self__ = this;
var _33468__$1 = this;
return (new cljs.core.async.t_cljs$core$async33466(self__.f,self__.blockable,meta33467__$1));
}));

(cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33468){
var self__ = this;
var _33468__$1 = this;
return self__.meta33467;
}));

(cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33467","meta33467",2139457490,null)], null);
}));

(cljs.core.async.t_cljs$core$async33466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33466");

(cljs.core.async.t_cljs$core$async33466.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33466.
 */
cljs.core.async.__GT_t_cljs$core$async33466 = (function cljs$core$async$__GT_t_cljs$core$async33466(f__$1,blockable__$1,meta33467){
return (new cljs.core.async.t_cljs$core$async33466(f__$1,blockable__$1,meta33467));
});

}

return (new cljs.core.async.t_cljs$core$async33466(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33540 = arguments.length;
switch (G__33540) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33544 = arguments.length;
switch (G__33544) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33560 = arguments.length;
switch (G__33560) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35449 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35449) : fn1.call(null,val_35449));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35449) : fn1.call(null,val_35449));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33588 = arguments.length;
switch (G__33588) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___35453 = n;
var x_35454 = (0);
while(true){
if((x_35454 < n__4613__auto___35453)){
(a[x_35454] = x_35454);

var G__35455 = (x_35454 + (1));
x_35454 = G__35455;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33604 = (function (flag,meta33605){
this.flag = flag;
this.meta33605 = meta33605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33606,meta33605__$1){
var self__ = this;
var _33606__$1 = this;
return (new cljs.core.async.t_cljs$core$async33604(self__.flag,meta33605__$1));
}));

(cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33606){
var self__ = this;
var _33606__$1 = this;
return self__.meta33605;
}));

(cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33605","meta33605",-1329362264,null)], null);
}));

(cljs.core.async.t_cljs$core$async33604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33604");

(cljs.core.async.t_cljs$core$async33604.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33604.
 */
cljs.core.async.__GT_t_cljs$core$async33604 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33604(flag__$1,meta33605){
return (new cljs.core.async.t_cljs$core$async33604(flag__$1,meta33605));
});

}

return (new cljs.core.async.t_cljs$core$async33604(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33613 = (function (flag,cb,meta33614){
this.flag = flag;
this.cb = cb;
this.meta33614 = meta33614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33615,meta33614__$1){
var self__ = this;
var _33615__$1 = this;
return (new cljs.core.async.t_cljs$core$async33613(self__.flag,self__.cb,meta33614__$1));
}));

(cljs.core.async.t_cljs$core$async33613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33615){
var self__ = this;
var _33615__$1 = this;
return self__.meta33614;
}));

(cljs.core.async.t_cljs$core$async33613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33614","meta33614",2113302919,null)], null);
}));

(cljs.core.async.t_cljs$core$async33613.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33613");

(cljs.core.async.t_cljs$core$async33613.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33613");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33613.
 */
cljs.core.async.__GT_t_cljs$core$async33613 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33613(flag__$1,cb__$1,meta33614){
return (new cljs.core.async.t_cljs$core$async33613(flag__$1,cb__$1,meta33614));
});

}

return (new cljs.core.async.t_cljs$core$async33613(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33617_SHARP_){
var G__33626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33617_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33626) : fret.call(null,G__33626));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33618_SHARP_){
var G__33633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33618_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33633) : fret.call(null,G__33633));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35458 = (i + (1));
i = G__35458;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35460 = arguments.length;
var i__4737__auto___35461 = (0);
while(true){
if((i__4737__auto___35461 < len__4736__auto___35460)){
args__4742__auto__.push((arguments[i__4737__auto___35461]));

var G__35462 = (i__4737__auto___35461 + (1));
i__4737__auto___35461 = G__35462;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33648){
var map__33649 = p__33648;
var map__33649__$1 = (((((!((map__33649 == null))))?(((((map__33649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33649):map__33649);
var opts = map__33649__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33643){
var G__33644 = cljs.core.first(seq33643);
var seq33643__$1 = cljs.core.next(seq33643);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33644,seq33643__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33652 = arguments.length;
switch (G__33652) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33337__auto___35466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_33684){
var state_val_33685 = (state_33684[(1)]);
if((state_val_33685 === (7))){
var inst_33679 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
var statearr_33686_35467 = state_33684__$1;
(statearr_33686_35467[(2)] = inst_33679);

(statearr_33686_35467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (1))){
var state_33684__$1 = state_33684;
var statearr_33687_35468 = state_33684__$1;
(statearr_33687_35468[(2)] = null);

(statearr_33687_35468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (4))){
var inst_33662 = (state_33684[(7)]);
var inst_33662__$1 = (state_33684[(2)]);
var inst_33663 = (inst_33662__$1 == null);
var state_33684__$1 = (function (){var statearr_33688 = state_33684;
(statearr_33688[(7)] = inst_33662__$1);

return statearr_33688;
})();
if(cljs.core.truth_(inst_33663)){
var statearr_33689_35471 = state_33684__$1;
(statearr_33689_35471[(1)] = (5));

} else {
var statearr_33690_35472 = state_33684__$1;
(statearr_33690_35472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (13))){
var state_33684__$1 = state_33684;
var statearr_33691_35473 = state_33684__$1;
(statearr_33691_35473[(2)] = null);

(statearr_33691_35473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (6))){
var inst_33662 = (state_33684[(7)]);
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33684__$1,(11),to,inst_33662);
} else {
if((state_val_33685 === (3))){
var inst_33682 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33684__$1,inst_33682);
} else {
if((state_val_33685 === (12))){
var state_33684__$1 = state_33684;
var statearr_33692_35474 = state_33684__$1;
(statearr_33692_35474[(2)] = null);

(statearr_33692_35474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (2))){
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33684__$1,(4),from);
} else {
if((state_val_33685 === (11))){
var inst_33672 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
if(cljs.core.truth_(inst_33672)){
var statearr_33703_35477 = state_33684__$1;
(statearr_33703_35477[(1)] = (12));

} else {
var statearr_33705_35478 = state_33684__$1;
(statearr_33705_35478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (9))){
var state_33684__$1 = state_33684;
var statearr_33712_35479 = state_33684__$1;
(statearr_33712_35479[(2)] = null);

(statearr_33712_35479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (5))){
var state_33684__$1 = state_33684;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33717_35480 = state_33684__$1;
(statearr_33717_35480[(1)] = (8));

} else {
var statearr_33722_35481 = state_33684__$1;
(statearr_33722_35481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (14))){
var inst_33677 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
var statearr_33726_35482 = state_33684__$1;
(statearr_33726_35482[(2)] = inst_33677);

(statearr_33726_35482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (10))){
var inst_33669 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
var statearr_33732_35483 = state_33684__$1;
(statearr_33732_35483[(2)] = inst_33669);

(statearr_33732_35483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (8))){
var inst_33666 = cljs.core.async.close_BANG_(to);
var state_33684__$1 = state_33684;
var statearr_33739_35484 = state_33684__$1;
(statearr_33739_35484[(2)] = inst_33666);

(statearr_33739_35484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_33747 = [null,null,null,null,null,null,null,null];
(statearr_33747[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_33747[(1)] = (1));

return statearr_33747;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_33684){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_33684);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e33748){var ex__33221__auto__ = e33748;
var statearr_33749_35487 = state_33684;
(statearr_33749_35487[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_33684[(4)]))){
var statearr_33750_35488 = state_33684;
(statearr_33750_35488[(1)] = cljs.core.first((state_33684[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35489 = state_33684;
state_33684 = G__35489;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_33684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_33684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_33752 = f__33338__auto__();
(statearr_33752[(6)] = c__33337__auto___35466);

return statearr_33752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33754){
var vec__33755 = p__33754;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33755,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33755,(1),null);
var job = vec__33755;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33337__auto___35492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_33762){
var state_val_33763 = (state_33762[(1)]);
if((state_val_33763 === (1))){
var state_33762__$1 = state_33762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33762__$1,(2),res,v);
} else {
if((state_val_33763 === (2))){
var inst_33759 = (state_33762[(2)]);
var inst_33760 = cljs.core.async.close_BANG_(res);
var state_33762__$1 = (function (){var statearr_33764 = state_33762;
(statearr_33764[(7)] = inst_33759);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33762__$1,inst_33760);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0 = (function (){
var statearr_33765 = [null,null,null,null,null,null,null,null];
(statearr_33765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_33765[(1)] = (1));

return statearr_33765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_33762){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_33762);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e33766){var ex__33221__auto__ = e33766;
var statearr_33767_35493 = state_33762;
(statearr_33767_35493[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_33762[(4)]))){
var statearr_33768_35494 = state_33762;
(statearr_33768_35494[(1)] = cljs.core.first((state_33762[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35496 = state_33762;
state_33762 = G__35496;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_33762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_33762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_33769 = f__33338__auto__();
(statearr_33769[(6)] = c__33337__auto___35492);

return statearr_33769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33770){
var vec__33771 = p__33770;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33771,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33771,(1),null);
var job = vec__33771;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___35497 = n;
var __35498 = (0);
while(true){
if((__35498 < n__4613__auto___35497)){
var G__33774_35500 = type;
var G__33774_35501__$1 = (((G__33774_35500 instanceof cljs.core.Keyword))?G__33774_35500.fqn:null);
switch (G__33774_35501__$1) {
case "compute":
var c__33337__auto___35503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35498,c__33337__auto___35503,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async){
return (function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = ((function (__35498,c__33337__auto___35503,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async){
return (function (state_33787){
var state_val_33788 = (state_33787[(1)]);
if((state_val_33788 === (1))){
var state_33787__$1 = state_33787;
var statearr_33789_35504 = state_33787__$1;
(statearr_33789_35504[(2)] = null);

(statearr_33789_35504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (2))){
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33787__$1,(4),jobs);
} else {
if((state_val_33788 === (3))){
var inst_33785 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33787__$1,inst_33785);
} else {
if((state_val_33788 === (4))){
var inst_33777 = (state_33787[(2)]);
var inst_33778 = process(inst_33777);
var state_33787__$1 = state_33787;
if(cljs.core.truth_(inst_33778)){
var statearr_33790_35505 = state_33787__$1;
(statearr_33790_35505[(1)] = (5));

} else {
var statearr_33791_35506 = state_33787__$1;
(statearr_33791_35506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (5))){
var state_33787__$1 = state_33787;
var statearr_33792_35507 = state_33787__$1;
(statearr_33792_35507[(2)] = null);

(statearr_33792_35507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (6))){
var state_33787__$1 = state_33787;
var statearr_33793_35512 = state_33787__$1;
(statearr_33793_35512[(2)] = null);

(statearr_33793_35512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33788 === (7))){
var inst_33783 = (state_33787[(2)]);
var state_33787__$1 = state_33787;
var statearr_33794_35513 = state_33787__$1;
(statearr_33794_35513[(2)] = inst_33783);

(statearr_33794_35513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35498,c__33337__auto___35503,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async))
;
return ((function (__35498,switch__33217__auto__,c__33337__auto___35503,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0 = (function (){
var statearr_33795 = [null,null,null,null,null,null,null];
(statearr_33795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_33795[(1)] = (1));

return statearr_33795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_33787){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_33787);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e33796){var ex__33221__auto__ = e33796;
var statearr_33797_35514 = state_33787;
(statearr_33797_35514[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_33787[(4)]))){
var statearr_33798_35515 = state_33787;
(statearr_33798_35515[(1)] = cljs.core.first((state_33787[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35516 = state_33787;
state_33787 = G__35516;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_33787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_33787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
;})(__35498,switch__33217__auto__,c__33337__auto___35503,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async))
})();
var state__33339__auto__ = (function (){var statearr_33799 = f__33338__auto__();
(statearr_33799[(6)] = c__33337__auto___35503);

return statearr_33799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
});})(__35498,c__33337__auto___35503,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async))
);


break;
case "async":
var c__33337__auto___35517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35498,c__33337__auto___35517,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async){
return (function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = ((function (__35498,c__33337__auto___35517,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async){
return (function (state_33812){
var state_val_33813 = (state_33812[(1)]);
if((state_val_33813 === (1))){
var state_33812__$1 = state_33812;
var statearr_33814_35518 = state_33812__$1;
(statearr_33814_35518[(2)] = null);

(statearr_33814_35518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (2))){
var state_33812__$1 = state_33812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33812__$1,(4),jobs);
} else {
if((state_val_33813 === (3))){
var inst_33810 = (state_33812[(2)]);
var state_33812__$1 = state_33812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33812__$1,inst_33810);
} else {
if((state_val_33813 === (4))){
var inst_33802 = (state_33812[(2)]);
var inst_33803 = async(inst_33802);
var state_33812__$1 = state_33812;
if(cljs.core.truth_(inst_33803)){
var statearr_33815_35519 = state_33812__$1;
(statearr_33815_35519[(1)] = (5));

} else {
var statearr_33816_35520 = state_33812__$1;
(statearr_33816_35520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (5))){
var state_33812__$1 = state_33812;
var statearr_33817_35521 = state_33812__$1;
(statearr_33817_35521[(2)] = null);

(statearr_33817_35521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (6))){
var state_33812__$1 = state_33812;
var statearr_33818_35522 = state_33812__$1;
(statearr_33818_35522[(2)] = null);

(statearr_33818_35522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33813 === (7))){
var inst_33808 = (state_33812[(2)]);
var state_33812__$1 = state_33812;
var statearr_33819_35523 = state_33812__$1;
(statearr_33819_35523[(2)] = inst_33808);

(statearr_33819_35523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35498,c__33337__auto___35517,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async))
;
return ((function (__35498,switch__33217__auto__,c__33337__auto___35517,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0 = (function (){
var statearr_33820 = [null,null,null,null,null,null,null];
(statearr_33820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_33820[(1)] = (1));

return statearr_33820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_33812){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_33812);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e33821){var ex__33221__auto__ = e33821;
var statearr_33822_35526 = state_33812;
(statearr_33822_35526[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_33812[(4)]))){
var statearr_33823_35527 = state_33812;
(statearr_33823_35527[(1)] = cljs.core.first((state_33812[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35528 = state_33812;
state_33812 = G__35528;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_33812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_33812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
;})(__35498,switch__33217__auto__,c__33337__auto___35517,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async))
})();
var state__33339__auto__ = (function (){var statearr_33824 = f__33338__auto__();
(statearr_33824[(6)] = c__33337__auto___35517);

return statearr_33824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
});})(__35498,c__33337__auto___35517,G__33774_35500,G__33774_35501__$1,n__4613__auto___35497,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33774_35501__$1)].join('')));

}

var G__35529 = (__35498 + (1));
__35498 = G__35529;
continue;
} else {
}
break;
}

var c__33337__auto___35530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_33846){
var state_val_33847 = (state_33846[(1)]);
if((state_val_33847 === (7))){
var inst_33842 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33848_35531 = state_33846__$1;
(statearr_33848_35531[(2)] = inst_33842);

(statearr_33848_35531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (1))){
var state_33846__$1 = state_33846;
var statearr_33849_35532 = state_33846__$1;
(statearr_33849_35532[(2)] = null);

(statearr_33849_35532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (4))){
var inst_33827 = (state_33846[(7)]);
var inst_33827__$1 = (state_33846[(2)]);
var inst_33828 = (inst_33827__$1 == null);
var state_33846__$1 = (function (){var statearr_33850 = state_33846;
(statearr_33850[(7)] = inst_33827__$1);

return statearr_33850;
})();
if(cljs.core.truth_(inst_33828)){
var statearr_33851_35533 = state_33846__$1;
(statearr_33851_35533[(1)] = (5));

} else {
var statearr_33852_35534 = state_33846__$1;
(statearr_33852_35534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (6))){
var inst_33827 = (state_33846[(7)]);
var inst_33832 = (state_33846[(8)]);
var inst_33832__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33833 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33834 = [inst_33827,inst_33832__$1];
var inst_33835 = (new cljs.core.PersistentVector(null,2,(5),inst_33833,inst_33834,null));
var state_33846__$1 = (function (){var statearr_33853 = state_33846;
(statearr_33853[(8)] = inst_33832__$1);

return statearr_33853;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33846__$1,(8),jobs,inst_33835);
} else {
if((state_val_33847 === (3))){
var inst_33844 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33846__$1,inst_33844);
} else {
if((state_val_33847 === (2))){
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33846__$1,(4),from);
} else {
if((state_val_33847 === (9))){
var inst_33839 = (state_33846[(2)]);
var state_33846__$1 = (function (){var statearr_33854 = state_33846;
(statearr_33854[(9)] = inst_33839);

return statearr_33854;
})();
var statearr_33855_35542 = state_33846__$1;
(statearr_33855_35542[(2)] = null);

(statearr_33855_35542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (5))){
var inst_33830 = cljs.core.async.close_BANG_(jobs);
var state_33846__$1 = state_33846;
var statearr_33856_35543 = state_33846__$1;
(statearr_33856_35543[(2)] = inst_33830);

(statearr_33856_35543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (8))){
var inst_33832 = (state_33846[(8)]);
var inst_33837 = (state_33846[(2)]);
var state_33846__$1 = (function (){var statearr_33857 = state_33846;
(statearr_33857[(10)] = inst_33837);

return statearr_33857;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33846__$1,(9),results,inst_33832);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0 = (function (){
var statearr_33858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_33858[(1)] = (1));

return statearr_33858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_33846){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_33846);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e33859){var ex__33221__auto__ = e33859;
var statearr_33860_35547 = state_33846;
(statearr_33860_35547[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_33846[(4)]))){
var statearr_33861_35548 = state_33846;
(statearr_33861_35548[(1)] = cljs.core.first((state_33846[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35552 = state_33846;
state_33846 = G__35552;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_33846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_33846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_33862 = f__33338__auto__();
(statearr_33862[(6)] = c__33337__auto___35530);

return statearr_33862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


var c__33337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_33900){
var state_val_33901 = (state_33900[(1)]);
if((state_val_33901 === (7))){
var inst_33896 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33902_35556 = state_33900__$1;
(statearr_33902_35556[(2)] = inst_33896);

(statearr_33902_35556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (20))){
var state_33900__$1 = state_33900;
var statearr_33903_35557 = state_33900__$1;
(statearr_33903_35557[(2)] = null);

(statearr_33903_35557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (1))){
var state_33900__$1 = state_33900;
var statearr_33904_35558 = state_33900__$1;
(statearr_33904_35558[(2)] = null);

(statearr_33904_35558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (4))){
var inst_33865 = (state_33900[(7)]);
var inst_33865__$1 = (state_33900[(2)]);
var inst_33866 = (inst_33865__$1 == null);
var state_33900__$1 = (function (){var statearr_33905 = state_33900;
(statearr_33905[(7)] = inst_33865__$1);

return statearr_33905;
})();
if(cljs.core.truth_(inst_33866)){
var statearr_33906_35566 = state_33900__$1;
(statearr_33906_35566[(1)] = (5));

} else {
var statearr_33907_35567 = state_33900__$1;
(statearr_33907_35567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (15))){
var inst_33878 = (state_33900[(8)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33900__$1,(18),to,inst_33878);
} else {
if((state_val_33901 === (21))){
var inst_33891 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33908_35568 = state_33900__$1;
(statearr_33908_35568[(2)] = inst_33891);

(statearr_33908_35568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (13))){
var inst_33893 = (state_33900[(2)]);
var state_33900__$1 = (function (){var statearr_33909 = state_33900;
(statearr_33909[(9)] = inst_33893);

return statearr_33909;
})();
var statearr_33910_35572 = state_33900__$1;
(statearr_33910_35572[(2)] = null);

(statearr_33910_35572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (6))){
var inst_33865 = (state_33900[(7)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33900__$1,(11),inst_33865);
} else {
if((state_val_33901 === (17))){
var inst_33886 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
if(cljs.core.truth_(inst_33886)){
var statearr_33911_35576 = state_33900__$1;
(statearr_33911_35576[(1)] = (19));

} else {
var statearr_33912_35577 = state_33900__$1;
(statearr_33912_35577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (3))){
var inst_33898 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33900__$1,inst_33898);
} else {
if((state_val_33901 === (12))){
var inst_33875 = (state_33900[(10)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33900__$1,(14),inst_33875);
} else {
if((state_val_33901 === (2))){
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33900__$1,(4),results);
} else {
if((state_val_33901 === (19))){
var state_33900__$1 = state_33900;
var statearr_33913_35583 = state_33900__$1;
(statearr_33913_35583[(2)] = null);

(statearr_33913_35583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (11))){
var inst_33875 = (state_33900[(2)]);
var state_33900__$1 = (function (){var statearr_33914 = state_33900;
(statearr_33914[(10)] = inst_33875);

return statearr_33914;
})();
var statearr_33915_35587 = state_33900__$1;
(statearr_33915_35587[(2)] = null);

(statearr_33915_35587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (9))){
var state_33900__$1 = state_33900;
var statearr_33916_35588 = state_33900__$1;
(statearr_33916_35588[(2)] = null);

(statearr_33916_35588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (5))){
var state_33900__$1 = state_33900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33917_35589 = state_33900__$1;
(statearr_33917_35589[(1)] = (8));

} else {
var statearr_33918_35591 = state_33900__$1;
(statearr_33918_35591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (14))){
var inst_33878 = (state_33900[(8)]);
var inst_33878__$1 = (state_33900[(2)]);
var inst_33879 = (inst_33878__$1 == null);
var inst_33880 = cljs.core.not(inst_33879);
var state_33900__$1 = (function (){var statearr_33919 = state_33900;
(statearr_33919[(8)] = inst_33878__$1);

return statearr_33919;
})();
if(inst_33880){
var statearr_33920_35593 = state_33900__$1;
(statearr_33920_35593[(1)] = (15));

} else {
var statearr_33921_35594 = state_33900__$1;
(statearr_33921_35594[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (16))){
var state_33900__$1 = state_33900;
var statearr_33922_35595 = state_33900__$1;
(statearr_33922_35595[(2)] = false);

(statearr_33922_35595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (10))){
var inst_33872 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33923_35596 = state_33900__$1;
(statearr_33923_35596[(2)] = inst_33872);

(statearr_33923_35596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (18))){
var inst_33883 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33924_35601 = state_33900__$1;
(statearr_33924_35601[(2)] = inst_33883);

(statearr_33924_35601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (8))){
var inst_33869 = cljs.core.async.close_BANG_(to);
var state_33900__$1 = state_33900;
var statearr_33925_35602 = state_33900__$1;
(statearr_33925_35602[(2)] = inst_33869);

(statearr_33925_35602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0 = (function (){
var statearr_33930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_33930[(1)] = (1));

return statearr_33930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_33900){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_33900);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e33931){var ex__33221__auto__ = e33931;
var statearr_33932_35603 = state_33900;
(statearr_33932_35603[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_33900[(4)]))){
var statearr_33933_35604 = state_33900;
(statearr_33933_35604[(1)] = cljs.core.first((state_33900[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35605 = state_33900;
state_33900 = G__35605;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_33900){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_33900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_33934 = f__33338__auto__();
(statearr_33934[(6)] = c__33337__auto__);

return statearr_33934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));

return c__33337__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33936 = arguments.length;
switch (G__33936) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33938 = arguments.length;
switch (G__33938) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33940 = arguments.length;
switch (G__33940) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33337__auto___35615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_33966){
var state_val_33967 = (state_33966[(1)]);
if((state_val_33967 === (7))){
var inst_33962 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
var statearr_33968_35619 = state_33966__$1;
(statearr_33968_35619[(2)] = inst_33962);

(statearr_33968_35619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (1))){
var state_33966__$1 = state_33966;
var statearr_33970_35620 = state_33966__$1;
(statearr_33970_35620[(2)] = null);

(statearr_33970_35620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (4))){
var inst_33943 = (state_33966[(7)]);
var inst_33943__$1 = (state_33966[(2)]);
var inst_33944 = (inst_33943__$1 == null);
var state_33966__$1 = (function (){var statearr_33972 = state_33966;
(statearr_33972[(7)] = inst_33943__$1);

return statearr_33972;
})();
if(cljs.core.truth_(inst_33944)){
var statearr_33973_35622 = state_33966__$1;
(statearr_33973_35622[(1)] = (5));

} else {
var statearr_33974_35623 = state_33966__$1;
(statearr_33974_35623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (13))){
var state_33966__$1 = state_33966;
var statearr_33975_35624 = state_33966__$1;
(statearr_33975_35624[(2)] = null);

(statearr_33975_35624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (6))){
var inst_33943 = (state_33966[(7)]);
var inst_33949 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33943) : p.call(null,inst_33943));
var state_33966__$1 = state_33966;
if(cljs.core.truth_(inst_33949)){
var statearr_33976_35626 = state_33966__$1;
(statearr_33976_35626[(1)] = (9));

} else {
var statearr_33977_35627 = state_33966__$1;
(statearr_33977_35627[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (3))){
var inst_33964 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33966__$1,inst_33964);
} else {
if((state_val_33967 === (12))){
var state_33966__$1 = state_33966;
var statearr_33978_35629 = state_33966__$1;
(statearr_33978_35629[(2)] = null);

(statearr_33978_35629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (2))){
var state_33966__$1 = state_33966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33966__$1,(4),ch);
} else {
if((state_val_33967 === (11))){
var inst_33943 = (state_33966[(7)]);
var inst_33953 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33966__$1,(8),inst_33953,inst_33943);
} else {
if((state_val_33967 === (9))){
var state_33966__$1 = state_33966;
var statearr_33979_35631 = state_33966__$1;
(statearr_33979_35631[(2)] = tc);

(statearr_33979_35631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (5))){
var inst_33946 = cljs.core.async.close_BANG_(tc);
var inst_33947 = cljs.core.async.close_BANG_(fc);
var state_33966__$1 = (function (){var statearr_33980 = state_33966;
(statearr_33980[(8)] = inst_33946);

return statearr_33980;
})();
var statearr_33981_35632 = state_33966__$1;
(statearr_33981_35632[(2)] = inst_33947);

(statearr_33981_35632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (14))){
var inst_33960 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
var statearr_33982_35633 = state_33966__$1;
(statearr_33982_35633[(2)] = inst_33960);

(statearr_33982_35633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (10))){
var state_33966__$1 = state_33966;
var statearr_33983_35635 = state_33966__$1;
(statearr_33983_35635[(2)] = fc);

(statearr_33983_35635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (8))){
var inst_33955 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
if(cljs.core.truth_(inst_33955)){
var statearr_33984_35639 = state_33966__$1;
(statearr_33984_35639[(1)] = (12));

} else {
var statearr_33985_35640 = state_33966__$1;
(statearr_33985_35640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_33986 = [null,null,null,null,null,null,null,null,null];
(statearr_33986[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_33986[(1)] = (1));

return statearr_33986;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_33966){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_33966);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e33987){var ex__33221__auto__ = e33987;
var statearr_33988_35641 = state_33966;
(statearr_33988_35641[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_33966[(4)]))){
var statearr_33989_35644 = state_33966;
(statearr_33989_35644[(1)] = cljs.core.first((state_33966[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35647 = state_33966;
state_33966 = G__35647;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_33966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_33966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_33990 = f__33338__auto__();
(statearr_33990[(6)] = c__33337__auto___35615);

return statearr_33990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34012){
var state_val_34013 = (state_34012[(1)]);
if((state_val_34013 === (7))){
var inst_34008 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34018_35651 = state_34012__$1;
(statearr_34018_35651[(2)] = inst_34008);

(statearr_34018_35651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (1))){
var inst_33991 = init;
var inst_33992 = inst_33991;
var state_34012__$1 = (function (){var statearr_34019 = state_34012;
(statearr_34019[(7)] = inst_33992);

return statearr_34019;
})();
var statearr_34020_35656 = state_34012__$1;
(statearr_34020_35656[(2)] = null);

(statearr_34020_35656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (4))){
var inst_33995 = (state_34012[(8)]);
var inst_33995__$1 = (state_34012[(2)]);
var inst_33996 = (inst_33995__$1 == null);
var state_34012__$1 = (function (){var statearr_34021 = state_34012;
(statearr_34021[(8)] = inst_33995__$1);

return statearr_34021;
})();
if(cljs.core.truth_(inst_33996)){
var statearr_34022_35657 = state_34012__$1;
(statearr_34022_35657[(1)] = (5));

} else {
var statearr_34023_35658 = state_34012__$1;
(statearr_34023_35658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (6))){
var inst_33999 = (state_34012[(9)]);
var inst_33995 = (state_34012[(8)]);
var inst_33992 = (state_34012[(7)]);
var inst_33999__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33992,inst_33995) : f.call(null,inst_33992,inst_33995));
var inst_34000 = cljs.core.reduced_QMARK_(inst_33999__$1);
var state_34012__$1 = (function (){var statearr_34024 = state_34012;
(statearr_34024[(9)] = inst_33999__$1);

return statearr_34024;
})();
if(inst_34000){
var statearr_34025_35665 = state_34012__$1;
(statearr_34025_35665[(1)] = (8));

} else {
var statearr_34026_35666 = state_34012__$1;
(statearr_34026_35666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (3))){
var inst_34010 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34012__$1,inst_34010);
} else {
if((state_val_34013 === (2))){
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34012__$1,(4),ch);
} else {
if((state_val_34013 === (9))){
var inst_33999 = (state_34012[(9)]);
var inst_33992 = inst_33999;
var state_34012__$1 = (function (){var statearr_34027 = state_34012;
(statearr_34027[(7)] = inst_33992);

return statearr_34027;
})();
var statearr_34028_35669 = state_34012__$1;
(statearr_34028_35669[(2)] = null);

(statearr_34028_35669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (5))){
var inst_33992 = (state_34012[(7)]);
var state_34012__$1 = state_34012;
var statearr_34029_35672 = state_34012__$1;
(statearr_34029_35672[(2)] = inst_33992);

(statearr_34029_35672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (10))){
var inst_34006 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34030_35673 = state_34012__$1;
(statearr_34030_35673[(2)] = inst_34006);

(statearr_34030_35673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (8))){
var inst_33999 = (state_34012[(9)]);
var inst_34002 = cljs.core.deref(inst_33999);
var state_34012__$1 = state_34012;
var statearr_34031_35674 = state_34012__$1;
(statearr_34031_35674[(2)] = inst_34002);

(statearr_34031_35674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33218__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33218__auto____0 = (function (){
var statearr_34032 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34032[(0)] = cljs$core$async$reduce_$_state_machine__33218__auto__);

(statearr_34032[(1)] = (1));

return statearr_34032;
});
var cljs$core$async$reduce_$_state_machine__33218__auto____1 = (function (state_34012){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34012);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e34033){var ex__33221__auto__ = e34033;
var statearr_34034_35675 = state_34012;
(statearr_34034_35675[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34012[(4)]))){
var statearr_34035_35676 = state_34012;
(statearr_34035_35676[(1)] = cljs.core.first((state_34012[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35679 = state_34012;
state_34012 = G__35679;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33218__auto__ = function(state_34012){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33218__auto____1.call(this,state_34012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33218__auto____0;
cljs$core$async$reduce_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33218__auto____1;
return cljs$core$async$reduce_$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_34036 = f__33338__auto__();
(statearr_34036[(6)] = c__33337__auto__);

return statearr_34036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));

return c__33337__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34046){
var state_val_34047 = (state_34046[(1)]);
if((state_val_34047 === (1))){
var inst_34041 = cljs.core.async.reduce(f__$1,init,ch);
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34046__$1,(2),inst_34041);
} else {
if((state_val_34047 === (2))){
var inst_34043 = (state_34046[(2)]);
var inst_34044 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34043) : f__$1.call(null,inst_34043));
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34046__$1,inst_34044);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33218__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33218__auto____0 = (function (){
var statearr_34048 = [null,null,null,null,null,null,null];
(statearr_34048[(0)] = cljs$core$async$transduce_$_state_machine__33218__auto__);

(statearr_34048[(1)] = (1));

return statearr_34048;
});
var cljs$core$async$transduce_$_state_machine__33218__auto____1 = (function (state_34046){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34046);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e34049){var ex__33221__auto__ = e34049;
var statearr_34050_35690 = state_34046;
(statearr_34050_35690[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34046[(4)]))){
var statearr_34051_35691 = state_34046;
(statearr_34051_35691[(1)] = cljs.core.first((state_34046[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35692 = state_34046;
state_34046 = G__35692;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33218__auto__ = function(state_34046){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33218__auto____1.call(this,state_34046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33218__auto____0;
cljs$core$async$transduce_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33218__auto____1;
return cljs$core$async$transduce_$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_34052 = f__33338__auto__();
(statearr_34052[(6)] = c__33337__auto__);

return statearr_34052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));

return c__33337__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34058 = arguments.length;
switch (G__34058) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34083){
var state_val_34084 = (state_34083[(1)]);
if((state_val_34084 === (7))){
var inst_34065 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34085_35703 = state_34083__$1;
(statearr_34085_35703[(2)] = inst_34065);

(statearr_34085_35703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (1))){
var inst_34059 = cljs.core.seq(coll);
var inst_34060 = inst_34059;
var state_34083__$1 = (function (){var statearr_34086 = state_34083;
(statearr_34086[(7)] = inst_34060);

return statearr_34086;
})();
var statearr_34087_35704 = state_34083__$1;
(statearr_34087_35704[(2)] = null);

(statearr_34087_35704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (4))){
var inst_34060 = (state_34083[(7)]);
var inst_34063 = cljs.core.first(inst_34060);
var state_34083__$1 = state_34083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34083__$1,(7),ch,inst_34063);
} else {
if((state_val_34084 === (13))){
var inst_34077 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34088_35706 = state_34083__$1;
(statearr_34088_35706[(2)] = inst_34077);

(statearr_34088_35706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (6))){
var inst_34068 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
if(cljs.core.truth_(inst_34068)){
var statearr_34089_35707 = state_34083__$1;
(statearr_34089_35707[(1)] = (8));

} else {
var statearr_34090_35708 = state_34083__$1;
(statearr_34090_35708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (3))){
var inst_34081 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34083__$1,inst_34081);
} else {
if((state_val_34084 === (12))){
var state_34083__$1 = state_34083;
var statearr_34091_35712 = state_34083__$1;
(statearr_34091_35712[(2)] = null);

(statearr_34091_35712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (2))){
var inst_34060 = (state_34083[(7)]);
var state_34083__$1 = state_34083;
if(cljs.core.truth_(inst_34060)){
var statearr_34092_35719 = state_34083__$1;
(statearr_34092_35719[(1)] = (4));

} else {
var statearr_34093_35720 = state_34083__$1;
(statearr_34093_35720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (11))){
var inst_34074 = cljs.core.async.close_BANG_(ch);
var state_34083__$1 = state_34083;
var statearr_34094_35724 = state_34083__$1;
(statearr_34094_35724[(2)] = inst_34074);

(statearr_34094_35724[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (9))){
var state_34083__$1 = state_34083;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34095_35725 = state_34083__$1;
(statearr_34095_35725[(1)] = (11));

} else {
var statearr_34096_35727 = state_34083__$1;
(statearr_34096_35727[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (5))){
var inst_34060 = (state_34083[(7)]);
var state_34083__$1 = state_34083;
var statearr_34097_35730 = state_34083__$1;
(statearr_34097_35730[(2)] = inst_34060);

(statearr_34097_35730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (10))){
var inst_34079 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34098_35731 = state_34083__$1;
(statearr_34098_35731[(2)] = inst_34079);

(statearr_34098_35731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (8))){
var inst_34060 = (state_34083[(7)]);
var inst_34070 = cljs.core.next(inst_34060);
var inst_34060__$1 = inst_34070;
var state_34083__$1 = (function (){var statearr_34099 = state_34083;
(statearr_34099[(7)] = inst_34060__$1);

return statearr_34099;
})();
var statearr_34100_35732 = state_34083__$1;
(statearr_34100_35732[(2)] = null);

(statearr_34100_35732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_34101 = [null,null,null,null,null,null,null,null];
(statearr_34101[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_34101[(1)] = (1));

return statearr_34101;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_34083){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34083);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e34102){var ex__33221__auto__ = e34102;
var statearr_34103_35733 = state_34083;
(statearr_34103_35733[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34083[(4)]))){
var statearr_34104_35734 = state_34083;
(statearr_34104_35734[(1)] = cljs.core.first((state_34083[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35735 = state_34083;
state_34083 = G__35735;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_34083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_34083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_34105 = f__33338__auto__();
(statearr_34105[(6)] = c__33337__auto__);

return statearr_34105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));

return c__33337__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34109 = arguments.length;
switch (G__34109) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35738 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35738(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35740 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35740(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35749 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35749(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35753 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35753(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34130 = (function (ch,cs,meta34131){
this.ch = ch;
this.cs = cs;
this.meta34131 = meta34131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34132,meta34131__$1){
var self__ = this;
var _34132__$1 = this;
return (new cljs.core.async.t_cljs$core$async34130(self__.ch,self__.cs,meta34131__$1));
}));

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34132){
var self__ = this;
var _34132__$1 = this;
return self__.meta34131;
}));

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34131","meta34131",-1368441011,null)], null);
}));

(cljs.core.async.t_cljs$core$async34130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34130");

(cljs.core.async.t_cljs$core$async34130.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34130.
 */
cljs.core.async.__GT_t_cljs$core$async34130 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34130(ch__$1,cs__$1,meta34131){
return (new cljs.core.async.t_cljs$core$async34130(ch__$1,cs__$1,meta34131));
});

}

return (new cljs.core.async.t_cljs$core$async34130(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33337__auto___35762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34268){
var state_val_34269 = (state_34268[(1)]);
if((state_val_34269 === (7))){
var inst_34264 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34270_35767 = state_34268__$1;
(statearr_34270_35767[(2)] = inst_34264);

(statearr_34270_35767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (20))){
var inst_34169 = (state_34268[(7)]);
var inst_34181 = cljs.core.first(inst_34169);
var inst_34182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34181,(0),null);
var inst_34183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34181,(1),null);
var state_34268__$1 = (function (){var statearr_34271 = state_34268;
(statearr_34271[(8)] = inst_34182);

return statearr_34271;
})();
if(cljs.core.truth_(inst_34183)){
var statearr_34272_35769 = state_34268__$1;
(statearr_34272_35769[(1)] = (22));

} else {
var statearr_34273_35770 = state_34268__$1;
(statearr_34273_35770[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (27))){
var inst_34211 = (state_34268[(9)]);
var inst_34218 = (state_34268[(10)]);
var inst_34213 = (state_34268[(11)]);
var inst_34138 = (state_34268[(12)]);
var inst_34218__$1 = cljs.core._nth(inst_34211,inst_34213);
var inst_34219 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34218__$1,inst_34138,done);
var state_34268__$1 = (function (){var statearr_34274 = state_34268;
(statearr_34274[(10)] = inst_34218__$1);

return statearr_34274;
})();
if(cljs.core.truth_(inst_34219)){
var statearr_34275_35774 = state_34268__$1;
(statearr_34275_35774[(1)] = (30));

} else {
var statearr_34276_35775 = state_34268__$1;
(statearr_34276_35775[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (1))){
var state_34268__$1 = state_34268;
var statearr_34277_35776 = state_34268__$1;
(statearr_34277_35776[(2)] = null);

(statearr_34277_35776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (24))){
var inst_34169 = (state_34268[(7)]);
var inst_34188 = (state_34268[(2)]);
var inst_34189 = cljs.core.next(inst_34169);
var inst_34147 = inst_34189;
var inst_34148 = null;
var inst_34149 = (0);
var inst_34150 = (0);
var state_34268__$1 = (function (){var statearr_34278 = state_34268;
(statearr_34278[(13)] = inst_34149);

(statearr_34278[(14)] = inst_34147);

(statearr_34278[(15)] = inst_34188);

(statearr_34278[(16)] = inst_34148);

(statearr_34278[(17)] = inst_34150);

return statearr_34278;
})();
var statearr_34279_35777 = state_34268__$1;
(statearr_34279_35777[(2)] = null);

(statearr_34279_35777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (39))){
var state_34268__$1 = state_34268;
var statearr_34284_35778 = state_34268__$1;
(statearr_34284_35778[(2)] = null);

(statearr_34284_35778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (4))){
var inst_34138 = (state_34268[(12)]);
var inst_34138__$1 = (state_34268[(2)]);
var inst_34139 = (inst_34138__$1 == null);
var state_34268__$1 = (function (){var statearr_34285 = state_34268;
(statearr_34285[(12)] = inst_34138__$1);

return statearr_34285;
})();
if(cljs.core.truth_(inst_34139)){
var statearr_34286_35779 = state_34268__$1;
(statearr_34286_35779[(1)] = (5));

} else {
var statearr_34287_35780 = state_34268__$1;
(statearr_34287_35780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (15))){
var inst_34149 = (state_34268[(13)]);
var inst_34147 = (state_34268[(14)]);
var inst_34148 = (state_34268[(16)]);
var inst_34150 = (state_34268[(17)]);
var inst_34165 = (state_34268[(2)]);
var inst_34166 = (inst_34150 + (1));
var tmp34280 = inst_34149;
var tmp34281 = inst_34147;
var tmp34282 = inst_34148;
var inst_34147__$1 = tmp34281;
var inst_34148__$1 = tmp34282;
var inst_34149__$1 = tmp34280;
var inst_34150__$1 = inst_34166;
var state_34268__$1 = (function (){var statearr_34288 = state_34268;
(statearr_34288[(18)] = inst_34165);

(statearr_34288[(13)] = inst_34149__$1);

(statearr_34288[(14)] = inst_34147__$1);

(statearr_34288[(16)] = inst_34148__$1);

(statearr_34288[(17)] = inst_34150__$1);

return statearr_34288;
})();
var statearr_34289_35785 = state_34268__$1;
(statearr_34289_35785[(2)] = null);

(statearr_34289_35785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (21))){
var inst_34192 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34293_35787 = state_34268__$1;
(statearr_34293_35787[(2)] = inst_34192);

(statearr_34293_35787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (31))){
var inst_34218 = (state_34268[(10)]);
var inst_34222 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34218);
var state_34268__$1 = state_34268;
var statearr_34294_35788 = state_34268__$1;
(statearr_34294_35788[(2)] = inst_34222);

(statearr_34294_35788[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (32))){
var inst_34210 = (state_34268[(19)]);
var inst_34211 = (state_34268[(9)]);
var inst_34213 = (state_34268[(11)]);
var inst_34212 = (state_34268[(20)]);
var inst_34224 = (state_34268[(2)]);
var inst_34225 = (inst_34213 + (1));
var tmp34290 = inst_34210;
var tmp34291 = inst_34211;
var tmp34292 = inst_34212;
var inst_34210__$1 = tmp34290;
var inst_34211__$1 = tmp34291;
var inst_34212__$1 = tmp34292;
var inst_34213__$1 = inst_34225;
var state_34268__$1 = (function (){var statearr_34295 = state_34268;
(statearr_34295[(19)] = inst_34210__$1);

(statearr_34295[(9)] = inst_34211__$1);

(statearr_34295[(11)] = inst_34213__$1);

(statearr_34295[(21)] = inst_34224);

(statearr_34295[(20)] = inst_34212__$1);

return statearr_34295;
})();
var statearr_34296_35792 = state_34268__$1;
(statearr_34296_35792[(2)] = null);

(statearr_34296_35792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (40))){
var inst_34237 = (state_34268[(22)]);
var inst_34241 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34237);
var state_34268__$1 = state_34268;
var statearr_34297_35793 = state_34268__$1;
(statearr_34297_35793[(2)] = inst_34241);

(statearr_34297_35793[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (33))){
var inst_34228 = (state_34268[(23)]);
var inst_34230 = cljs.core.chunked_seq_QMARK_(inst_34228);
var state_34268__$1 = state_34268;
if(inst_34230){
var statearr_34302_35797 = state_34268__$1;
(statearr_34302_35797[(1)] = (36));

} else {
var statearr_34305_35798 = state_34268__$1;
(statearr_34305_35798[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (13))){
var inst_34159 = (state_34268[(24)]);
var inst_34162 = cljs.core.async.close_BANG_(inst_34159);
var state_34268__$1 = state_34268;
var statearr_34313_35799 = state_34268__$1;
(statearr_34313_35799[(2)] = inst_34162);

(statearr_34313_35799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (22))){
var inst_34182 = (state_34268[(8)]);
var inst_34185 = cljs.core.async.close_BANG_(inst_34182);
var state_34268__$1 = state_34268;
var statearr_34324_35800 = state_34268__$1;
(statearr_34324_35800[(2)] = inst_34185);

(statearr_34324_35800[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (36))){
var inst_34228 = (state_34268[(23)]);
var inst_34232 = cljs.core.chunk_first(inst_34228);
var inst_34233 = cljs.core.chunk_rest(inst_34228);
var inst_34234 = cljs.core.count(inst_34232);
var inst_34210 = inst_34233;
var inst_34211 = inst_34232;
var inst_34212 = inst_34234;
var inst_34213 = (0);
var state_34268__$1 = (function (){var statearr_34325 = state_34268;
(statearr_34325[(19)] = inst_34210);

(statearr_34325[(9)] = inst_34211);

(statearr_34325[(11)] = inst_34213);

(statearr_34325[(20)] = inst_34212);

return statearr_34325;
})();
var statearr_34326_35806 = state_34268__$1;
(statearr_34326_35806[(2)] = null);

(statearr_34326_35806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (41))){
var inst_34228 = (state_34268[(23)]);
var inst_34243 = (state_34268[(2)]);
var inst_34244 = cljs.core.next(inst_34228);
var inst_34210 = inst_34244;
var inst_34211 = null;
var inst_34212 = (0);
var inst_34213 = (0);
var state_34268__$1 = (function (){var statearr_34327 = state_34268;
(statearr_34327[(19)] = inst_34210);

(statearr_34327[(9)] = inst_34211);

(statearr_34327[(11)] = inst_34213);

(statearr_34327[(25)] = inst_34243);

(statearr_34327[(20)] = inst_34212);

return statearr_34327;
})();
var statearr_34328_35807 = state_34268__$1;
(statearr_34328_35807[(2)] = null);

(statearr_34328_35807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (43))){
var state_34268__$1 = state_34268;
var statearr_34329_35808 = state_34268__$1;
(statearr_34329_35808[(2)] = null);

(statearr_34329_35808[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (29))){
var inst_34252 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34330_35809 = state_34268__$1;
(statearr_34330_35809[(2)] = inst_34252);

(statearr_34330_35809[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (44))){
var inst_34261 = (state_34268[(2)]);
var state_34268__$1 = (function (){var statearr_34331 = state_34268;
(statearr_34331[(26)] = inst_34261);

return statearr_34331;
})();
var statearr_34332_35810 = state_34268__$1;
(statearr_34332_35810[(2)] = null);

(statearr_34332_35810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (6))){
var inst_34202 = (state_34268[(27)]);
var inst_34201 = cljs.core.deref(cs);
var inst_34202__$1 = cljs.core.keys(inst_34201);
var inst_34203 = cljs.core.count(inst_34202__$1);
var inst_34204 = cljs.core.reset_BANG_(dctr,inst_34203);
var inst_34209 = cljs.core.seq(inst_34202__$1);
var inst_34210 = inst_34209;
var inst_34211 = null;
var inst_34212 = (0);
var inst_34213 = (0);
var state_34268__$1 = (function (){var statearr_34334 = state_34268;
(statearr_34334[(19)] = inst_34210);

(statearr_34334[(9)] = inst_34211);

(statearr_34334[(27)] = inst_34202__$1);

(statearr_34334[(11)] = inst_34213);

(statearr_34334[(28)] = inst_34204);

(statearr_34334[(20)] = inst_34212);

return statearr_34334;
})();
var statearr_34335_35812 = state_34268__$1;
(statearr_34335_35812[(2)] = null);

(statearr_34335_35812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (28))){
var inst_34210 = (state_34268[(19)]);
var inst_34228 = (state_34268[(23)]);
var inst_34228__$1 = cljs.core.seq(inst_34210);
var state_34268__$1 = (function (){var statearr_34336 = state_34268;
(statearr_34336[(23)] = inst_34228__$1);

return statearr_34336;
})();
if(inst_34228__$1){
var statearr_34337_35813 = state_34268__$1;
(statearr_34337_35813[(1)] = (33));

} else {
var statearr_34338_35814 = state_34268__$1;
(statearr_34338_35814[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (25))){
var inst_34213 = (state_34268[(11)]);
var inst_34212 = (state_34268[(20)]);
var inst_34215 = (inst_34213 < inst_34212);
var inst_34216 = inst_34215;
var state_34268__$1 = state_34268;
if(cljs.core.truth_(inst_34216)){
var statearr_34339_35819 = state_34268__$1;
(statearr_34339_35819[(1)] = (27));

} else {
var statearr_34340_35820 = state_34268__$1;
(statearr_34340_35820[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (34))){
var state_34268__$1 = state_34268;
var statearr_34343_35821 = state_34268__$1;
(statearr_34343_35821[(2)] = null);

(statearr_34343_35821[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (17))){
var state_34268__$1 = state_34268;
var statearr_34344_35822 = state_34268__$1;
(statearr_34344_35822[(2)] = null);

(statearr_34344_35822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (3))){
var inst_34266 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34268__$1,inst_34266);
} else {
if((state_val_34269 === (12))){
var inst_34197 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34345_35824 = state_34268__$1;
(statearr_34345_35824[(2)] = inst_34197);

(statearr_34345_35824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (2))){
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34268__$1,(4),ch);
} else {
if((state_val_34269 === (23))){
var state_34268__$1 = state_34268;
var statearr_34346_35827 = state_34268__$1;
(statearr_34346_35827[(2)] = null);

(statearr_34346_35827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (35))){
var inst_34250 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34347_35828 = state_34268__$1;
(statearr_34347_35828[(2)] = inst_34250);

(statearr_34347_35828[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (19))){
var inst_34169 = (state_34268[(7)]);
var inst_34173 = cljs.core.chunk_first(inst_34169);
var inst_34174 = cljs.core.chunk_rest(inst_34169);
var inst_34175 = cljs.core.count(inst_34173);
var inst_34147 = inst_34174;
var inst_34148 = inst_34173;
var inst_34149 = inst_34175;
var inst_34150 = (0);
var state_34268__$1 = (function (){var statearr_34348 = state_34268;
(statearr_34348[(13)] = inst_34149);

(statearr_34348[(14)] = inst_34147);

(statearr_34348[(16)] = inst_34148);

(statearr_34348[(17)] = inst_34150);

return statearr_34348;
})();
var statearr_34349_35829 = state_34268__$1;
(statearr_34349_35829[(2)] = null);

(statearr_34349_35829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (11))){
var inst_34147 = (state_34268[(14)]);
var inst_34169 = (state_34268[(7)]);
var inst_34169__$1 = cljs.core.seq(inst_34147);
var state_34268__$1 = (function (){var statearr_34350 = state_34268;
(statearr_34350[(7)] = inst_34169__$1);

return statearr_34350;
})();
if(inst_34169__$1){
var statearr_34351_35830 = state_34268__$1;
(statearr_34351_35830[(1)] = (16));

} else {
var statearr_34352_35831 = state_34268__$1;
(statearr_34352_35831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (9))){
var inst_34199 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34358_35836 = state_34268__$1;
(statearr_34358_35836[(2)] = inst_34199);

(statearr_34358_35836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (5))){
var inst_34145 = cljs.core.deref(cs);
var inst_34146 = cljs.core.seq(inst_34145);
var inst_34147 = inst_34146;
var inst_34148 = null;
var inst_34149 = (0);
var inst_34150 = (0);
var state_34268__$1 = (function (){var statearr_34370 = state_34268;
(statearr_34370[(13)] = inst_34149);

(statearr_34370[(14)] = inst_34147);

(statearr_34370[(16)] = inst_34148);

(statearr_34370[(17)] = inst_34150);

return statearr_34370;
})();
var statearr_34376_35840 = state_34268__$1;
(statearr_34376_35840[(2)] = null);

(statearr_34376_35840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (14))){
var state_34268__$1 = state_34268;
var statearr_34377_35841 = state_34268__$1;
(statearr_34377_35841[(2)] = null);

(statearr_34377_35841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (45))){
var inst_34258 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34378_35845 = state_34268__$1;
(statearr_34378_35845[(2)] = inst_34258);

(statearr_34378_35845[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (26))){
var inst_34202 = (state_34268[(27)]);
var inst_34254 = (state_34268[(2)]);
var inst_34255 = cljs.core.seq(inst_34202);
var state_34268__$1 = (function (){var statearr_34379 = state_34268;
(statearr_34379[(29)] = inst_34254);

return statearr_34379;
})();
if(inst_34255){
var statearr_34380_35849 = state_34268__$1;
(statearr_34380_35849[(1)] = (42));

} else {
var statearr_34381_35850 = state_34268__$1;
(statearr_34381_35850[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (16))){
var inst_34169 = (state_34268[(7)]);
var inst_34171 = cljs.core.chunked_seq_QMARK_(inst_34169);
var state_34268__$1 = state_34268;
if(inst_34171){
var statearr_34387_35851 = state_34268__$1;
(statearr_34387_35851[(1)] = (19));

} else {
var statearr_34392_35852 = state_34268__$1;
(statearr_34392_35852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (38))){
var inst_34247 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34396_35853 = state_34268__$1;
(statearr_34396_35853[(2)] = inst_34247);

(statearr_34396_35853[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (30))){
var state_34268__$1 = state_34268;
var statearr_34406_35857 = state_34268__$1;
(statearr_34406_35857[(2)] = null);

(statearr_34406_35857[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (10))){
var inst_34148 = (state_34268[(16)]);
var inst_34150 = (state_34268[(17)]);
var inst_34158 = cljs.core._nth(inst_34148,inst_34150);
var inst_34159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34158,(0),null);
var inst_34160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34158,(1),null);
var state_34268__$1 = (function (){var statearr_34407 = state_34268;
(statearr_34407[(24)] = inst_34159);

return statearr_34407;
})();
if(cljs.core.truth_(inst_34160)){
var statearr_34408_35858 = state_34268__$1;
(statearr_34408_35858[(1)] = (13));

} else {
var statearr_34409_35860 = state_34268__$1;
(statearr_34409_35860[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (18))){
var inst_34195 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34415_35864 = state_34268__$1;
(statearr_34415_35864[(2)] = inst_34195);

(statearr_34415_35864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (42))){
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34268__$1,(45),dchan);
} else {
if((state_val_34269 === (37))){
var inst_34138 = (state_34268[(12)]);
var inst_34237 = (state_34268[(22)]);
var inst_34228 = (state_34268[(23)]);
var inst_34237__$1 = cljs.core.first(inst_34228);
var inst_34238 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34237__$1,inst_34138,done);
var state_34268__$1 = (function (){var statearr_34428 = state_34268;
(statearr_34428[(22)] = inst_34237__$1);

return statearr_34428;
})();
if(cljs.core.truth_(inst_34238)){
var statearr_34433_35865 = state_34268__$1;
(statearr_34433_35865[(1)] = (39));

} else {
var statearr_34434_35866 = state_34268__$1;
(statearr_34434_35866[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (8))){
var inst_34149 = (state_34268[(13)]);
var inst_34150 = (state_34268[(17)]);
var inst_34152 = (inst_34150 < inst_34149);
var inst_34153 = inst_34152;
var state_34268__$1 = state_34268;
if(cljs.core.truth_(inst_34153)){
var statearr_34435_35870 = state_34268__$1;
(statearr_34435_35870[(1)] = (10));

} else {
var statearr_34436_35871 = state_34268__$1;
(statearr_34436_35871[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33218__auto__ = null;
var cljs$core$async$mult_$_state_machine__33218__auto____0 = (function (){
var statearr_34437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34437[(0)] = cljs$core$async$mult_$_state_machine__33218__auto__);

(statearr_34437[(1)] = (1));

return statearr_34437;
});
var cljs$core$async$mult_$_state_machine__33218__auto____1 = (function (state_34268){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34268);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e34438){var ex__33221__auto__ = e34438;
var statearr_34439_35876 = state_34268;
(statearr_34439_35876[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34268[(4)]))){
var statearr_34440_35878 = state_34268;
(statearr_34440_35878[(1)] = cljs.core.first((state_34268[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35880 = state_34268;
state_34268 = G__35880;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33218__auto__ = function(state_34268){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33218__auto____1.call(this,state_34268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33218__auto____0;
cljs$core$async$mult_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33218__auto____1;
return cljs$core$async$mult_$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_34441 = f__33338__auto__();
(statearr_34441[(6)] = c__33337__auto___35762);

return statearr_34441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34443 = arguments.length;
switch (G__34443) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35883 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35883(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35884 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35884(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35888 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35888(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35889 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35889(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35893 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35893(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35901 = arguments.length;
var i__4737__auto___35903 = (0);
while(true){
if((i__4737__auto___35903 < len__4736__auto___35901)){
args__4742__auto__.push((arguments[i__4737__auto___35903]));

var G__35905 = (i__4737__auto___35903 + (1));
i__4737__auto___35903 = G__35905;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34462){
var map__34463 = p__34462;
var map__34463__$1 = (((((!((map__34463 == null))))?(((((map__34463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34463):map__34463);
var opts = map__34463__$1;
var statearr_34465_35906 = state;
(statearr_34465_35906[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34466_35907 = state;
(statearr_34466_35907[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34467_35908 = state;
(statearr_34467_35908[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34458){
var G__34459 = cljs.core.first(seq34458);
var seq34458__$1 = cljs.core.next(seq34458);
var G__34460 = cljs.core.first(seq34458__$1);
var seq34458__$2 = cljs.core.next(seq34458__$1);
var G__34461 = cljs.core.first(seq34458__$2);
var seq34458__$3 = cljs.core.next(seq34458__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34459,G__34460,G__34461,seq34458__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34468 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34469){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34469 = meta34469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34470,meta34469__$1){
var self__ = this;
var _34470__$1 = this;
return (new cljs.core.async.t_cljs$core$async34468(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34469__$1));
}));

(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34470){
var self__ = this;
var _34470__$1 = this;
return self__.meta34469;
}));

(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34468.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34469","meta34469",1811922290,null)], null);
}));

(cljs.core.async.t_cljs$core$async34468.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34468");

(cljs.core.async.t_cljs$core$async34468.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34468");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34468.
 */
cljs.core.async.__GT_t_cljs$core$async34468 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34468(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34469){
return (new cljs.core.async.t_cljs$core$async34468(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34469));
});

}

return (new cljs.core.async.t_cljs$core$async34468(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33337__auto___35938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34572){
var state_val_34573 = (state_34572[(1)]);
if((state_val_34573 === (7))){
var inst_34487 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
var statearr_34574_35939 = state_34572__$1;
(statearr_34574_35939[(2)] = inst_34487);

(statearr_34574_35939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (20))){
var inst_34499 = (state_34572[(7)]);
var state_34572__$1 = state_34572;
var statearr_34575_35940 = state_34572__$1;
(statearr_34575_35940[(2)] = inst_34499);

(statearr_34575_35940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (27))){
var state_34572__$1 = state_34572;
var statearr_34576_35942 = state_34572__$1;
(statearr_34576_35942[(2)] = null);

(statearr_34576_35942[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (1))){
var inst_34474 = (state_34572[(8)]);
var inst_34474__$1 = calc_state();
var inst_34476 = (inst_34474__$1 == null);
var inst_34477 = cljs.core.not(inst_34476);
var state_34572__$1 = (function (){var statearr_34577 = state_34572;
(statearr_34577[(8)] = inst_34474__$1);

return statearr_34577;
})();
if(inst_34477){
var statearr_34578_35943 = state_34572__$1;
(statearr_34578_35943[(1)] = (2));

} else {
var statearr_34579_35946 = state_34572__$1;
(statearr_34579_35946[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (24))){
var inst_34523 = (state_34572[(9)]);
var inst_34546 = (state_34572[(10)]);
var inst_34532 = (state_34572[(11)]);
var inst_34546__$1 = (inst_34523.cljs$core$IFn$_invoke$arity$1 ? inst_34523.cljs$core$IFn$_invoke$arity$1(inst_34532) : inst_34523.call(null,inst_34532));
var state_34572__$1 = (function (){var statearr_34580 = state_34572;
(statearr_34580[(10)] = inst_34546__$1);

return statearr_34580;
})();
if(cljs.core.truth_(inst_34546__$1)){
var statearr_34581_35954 = state_34572__$1;
(statearr_34581_35954[(1)] = (29));

} else {
var statearr_34582_35955 = state_34572__$1;
(statearr_34582_35955[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (4))){
var inst_34490 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
if(cljs.core.truth_(inst_34490)){
var statearr_34583_35956 = state_34572__$1;
(statearr_34583_35956[(1)] = (8));

} else {
var statearr_34584_35957 = state_34572__$1;
(statearr_34584_35957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (15))){
var inst_34517 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
if(cljs.core.truth_(inst_34517)){
var statearr_34585_35958 = state_34572__$1;
(statearr_34585_35958[(1)] = (19));

} else {
var statearr_34586_35961 = state_34572__$1;
(statearr_34586_35961[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (21))){
var inst_34522 = (state_34572[(12)]);
var inst_34522__$1 = (state_34572[(2)]);
var inst_34523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34522__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34522__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34522__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34572__$1 = (function (){var statearr_34587 = state_34572;
(statearr_34587[(13)] = inst_34524);

(statearr_34587[(9)] = inst_34523);

(statearr_34587[(12)] = inst_34522__$1);

return statearr_34587;
})();
return cljs.core.async.ioc_alts_BANG_(state_34572__$1,(22),inst_34525);
} else {
if((state_val_34573 === (31))){
var inst_34554 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
if(cljs.core.truth_(inst_34554)){
var statearr_34588_35963 = state_34572__$1;
(statearr_34588_35963[(1)] = (32));

} else {
var statearr_34589_35964 = state_34572__$1;
(statearr_34589_35964[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (32))){
var inst_34531 = (state_34572[(14)]);
var state_34572__$1 = state_34572;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34572__$1,(35),out,inst_34531);
} else {
if((state_val_34573 === (33))){
var inst_34522 = (state_34572[(12)]);
var inst_34499 = inst_34522;
var state_34572__$1 = (function (){var statearr_34590 = state_34572;
(statearr_34590[(7)] = inst_34499);

return statearr_34590;
})();
var statearr_34591_35965 = state_34572__$1;
(statearr_34591_35965[(2)] = null);

(statearr_34591_35965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (13))){
var inst_34499 = (state_34572[(7)]);
var inst_34506 = inst_34499.cljs$lang$protocol_mask$partition0$;
var inst_34507 = (inst_34506 & (64));
var inst_34508 = inst_34499.cljs$core$ISeq$;
var inst_34509 = (cljs.core.PROTOCOL_SENTINEL === inst_34508);
var inst_34510 = ((inst_34507) || (inst_34509));
var state_34572__$1 = state_34572;
if(cljs.core.truth_(inst_34510)){
var statearr_34592_35971 = state_34572__$1;
(statearr_34592_35971[(1)] = (16));

} else {
var statearr_34593_35972 = state_34572__$1;
(statearr_34593_35972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (22))){
var inst_34532 = (state_34572[(11)]);
var inst_34531 = (state_34572[(14)]);
var inst_34530 = (state_34572[(2)]);
var inst_34531__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34530,(0),null);
var inst_34532__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34530,(1),null);
var inst_34533 = (inst_34531__$1 == null);
var inst_34534 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34532__$1,change);
var inst_34535 = ((inst_34533) || (inst_34534));
var state_34572__$1 = (function (){var statearr_34594 = state_34572;
(statearr_34594[(11)] = inst_34532__$1);

(statearr_34594[(14)] = inst_34531__$1);

return statearr_34594;
})();
if(cljs.core.truth_(inst_34535)){
var statearr_34595_35973 = state_34572__$1;
(statearr_34595_35973[(1)] = (23));

} else {
var statearr_34596_35974 = state_34572__$1;
(statearr_34596_35974[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (36))){
var inst_34522 = (state_34572[(12)]);
var inst_34499 = inst_34522;
var state_34572__$1 = (function (){var statearr_34597 = state_34572;
(statearr_34597[(7)] = inst_34499);

return statearr_34597;
})();
var statearr_34598_35978 = state_34572__$1;
(statearr_34598_35978[(2)] = null);

(statearr_34598_35978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (29))){
var inst_34546 = (state_34572[(10)]);
var state_34572__$1 = state_34572;
var statearr_34599_35979 = state_34572__$1;
(statearr_34599_35979[(2)] = inst_34546);

(statearr_34599_35979[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (6))){
var state_34572__$1 = state_34572;
var statearr_34600_35980 = state_34572__$1;
(statearr_34600_35980[(2)] = false);

(statearr_34600_35980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (28))){
var inst_34542 = (state_34572[(2)]);
var inst_34543 = calc_state();
var inst_34499 = inst_34543;
var state_34572__$1 = (function (){var statearr_34601 = state_34572;
(statearr_34601[(15)] = inst_34542);

(statearr_34601[(7)] = inst_34499);

return statearr_34601;
})();
var statearr_34602_35986 = state_34572__$1;
(statearr_34602_35986[(2)] = null);

(statearr_34602_35986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (25))){
var inst_34568 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
var statearr_34603_35987 = state_34572__$1;
(statearr_34603_35987[(2)] = inst_34568);

(statearr_34603_35987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (34))){
var inst_34566 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
var statearr_34604_35988 = state_34572__$1;
(statearr_34604_35988[(2)] = inst_34566);

(statearr_34604_35988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (17))){
var state_34572__$1 = state_34572;
var statearr_34605_35989 = state_34572__$1;
(statearr_34605_35989[(2)] = false);

(statearr_34605_35989[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (3))){
var state_34572__$1 = state_34572;
var statearr_34606_35991 = state_34572__$1;
(statearr_34606_35991[(2)] = false);

(statearr_34606_35991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (12))){
var inst_34570 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34572__$1,inst_34570);
} else {
if((state_val_34573 === (2))){
var inst_34474 = (state_34572[(8)]);
var inst_34479 = inst_34474.cljs$lang$protocol_mask$partition0$;
var inst_34480 = (inst_34479 & (64));
var inst_34481 = inst_34474.cljs$core$ISeq$;
var inst_34482 = (cljs.core.PROTOCOL_SENTINEL === inst_34481);
var inst_34483 = ((inst_34480) || (inst_34482));
var state_34572__$1 = state_34572;
if(cljs.core.truth_(inst_34483)){
var statearr_34607_35995 = state_34572__$1;
(statearr_34607_35995[(1)] = (5));

} else {
var statearr_34608_35996 = state_34572__$1;
(statearr_34608_35996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (23))){
var inst_34531 = (state_34572[(14)]);
var inst_34537 = (inst_34531 == null);
var state_34572__$1 = state_34572;
if(cljs.core.truth_(inst_34537)){
var statearr_34609_36004 = state_34572__$1;
(statearr_34609_36004[(1)] = (26));

} else {
var statearr_34610_36005 = state_34572__$1;
(statearr_34610_36005[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (35))){
var inst_34557 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
if(cljs.core.truth_(inst_34557)){
var statearr_34611_36006 = state_34572__$1;
(statearr_34611_36006[(1)] = (36));

} else {
var statearr_34612_36007 = state_34572__$1;
(statearr_34612_36007[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (19))){
var inst_34499 = (state_34572[(7)]);
var inst_34519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34499);
var state_34572__$1 = state_34572;
var statearr_34613_36008 = state_34572__$1;
(statearr_34613_36008[(2)] = inst_34519);

(statearr_34613_36008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (11))){
var inst_34499 = (state_34572[(7)]);
var inst_34503 = (inst_34499 == null);
var inst_34504 = cljs.core.not(inst_34503);
var state_34572__$1 = state_34572;
if(inst_34504){
var statearr_34614_36009 = state_34572__$1;
(statearr_34614_36009[(1)] = (13));

} else {
var statearr_34615_36010 = state_34572__$1;
(statearr_34615_36010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (9))){
var inst_34474 = (state_34572[(8)]);
var state_34572__$1 = state_34572;
var statearr_34616_36011 = state_34572__$1;
(statearr_34616_36011[(2)] = inst_34474);

(statearr_34616_36011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (5))){
var state_34572__$1 = state_34572;
var statearr_34617_36012 = state_34572__$1;
(statearr_34617_36012[(2)] = true);

(statearr_34617_36012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (14))){
var state_34572__$1 = state_34572;
var statearr_34618_36014 = state_34572__$1;
(statearr_34618_36014[(2)] = false);

(statearr_34618_36014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (26))){
var inst_34532 = (state_34572[(11)]);
var inst_34539 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34532);
var state_34572__$1 = state_34572;
var statearr_34619_36015 = state_34572__$1;
(statearr_34619_36015[(2)] = inst_34539);

(statearr_34619_36015[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (16))){
var state_34572__$1 = state_34572;
var statearr_34620_36020 = state_34572__$1;
(statearr_34620_36020[(2)] = true);

(statearr_34620_36020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (38))){
var inst_34562 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
var statearr_34621_36022 = state_34572__$1;
(statearr_34621_36022[(2)] = inst_34562);

(statearr_34621_36022[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (30))){
var inst_34524 = (state_34572[(13)]);
var inst_34523 = (state_34572[(9)]);
var inst_34532 = (state_34572[(11)]);
var inst_34549 = cljs.core.empty_QMARK_(inst_34523);
var inst_34550 = (inst_34524.cljs$core$IFn$_invoke$arity$1 ? inst_34524.cljs$core$IFn$_invoke$arity$1(inst_34532) : inst_34524.call(null,inst_34532));
var inst_34551 = cljs.core.not(inst_34550);
var inst_34552 = ((inst_34549) && (inst_34551));
var state_34572__$1 = state_34572;
var statearr_34622_36024 = state_34572__$1;
(statearr_34622_36024[(2)] = inst_34552);

(statearr_34622_36024[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (10))){
var inst_34474 = (state_34572[(8)]);
var inst_34495 = (state_34572[(2)]);
var inst_34496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34495,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34495,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34495,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34499 = inst_34474;
var state_34572__$1 = (function (){var statearr_34623 = state_34572;
(statearr_34623[(7)] = inst_34499);

(statearr_34623[(16)] = inst_34498);

(statearr_34623[(17)] = inst_34497);

(statearr_34623[(18)] = inst_34496);

return statearr_34623;
})();
var statearr_34624_36025 = state_34572__$1;
(statearr_34624_36025[(2)] = null);

(statearr_34624_36025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (18))){
var inst_34514 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
var statearr_34625_36026 = state_34572__$1;
(statearr_34625_36026[(2)] = inst_34514);

(statearr_34625_36026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (37))){
var state_34572__$1 = state_34572;
var statearr_34626_36027 = state_34572__$1;
(statearr_34626_36027[(2)] = null);

(statearr_34626_36027[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (8))){
var inst_34474 = (state_34572[(8)]);
var inst_34492 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34474);
var state_34572__$1 = state_34572;
var statearr_34627_36028 = state_34572__$1;
(statearr_34627_36028[(2)] = inst_34492);

(statearr_34627_36028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33218__auto__ = null;
var cljs$core$async$mix_$_state_machine__33218__auto____0 = (function (){
var statearr_34628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34628[(0)] = cljs$core$async$mix_$_state_machine__33218__auto__);

(statearr_34628[(1)] = (1));

return statearr_34628;
});
var cljs$core$async$mix_$_state_machine__33218__auto____1 = (function (state_34572){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34572);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e34629){var ex__33221__auto__ = e34629;
var statearr_34630_36037 = state_34572;
(statearr_34630_36037[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34572[(4)]))){
var statearr_34631_36038 = state_34572;
(statearr_34631_36038[(1)] = cljs.core.first((state_34572[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36040 = state_34572;
state_34572 = G__36040;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33218__auto__ = function(state_34572){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33218__auto____1.call(this,state_34572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33218__auto____0;
cljs$core$async$mix_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33218__auto____1;
return cljs$core$async$mix_$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_34632 = f__33338__auto__();
(statearr_34632[(6)] = c__33337__auto___35938);

return statearr_34632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36044 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36044(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36048 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36048(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36051 = (function() {
var G__36052 = null;
var G__36052__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36052__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36052 = function(p,v){
switch(arguments.length){
case 1:
return G__36052__1.call(this,p);
case 2:
return G__36052__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36052.cljs$core$IFn$_invoke$arity$1 = G__36052__1;
G__36052.cljs$core$IFn$_invoke$arity$2 = G__36052__2;
return G__36052;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34634 = arguments.length;
switch (G__34634) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36051(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36051(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34637 = arguments.length;
switch (G__34637) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34635_SHARP_){
if(cljs.core.truth_((p1__34635_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34635_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34635_SHARP_.call(null,topic)))){
return p1__34635_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34635_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34641 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34642){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34642 = meta34642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34643,meta34642__$1){
var self__ = this;
var _34643__$1 = this;
return (new cljs.core.async.t_cljs$core$async34641(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34642__$1));
}));

(cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34643){
var self__ = this;
var _34643__$1 = this;
return self__.meta34642;
}));

(cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34642","meta34642",-427050733,null)], null);
}));

(cljs.core.async.t_cljs$core$async34641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34641");

(cljs.core.async.t_cljs$core$async34641.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34641.
 */
cljs.core.async.__GT_t_cljs$core$async34641 = (function cljs$core$async$__GT_t_cljs$core$async34641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34642){
return (new cljs.core.async.t_cljs$core$async34641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34642));
});

}

return (new cljs.core.async.t_cljs$core$async34641(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33337__auto___36088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34721){
var state_val_34722 = (state_34721[(1)]);
if((state_val_34722 === (7))){
var inst_34717 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34723_36090 = state_34721__$1;
(statearr_34723_36090[(2)] = inst_34717);

(statearr_34723_36090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (20))){
var state_34721__$1 = state_34721;
var statearr_34724_36092 = state_34721__$1;
(statearr_34724_36092[(2)] = null);

(statearr_34724_36092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (1))){
var state_34721__$1 = state_34721;
var statearr_34725_36093 = state_34721__$1;
(statearr_34725_36093[(2)] = null);

(statearr_34725_36093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (24))){
var inst_34700 = (state_34721[(7)]);
var inst_34709 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34700);
var state_34721__$1 = state_34721;
var statearr_34726_36094 = state_34721__$1;
(statearr_34726_36094[(2)] = inst_34709);

(statearr_34726_36094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (4))){
var inst_34650 = (state_34721[(8)]);
var inst_34650__$1 = (state_34721[(2)]);
var inst_34651 = (inst_34650__$1 == null);
var state_34721__$1 = (function (){var statearr_34727 = state_34721;
(statearr_34727[(8)] = inst_34650__$1);

return statearr_34727;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34728_36095 = state_34721__$1;
(statearr_34728_36095[(1)] = (5));

} else {
var statearr_34729_36096 = state_34721__$1;
(statearr_34729_36096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (15))){
var inst_34694 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34730_36097 = state_34721__$1;
(statearr_34730_36097[(2)] = inst_34694);

(statearr_34730_36097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (21))){
var inst_34714 = (state_34721[(2)]);
var state_34721__$1 = (function (){var statearr_34731 = state_34721;
(statearr_34731[(9)] = inst_34714);

return statearr_34731;
})();
var statearr_34732_36098 = state_34721__$1;
(statearr_34732_36098[(2)] = null);

(statearr_34732_36098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (13))){
var inst_34675 = (state_34721[(10)]);
var inst_34677 = cljs.core.chunked_seq_QMARK_(inst_34675);
var state_34721__$1 = state_34721;
if(inst_34677){
var statearr_34733_36099 = state_34721__$1;
(statearr_34733_36099[(1)] = (16));

} else {
var statearr_34734_36100 = state_34721__$1;
(statearr_34734_36100[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (22))){
var inst_34706 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
if(cljs.core.truth_(inst_34706)){
var statearr_34735_36101 = state_34721__$1;
(statearr_34735_36101[(1)] = (23));

} else {
var statearr_34736_36102 = state_34721__$1;
(statearr_34736_36102[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (6))){
var inst_34700 = (state_34721[(7)]);
var inst_34702 = (state_34721[(11)]);
var inst_34650 = (state_34721[(8)]);
var inst_34700__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34650) : topic_fn.call(null,inst_34650));
var inst_34701 = cljs.core.deref(mults);
var inst_34702__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34701,inst_34700__$1);
var state_34721__$1 = (function (){var statearr_34737 = state_34721;
(statearr_34737[(7)] = inst_34700__$1);

(statearr_34737[(11)] = inst_34702__$1);

return statearr_34737;
})();
if(cljs.core.truth_(inst_34702__$1)){
var statearr_34738_36103 = state_34721__$1;
(statearr_34738_36103[(1)] = (19));

} else {
var statearr_34739_36104 = state_34721__$1;
(statearr_34739_36104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (25))){
var inst_34711 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34740_36105 = state_34721__$1;
(statearr_34740_36105[(2)] = inst_34711);

(statearr_34740_36105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (17))){
var inst_34675 = (state_34721[(10)]);
var inst_34685 = cljs.core.first(inst_34675);
var inst_34686 = cljs.core.async.muxch_STAR_(inst_34685);
var inst_34687 = cljs.core.async.close_BANG_(inst_34686);
var inst_34688 = cljs.core.next(inst_34675);
var inst_34661 = inst_34688;
var inst_34662 = null;
var inst_34663 = (0);
var inst_34664 = (0);
var state_34721__$1 = (function (){var statearr_34741 = state_34721;
(statearr_34741[(12)] = inst_34663);

(statearr_34741[(13)] = inst_34664);

(statearr_34741[(14)] = inst_34687);

(statearr_34741[(15)] = inst_34661);

(statearr_34741[(16)] = inst_34662);

return statearr_34741;
})();
var statearr_34742_36106 = state_34721__$1;
(statearr_34742_36106[(2)] = null);

(statearr_34742_36106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (3))){
var inst_34719 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34721__$1,inst_34719);
} else {
if((state_val_34722 === (12))){
var inst_34696 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34743_36107 = state_34721__$1;
(statearr_34743_36107[(2)] = inst_34696);

(statearr_34743_36107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (2))){
var state_34721__$1 = state_34721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34721__$1,(4),ch);
} else {
if((state_val_34722 === (23))){
var state_34721__$1 = state_34721;
var statearr_34744_36108 = state_34721__$1;
(statearr_34744_36108[(2)] = null);

(statearr_34744_36108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (19))){
var inst_34702 = (state_34721[(11)]);
var inst_34650 = (state_34721[(8)]);
var inst_34704 = cljs.core.async.muxch_STAR_(inst_34702);
var state_34721__$1 = state_34721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34721__$1,(22),inst_34704,inst_34650);
} else {
if((state_val_34722 === (11))){
var inst_34675 = (state_34721[(10)]);
var inst_34661 = (state_34721[(15)]);
var inst_34675__$1 = cljs.core.seq(inst_34661);
var state_34721__$1 = (function (){var statearr_34745 = state_34721;
(statearr_34745[(10)] = inst_34675__$1);

return statearr_34745;
})();
if(inst_34675__$1){
var statearr_34746_36109 = state_34721__$1;
(statearr_34746_36109[(1)] = (13));

} else {
var statearr_34747_36110 = state_34721__$1;
(statearr_34747_36110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (9))){
var inst_34698 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34748_36115 = state_34721__$1;
(statearr_34748_36115[(2)] = inst_34698);

(statearr_34748_36115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (5))){
var inst_34658 = cljs.core.deref(mults);
var inst_34659 = cljs.core.vals(inst_34658);
var inst_34660 = cljs.core.seq(inst_34659);
var inst_34661 = inst_34660;
var inst_34662 = null;
var inst_34663 = (0);
var inst_34664 = (0);
var state_34721__$1 = (function (){var statearr_34749 = state_34721;
(statearr_34749[(12)] = inst_34663);

(statearr_34749[(13)] = inst_34664);

(statearr_34749[(15)] = inst_34661);

(statearr_34749[(16)] = inst_34662);

return statearr_34749;
})();
var statearr_34750_36120 = state_34721__$1;
(statearr_34750_36120[(2)] = null);

(statearr_34750_36120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (14))){
var state_34721__$1 = state_34721;
var statearr_34754_36121 = state_34721__$1;
(statearr_34754_36121[(2)] = null);

(statearr_34754_36121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (16))){
var inst_34675 = (state_34721[(10)]);
var inst_34680 = cljs.core.chunk_first(inst_34675);
var inst_34681 = cljs.core.chunk_rest(inst_34675);
var inst_34682 = cljs.core.count(inst_34680);
var inst_34661 = inst_34681;
var inst_34662 = inst_34680;
var inst_34663 = inst_34682;
var inst_34664 = (0);
var state_34721__$1 = (function (){var statearr_34755 = state_34721;
(statearr_34755[(12)] = inst_34663);

(statearr_34755[(13)] = inst_34664);

(statearr_34755[(15)] = inst_34661);

(statearr_34755[(16)] = inst_34662);

return statearr_34755;
})();
var statearr_34756_36129 = state_34721__$1;
(statearr_34756_36129[(2)] = null);

(statearr_34756_36129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (10))){
var inst_34663 = (state_34721[(12)]);
var inst_34664 = (state_34721[(13)]);
var inst_34661 = (state_34721[(15)]);
var inst_34662 = (state_34721[(16)]);
var inst_34669 = cljs.core._nth(inst_34662,inst_34664);
var inst_34670 = cljs.core.async.muxch_STAR_(inst_34669);
var inst_34671 = cljs.core.async.close_BANG_(inst_34670);
var inst_34672 = (inst_34664 + (1));
var tmp34751 = inst_34663;
var tmp34752 = inst_34661;
var tmp34753 = inst_34662;
var inst_34661__$1 = tmp34752;
var inst_34662__$1 = tmp34753;
var inst_34663__$1 = tmp34751;
var inst_34664__$1 = inst_34672;
var state_34721__$1 = (function (){var statearr_34757 = state_34721;
(statearr_34757[(17)] = inst_34671);

(statearr_34757[(12)] = inst_34663__$1);

(statearr_34757[(13)] = inst_34664__$1);

(statearr_34757[(15)] = inst_34661__$1);

(statearr_34757[(16)] = inst_34662__$1);

return statearr_34757;
})();
var statearr_34758_36130 = state_34721__$1;
(statearr_34758_36130[(2)] = null);

(statearr_34758_36130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (18))){
var inst_34691 = (state_34721[(2)]);
var state_34721__$1 = state_34721;
var statearr_34759_36131 = state_34721__$1;
(statearr_34759_36131[(2)] = inst_34691);

(statearr_34759_36131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (8))){
var inst_34663 = (state_34721[(12)]);
var inst_34664 = (state_34721[(13)]);
var inst_34666 = (inst_34664 < inst_34663);
var inst_34667 = inst_34666;
var state_34721__$1 = state_34721;
if(cljs.core.truth_(inst_34667)){
var statearr_34760_36132 = state_34721__$1;
(statearr_34760_36132[(1)] = (10));

} else {
var statearr_34761_36133 = state_34721__$1;
(statearr_34761_36133[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_34762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34762[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_34762[(1)] = (1));

return statearr_34762;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_34721){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34721);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e34763){var ex__33221__auto__ = e34763;
var statearr_34764_36137 = state_34721;
(statearr_34764_36137[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34721[(4)]))){
var statearr_34765_36138 = state_34721;
(statearr_34765_36138[(1)] = cljs.core.first((state_34721[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36143 = state_34721;
state_34721 = G__36143;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_34721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_34721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_34766 = f__33338__auto__();
(statearr_34766[(6)] = c__33337__auto___36088);

return statearr_34766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34768 = arguments.length;
switch (G__34768) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34770 = arguments.length;
switch (G__34770) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34772 = arguments.length;
switch (G__34772) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33337__auto___36156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34815){
var state_val_34816 = (state_34815[(1)]);
if((state_val_34816 === (7))){
var state_34815__$1 = state_34815;
var statearr_34817_36160 = state_34815__$1;
(statearr_34817_36160[(2)] = null);

(statearr_34817_36160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (1))){
var state_34815__$1 = state_34815;
var statearr_34818_36161 = state_34815__$1;
(statearr_34818_36161[(2)] = null);

(statearr_34818_36161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (4))){
var inst_34775 = (state_34815[(7)]);
var inst_34776 = (state_34815[(8)]);
var inst_34778 = (inst_34776 < inst_34775);
var state_34815__$1 = state_34815;
if(cljs.core.truth_(inst_34778)){
var statearr_34819_36162 = state_34815__$1;
(statearr_34819_36162[(1)] = (6));

} else {
var statearr_34820_36163 = state_34815__$1;
(statearr_34820_36163[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (15))){
var inst_34801 = (state_34815[(9)]);
var inst_34806 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34801);
var state_34815__$1 = state_34815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34815__$1,(17),out,inst_34806);
} else {
if((state_val_34816 === (13))){
var inst_34801 = (state_34815[(9)]);
var inst_34801__$1 = (state_34815[(2)]);
var inst_34802 = cljs.core.some(cljs.core.nil_QMARK_,inst_34801__$1);
var state_34815__$1 = (function (){var statearr_34822 = state_34815;
(statearr_34822[(9)] = inst_34801__$1);

return statearr_34822;
})();
if(cljs.core.truth_(inst_34802)){
var statearr_34823_36165 = state_34815__$1;
(statearr_34823_36165[(1)] = (14));

} else {
var statearr_34824_36166 = state_34815__$1;
(statearr_34824_36166[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (6))){
var state_34815__$1 = state_34815;
var statearr_34825_36167 = state_34815__$1;
(statearr_34825_36167[(2)] = null);

(statearr_34825_36167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (17))){
var inst_34808 = (state_34815[(2)]);
var state_34815__$1 = (function (){var statearr_34828 = state_34815;
(statearr_34828[(10)] = inst_34808);

return statearr_34828;
})();
var statearr_34829_36168 = state_34815__$1;
(statearr_34829_36168[(2)] = null);

(statearr_34829_36168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (3))){
var inst_34813 = (state_34815[(2)]);
var state_34815__$1 = state_34815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34815__$1,inst_34813);
} else {
if((state_val_34816 === (12))){
var _ = (function (){var statearr_34830 = state_34815;
(statearr_34830[(4)] = cljs.core.rest((state_34815[(4)])));

return statearr_34830;
})();
var state_34815__$1 = state_34815;
var ex34827 = (state_34815__$1[(2)]);
var statearr_34831_36178 = state_34815__$1;
(statearr_34831_36178[(5)] = ex34827);


if((ex34827 instanceof Object)){
var statearr_34832_36179 = state_34815__$1;
(statearr_34832_36179[(1)] = (11));

(statearr_34832_36179[(5)] = null);

} else {
throw ex34827;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (2))){
var inst_34774 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34775 = cnt;
var inst_34776 = (0);
var state_34815__$1 = (function (){var statearr_34833 = state_34815;
(statearr_34833[(7)] = inst_34775);

(statearr_34833[(11)] = inst_34774);

(statearr_34833[(8)] = inst_34776);

return statearr_34833;
})();
var statearr_34834_36186 = state_34815__$1;
(statearr_34834_36186[(2)] = null);

(statearr_34834_36186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (11))){
var inst_34780 = (state_34815[(2)]);
var inst_34781 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34815__$1 = (function (){var statearr_34835 = state_34815;
(statearr_34835[(12)] = inst_34780);

return statearr_34835;
})();
var statearr_34836_36187 = state_34815__$1;
(statearr_34836_36187[(2)] = inst_34781);

(statearr_34836_36187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (9))){
var inst_34776 = (state_34815[(8)]);
var _ = (function (){var statearr_34837 = state_34815;
(statearr_34837[(4)] = cljs.core.cons((12),(state_34815[(4)])));

return statearr_34837;
})();
var inst_34787 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34776) : chs__$1.call(null,inst_34776));
var inst_34788 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34776) : done.call(null,inst_34776));
var inst_34789 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34787,inst_34788);
var ___$1 = (function (){var statearr_34838 = state_34815;
(statearr_34838[(4)] = cljs.core.rest((state_34815[(4)])));

return statearr_34838;
})();
var state_34815__$1 = state_34815;
var statearr_34839_36188 = state_34815__$1;
(statearr_34839_36188[(2)] = inst_34789);

(statearr_34839_36188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (5))){
var inst_34799 = (state_34815[(2)]);
var state_34815__$1 = (function (){var statearr_34840 = state_34815;
(statearr_34840[(13)] = inst_34799);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34815__$1,(13),dchan);
} else {
if((state_val_34816 === (14))){
var inst_34804 = cljs.core.async.close_BANG_(out);
var state_34815__$1 = state_34815;
var statearr_34841_36189 = state_34815__$1;
(statearr_34841_36189[(2)] = inst_34804);

(statearr_34841_36189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (16))){
var inst_34811 = (state_34815[(2)]);
var state_34815__$1 = state_34815;
var statearr_34842_36190 = state_34815__$1;
(statearr_34842_36190[(2)] = inst_34811);

(statearr_34842_36190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (10))){
var inst_34776 = (state_34815[(8)]);
var inst_34792 = (state_34815[(2)]);
var inst_34793 = (inst_34776 + (1));
var inst_34776__$1 = inst_34793;
var state_34815__$1 = (function (){var statearr_34843 = state_34815;
(statearr_34843[(8)] = inst_34776__$1);

(statearr_34843[(14)] = inst_34792);

return statearr_34843;
})();
var statearr_34844_36191 = state_34815__$1;
(statearr_34844_36191[(2)] = null);

(statearr_34844_36191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34816 === (8))){
var inst_34797 = (state_34815[(2)]);
var state_34815__$1 = state_34815;
var statearr_34845_36198 = state_34815__$1;
(statearr_34845_36198[(2)] = inst_34797);

(statearr_34845_36198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_34846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34846[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_34846[(1)] = (1));

return statearr_34846;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_34815){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34815);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e34847){var ex__33221__auto__ = e34847;
var statearr_34848_36199 = state_34815;
(statearr_34848_36199[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34815[(4)]))){
var statearr_34849_36200 = state_34815;
(statearr_34849_36200[(1)] = cljs.core.first((state_34815[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36201 = state_34815;
state_34815 = G__36201;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_34815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_34815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_34850 = f__33338__auto__();
(statearr_34850[(6)] = c__33337__auto___36156);

return statearr_34850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34853 = arguments.length;
switch (G__34853) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33337__auto___36203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34885){
var state_val_34886 = (state_34885[(1)]);
if((state_val_34886 === (7))){
var inst_34865 = (state_34885[(7)]);
var inst_34864 = (state_34885[(8)]);
var inst_34864__$1 = (state_34885[(2)]);
var inst_34865__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34864__$1,(0),null);
var inst_34866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34864__$1,(1),null);
var inst_34867 = (inst_34865__$1 == null);
var state_34885__$1 = (function (){var statearr_34887 = state_34885;
(statearr_34887[(9)] = inst_34866);

(statearr_34887[(7)] = inst_34865__$1);

(statearr_34887[(8)] = inst_34864__$1);

return statearr_34887;
})();
if(cljs.core.truth_(inst_34867)){
var statearr_34888_36204 = state_34885__$1;
(statearr_34888_36204[(1)] = (8));

} else {
var statearr_34889_36205 = state_34885__$1;
(statearr_34889_36205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (1))){
var inst_34854 = cljs.core.vec(chs);
var inst_34855 = inst_34854;
var state_34885__$1 = (function (){var statearr_34890 = state_34885;
(statearr_34890[(10)] = inst_34855);

return statearr_34890;
})();
var statearr_34891_36206 = state_34885__$1;
(statearr_34891_36206[(2)] = null);

(statearr_34891_36206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (4))){
var inst_34855 = (state_34885[(10)]);
var state_34885__$1 = state_34885;
return cljs.core.async.ioc_alts_BANG_(state_34885__$1,(7),inst_34855);
} else {
if((state_val_34886 === (6))){
var inst_34881 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
var statearr_34892_36213 = state_34885__$1;
(statearr_34892_36213[(2)] = inst_34881);

(statearr_34892_36213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (3))){
var inst_34883 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34885__$1,inst_34883);
} else {
if((state_val_34886 === (2))){
var inst_34855 = (state_34885[(10)]);
var inst_34857 = cljs.core.count(inst_34855);
var inst_34858 = (inst_34857 > (0));
var state_34885__$1 = state_34885;
if(cljs.core.truth_(inst_34858)){
var statearr_34894_36214 = state_34885__$1;
(statearr_34894_36214[(1)] = (4));

} else {
var statearr_34895_36215 = state_34885__$1;
(statearr_34895_36215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (11))){
var inst_34855 = (state_34885[(10)]);
var inst_34874 = (state_34885[(2)]);
var tmp34893 = inst_34855;
var inst_34855__$1 = tmp34893;
var state_34885__$1 = (function (){var statearr_34896 = state_34885;
(statearr_34896[(10)] = inst_34855__$1);

(statearr_34896[(11)] = inst_34874);

return statearr_34896;
})();
var statearr_34897_36216 = state_34885__$1;
(statearr_34897_36216[(2)] = null);

(statearr_34897_36216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (9))){
var inst_34865 = (state_34885[(7)]);
var state_34885__$1 = state_34885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34885__$1,(11),out,inst_34865);
} else {
if((state_val_34886 === (5))){
var inst_34879 = cljs.core.async.close_BANG_(out);
var state_34885__$1 = state_34885;
var statearr_34898_36217 = state_34885__$1;
(statearr_34898_36217[(2)] = inst_34879);

(statearr_34898_36217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (10))){
var inst_34877 = (state_34885[(2)]);
var state_34885__$1 = state_34885;
var statearr_34899_36218 = state_34885__$1;
(statearr_34899_36218[(2)] = inst_34877);

(statearr_34899_36218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34886 === (8))){
var inst_34866 = (state_34885[(9)]);
var inst_34865 = (state_34885[(7)]);
var inst_34864 = (state_34885[(8)]);
var inst_34855 = (state_34885[(10)]);
var inst_34869 = (function (){var cs = inst_34855;
var vec__34860 = inst_34864;
var v = inst_34865;
var c = inst_34866;
return (function (p1__34851_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34851_SHARP_);
});
})();
var inst_34870 = cljs.core.filterv(inst_34869,inst_34855);
var inst_34855__$1 = inst_34870;
var state_34885__$1 = (function (){var statearr_34900 = state_34885;
(statearr_34900[(10)] = inst_34855__$1);

return statearr_34900;
})();
var statearr_34901_36219 = state_34885__$1;
(statearr_34901_36219[(2)] = null);

(statearr_34901_36219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_34902 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34902[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_34902[(1)] = (1));

return statearr_34902;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_34885){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34885);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e34904){var ex__33221__auto__ = e34904;
var statearr_34905_36220 = state_34885;
(statearr_34905_36220[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34885[(4)]))){
var statearr_34906_36221 = state_34885;
(statearr_34906_36221[(1)] = cljs.core.first((state_34885[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36228 = state_34885;
state_34885 = G__36228;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_34885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_34885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_34907 = f__33338__auto__();
(statearr_34907[(6)] = c__33337__auto___36203);

return statearr_34907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34909 = arguments.length;
switch (G__34909) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33337__auto___36236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34933){
var state_val_34934 = (state_34933[(1)]);
if((state_val_34934 === (7))){
var inst_34915 = (state_34933[(7)]);
var inst_34915__$1 = (state_34933[(2)]);
var inst_34916 = (inst_34915__$1 == null);
var inst_34917 = cljs.core.not(inst_34916);
var state_34933__$1 = (function (){var statearr_34935 = state_34933;
(statearr_34935[(7)] = inst_34915__$1);

return statearr_34935;
})();
if(inst_34917){
var statearr_34936_36240 = state_34933__$1;
(statearr_34936_36240[(1)] = (8));

} else {
var statearr_34937_36241 = state_34933__$1;
(statearr_34937_36241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (1))){
var inst_34910 = (0);
var state_34933__$1 = (function (){var statearr_34938 = state_34933;
(statearr_34938[(8)] = inst_34910);

return statearr_34938;
})();
var statearr_34939_36242 = state_34933__$1;
(statearr_34939_36242[(2)] = null);

(statearr_34939_36242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (4))){
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34933__$1,(7),ch);
} else {
if((state_val_34934 === (6))){
var inst_34928 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34940_36246 = state_34933__$1;
(statearr_34940_36246[(2)] = inst_34928);

(statearr_34940_36246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (3))){
var inst_34930 = (state_34933[(2)]);
var inst_34931 = cljs.core.async.close_BANG_(out);
var state_34933__$1 = (function (){var statearr_34941 = state_34933;
(statearr_34941[(9)] = inst_34930);

return statearr_34941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34933__$1,inst_34931);
} else {
if((state_val_34934 === (2))){
var inst_34910 = (state_34933[(8)]);
var inst_34912 = (inst_34910 < n);
var state_34933__$1 = state_34933;
if(cljs.core.truth_(inst_34912)){
var statearr_34942_36247 = state_34933__$1;
(statearr_34942_36247[(1)] = (4));

} else {
var statearr_34943_36248 = state_34933__$1;
(statearr_34943_36248[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (11))){
var inst_34910 = (state_34933[(8)]);
var inst_34920 = (state_34933[(2)]);
var inst_34921 = (inst_34910 + (1));
var inst_34910__$1 = inst_34921;
var state_34933__$1 = (function (){var statearr_34944 = state_34933;
(statearr_34944[(8)] = inst_34910__$1);

(statearr_34944[(10)] = inst_34920);

return statearr_34944;
})();
var statearr_34945_36253 = state_34933__$1;
(statearr_34945_36253[(2)] = null);

(statearr_34945_36253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (9))){
var state_34933__$1 = state_34933;
var statearr_34946_36254 = state_34933__$1;
(statearr_34946_36254[(2)] = null);

(statearr_34946_36254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (5))){
var state_34933__$1 = state_34933;
var statearr_34947_36257 = state_34933__$1;
(statearr_34947_36257[(2)] = null);

(statearr_34947_36257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (10))){
var inst_34925 = (state_34933[(2)]);
var state_34933__$1 = state_34933;
var statearr_34948_36258 = state_34933__$1;
(statearr_34948_36258[(2)] = inst_34925);

(statearr_34948_36258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34934 === (8))){
var inst_34915 = (state_34933[(7)]);
var state_34933__$1 = state_34933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34933__$1,(11),out,inst_34915);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_34949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34949[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_34949[(1)] = (1));

return statearr_34949;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_34933){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34933);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e34950){var ex__33221__auto__ = e34950;
var statearr_34951_36261 = state_34933;
(statearr_34951_36261[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34933[(4)]))){
var statearr_34952_36262 = state_34933;
(statearr_34952_36262[(1)] = cljs.core.first((state_34933[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36263 = state_34933;
state_34933 = G__36263;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_34933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_34933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_34953 = f__33338__auto__();
(statearr_34953[(6)] = c__33337__auto___36236);

return statearr_34953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34955 = (function (f,ch,meta34956){
this.f = f;
this.ch = ch;
this.meta34956 = meta34956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34957,meta34956__$1){
var self__ = this;
var _34957__$1 = this;
return (new cljs.core.async.t_cljs$core$async34955(self__.f,self__.ch,meta34956__$1));
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34957){
var self__ = this;
var _34957__$1 = this;
return self__.meta34956;
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34958 = (function (f,ch,meta34956,_,fn1,meta34959){
this.f = f;
this.ch = ch;
this.meta34956 = meta34956;
this._ = _;
this.fn1 = fn1;
this.meta34959 = meta34959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34960,meta34959__$1){
var self__ = this;
var _34960__$1 = this;
return (new cljs.core.async.t_cljs$core$async34958(self__.f,self__.ch,self__.meta34956,self__._,self__.fn1,meta34959__$1));
}));

(cljs.core.async.t_cljs$core$async34958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34960){
var self__ = this;
var _34960__$1 = this;
return self__.meta34959;
}));

(cljs.core.async.t_cljs$core$async34958.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34958.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34954_SHARP_){
var G__34961 = (((p1__34954_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34954_SHARP_) : self__.f.call(null,p1__34954_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34961) : f1.call(null,G__34961));
});
}));

(cljs.core.async.t_cljs$core$async34958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34956","meta34956",665486297,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34955","cljs.core.async/t_cljs$core$async34955",1558567433,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34959","meta34959",1096268168,null)], null);
}));

(cljs.core.async.t_cljs$core$async34958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34958");

(cljs.core.async.t_cljs$core$async34958.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34958.
 */
cljs.core.async.__GT_t_cljs$core$async34958 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34958(f__$1,ch__$1,meta34956__$1,___$2,fn1__$1,meta34959){
return (new cljs.core.async.t_cljs$core$async34958(f__$1,ch__$1,meta34956__$1,___$2,fn1__$1,meta34959));
});

}

return (new cljs.core.async.t_cljs$core$async34958(self__.f,self__.ch,self__.meta34956,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34962 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34962) : self__.f.call(null,G__34962));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34956","meta34956",665486297,null)], null);
}));

(cljs.core.async.t_cljs$core$async34955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34955");

(cljs.core.async.t_cljs$core$async34955.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34955.
 */
cljs.core.async.__GT_t_cljs$core$async34955 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34955(f__$1,ch__$1,meta34956){
return (new cljs.core.async.t_cljs$core$async34955(f__$1,ch__$1,meta34956));
});

}

return (new cljs.core.async.t_cljs$core$async34955(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34963 = (function (f,ch,meta34964){
this.f = f;
this.ch = ch;
this.meta34964 = meta34964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34965,meta34964__$1){
var self__ = this;
var _34965__$1 = this;
return (new cljs.core.async.t_cljs$core$async34963(self__.f,self__.ch,meta34964__$1));
}));

(cljs.core.async.t_cljs$core$async34963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34965){
var self__ = this;
var _34965__$1 = this;
return self__.meta34964;
}));

(cljs.core.async.t_cljs$core$async34963.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34963.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34963.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34964","meta34964",-1029502648,null)], null);
}));

(cljs.core.async.t_cljs$core$async34963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34963");

(cljs.core.async.t_cljs$core$async34963.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34963.
 */
cljs.core.async.__GT_t_cljs$core$async34963 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34963(f__$1,ch__$1,meta34964){
return (new cljs.core.async.t_cljs$core$async34963(f__$1,ch__$1,meta34964));
});

}

return (new cljs.core.async.t_cljs$core$async34963(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34967 = (function (p,ch,meta34968){
this.p = p;
this.ch = ch;
this.meta34968 = meta34968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34969,meta34968__$1){
var self__ = this;
var _34969__$1 = this;
return (new cljs.core.async.t_cljs$core$async34967(self__.p,self__.ch,meta34968__$1));
}));

(cljs.core.async.t_cljs$core$async34967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34969){
var self__ = this;
var _34969__$1 = this;
return self__.meta34968;
}));

(cljs.core.async.t_cljs$core$async34967.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34967.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34967.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34967.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34967.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34967.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34967.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34968","meta34968",530032403,null)], null);
}));

(cljs.core.async.t_cljs$core$async34967.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34967");

(cljs.core.async.t_cljs$core$async34967.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34967");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34967.
 */
cljs.core.async.__GT_t_cljs$core$async34967 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34967(p__$1,ch__$1,meta34968){
return (new cljs.core.async.t_cljs$core$async34967(p__$1,ch__$1,meta34968));
});

}

return (new cljs.core.async.t_cljs$core$async34967(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34971 = arguments.length;
switch (G__34971) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33337__auto___36293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_34992){
var state_val_34993 = (state_34992[(1)]);
if((state_val_34993 === (7))){
var inst_34988 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_34994_36294 = state_34992__$1;
(statearr_34994_36294[(2)] = inst_34988);

(statearr_34994_36294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (1))){
var state_34992__$1 = state_34992;
var statearr_34995_36296 = state_34992__$1;
(statearr_34995_36296[(2)] = null);

(statearr_34995_36296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (4))){
var inst_34974 = (state_34992[(7)]);
var inst_34974__$1 = (state_34992[(2)]);
var inst_34975 = (inst_34974__$1 == null);
var state_34992__$1 = (function (){var statearr_34996 = state_34992;
(statearr_34996[(7)] = inst_34974__$1);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34975)){
var statearr_34997_36297 = state_34992__$1;
(statearr_34997_36297[(1)] = (5));

} else {
var statearr_34998_36298 = state_34992__$1;
(statearr_34998_36298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (6))){
var inst_34974 = (state_34992[(7)]);
var inst_34979 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34974) : p.call(null,inst_34974));
var state_34992__$1 = state_34992;
if(cljs.core.truth_(inst_34979)){
var statearr_34999_36299 = state_34992__$1;
(statearr_34999_36299[(1)] = (8));

} else {
var statearr_35000_36300 = state_34992__$1;
(statearr_35000_36300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (3))){
var inst_34990 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34992__$1,inst_34990);
} else {
if((state_val_34993 === (2))){
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34992__$1,(4),ch);
} else {
if((state_val_34993 === (11))){
var inst_34982 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35001_36301 = state_34992__$1;
(statearr_35001_36301[(2)] = inst_34982);

(statearr_35001_36301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (9))){
var state_34992__$1 = state_34992;
var statearr_35002_36302 = state_34992__$1;
(statearr_35002_36302[(2)] = null);

(statearr_35002_36302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (5))){
var inst_34977 = cljs.core.async.close_BANG_(out);
var state_34992__$1 = state_34992;
var statearr_35003_36303 = state_34992__$1;
(statearr_35003_36303[(2)] = inst_34977);

(statearr_35003_36303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (10))){
var inst_34985 = (state_34992[(2)]);
var state_34992__$1 = (function (){var statearr_35004 = state_34992;
(statearr_35004[(8)] = inst_34985);

return statearr_35004;
})();
var statearr_35005_36304 = state_34992__$1;
(statearr_35005_36304[(2)] = null);

(statearr_35005_36304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (8))){
var inst_34974 = (state_34992[(7)]);
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34992__$1,(11),out,inst_34974);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_35006 = [null,null,null,null,null,null,null,null,null];
(statearr_35006[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_35006[(1)] = (1));

return statearr_35006;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_34992){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_34992);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e35007){var ex__33221__auto__ = e35007;
var statearr_35008_36305 = state_34992;
(statearr_35008_36305[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_34992[(4)]))){
var statearr_35009_36306 = state_34992;
(statearr_35009_36306[(1)] = cljs.core.first((state_34992[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36308 = state_34992;
state_34992 = G__36308;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_34992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_34992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_35010 = f__33338__auto__();
(statearr_35010[(6)] = c__33337__auto___36293);

return statearr_35010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35012 = arguments.length;
switch (G__35012) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_35080){
var state_val_35081 = (state_35080[(1)]);
if((state_val_35081 === (7))){
var inst_35076 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35085_36312 = state_35080__$1;
(statearr_35085_36312[(2)] = inst_35076);

(statearr_35085_36312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (20))){
var inst_35044 = (state_35080[(7)]);
var inst_35056 = (state_35080[(2)]);
var inst_35057 = cljs.core.next(inst_35044);
var inst_35029 = inst_35057;
var inst_35030 = null;
var inst_35031 = (0);
var inst_35032 = (0);
var state_35080__$1 = (function (){var statearr_35086 = state_35080;
(statearr_35086[(8)] = inst_35032);

(statearr_35086[(9)] = inst_35056);

(statearr_35086[(10)] = inst_35029);

(statearr_35086[(11)] = inst_35030);

(statearr_35086[(12)] = inst_35031);

return statearr_35086;
})();
var statearr_35090_36314 = state_35080__$1;
(statearr_35090_36314[(2)] = null);

(statearr_35090_36314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (1))){
var state_35080__$1 = state_35080;
var statearr_35091_36315 = state_35080__$1;
(statearr_35091_36315[(2)] = null);

(statearr_35091_36315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (4))){
var inst_35015 = (state_35080[(13)]);
var inst_35015__$1 = (state_35080[(2)]);
var inst_35016 = (inst_35015__$1 == null);
var state_35080__$1 = (function (){var statearr_35094 = state_35080;
(statearr_35094[(13)] = inst_35015__$1);

return statearr_35094;
})();
if(cljs.core.truth_(inst_35016)){
var statearr_35096_36316 = state_35080__$1;
(statearr_35096_36316[(1)] = (5));

} else {
var statearr_35097_36317 = state_35080__$1;
(statearr_35097_36317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (15))){
var state_35080__$1 = state_35080;
var statearr_35109_36318 = state_35080__$1;
(statearr_35109_36318[(2)] = null);

(statearr_35109_36318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (21))){
var state_35080__$1 = state_35080;
var statearr_35110_36319 = state_35080__$1;
(statearr_35110_36319[(2)] = null);

(statearr_35110_36319[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (13))){
var inst_35032 = (state_35080[(8)]);
var inst_35029 = (state_35080[(10)]);
var inst_35030 = (state_35080[(11)]);
var inst_35031 = (state_35080[(12)]);
var inst_35039 = (state_35080[(2)]);
var inst_35041 = (inst_35032 + (1));
var tmp35106 = inst_35029;
var tmp35107 = inst_35030;
var tmp35108 = inst_35031;
var inst_35029__$1 = tmp35106;
var inst_35030__$1 = tmp35107;
var inst_35031__$1 = tmp35108;
var inst_35032__$1 = inst_35041;
var state_35080__$1 = (function (){var statearr_35111 = state_35080;
(statearr_35111[(14)] = inst_35039);

(statearr_35111[(8)] = inst_35032__$1);

(statearr_35111[(10)] = inst_35029__$1);

(statearr_35111[(11)] = inst_35030__$1);

(statearr_35111[(12)] = inst_35031__$1);

return statearr_35111;
})();
var statearr_35112_36321 = state_35080__$1;
(statearr_35112_36321[(2)] = null);

(statearr_35112_36321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (22))){
var state_35080__$1 = state_35080;
var statearr_35113_36322 = state_35080__$1;
(statearr_35113_36322[(2)] = null);

(statearr_35113_36322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (6))){
var inst_35015 = (state_35080[(13)]);
var inst_35027 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35015) : f.call(null,inst_35015));
var inst_35028 = cljs.core.seq(inst_35027);
var inst_35029 = inst_35028;
var inst_35030 = null;
var inst_35031 = (0);
var inst_35032 = (0);
var state_35080__$1 = (function (){var statearr_35114 = state_35080;
(statearr_35114[(8)] = inst_35032);

(statearr_35114[(10)] = inst_35029);

(statearr_35114[(11)] = inst_35030);

(statearr_35114[(12)] = inst_35031);

return statearr_35114;
})();
var statearr_35115_36324 = state_35080__$1;
(statearr_35115_36324[(2)] = null);

(statearr_35115_36324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (17))){
var inst_35044 = (state_35080[(7)]);
var inst_35048 = cljs.core.chunk_first(inst_35044);
var inst_35049 = cljs.core.chunk_rest(inst_35044);
var inst_35050 = cljs.core.count(inst_35048);
var inst_35029 = inst_35049;
var inst_35030 = inst_35048;
var inst_35031 = inst_35050;
var inst_35032 = (0);
var state_35080__$1 = (function (){var statearr_35116 = state_35080;
(statearr_35116[(8)] = inst_35032);

(statearr_35116[(10)] = inst_35029);

(statearr_35116[(11)] = inst_35030);

(statearr_35116[(12)] = inst_35031);

return statearr_35116;
})();
var statearr_35117_36325 = state_35080__$1;
(statearr_35117_36325[(2)] = null);

(statearr_35117_36325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (3))){
var inst_35078 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35080__$1,inst_35078);
} else {
if((state_val_35081 === (12))){
var inst_35065 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35121_36326 = state_35080__$1;
(statearr_35121_36326[(2)] = inst_35065);

(statearr_35121_36326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (2))){
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35080__$1,(4),in$);
} else {
if((state_val_35081 === (23))){
var inst_35074 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35125_36327 = state_35080__$1;
(statearr_35125_36327[(2)] = inst_35074);

(statearr_35125_36327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (19))){
var inst_35060 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35126_36328 = state_35080__$1;
(statearr_35126_36328[(2)] = inst_35060);

(statearr_35126_36328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (11))){
var inst_35044 = (state_35080[(7)]);
var inst_35029 = (state_35080[(10)]);
var inst_35044__$1 = cljs.core.seq(inst_35029);
var state_35080__$1 = (function (){var statearr_35129 = state_35080;
(statearr_35129[(7)] = inst_35044__$1);

return statearr_35129;
})();
if(inst_35044__$1){
var statearr_35130_36334 = state_35080__$1;
(statearr_35130_36334[(1)] = (14));

} else {
var statearr_35131_36335 = state_35080__$1;
(statearr_35131_36335[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (9))){
var inst_35068 = (state_35080[(2)]);
var inst_35069 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35080__$1 = (function (){var statearr_35132 = state_35080;
(statearr_35132[(15)] = inst_35068);

return statearr_35132;
})();
if(cljs.core.truth_(inst_35069)){
var statearr_35133_36341 = state_35080__$1;
(statearr_35133_36341[(1)] = (21));

} else {
var statearr_35134_36342 = state_35080__$1;
(statearr_35134_36342[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (5))){
var inst_35019 = cljs.core.async.close_BANG_(out);
var state_35080__$1 = state_35080;
var statearr_35135_36343 = state_35080__$1;
(statearr_35135_36343[(2)] = inst_35019);

(statearr_35135_36343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (14))){
var inst_35044 = (state_35080[(7)]);
var inst_35046 = cljs.core.chunked_seq_QMARK_(inst_35044);
var state_35080__$1 = state_35080;
if(inst_35046){
var statearr_35138_36349 = state_35080__$1;
(statearr_35138_36349[(1)] = (17));

} else {
var statearr_35140_36350 = state_35080__$1;
(statearr_35140_36350[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (16))){
var inst_35063 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35141_36351 = state_35080__$1;
(statearr_35141_36351[(2)] = inst_35063);

(statearr_35141_36351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (10))){
var inst_35032 = (state_35080[(8)]);
var inst_35030 = (state_35080[(11)]);
var inst_35037 = cljs.core._nth(inst_35030,inst_35032);
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35080__$1,(13),out,inst_35037);
} else {
if((state_val_35081 === (18))){
var inst_35044 = (state_35080[(7)]);
var inst_35053 = cljs.core.first(inst_35044);
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35080__$1,(20),out,inst_35053);
} else {
if((state_val_35081 === (8))){
var inst_35032 = (state_35080[(8)]);
var inst_35031 = (state_35080[(12)]);
var inst_35034 = (inst_35032 < inst_35031);
var inst_35035 = inst_35034;
var state_35080__$1 = state_35080;
if(cljs.core.truth_(inst_35035)){
var statearr_35143_36352 = state_35080__$1;
(statearr_35143_36352[(1)] = (10));

} else {
var statearr_35145_36353 = state_35080__$1;
(statearr_35145_36353[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____0 = (function (){
var statearr_35147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35147[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__);

(statearr_35147[(1)] = (1));

return statearr_35147;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____1 = (function (state_35080){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_35080);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e35148){var ex__33221__auto__ = e35148;
var statearr_35149_36362 = state_35080;
(statearr_35149_36362[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_35080[(4)]))){
var statearr_35150_36367 = state_35080;
(statearr_35150_36367[(1)] = cljs.core.first((state_35080[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36368 = state_35080;
state_35080 = G__36368;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__ = function(state_35080){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____1.call(this,state_35080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_35151 = f__33338__auto__();
(statearr_35151[(6)] = c__33337__auto__);

return statearr_35151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));

return c__33337__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35153 = arguments.length;
switch (G__35153) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35161 = arguments.length;
switch (G__35161) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35166 = arguments.length;
switch (G__35166) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33337__auto___36389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_35195){
var state_val_35196 = (state_35195[(1)]);
if((state_val_35196 === (7))){
var inst_35190 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35200_36391 = state_35195__$1;
(statearr_35200_36391[(2)] = inst_35190);

(statearr_35200_36391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (1))){
var inst_35172 = null;
var state_35195__$1 = (function (){var statearr_35201 = state_35195;
(statearr_35201[(7)] = inst_35172);

return statearr_35201;
})();
var statearr_35202_36392 = state_35195__$1;
(statearr_35202_36392[(2)] = null);

(statearr_35202_36392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (4))){
var inst_35175 = (state_35195[(8)]);
var inst_35175__$1 = (state_35195[(2)]);
var inst_35176 = (inst_35175__$1 == null);
var inst_35177 = cljs.core.not(inst_35176);
var state_35195__$1 = (function (){var statearr_35205 = state_35195;
(statearr_35205[(8)] = inst_35175__$1);

return statearr_35205;
})();
if(inst_35177){
var statearr_35207_36393 = state_35195__$1;
(statearr_35207_36393[(1)] = (5));

} else {
var statearr_35208_36394 = state_35195__$1;
(statearr_35208_36394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (6))){
var state_35195__$1 = state_35195;
var statearr_35209_36395 = state_35195__$1;
(statearr_35209_36395[(2)] = null);

(statearr_35209_36395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (3))){
var inst_35192 = (state_35195[(2)]);
var inst_35193 = cljs.core.async.close_BANG_(out);
var state_35195__$1 = (function (){var statearr_35210 = state_35195;
(statearr_35210[(9)] = inst_35192);

return statearr_35210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35195__$1,inst_35193);
} else {
if((state_val_35196 === (2))){
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35195__$1,(4),ch);
} else {
if((state_val_35196 === (11))){
var inst_35175 = (state_35195[(8)]);
var inst_35184 = (state_35195[(2)]);
var inst_35172 = inst_35175;
var state_35195__$1 = (function (){var statearr_35211 = state_35195;
(statearr_35211[(7)] = inst_35172);

(statearr_35211[(10)] = inst_35184);

return statearr_35211;
})();
var statearr_35212_36397 = state_35195__$1;
(statearr_35212_36397[(2)] = null);

(statearr_35212_36397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (9))){
var inst_35175 = (state_35195[(8)]);
var state_35195__$1 = state_35195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35195__$1,(11),out,inst_35175);
} else {
if((state_val_35196 === (5))){
var inst_35172 = (state_35195[(7)]);
var inst_35175 = (state_35195[(8)]);
var inst_35179 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35175,inst_35172);
var state_35195__$1 = state_35195;
if(inst_35179){
var statearr_35219_36399 = state_35195__$1;
(statearr_35219_36399[(1)] = (8));

} else {
var statearr_35220_36400 = state_35195__$1;
(statearr_35220_36400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (10))){
var inst_35187 = (state_35195[(2)]);
var state_35195__$1 = state_35195;
var statearr_35221_36401 = state_35195__$1;
(statearr_35221_36401[(2)] = inst_35187);

(statearr_35221_36401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35196 === (8))){
var inst_35172 = (state_35195[(7)]);
var tmp35215 = inst_35172;
var inst_35172__$1 = tmp35215;
var state_35195__$1 = (function (){var statearr_35223 = state_35195;
(statearr_35223[(7)] = inst_35172__$1);

return statearr_35223;
})();
var statearr_35224_36403 = state_35195__$1;
(statearr_35224_36403[(2)] = null);

(statearr_35224_36403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_35225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35225[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_35225[(1)] = (1));

return statearr_35225;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_35195){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_35195);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e35226){var ex__33221__auto__ = e35226;
var statearr_35227_36406 = state_35195;
(statearr_35227_36406[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_35195[(4)]))){
var statearr_35228_36407 = state_35195;
(statearr_35228_36407[(1)] = cljs.core.first((state_35195[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36408 = state_35195;
state_35195 = G__36408;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_35195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_35195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_35229 = f__33338__auto__();
(statearr_35229[(6)] = c__33337__auto___36389);

return statearr_35229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35239 = arguments.length;
switch (G__35239) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33337__auto___36410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_35279){
var state_val_35280 = (state_35279[(1)]);
if((state_val_35280 === (7))){
var inst_35275 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35283_36411 = state_35279__$1;
(statearr_35283_36411[(2)] = inst_35275);

(statearr_35283_36411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (1))){
var inst_35240 = (new Array(n));
var inst_35241 = inst_35240;
var inst_35242 = (0);
var state_35279__$1 = (function (){var statearr_35284 = state_35279;
(statearr_35284[(7)] = inst_35241);

(statearr_35284[(8)] = inst_35242);

return statearr_35284;
})();
var statearr_35285_36412 = state_35279__$1;
(statearr_35285_36412[(2)] = null);

(statearr_35285_36412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (4))){
var inst_35246 = (state_35279[(9)]);
var inst_35246__$1 = (state_35279[(2)]);
var inst_35247 = (inst_35246__$1 == null);
var inst_35248 = cljs.core.not(inst_35247);
var state_35279__$1 = (function (){var statearr_35286 = state_35279;
(statearr_35286[(9)] = inst_35246__$1);

return statearr_35286;
})();
if(inst_35248){
var statearr_35288_36418 = state_35279__$1;
(statearr_35288_36418[(1)] = (5));

} else {
var statearr_35290_36420 = state_35279__$1;
(statearr_35290_36420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (15))){
var inst_35269 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35291_36422 = state_35279__$1;
(statearr_35291_36422[(2)] = inst_35269);

(statearr_35291_36422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (13))){
var state_35279__$1 = state_35279;
var statearr_35292_36427 = state_35279__$1;
(statearr_35292_36427[(2)] = null);

(statearr_35292_36427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (6))){
var inst_35242 = (state_35279[(8)]);
var inst_35265 = (inst_35242 > (0));
var state_35279__$1 = state_35279;
if(cljs.core.truth_(inst_35265)){
var statearr_35293_36433 = state_35279__$1;
(statearr_35293_36433[(1)] = (12));

} else {
var statearr_35294_36434 = state_35279__$1;
(statearr_35294_36434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (3))){
var inst_35277 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35279__$1,inst_35277);
} else {
if((state_val_35280 === (12))){
var inst_35241 = (state_35279[(7)]);
var inst_35267 = cljs.core.vec(inst_35241);
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35279__$1,(15),out,inst_35267);
} else {
if((state_val_35280 === (2))){
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35279__$1,(4),ch);
} else {
if((state_val_35280 === (11))){
var inst_35259 = (state_35279[(2)]);
var inst_35260 = (new Array(n));
var inst_35241 = inst_35260;
var inst_35242 = (0);
var state_35279__$1 = (function (){var statearr_35295 = state_35279;
(statearr_35295[(7)] = inst_35241);

(statearr_35295[(8)] = inst_35242);

(statearr_35295[(10)] = inst_35259);

return statearr_35295;
})();
var statearr_35296_36457 = state_35279__$1;
(statearr_35296_36457[(2)] = null);

(statearr_35296_36457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (9))){
var inst_35241 = (state_35279[(7)]);
var inst_35257 = cljs.core.vec(inst_35241);
var state_35279__$1 = state_35279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35279__$1,(11),out,inst_35257);
} else {
if((state_val_35280 === (5))){
var inst_35252 = (state_35279[(11)]);
var inst_35241 = (state_35279[(7)]);
var inst_35242 = (state_35279[(8)]);
var inst_35246 = (state_35279[(9)]);
var inst_35251 = (inst_35241[inst_35242] = inst_35246);
var inst_35252__$1 = (inst_35242 + (1));
var inst_35253 = (inst_35252__$1 < n);
var state_35279__$1 = (function (){var statearr_35297 = state_35279;
(statearr_35297[(11)] = inst_35252__$1);

(statearr_35297[(12)] = inst_35251);

return statearr_35297;
})();
if(cljs.core.truth_(inst_35253)){
var statearr_35298_36472 = state_35279__$1;
(statearr_35298_36472[(1)] = (8));

} else {
var statearr_35299_36477 = state_35279__$1;
(statearr_35299_36477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (14))){
var inst_35272 = (state_35279[(2)]);
var inst_35273 = cljs.core.async.close_BANG_(out);
var state_35279__$1 = (function (){var statearr_35302 = state_35279;
(statearr_35302[(13)] = inst_35272);

return statearr_35302;
})();
var statearr_35303_36479 = state_35279__$1;
(statearr_35303_36479[(2)] = inst_35273);

(statearr_35303_36479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (10))){
var inst_35263 = (state_35279[(2)]);
var state_35279__$1 = state_35279;
var statearr_35304_36484 = state_35279__$1;
(statearr_35304_36484[(2)] = inst_35263);

(statearr_35304_36484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35280 === (8))){
var inst_35252 = (state_35279[(11)]);
var inst_35241 = (state_35279[(7)]);
var tmp35301 = inst_35241;
var inst_35241__$1 = tmp35301;
var inst_35242 = inst_35252;
var state_35279__$1 = (function (){var statearr_35305 = state_35279;
(statearr_35305[(7)] = inst_35241__$1);

(statearr_35305[(8)] = inst_35242);

return statearr_35305;
})();
var statearr_35306_36496 = state_35279__$1;
(statearr_35306_36496[(2)] = null);

(statearr_35306_36496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_35307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35307[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_35307[(1)] = (1));

return statearr_35307;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_35279){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_35279);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e35308){var ex__33221__auto__ = e35308;
var statearr_35309_36513 = state_35279;
(statearr_35309_36513[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_35279[(4)]))){
var statearr_35310_36514 = state_35279;
(statearr_35310_36514[(1)] = cljs.core.first((state_35279[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36516 = state_35279;
state_35279 = G__36516;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_35279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_35279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_35314 = f__33338__auto__();
(statearr_35314[(6)] = c__33337__auto___36410);

return statearr_35314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35316 = arguments.length;
switch (G__35316) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33337__auto___36520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_35378){
var state_val_35379 = (state_35378[(1)]);
if((state_val_35379 === (7))){
var inst_35374 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
var statearr_35380_36525 = state_35378__$1;
(statearr_35380_36525[(2)] = inst_35374);

(statearr_35380_36525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (1))){
var inst_35337 = [];
var inst_35338 = inst_35337;
var inst_35339 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35378__$1 = (function (){var statearr_35381 = state_35378;
(statearr_35381[(7)] = inst_35339);

(statearr_35381[(8)] = inst_35338);

return statearr_35381;
})();
var statearr_35382_36534 = state_35378__$1;
(statearr_35382_36534[(2)] = null);

(statearr_35382_36534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (4))){
var inst_35342 = (state_35378[(9)]);
var inst_35342__$1 = (state_35378[(2)]);
var inst_35343 = (inst_35342__$1 == null);
var inst_35344 = cljs.core.not(inst_35343);
var state_35378__$1 = (function (){var statearr_35383 = state_35378;
(statearr_35383[(9)] = inst_35342__$1);

return statearr_35383;
})();
if(inst_35344){
var statearr_35384_36536 = state_35378__$1;
(statearr_35384_36536[(1)] = (5));

} else {
var statearr_35385_36537 = state_35378__$1;
(statearr_35385_36537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (15))){
var inst_35368 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
var statearr_35386_36538 = state_35378__$1;
(statearr_35386_36538[(2)] = inst_35368);

(statearr_35386_36538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (13))){
var state_35378__$1 = state_35378;
var statearr_35387_36540 = state_35378__$1;
(statearr_35387_36540[(2)] = null);

(statearr_35387_36540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (6))){
var inst_35338 = (state_35378[(8)]);
var inst_35363 = inst_35338.length;
var inst_35364 = (inst_35363 > (0));
var state_35378__$1 = state_35378;
if(cljs.core.truth_(inst_35364)){
var statearr_35388_36544 = state_35378__$1;
(statearr_35388_36544[(1)] = (12));

} else {
var statearr_35389_36545 = state_35378__$1;
(statearr_35389_36545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (3))){
var inst_35376 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35378__$1,inst_35376);
} else {
if((state_val_35379 === (12))){
var inst_35338 = (state_35378[(8)]);
var inst_35366 = cljs.core.vec(inst_35338);
var state_35378__$1 = state_35378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35378__$1,(15),out,inst_35366);
} else {
if((state_val_35379 === (2))){
var state_35378__$1 = state_35378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35378__$1,(4),ch);
} else {
if((state_val_35379 === (11))){
var inst_35342 = (state_35378[(9)]);
var inst_35346 = (state_35378[(10)]);
var inst_35356 = (state_35378[(2)]);
var inst_35357 = [];
var inst_35358 = inst_35357.push(inst_35342);
var inst_35338 = inst_35357;
var inst_35339 = inst_35346;
var state_35378__$1 = (function (){var statearr_35390 = state_35378;
(statearr_35390[(11)] = inst_35356);

(statearr_35390[(7)] = inst_35339);

(statearr_35390[(12)] = inst_35358);

(statearr_35390[(8)] = inst_35338);

return statearr_35390;
})();
var statearr_35391_36551 = state_35378__$1;
(statearr_35391_36551[(2)] = null);

(statearr_35391_36551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (9))){
var inst_35338 = (state_35378[(8)]);
var inst_35354 = cljs.core.vec(inst_35338);
var state_35378__$1 = state_35378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35378__$1,(11),out,inst_35354);
} else {
if((state_val_35379 === (5))){
var inst_35342 = (state_35378[(9)]);
var inst_35346 = (state_35378[(10)]);
var inst_35339 = (state_35378[(7)]);
var inst_35346__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35342) : f.call(null,inst_35342));
var inst_35347 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35346__$1,inst_35339);
var inst_35348 = cljs.core.keyword_identical_QMARK_(inst_35339,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35349 = ((inst_35347) || (inst_35348));
var state_35378__$1 = (function (){var statearr_35392 = state_35378;
(statearr_35392[(10)] = inst_35346__$1);

return statearr_35392;
})();
if(cljs.core.truth_(inst_35349)){
var statearr_35393_36555 = state_35378__$1;
(statearr_35393_36555[(1)] = (8));

} else {
var statearr_35394_36556 = state_35378__$1;
(statearr_35394_36556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (14))){
var inst_35371 = (state_35378[(2)]);
var inst_35372 = cljs.core.async.close_BANG_(out);
var state_35378__$1 = (function (){var statearr_35396 = state_35378;
(statearr_35396[(13)] = inst_35371);

return statearr_35396;
})();
var statearr_35397_36560 = state_35378__$1;
(statearr_35397_36560[(2)] = inst_35372);

(statearr_35397_36560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (10))){
var inst_35361 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
var statearr_35398_36566 = state_35378__$1;
(statearr_35398_36566[(2)] = inst_35361);

(statearr_35398_36566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (8))){
var inst_35342 = (state_35378[(9)]);
var inst_35346 = (state_35378[(10)]);
var inst_35338 = (state_35378[(8)]);
var inst_35351 = inst_35338.push(inst_35342);
var tmp35395 = inst_35338;
var inst_35338__$1 = tmp35395;
var inst_35339 = inst_35346;
var state_35378__$1 = (function (){var statearr_35399 = state_35378;
(statearr_35399[(7)] = inst_35339);

(statearr_35399[(14)] = inst_35351);

(statearr_35399[(8)] = inst_35338__$1);

return statearr_35399;
})();
var statearr_35400_36586 = state_35378__$1;
(statearr_35400_36586[(2)] = null);

(statearr_35400_36586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33218__auto__ = null;
var cljs$core$async$state_machine__33218__auto____0 = (function (){
var statearr_35401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35401[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_35401[(1)] = (1));

return statearr_35401;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_35378){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_35378);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e35402){var ex__33221__auto__ = e35402;
var statearr_35403_36601 = state_35378;
(statearr_35403_36601[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_35378[(4)]))){
var statearr_35404_36613 = state_35378;
(statearr_35404_36613[(1)] = cljs.core.first((state_35378[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36620 = state_35378;
state_35378 = G__36620;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_35378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_35378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_35405 = f__33338__auto__();
(statearr_35405[(6)] = c__33337__auto___36520);

return statearr_35405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
