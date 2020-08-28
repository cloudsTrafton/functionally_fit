goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45452 = arguments.length;
switch (G__45452) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45459 = (function (f,blockable,meta45460){
this.f = f;
this.blockable = blockable;
this.meta45460 = meta45460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45461,meta45460__$1){
var self__ = this;
var _45461__$1 = this;
return (new cljs.core.async.t_cljs$core$async45459(self__.f,self__.blockable,meta45460__$1));
}));

(cljs.core.async.t_cljs$core$async45459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45461){
var self__ = this;
var _45461__$1 = this;
return self__.meta45460;
}));

(cljs.core.async.t_cljs$core$async45459.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45460","meta45460",2026586595,null)], null);
}));

(cljs.core.async.t_cljs$core$async45459.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45459");

(cljs.core.async.t_cljs$core$async45459.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45459");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45459.
 */
cljs.core.async.__GT_t_cljs$core$async45459 = (function cljs$core$async$__GT_t_cljs$core$async45459(f__$1,blockable__$1,meta45460){
return (new cljs.core.async.t_cljs$core$async45459(f__$1,blockable__$1,meta45460));
});

}

return (new cljs.core.async.t_cljs$core$async45459(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45508 = arguments.length;
switch (G__45508) {
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
var G__45520 = arguments.length;
switch (G__45520) {
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
var G__45532 = arguments.length;
switch (G__45532) {
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
var val_47431 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47431) : fn1.call(null,val_47431));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47431) : fn1.call(null,val_47431));
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
var G__45544 = arguments.length;
switch (G__45544) {
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
var n__4613__auto___47435 = n;
var x_47436 = (0);
while(true){
if((x_47436 < n__4613__auto___47435)){
(a[x_47436] = x_47436);

var G__47437 = (x_47436 + (1));
x_47436 = G__47437;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45561 = (function (flag,meta45562){
this.flag = flag;
this.meta45562 = meta45562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45563,meta45562__$1){
var self__ = this;
var _45563__$1 = this;
return (new cljs.core.async.t_cljs$core$async45561(self__.flag,meta45562__$1));
}));

(cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45563){
var self__ = this;
var _45563__$1 = this;
return self__.meta45562;
}));

(cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45562","meta45562",-284818398,null)], null);
}));

(cljs.core.async.t_cljs$core$async45561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45561");

(cljs.core.async.t_cljs$core$async45561.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45561.
 */
cljs.core.async.__GT_t_cljs$core$async45561 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45561(flag__$1,meta45562){
return (new cljs.core.async.t_cljs$core$async45561(flag__$1,meta45562));
});

}

return (new cljs.core.async.t_cljs$core$async45561(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45588 = (function (flag,cb,meta45589){
this.flag = flag;
this.cb = cb;
this.meta45589 = meta45589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45590,meta45589__$1){
var self__ = this;
var _45590__$1 = this;
return (new cljs.core.async.t_cljs$core$async45588(self__.flag,self__.cb,meta45589__$1));
}));

(cljs.core.async.t_cljs$core$async45588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45590){
var self__ = this;
var _45590__$1 = this;
return self__.meta45589;
}));

(cljs.core.async.t_cljs$core$async45588.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45589","meta45589",-1203741939,null)], null);
}));

(cljs.core.async.t_cljs$core$async45588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45588");

(cljs.core.async.t_cljs$core$async45588.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45588.
 */
cljs.core.async.__GT_t_cljs$core$async45588 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45588(flag__$1,cb__$1,meta45589){
return (new cljs.core.async.t_cljs$core$async45588(flag__$1,cb__$1,meta45589));
});

}

return (new cljs.core.async.t_cljs$core$async45588(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45600_SHARP_){
var G__45602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45600_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45602) : fret.call(null,G__45602));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45601_SHARP_){
var G__45607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45601_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45607) : fret.call(null,G__45607));
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
var G__47443 = (i + (1));
i = G__47443;
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
var len__4736__auto___47444 = arguments.length;
var i__4737__auto___47445 = (0);
while(true){
if((i__4737__auto___47445 < len__4736__auto___47444)){
args__4742__auto__.push((arguments[i__4737__auto___47445]));

var G__47446 = (i__4737__auto___47445 + (1));
i__4737__auto___47445 = G__47446;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45624){
var map__45625 = p__45624;
var map__45625__$1 = (((((!((map__45625 == null))))?(((((map__45625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45625):map__45625);
var opts = map__45625__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45610){
var G__45611 = cljs.core.first(seq45610);
var seq45610__$1 = cljs.core.next(seq45610);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45611,seq45610__$1);
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
var G__45634 = arguments.length;
switch (G__45634) {
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
var c__33337__auto___47452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_45667){
var state_val_45669 = (state_45667[(1)]);
if((state_val_45669 === (7))){
var inst_45660 = (state_45667[(2)]);
var state_45667__$1 = state_45667;
var statearr_45672_47453 = state_45667__$1;
(statearr_45672_47453[(2)] = inst_45660);

(statearr_45672_47453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (1))){
var state_45667__$1 = state_45667;
var statearr_45674_47454 = state_45667__$1;
(statearr_45674_47454[(2)] = null);

(statearr_45674_47454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (4))){
var inst_45641 = (state_45667[(7)]);
var inst_45641__$1 = (state_45667[(2)]);
var inst_45643 = (inst_45641__$1 == null);
var state_45667__$1 = (function (){var statearr_45675 = state_45667;
(statearr_45675[(7)] = inst_45641__$1);

return statearr_45675;
})();
if(cljs.core.truth_(inst_45643)){
var statearr_45677_47455 = state_45667__$1;
(statearr_45677_47455[(1)] = (5));

} else {
var statearr_45678_47456 = state_45667__$1;
(statearr_45678_47456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (13))){
var state_45667__$1 = state_45667;
var statearr_45680_47457 = state_45667__$1;
(statearr_45680_47457[(2)] = null);

(statearr_45680_47457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (6))){
var inst_45641 = (state_45667[(7)]);
var state_45667__$1 = state_45667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45667__$1,(11),to,inst_45641);
} else {
if((state_val_45669 === (3))){
var inst_45662 = (state_45667[(2)]);
var state_45667__$1 = state_45667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45667__$1,inst_45662);
} else {
if((state_val_45669 === (12))){
var state_45667__$1 = state_45667;
var statearr_45683_47460 = state_45667__$1;
(statearr_45683_47460[(2)] = null);

(statearr_45683_47460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (2))){
var state_45667__$1 = state_45667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45667__$1,(4),from);
} else {
if((state_val_45669 === (11))){
var inst_45652 = (state_45667[(2)]);
var state_45667__$1 = state_45667;
if(cljs.core.truth_(inst_45652)){
var statearr_45685_47461 = state_45667__$1;
(statearr_45685_47461[(1)] = (12));

} else {
var statearr_45687_47462 = state_45667__$1;
(statearr_45687_47462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (9))){
var state_45667__$1 = state_45667;
var statearr_45688_47463 = state_45667__$1;
(statearr_45688_47463[(2)] = null);

(statearr_45688_47463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (5))){
var state_45667__$1 = state_45667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45689_47464 = state_45667__$1;
(statearr_45689_47464[(1)] = (8));

} else {
var statearr_45692_47465 = state_45667__$1;
(statearr_45692_47465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (14))){
var inst_45658 = (state_45667[(2)]);
var state_45667__$1 = state_45667;
var statearr_45696_47466 = state_45667__$1;
(statearr_45696_47466[(2)] = inst_45658);

(statearr_45696_47466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (10))){
var inst_45649 = (state_45667[(2)]);
var state_45667__$1 = state_45667;
var statearr_45697_47467 = state_45667__$1;
(statearr_45697_47467[(2)] = inst_45649);

(statearr_45697_47467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (8))){
var inst_45646 = cljs.core.async.close_BANG_(to);
var state_45667__$1 = state_45667;
var statearr_45699_47468 = state_45667__$1;
(statearr_45699_47468[(2)] = inst_45646);

(statearr_45699_47468[(1)] = (10));


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
var statearr_45700 = [null,null,null,null,null,null,null,null];
(statearr_45700[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_45700[(1)] = (1));

return statearr_45700;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_45667){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_45667);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e45701){var ex__33221__auto__ = e45701;
var statearr_45703_47471 = state_45667;
(statearr_45703_47471[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_45667[(4)]))){
var statearr_45706_47472 = state_45667;
(statearr_45706_47472[(1)] = cljs.core.first((state_45667[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47473 = state_45667;
state_45667 = G__47473;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_45667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_45667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_45708 = f__33338__auto__();
(statearr_45708[(6)] = c__33337__auto___47452);

return statearr_45708;
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
var process = (function (p__45709){
var vec__45710 = p__45709;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45710,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45710,(1),null);
var job = vec__45710;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33337__auto___47474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_45718){
var state_val_45719 = (state_45718[(1)]);
if((state_val_45719 === (1))){
var state_45718__$1 = state_45718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45718__$1,(2),res,v);
} else {
if((state_val_45719 === (2))){
var inst_45715 = (state_45718[(2)]);
var inst_45716 = cljs.core.async.close_BANG_(res);
var state_45718__$1 = (function (){var statearr_45721 = state_45718;
(statearr_45721[(7)] = inst_45715);

return statearr_45721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45718__$1,inst_45716);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0 = (function (){
var statearr_45722 = [null,null,null,null,null,null,null,null];
(statearr_45722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_45722[(1)] = (1));

return statearr_45722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_45718){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_45718);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e45723){var ex__33221__auto__ = e45723;
var statearr_45724_47476 = state_45718;
(statearr_45724_47476[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_45718[(4)]))){
var statearr_45725_47478 = state_45718;
(statearr_45725_47478[(1)] = cljs.core.first((state_45718[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47481 = state_45718;
state_45718 = G__47481;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_45718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_45718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_45727 = f__33338__auto__();
(statearr_45727[(6)] = c__33337__auto___47474);

return statearr_45727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45728){
var vec__45729 = p__45728;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45729,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45729,(1),null);
var job = vec__45729;
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
var n__4613__auto___47487 = n;
var __47488 = (0);
while(true){
if((__47488 < n__4613__auto___47487)){
var G__45741_47489 = type;
var G__45741_47490__$1 = (((G__45741_47489 instanceof cljs.core.Keyword))?G__45741_47489.fqn:null);
switch (G__45741_47490__$1) {
case "compute":
var c__33337__auto___47492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47488,c__33337__auto___47492,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async){
return (function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = ((function (__47488,c__33337__auto___47492,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async){
return (function (state_45758){
var state_val_45759 = (state_45758[(1)]);
if((state_val_45759 === (1))){
var state_45758__$1 = state_45758;
var statearr_45761_47495 = state_45758__$1;
(statearr_45761_47495[(2)] = null);

(statearr_45761_47495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (2))){
var state_45758__$1 = state_45758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45758__$1,(4),jobs);
} else {
if((state_val_45759 === (3))){
var inst_45756 = (state_45758[(2)]);
var state_45758__$1 = state_45758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45758__$1,inst_45756);
} else {
if((state_val_45759 === (4))){
var inst_45748 = (state_45758[(2)]);
var inst_45749 = process(inst_45748);
var state_45758__$1 = state_45758;
if(cljs.core.truth_(inst_45749)){
var statearr_45762_47496 = state_45758__$1;
(statearr_45762_47496[(1)] = (5));

} else {
var statearr_45764_47497 = state_45758__$1;
(statearr_45764_47497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (5))){
var state_45758__$1 = state_45758;
var statearr_45765_47498 = state_45758__$1;
(statearr_45765_47498[(2)] = null);

(statearr_45765_47498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (6))){
var state_45758__$1 = state_45758;
var statearr_45766_47499 = state_45758__$1;
(statearr_45766_47499[(2)] = null);

(statearr_45766_47499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45759 === (7))){
var inst_45754 = (state_45758[(2)]);
var state_45758__$1 = state_45758;
var statearr_45768_47503 = state_45758__$1;
(statearr_45768_47503[(2)] = inst_45754);

(statearr_45768_47503[(1)] = (3));


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
});})(__47488,c__33337__auto___47492,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async))
;
return ((function (__47488,switch__33217__auto__,c__33337__auto___47492,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0 = (function (){
var statearr_45769 = [null,null,null,null,null,null,null];
(statearr_45769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_45769[(1)] = (1));

return statearr_45769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_45758){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_45758);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e45770){var ex__33221__auto__ = e45770;
var statearr_45771_47506 = state_45758;
(statearr_45771_47506[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_45758[(4)]))){
var statearr_45772_47507 = state_45758;
(statearr_45772_47507[(1)] = cljs.core.first((state_45758[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47511 = state_45758;
state_45758 = G__47511;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_45758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_45758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
;})(__47488,switch__33217__auto__,c__33337__auto___47492,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async))
})();
var state__33339__auto__ = (function (){var statearr_45773 = f__33338__auto__();
(statearr_45773[(6)] = c__33337__auto___47492);

return statearr_45773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
});})(__47488,c__33337__auto___47492,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async))
);


break;
case "async":
var c__33337__auto___47512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47488,c__33337__auto___47512,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async){
return (function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = ((function (__47488,c__33337__auto___47512,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async){
return (function (state_45786){
var state_val_45787 = (state_45786[(1)]);
if((state_val_45787 === (1))){
var state_45786__$1 = state_45786;
var statearr_45791_47513 = state_45786__$1;
(statearr_45791_47513[(2)] = null);

(statearr_45791_47513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45787 === (2))){
var state_45786__$1 = state_45786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45786__$1,(4),jobs);
} else {
if((state_val_45787 === (3))){
var inst_45784 = (state_45786[(2)]);
var state_45786__$1 = state_45786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45786__$1,inst_45784);
} else {
if((state_val_45787 === (4))){
var inst_45776 = (state_45786[(2)]);
var inst_45777 = async(inst_45776);
var state_45786__$1 = state_45786;
if(cljs.core.truth_(inst_45777)){
var statearr_45797_47517 = state_45786__$1;
(statearr_45797_47517[(1)] = (5));

} else {
var statearr_45798_47526 = state_45786__$1;
(statearr_45798_47526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45787 === (5))){
var state_45786__$1 = state_45786;
var statearr_45799_47527 = state_45786__$1;
(statearr_45799_47527[(2)] = null);

(statearr_45799_47527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45787 === (6))){
var state_45786__$1 = state_45786;
var statearr_45803_47528 = state_45786__$1;
(statearr_45803_47528[(2)] = null);

(statearr_45803_47528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45787 === (7))){
var inst_45782 = (state_45786[(2)]);
var state_45786__$1 = state_45786;
var statearr_45804_47533 = state_45786__$1;
(statearr_45804_47533[(2)] = inst_45782);

(statearr_45804_47533[(1)] = (3));


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
});})(__47488,c__33337__auto___47512,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async))
;
return ((function (__47488,switch__33217__auto__,c__33337__auto___47512,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0 = (function (){
var statearr_45805 = [null,null,null,null,null,null,null];
(statearr_45805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_45805[(1)] = (1));

return statearr_45805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_45786){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_45786);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e45807){var ex__33221__auto__ = e45807;
var statearr_45808_47537 = state_45786;
(statearr_45808_47537[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_45786[(4)]))){
var statearr_45809_47541 = state_45786;
(statearr_45809_47541[(1)] = cljs.core.first((state_45786[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47542 = state_45786;
state_45786 = G__47542;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_45786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_45786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
;})(__47488,switch__33217__auto__,c__33337__auto___47512,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async))
})();
var state__33339__auto__ = (function (){var statearr_45810 = f__33338__auto__();
(statearr_45810[(6)] = c__33337__auto___47512);

return statearr_45810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
});})(__47488,c__33337__auto___47512,G__45741_47489,G__45741_47490__$1,n__4613__auto___47487,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45741_47490__$1)].join('')));

}

var G__47546 = (__47488 + (1));
__47488 = G__47546;
continue;
} else {
}
break;
}

var c__33337__auto___47547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_45835){
var state_val_45836 = (state_45835[(1)]);
if((state_val_45836 === (7))){
var inst_45831 = (state_45835[(2)]);
var state_45835__$1 = state_45835;
var statearr_45837_47548 = state_45835__$1;
(statearr_45837_47548[(2)] = inst_45831);

(statearr_45837_47548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (1))){
var state_45835__$1 = state_45835;
var statearr_45838_47554 = state_45835__$1;
(statearr_45838_47554[(2)] = null);

(statearr_45838_47554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (4))){
var inst_45814 = (state_45835[(7)]);
var inst_45814__$1 = (state_45835[(2)]);
var inst_45815 = (inst_45814__$1 == null);
var state_45835__$1 = (function (){var statearr_45839 = state_45835;
(statearr_45839[(7)] = inst_45814__$1);

return statearr_45839;
})();
if(cljs.core.truth_(inst_45815)){
var statearr_45840_47559 = state_45835__$1;
(statearr_45840_47559[(1)] = (5));

} else {
var statearr_45841_47560 = state_45835__$1;
(statearr_45841_47560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (6))){
var inst_45819 = (state_45835[(8)]);
var inst_45814 = (state_45835[(7)]);
var inst_45819__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45821 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45822 = [inst_45814,inst_45819__$1];
var inst_45823 = (new cljs.core.PersistentVector(null,2,(5),inst_45821,inst_45822,null));
var state_45835__$1 = (function (){var statearr_45842 = state_45835;
(statearr_45842[(8)] = inst_45819__$1);

return statearr_45842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45835__$1,(8),jobs,inst_45823);
} else {
if((state_val_45836 === (3))){
var inst_45833 = (state_45835[(2)]);
var state_45835__$1 = state_45835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45835__$1,inst_45833);
} else {
if((state_val_45836 === (2))){
var state_45835__$1 = state_45835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45835__$1,(4),from);
} else {
if((state_val_45836 === (9))){
var inst_45827 = (state_45835[(2)]);
var state_45835__$1 = (function (){var statearr_45845 = state_45835;
(statearr_45845[(9)] = inst_45827);

return statearr_45845;
})();
var statearr_45846_47570 = state_45835__$1;
(statearr_45846_47570[(2)] = null);

(statearr_45846_47570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (5))){
var inst_45817 = cljs.core.async.close_BANG_(jobs);
var state_45835__$1 = state_45835;
var statearr_45847_47572 = state_45835__$1;
(statearr_45847_47572[(2)] = inst_45817);

(statearr_45847_47572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (8))){
var inst_45819 = (state_45835[(8)]);
var inst_45825 = (state_45835[(2)]);
var state_45835__$1 = (function (){var statearr_45848 = state_45835;
(statearr_45848[(10)] = inst_45825);

return statearr_45848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45835__$1,(9),results,inst_45819);
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
var statearr_45851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_45851[(1)] = (1));

return statearr_45851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_45835){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_45835);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e45852){var ex__33221__auto__ = e45852;
var statearr_45853_47582 = state_45835;
(statearr_45853_47582[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_45835[(4)]))){
var statearr_45854_47585 = state_45835;
(statearr_45854_47585[(1)] = cljs.core.first((state_45835[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47586 = state_45835;
state_45835 = G__47586;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_45835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_45835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_45858 = f__33338__auto__();
(statearr_45858[(6)] = c__33337__auto___47547);

return statearr_45858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


var c__33337__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_45906){
var state_val_45907 = (state_45906[(1)]);
if((state_val_45907 === (7))){
var inst_45898 = (state_45906[(2)]);
var state_45906__$1 = state_45906;
var statearr_45908_47590 = state_45906__$1;
(statearr_45908_47590[(2)] = inst_45898);

(statearr_45908_47590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (20))){
var state_45906__$1 = state_45906;
var statearr_45909_47591 = state_45906__$1;
(statearr_45909_47591[(2)] = null);

(statearr_45909_47591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (1))){
var state_45906__$1 = state_45906;
var statearr_45910_47592 = state_45906__$1;
(statearr_45910_47592[(2)] = null);

(statearr_45910_47592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (4))){
var inst_45864 = (state_45906[(7)]);
var inst_45864__$1 = (state_45906[(2)]);
var inst_45868 = (inst_45864__$1 == null);
var state_45906__$1 = (function (){var statearr_45916 = state_45906;
(statearr_45916[(7)] = inst_45864__$1);

return statearr_45916;
})();
if(cljs.core.truth_(inst_45868)){
var statearr_45921_47594 = state_45906__$1;
(statearr_45921_47594[(1)] = (5));

} else {
var statearr_45922_47595 = state_45906__$1;
(statearr_45922_47595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (15))){
var inst_45880 = (state_45906[(8)]);
var state_45906__$1 = state_45906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45906__$1,(18),to,inst_45880);
} else {
if((state_val_45907 === (21))){
var inst_45893 = (state_45906[(2)]);
var state_45906__$1 = state_45906;
var statearr_45932_47596 = state_45906__$1;
(statearr_45932_47596[(2)] = inst_45893);

(statearr_45932_47596[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (13))){
var inst_45895 = (state_45906[(2)]);
var state_45906__$1 = (function (){var statearr_45933 = state_45906;
(statearr_45933[(9)] = inst_45895);

return statearr_45933;
})();
var statearr_45935_47599 = state_45906__$1;
(statearr_45935_47599[(2)] = null);

(statearr_45935_47599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (6))){
var inst_45864 = (state_45906[(7)]);
var state_45906__$1 = state_45906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45906__$1,(11),inst_45864);
} else {
if((state_val_45907 === (17))){
var inst_45888 = (state_45906[(2)]);
var state_45906__$1 = state_45906;
if(cljs.core.truth_(inst_45888)){
var statearr_45936_47603 = state_45906__$1;
(statearr_45936_47603[(1)] = (19));

} else {
var statearr_45937_47604 = state_45906__$1;
(statearr_45937_47604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (3))){
var inst_45900 = (state_45906[(2)]);
var state_45906__$1 = state_45906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45906__$1,inst_45900);
} else {
if((state_val_45907 === (12))){
var inst_45877 = (state_45906[(10)]);
var state_45906__$1 = state_45906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45906__$1,(14),inst_45877);
} else {
if((state_val_45907 === (2))){
var state_45906__$1 = state_45906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45906__$1,(4),results);
} else {
if((state_val_45907 === (19))){
var state_45906__$1 = state_45906;
var statearr_45938_47606 = state_45906__$1;
(statearr_45938_47606[(2)] = null);

(statearr_45938_47606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (11))){
var inst_45877 = (state_45906[(2)]);
var state_45906__$1 = (function (){var statearr_45941 = state_45906;
(statearr_45941[(10)] = inst_45877);

return statearr_45941;
})();
var statearr_45942_47607 = state_45906__$1;
(statearr_45942_47607[(2)] = null);

(statearr_45942_47607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (9))){
var state_45906__$1 = state_45906;
var statearr_45946_47608 = state_45906__$1;
(statearr_45946_47608[(2)] = null);

(statearr_45946_47608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (5))){
var state_45906__$1 = state_45906;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45948_47609 = state_45906__$1;
(statearr_45948_47609[(1)] = (8));

} else {
var statearr_45949_47610 = state_45906__$1;
(statearr_45949_47610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (14))){
var inst_45880 = (state_45906[(8)]);
var inst_45880__$1 = (state_45906[(2)]);
var inst_45881 = (inst_45880__$1 == null);
var inst_45882 = cljs.core.not(inst_45881);
var state_45906__$1 = (function (){var statearr_45950 = state_45906;
(statearr_45950[(8)] = inst_45880__$1);

return statearr_45950;
})();
if(inst_45882){
var statearr_45951_47611 = state_45906__$1;
(statearr_45951_47611[(1)] = (15));

} else {
var statearr_45952_47612 = state_45906__$1;
(statearr_45952_47612[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (16))){
var state_45906__$1 = state_45906;
var statearr_45957_47613 = state_45906__$1;
(statearr_45957_47613[(2)] = false);

(statearr_45957_47613[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (10))){
var inst_45874 = (state_45906[(2)]);
var state_45906__$1 = state_45906;
var statearr_45959_47615 = state_45906__$1;
(statearr_45959_47615[(2)] = inst_45874);

(statearr_45959_47615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (18))){
var inst_45885 = (state_45906[(2)]);
var state_45906__$1 = state_45906;
var statearr_45964_47618 = state_45906__$1;
(statearr_45964_47618[(2)] = inst_45885);

(statearr_45964_47618[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45907 === (8))){
var inst_45871 = cljs.core.async.close_BANG_(to);
var state_45906__$1 = state_45906;
var statearr_45965_47619 = state_45906__$1;
(statearr_45965_47619[(2)] = inst_45871);

(statearr_45965_47619[(1)] = (10));


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
var statearr_45966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__);

(statearr_45966[(1)] = (1));

return statearr_45966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1 = (function (state_45906){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_45906);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e45967){var ex__33221__auto__ = e45967;
var statearr_45968_47625 = state_45906;
(statearr_45968_47625[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_45906[(4)]))){
var statearr_45969_47626 = state_45906;
(statearr_45969_47626[(1)] = cljs.core.first((state_45906[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47627 = state_45906;
state_45906 = G__47627;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__ = function(state_45906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1.call(this,state_45906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_45970 = f__33338__auto__();
(statearr_45970[(6)] = c__33337__auto__);

return statearr_45970;
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
var G__45976 = arguments.length;
switch (G__45976) {
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
var G__45989 = arguments.length;
switch (G__45989) {
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
var G__46001 = arguments.length;
switch (G__46001) {
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
var c__33337__auto___47645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_46030){
var state_val_46031 = (state_46030[(1)]);
if((state_val_46031 === (7))){
var inst_46026 = (state_46030[(2)]);
var state_46030__$1 = state_46030;
var statearr_46035_47647 = state_46030__$1;
(statearr_46035_47647[(2)] = inst_46026);

(statearr_46035_47647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (1))){
var state_46030__$1 = state_46030;
var statearr_46036_47648 = state_46030__$1;
(statearr_46036_47648[(2)] = null);

(statearr_46036_47648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (4))){
var inst_46006 = (state_46030[(7)]);
var inst_46006__$1 = (state_46030[(2)]);
var inst_46007 = (inst_46006__$1 == null);
var state_46030__$1 = (function (){var statearr_46037 = state_46030;
(statearr_46037[(7)] = inst_46006__$1);

return statearr_46037;
})();
if(cljs.core.truth_(inst_46007)){
var statearr_46038_47649 = state_46030__$1;
(statearr_46038_47649[(1)] = (5));

} else {
var statearr_46039_47650 = state_46030__$1;
(statearr_46039_47650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (13))){
var state_46030__$1 = state_46030;
var statearr_46040_47652 = state_46030__$1;
(statearr_46040_47652[(2)] = null);

(statearr_46040_47652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (6))){
var inst_46006 = (state_46030[(7)]);
var inst_46013 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46006) : p.call(null,inst_46006));
var state_46030__$1 = state_46030;
if(cljs.core.truth_(inst_46013)){
var statearr_46041_47656 = state_46030__$1;
(statearr_46041_47656[(1)] = (9));

} else {
var statearr_46042_47659 = state_46030__$1;
(statearr_46042_47659[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (3))){
var inst_46028 = (state_46030[(2)]);
var state_46030__$1 = state_46030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46030__$1,inst_46028);
} else {
if((state_val_46031 === (12))){
var state_46030__$1 = state_46030;
var statearr_46045_47665 = state_46030__$1;
(statearr_46045_47665[(2)] = null);

(statearr_46045_47665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (2))){
var state_46030__$1 = state_46030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46030__$1,(4),ch);
} else {
if((state_val_46031 === (11))){
var inst_46006 = (state_46030[(7)]);
var inst_46017 = (state_46030[(2)]);
var state_46030__$1 = state_46030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46030__$1,(8),inst_46017,inst_46006);
} else {
if((state_val_46031 === (9))){
var state_46030__$1 = state_46030;
var statearr_46046_47669 = state_46030__$1;
(statearr_46046_47669[(2)] = tc);

(statearr_46046_47669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (5))){
var inst_46009 = cljs.core.async.close_BANG_(tc);
var inst_46010 = cljs.core.async.close_BANG_(fc);
var state_46030__$1 = (function (){var statearr_46047 = state_46030;
(statearr_46047[(8)] = inst_46009);

return statearr_46047;
})();
var statearr_46048_47670 = state_46030__$1;
(statearr_46048_47670[(2)] = inst_46010);

(statearr_46048_47670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (14))){
var inst_46024 = (state_46030[(2)]);
var state_46030__$1 = state_46030;
var statearr_46049_47678 = state_46030__$1;
(statearr_46049_47678[(2)] = inst_46024);

(statearr_46049_47678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (10))){
var state_46030__$1 = state_46030;
var statearr_46050_47679 = state_46030__$1;
(statearr_46050_47679[(2)] = fc);

(statearr_46050_47679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46031 === (8))){
var inst_46019 = (state_46030[(2)]);
var state_46030__$1 = state_46030;
if(cljs.core.truth_(inst_46019)){
var statearr_46051_47686 = state_46030__$1;
(statearr_46051_47686[(1)] = (12));

} else {
var statearr_46052_47687 = state_46030__$1;
(statearr_46052_47687[(1)] = (13));

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
var statearr_46053 = [null,null,null,null,null,null,null,null,null];
(statearr_46053[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_46053[(1)] = (1));

return statearr_46053;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_46030){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_46030);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e46054){var ex__33221__auto__ = e46054;
var statearr_46055_47696 = state_46030;
(statearr_46055_47696[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_46030[(4)]))){
var statearr_46056_47697 = state_46030;
(statearr_46056_47697[(1)] = cljs.core.first((state_46030[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47698 = state_46030;
state_46030 = G__47698;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_46030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_46030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_46057 = f__33338__auto__();
(statearr_46057[(6)] = c__33337__auto___47645);

return statearr_46057;
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
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_46079){
var state_val_46080 = (state_46079[(1)]);
if((state_val_46080 === (7))){
var inst_46075 = (state_46079[(2)]);
var state_46079__$1 = state_46079;
var statearr_46082_47701 = state_46079__$1;
(statearr_46082_47701[(2)] = inst_46075);

(statearr_46082_47701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46080 === (1))){
var inst_46058 = init;
var inst_46059 = inst_46058;
var state_46079__$1 = (function (){var statearr_46083 = state_46079;
(statearr_46083[(7)] = inst_46059);

return statearr_46083;
})();
var statearr_46084_47704 = state_46079__$1;
(statearr_46084_47704[(2)] = null);

(statearr_46084_47704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46080 === (4))){
var inst_46062 = (state_46079[(8)]);
var inst_46062__$1 = (state_46079[(2)]);
var inst_46063 = (inst_46062__$1 == null);
var state_46079__$1 = (function (){var statearr_46085 = state_46079;
(statearr_46085[(8)] = inst_46062__$1);

return statearr_46085;
})();
if(cljs.core.truth_(inst_46063)){
var statearr_46086_47711 = state_46079__$1;
(statearr_46086_47711[(1)] = (5));

} else {
var statearr_46087_47712 = state_46079__$1;
(statearr_46087_47712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46080 === (6))){
var inst_46066 = (state_46079[(9)]);
var inst_46059 = (state_46079[(7)]);
var inst_46062 = (state_46079[(8)]);
var inst_46066__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46059,inst_46062) : f.call(null,inst_46059,inst_46062));
var inst_46067 = cljs.core.reduced_QMARK_(inst_46066__$1);
var state_46079__$1 = (function (){var statearr_46088 = state_46079;
(statearr_46088[(9)] = inst_46066__$1);

return statearr_46088;
})();
if(inst_46067){
var statearr_46089_47715 = state_46079__$1;
(statearr_46089_47715[(1)] = (8));

} else {
var statearr_46090_47716 = state_46079__$1;
(statearr_46090_47716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46080 === (3))){
var inst_46077 = (state_46079[(2)]);
var state_46079__$1 = state_46079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46079__$1,inst_46077);
} else {
if((state_val_46080 === (2))){
var state_46079__$1 = state_46079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46079__$1,(4),ch);
} else {
if((state_val_46080 === (9))){
var inst_46066 = (state_46079[(9)]);
var inst_46059 = inst_46066;
var state_46079__$1 = (function (){var statearr_46091 = state_46079;
(statearr_46091[(7)] = inst_46059);

return statearr_46091;
})();
var statearr_46092_47717 = state_46079__$1;
(statearr_46092_47717[(2)] = null);

(statearr_46092_47717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46080 === (5))){
var inst_46059 = (state_46079[(7)]);
var state_46079__$1 = state_46079;
var statearr_46093_47718 = state_46079__$1;
(statearr_46093_47718[(2)] = inst_46059);

(statearr_46093_47718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46080 === (10))){
var inst_46073 = (state_46079[(2)]);
var state_46079__$1 = state_46079;
var statearr_46094_47719 = state_46079__$1;
(statearr_46094_47719[(2)] = inst_46073);

(statearr_46094_47719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46080 === (8))){
var inst_46066 = (state_46079[(9)]);
var inst_46069 = cljs.core.deref(inst_46066);
var state_46079__$1 = state_46079;
var statearr_46095_47720 = state_46079__$1;
(statearr_46095_47720[(2)] = inst_46069);

(statearr_46095_47720[(1)] = (10));


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
var statearr_46096 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46096[(0)] = cljs$core$async$reduce_$_state_machine__33218__auto__);

(statearr_46096[(1)] = (1));

return statearr_46096;
});
var cljs$core$async$reduce_$_state_machine__33218__auto____1 = (function (state_46079){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_46079);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e46097){var ex__33221__auto__ = e46097;
var statearr_46098_47721 = state_46079;
(statearr_46098_47721[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_46079[(4)]))){
var statearr_46099_47722 = state_46079;
(statearr_46099_47722[(1)] = cljs.core.first((state_46079[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47730 = state_46079;
state_46079 = G__47730;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33218__auto__ = function(state_46079){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33218__auto____1.call(this,state_46079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33218__auto____0;
cljs$core$async$reduce_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33218__auto____1;
return cljs$core$async$reduce_$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_46100 = f__33338__auto__();
(statearr_46100[(6)] = c__33337__auto__);

return statearr_46100;
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
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_46106){
var state_val_46107 = (state_46106[(1)]);
if((state_val_46107 === (1))){
var inst_46101 = cljs.core.async.reduce(f__$1,init,ch);
var state_46106__$1 = state_46106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46106__$1,(2),inst_46101);
} else {
if((state_val_46107 === (2))){
var inst_46103 = (state_46106[(2)]);
var inst_46104 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46103) : f__$1.call(null,inst_46103));
var state_46106__$1 = state_46106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46106__$1,inst_46104);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33218__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33218__auto____0 = (function (){
var statearr_46117 = [null,null,null,null,null,null,null];
(statearr_46117[(0)] = cljs$core$async$transduce_$_state_machine__33218__auto__);

(statearr_46117[(1)] = (1));

return statearr_46117;
});
var cljs$core$async$transduce_$_state_machine__33218__auto____1 = (function (state_46106){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_46106);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e46121){var ex__33221__auto__ = e46121;
var statearr_46126_47733 = state_46106;
(statearr_46126_47733[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_46106[(4)]))){
var statearr_46128_47735 = state_46106;
(statearr_46128_47735[(1)] = cljs.core.first((state_46106[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47736 = state_46106;
state_46106 = G__47736;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33218__auto__ = function(state_46106){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33218__auto____1.call(this,state_46106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33218__auto____0;
cljs$core$async$transduce_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33218__auto____1;
return cljs$core$async$transduce_$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_46137 = f__33338__auto__();
(statearr_46137[(6)] = c__33337__auto__);

return statearr_46137;
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
var G__46156 = arguments.length;
switch (G__46156) {
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
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_46186){
var state_val_46187 = (state_46186[(1)]);
if((state_val_46187 === (7))){
var inst_46168 = (state_46186[(2)]);
var state_46186__$1 = state_46186;
var statearr_46188_47750 = state_46186__$1;
(statearr_46188_47750[(2)] = inst_46168);

(statearr_46188_47750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (1))){
var inst_46161 = cljs.core.seq(coll);
var inst_46162 = inst_46161;
var state_46186__$1 = (function (){var statearr_46189 = state_46186;
(statearr_46189[(7)] = inst_46162);

return statearr_46189;
})();
var statearr_46190_47755 = state_46186__$1;
(statearr_46190_47755[(2)] = null);

(statearr_46190_47755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (4))){
var inst_46162 = (state_46186[(7)]);
var inst_46166 = cljs.core.first(inst_46162);
var state_46186__$1 = state_46186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46186__$1,(7),ch,inst_46166);
} else {
if((state_val_46187 === (13))){
var inst_46180 = (state_46186[(2)]);
var state_46186__$1 = state_46186;
var statearr_46191_47766 = state_46186__$1;
(statearr_46191_47766[(2)] = inst_46180);

(statearr_46191_47766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (6))){
var inst_46171 = (state_46186[(2)]);
var state_46186__$1 = state_46186;
if(cljs.core.truth_(inst_46171)){
var statearr_46193_47767 = state_46186__$1;
(statearr_46193_47767[(1)] = (8));

} else {
var statearr_46194_47768 = state_46186__$1;
(statearr_46194_47768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (3))){
var inst_46184 = (state_46186[(2)]);
var state_46186__$1 = state_46186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46186__$1,inst_46184);
} else {
if((state_val_46187 === (12))){
var state_46186__$1 = state_46186;
var statearr_46195_47769 = state_46186__$1;
(statearr_46195_47769[(2)] = null);

(statearr_46195_47769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (2))){
var inst_46162 = (state_46186[(7)]);
var state_46186__$1 = state_46186;
if(cljs.core.truth_(inst_46162)){
var statearr_46196_47770 = state_46186__$1;
(statearr_46196_47770[(1)] = (4));

} else {
var statearr_46197_47771 = state_46186__$1;
(statearr_46197_47771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (11))){
var inst_46177 = cljs.core.async.close_BANG_(ch);
var state_46186__$1 = state_46186;
var statearr_46198_47772 = state_46186__$1;
(statearr_46198_47772[(2)] = inst_46177);

(statearr_46198_47772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (9))){
var state_46186__$1 = state_46186;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46199_47773 = state_46186__$1;
(statearr_46199_47773[(1)] = (11));

} else {
var statearr_46200_47774 = state_46186__$1;
(statearr_46200_47774[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (5))){
var inst_46162 = (state_46186[(7)]);
var state_46186__$1 = state_46186;
var statearr_46201_47775 = state_46186__$1;
(statearr_46201_47775[(2)] = inst_46162);

(statearr_46201_47775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (10))){
var inst_46182 = (state_46186[(2)]);
var state_46186__$1 = state_46186;
var statearr_46202_47776 = state_46186__$1;
(statearr_46202_47776[(2)] = inst_46182);

(statearr_46202_47776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (8))){
var inst_46162 = (state_46186[(7)]);
var inst_46173 = cljs.core.next(inst_46162);
var inst_46162__$1 = inst_46173;
var state_46186__$1 = (function (){var statearr_46203 = state_46186;
(statearr_46203[(7)] = inst_46162__$1);

return statearr_46203;
})();
var statearr_46204_47777 = state_46186__$1;
(statearr_46204_47777[(2)] = null);

(statearr_46204_47777[(1)] = (2));


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
var statearr_46205 = [null,null,null,null,null,null,null,null];
(statearr_46205[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_46205[(1)] = (1));

return statearr_46205;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_46186){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_46186);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e46206){var ex__33221__auto__ = e46206;
var statearr_46207_47778 = state_46186;
(statearr_46207_47778[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_46186[(4)]))){
var statearr_46208_47779 = state_46186;
(statearr_46208_47779[(1)] = cljs.core.first((state_46186[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47780 = state_46186;
state_46186 = G__47780;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_46186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_46186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_46209 = f__33338__auto__();
(statearr_46209[(6)] = c__33337__auto__);

return statearr_46209;
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
var G__46211 = arguments.length;
switch (G__46211) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_47782 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_47782(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47784 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_47784(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47789 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_47789(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47790 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_47790(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46212 = (function (ch,cs,meta46213){
this.ch = ch;
this.cs = cs;
this.meta46213 = meta46213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46214,meta46213__$1){
var self__ = this;
var _46214__$1 = this;
return (new cljs.core.async.t_cljs$core$async46212(self__.ch,self__.cs,meta46213__$1));
}));

(cljs.core.async.t_cljs$core$async46212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46214){
var self__ = this;
var _46214__$1 = this;
return self__.meta46213;
}));

(cljs.core.async.t_cljs$core$async46212.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46212.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46212.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46212.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46212.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46213","meta46213",1100814204,null)], null);
}));

(cljs.core.async.t_cljs$core$async46212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46212");

(cljs.core.async.t_cljs$core$async46212.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46212.
 */
cljs.core.async.__GT_t_cljs$core$async46212 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46212(ch__$1,cs__$1,meta46213){
return (new cljs.core.async.t_cljs$core$async46212(ch__$1,cs__$1,meta46213));
});

}

return (new cljs.core.async.t_cljs$core$async46212(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33337__auto___47793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_46347){
var state_val_46348 = (state_46347[(1)]);
if((state_val_46348 === (7))){
var inst_46343 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46349_47794 = state_46347__$1;
(statearr_46349_47794[(2)] = inst_46343);

(statearr_46349_47794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (20))){
var inst_46248 = (state_46347[(7)]);
var inst_46260 = cljs.core.first(inst_46248);
var inst_46261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46260,(0),null);
var inst_46262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46260,(1),null);
var state_46347__$1 = (function (){var statearr_46350 = state_46347;
(statearr_46350[(8)] = inst_46261);

return statearr_46350;
})();
if(cljs.core.truth_(inst_46262)){
var statearr_46351_47804 = state_46347__$1;
(statearr_46351_47804[(1)] = (22));

} else {
var statearr_46352_47809 = state_46347__$1;
(statearr_46352_47809[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (27))){
var inst_46297 = (state_46347[(9)]);
var inst_46292 = (state_46347[(10)]);
var inst_46217 = (state_46347[(11)]);
var inst_46290 = (state_46347[(12)]);
var inst_46297__$1 = cljs.core._nth(inst_46290,inst_46292);
var inst_46298 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46297__$1,inst_46217,done);
var state_46347__$1 = (function (){var statearr_46353 = state_46347;
(statearr_46353[(9)] = inst_46297__$1);

return statearr_46353;
})();
if(cljs.core.truth_(inst_46298)){
var statearr_46354_47815 = state_46347__$1;
(statearr_46354_47815[(1)] = (30));

} else {
var statearr_46355_47820 = state_46347__$1;
(statearr_46355_47820[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (1))){
var state_46347__$1 = state_46347;
var statearr_46356_47821 = state_46347__$1;
(statearr_46356_47821[(2)] = null);

(statearr_46356_47821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (24))){
var inst_46248 = (state_46347[(7)]);
var inst_46267 = (state_46347[(2)]);
var inst_46268 = cljs.core.next(inst_46248);
var inst_46226 = inst_46268;
var inst_46227 = null;
var inst_46228 = (0);
var inst_46229 = (0);
var state_46347__$1 = (function (){var statearr_46357 = state_46347;
(statearr_46357[(13)] = inst_46229);

(statearr_46357[(14)] = inst_46227);

(statearr_46357[(15)] = inst_46226);

(statearr_46357[(16)] = inst_46267);

(statearr_46357[(17)] = inst_46228);

return statearr_46357;
})();
var statearr_46358_47822 = state_46347__$1;
(statearr_46358_47822[(2)] = null);

(statearr_46358_47822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (39))){
var state_46347__$1 = state_46347;
var statearr_46362_47823 = state_46347__$1;
(statearr_46362_47823[(2)] = null);

(statearr_46362_47823[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (4))){
var inst_46217 = (state_46347[(11)]);
var inst_46217__$1 = (state_46347[(2)]);
var inst_46218 = (inst_46217__$1 == null);
var state_46347__$1 = (function (){var statearr_46363 = state_46347;
(statearr_46363[(11)] = inst_46217__$1);

return statearr_46363;
})();
if(cljs.core.truth_(inst_46218)){
var statearr_46364_47824 = state_46347__$1;
(statearr_46364_47824[(1)] = (5));

} else {
var statearr_46365_47825 = state_46347__$1;
(statearr_46365_47825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (15))){
var inst_46229 = (state_46347[(13)]);
var inst_46227 = (state_46347[(14)]);
var inst_46226 = (state_46347[(15)]);
var inst_46228 = (state_46347[(17)]);
var inst_46244 = (state_46347[(2)]);
var inst_46245 = (inst_46229 + (1));
var tmp46359 = inst_46227;
var tmp46360 = inst_46226;
var tmp46361 = inst_46228;
var inst_46226__$1 = tmp46360;
var inst_46227__$1 = tmp46359;
var inst_46228__$1 = tmp46361;
var inst_46229__$1 = inst_46245;
var state_46347__$1 = (function (){var statearr_46366 = state_46347;
(statearr_46366[(13)] = inst_46229__$1);

(statearr_46366[(18)] = inst_46244);

(statearr_46366[(14)] = inst_46227__$1);

(statearr_46366[(15)] = inst_46226__$1);

(statearr_46366[(17)] = inst_46228__$1);

return statearr_46366;
})();
var statearr_46367_47826 = state_46347__$1;
(statearr_46367_47826[(2)] = null);

(statearr_46367_47826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (21))){
var inst_46271 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46371_47829 = state_46347__$1;
(statearr_46371_47829[(2)] = inst_46271);

(statearr_46371_47829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (31))){
var inst_46297 = (state_46347[(9)]);
var inst_46301 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46297);
var state_46347__$1 = state_46347;
var statearr_46372_47830 = state_46347__$1;
(statearr_46372_47830[(2)] = inst_46301);

(statearr_46372_47830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (32))){
var inst_46291 = (state_46347[(19)]);
var inst_46289 = (state_46347[(20)]);
var inst_46292 = (state_46347[(10)]);
var inst_46290 = (state_46347[(12)]);
var inst_46303 = (state_46347[(2)]);
var inst_46304 = (inst_46292 + (1));
var tmp46368 = inst_46291;
var tmp46369 = inst_46289;
var tmp46370 = inst_46290;
var inst_46289__$1 = tmp46369;
var inst_46290__$1 = tmp46370;
var inst_46291__$1 = tmp46368;
var inst_46292__$1 = inst_46304;
var state_46347__$1 = (function (){var statearr_46373 = state_46347;
(statearr_46373[(21)] = inst_46303);

(statearr_46373[(19)] = inst_46291__$1);

(statearr_46373[(20)] = inst_46289__$1);

(statearr_46373[(10)] = inst_46292__$1);

(statearr_46373[(12)] = inst_46290__$1);

return statearr_46373;
})();
var statearr_46374_47831 = state_46347__$1;
(statearr_46374_47831[(2)] = null);

(statearr_46374_47831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (40))){
var inst_46316 = (state_46347[(22)]);
var inst_46320 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46316);
var state_46347__$1 = state_46347;
var statearr_46375_47832 = state_46347__$1;
(statearr_46375_47832[(2)] = inst_46320);

(statearr_46375_47832[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (33))){
var inst_46307 = (state_46347[(23)]);
var inst_46309 = cljs.core.chunked_seq_QMARK_(inst_46307);
var state_46347__$1 = state_46347;
if(inst_46309){
var statearr_46376_47833 = state_46347__$1;
(statearr_46376_47833[(1)] = (36));

} else {
var statearr_46377_47834 = state_46347__$1;
(statearr_46377_47834[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (13))){
var inst_46238 = (state_46347[(24)]);
var inst_46241 = cljs.core.async.close_BANG_(inst_46238);
var state_46347__$1 = state_46347;
var statearr_46378_47835 = state_46347__$1;
(statearr_46378_47835[(2)] = inst_46241);

(statearr_46378_47835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (22))){
var inst_46261 = (state_46347[(8)]);
var inst_46264 = cljs.core.async.close_BANG_(inst_46261);
var state_46347__$1 = state_46347;
var statearr_46379_47836 = state_46347__$1;
(statearr_46379_47836[(2)] = inst_46264);

(statearr_46379_47836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (36))){
var inst_46307 = (state_46347[(23)]);
var inst_46311 = cljs.core.chunk_first(inst_46307);
var inst_46312 = cljs.core.chunk_rest(inst_46307);
var inst_46313 = cljs.core.count(inst_46311);
var inst_46289 = inst_46312;
var inst_46290 = inst_46311;
var inst_46291 = inst_46313;
var inst_46292 = (0);
var state_46347__$1 = (function (){var statearr_46380 = state_46347;
(statearr_46380[(19)] = inst_46291);

(statearr_46380[(20)] = inst_46289);

(statearr_46380[(10)] = inst_46292);

(statearr_46380[(12)] = inst_46290);

return statearr_46380;
})();
var statearr_46381_47837 = state_46347__$1;
(statearr_46381_47837[(2)] = null);

(statearr_46381_47837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (41))){
var inst_46307 = (state_46347[(23)]);
var inst_46322 = (state_46347[(2)]);
var inst_46323 = cljs.core.next(inst_46307);
var inst_46289 = inst_46323;
var inst_46290 = null;
var inst_46291 = (0);
var inst_46292 = (0);
var state_46347__$1 = (function (){var statearr_46382 = state_46347;
(statearr_46382[(19)] = inst_46291);

(statearr_46382[(20)] = inst_46289);

(statearr_46382[(10)] = inst_46292);

(statearr_46382[(25)] = inst_46322);

(statearr_46382[(12)] = inst_46290);

return statearr_46382;
})();
var statearr_46383_47838 = state_46347__$1;
(statearr_46383_47838[(2)] = null);

(statearr_46383_47838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (43))){
var state_46347__$1 = state_46347;
var statearr_46384_47839 = state_46347__$1;
(statearr_46384_47839[(2)] = null);

(statearr_46384_47839[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (29))){
var inst_46331 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46385_47841 = state_46347__$1;
(statearr_46385_47841[(2)] = inst_46331);

(statearr_46385_47841[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (44))){
var inst_46340 = (state_46347[(2)]);
var state_46347__$1 = (function (){var statearr_46386 = state_46347;
(statearr_46386[(26)] = inst_46340);

return statearr_46386;
})();
var statearr_46387_47842 = state_46347__$1;
(statearr_46387_47842[(2)] = null);

(statearr_46387_47842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (6))){
var inst_46281 = (state_46347[(27)]);
var inst_46280 = cljs.core.deref(cs);
var inst_46281__$1 = cljs.core.keys(inst_46280);
var inst_46282 = cljs.core.count(inst_46281__$1);
var inst_46283 = cljs.core.reset_BANG_(dctr,inst_46282);
var inst_46288 = cljs.core.seq(inst_46281__$1);
var inst_46289 = inst_46288;
var inst_46290 = null;
var inst_46291 = (0);
var inst_46292 = (0);
var state_46347__$1 = (function (){var statearr_46388 = state_46347;
(statearr_46388[(28)] = inst_46283);

(statearr_46388[(27)] = inst_46281__$1);

(statearr_46388[(19)] = inst_46291);

(statearr_46388[(20)] = inst_46289);

(statearr_46388[(10)] = inst_46292);

(statearr_46388[(12)] = inst_46290);

return statearr_46388;
})();
var statearr_46389_47847 = state_46347__$1;
(statearr_46389_47847[(2)] = null);

(statearr_46389_47847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (28))){
var inst_46289 = (state_46347[(20)]);
var inst_46307 = (state_46347[(23)]);
var inst_46307__$1 = cljs.core.seq(inst_46289);
var state_46347__$1 = (function (){var statearr_46390 = state_46347;
(statearr_46390[(23)] = inst_46307__$1);

return statearr_46390;
})();
if(inst_46307__$1){
var statearr_46391_47848 = state_46347__$1;
(statearr_46391_47848[(1)] = (33));

} else {
var statearr_46392_47849 = state_46347__$1;
(statearr_46392_47849[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (25))){
var inst_46291 = (state_46347[(19)]);
var inst_46292 = (state_46347[(10)]);
var inst_46294 = (inst_46292 < inst_46291);
var inst_46295 = inst_46294;
var state_46347__$1 = state_46347;
if(cljs.core.truth_(inst_46295)){
var statearr_46393_47850 = state_46347__$1;
(statearr_46393_47850[(1)] = (27));

} else {
var statearr_46394_47851 = state_46347__$1;
(statearr_46394_47851[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (34))){
var state_46347__$1 = state_46347;
var statearr_46395_47852 = state_46347__$1;
(statearr_46395_47852[(2)] = null);

(statearr_46395_47852[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (17))){
var state_46347__$1 = state_46347;
var statearr_46396_47853 = state_46347__$1;
(statearr_46396_47853[(2)] = null);

(statearr_46396_47853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (3))){
var inst_46345 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46347__$1,inst_46345);
} else {
if((state_val_46348 === (12))){
var inst_46276 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46397_47854 = state_46347__$1;
(statearr_46397_47854[(2)] = inst_46276);

(statearr_46397_47854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (2))){
var state_46347__$1 = state_46347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46347__$1,(4),ch);
} else {
if((state_val_46348 === (23))){
var state_46347__$1 = state_46347;
var statearr_46402_47855 = state_46347__$1;
(statearr_46402_47855[(2)] = null);

(statearr_46402_47855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (35))){
var inst_46329 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46403_47856 = state_46347__$1;
(statearr_46403_47856[(2)] = inst_46329);

(statearr_46403_47856[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (19))){
var inst_46248 = (state_46347[(7)]);
var inst_46252 = cljs.core.chunk_first(inst_46248);
var inst_46253 = cljs.core.chunk_rest(inst_46248);
var inst_46254 = cljs.core.count(inst_46252);
var inst_46226 = inst_46253;
var inst_46227 = inst_46252;
var inst_46228 = inst_46254;
var inst_46229 = (0);
var state_46347__$1 = (function (){var statearr_46404 = state_46347;
(statearr_46404[(13)] = inst_46229);

(statearr_46404[(14)] = inst_46227);

(statearr_46404[(15)] = inst_46226);

(statearr_46404[(17)] = inst_46228);

return statearr_46404;
})();
var statearr_46405_47864 = state_46347__$1;
(statearr_46405_47864[(2)] = null);

(statearr_46405_47864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (11))){
var inst_46248 = (state_46347[(7)]);
var inst_46226 = (state_46347[(15)]);
var inst_46248__$1 = cljs.core.seq(inst_46226);
var state_46347__$1 = (function (){var statearr_46406 = state_46347;
(statearr_46406[(7)] = inst_46248__$1);

return statearr_46406;
})();
if(inst_46248__$1){
var statearr_46407_47868 = state_46347__$1;
(statearr_46407_47868[(1)] = (16));

} else {
var statearr_46408_47869 = state_46347__$1;
(statearr_46408_47869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (9))){
var inst_46278 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46409_47870 = state_46347__$1;
(statearr_46409_47870[(2)] = inst_46278);

(statearr_46409_47870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (5))){
var inst_46224 = cljs.core.deref(cs);
var inst_46225 = cljs.core.seq(inst_46224);
var inst_46226 = inst_46225;
var inst_46227 = null;
var inst_46228 = (0);
var inst_46229 = (0);
var state_46347__$1 = (function (){var statearr_46410 = state_46347;
(statearr_46410[(13)] = inst_46229);

(statearr_46410[(14)] = inst_46227);

(statearr_46410[(15)] = inst_46226);

(statearr_46410[(17)] = inst_46228);

return statearr_46410;
})();
var statearr_46411_47874 = state_46347__$1;
(statearr_46411_47874[(2)] = null);

(statearr_46411_47874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (14))){
var state_46347__$1 = state_46347;
var statearr_46412_47878 = state_46347__$1;
(statearr_46412_47878[(2)] = null);

(statearr_46412_47878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (45))){
var inst_46337 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46413_47883 = state_46347__$1;
(statearr_46413_47883[(2)] = inst_46337);

(statearr_46413_47883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (26))){
var inst_46281 = (state_46347[(27)]);
var inst_46333 = (state_46347[(2)]);
var inst_46334 = cljs.core.seq(inst_46281);
var state_46347__$1 = (function (){var statearr_46414 = state_46347;
(statearr_46414[(29)] = inst_46333);

return statearr_46414;
})();
if(inst_46334){
var statearr_46415_47884 = state_46347__$1;
(statearr_46415_47884[(1)] = (42));

} else {
var statearr_46416_47885 = state_46347__$1;
(statearr_46416_47885[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (16))){
var inst_46248 = (state_46347[(7)]);
var inst_46250 = cljs.core.chunked_seq_QMARK_(inst_46248);
var state_46347__$1 = state_46347;
if(inst_46250){
var statearr_46417_47886 = state_46347__$1;
(statearr_46417_47886[(1)] = (19));

} else {
var statearr_46418_47887 = state_46347__$1;
(statearr_46418_47887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (38))){
var inst_46326 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46419_47888 = state_46347__$1;
(statearr_46419_47888[(2)] = inst_46326);

(statearr_46419_47888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (30))){
var state_46347__$1 = state_46347;
var statearr_46420_47889 = state_46347__$1;
(statearr_46420_47889[(2)] = null);

(statearr_46420_47889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (10))){
var inst_46229 = (state_46347[(13)]);
var inst_46227 = (state_46347[(14)]);
var inst_46237 = cljs.core._nth(inst_46227,inst_46229);
var inst_46238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46237,(0),null);
var inst_46239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46237,(1),null);
var state_46347__$1 = (function (){var statearr_46421 = state_46347;
(statearr_46421[(24)] = inst_46238);

return statearr_46421;
})();
if(cljs.core.truth_(inst_46239)){
var statearr_46422_47890 = state_46347__$1;
(statearr_46422_47890[(1)] = (13));

} else {
var statearr_46423_47891 = state_46347__$1;
(statearr_46423_47891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (18))){
var inst_46274 = (state_46347[(2)]);
var state_46347__$1 = state_46347;
var statearr_46424_47892 = state_46347__$1;
(statearr_46424_47892[(2)] = inst_46274);

(statearr_46424_47892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (42))){
var state_46347__$1 = state_46347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46347__$1,(45),dchan);
} else {
if((state_val_46348 === (37))){
var inst_46217 = (state_46347[(11)]);
var inst_46316 = (state_46347[(22)]);
var inst_46307 = (state_46347[(23)]);
var inst_46316__$1 = cljs.core.first(inst_46307);
var inst_46317 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46316__$1,inst_46217,done);
var state_46347__$1 = (function (){var statearr_46427 = state_46347;
(statearr_46427[(22)] = inst_46316__$1);

return statearr_46427;
})();
if(cljs.core.truth_(inst_46317)){
var statearr_46428_47893 = state_46347__$1;
(statearr_46428_47893[(1)] = (39));

} else {
var statearr_46429_47894 = state_46347__$1;
(statearr_46429_47894[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46348 === (8))){
var inst_46229 = (state_46347[(13)]);
var inst_46228 = (state_46347[(17)]);
var inst_46231 = (inst_46229 < inst_46228);
var inst_46232 = inst_46231;
var state_46347__$1 = state_46347;
if(cljs.core.truth_(inst_46232)){
var statearr_46430_47895 = state_46347__$1;
(statearr_46430_47895[(1)] = (10));

} else {
var statearr_46431_47896 = state_46347__$1;
(statearr_46431_47896[(1)] = (11));

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
var statearr_46432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46432[(0)] = cljs$core$async$mult_$_state_machine__33218__auto__);

(statearr_46432[(1)] = (1));

return statearr_46432;
});
var cljs$core$async$mult_$_state_machine__33218__auto____1 = (function (state_46347){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_46347);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e46433){var ex__33221__auto__ = e46433;
var statearr_46434_47897 = state_46347;
(statearr_46434_47897[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_46347[(4)]))){
var statearr_46435_47898 = state_46347;
(statearr_46435_47898[(1)] = cljs.core.first((state_46347[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47899 = state_46347;
state_46347 = G__47899;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33218__auto__ = function(state_46347){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33218__auto____1.call(this,state_46347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33218__auto____0;
cljs$core$async$mult_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33218__auto____1;
return cljs$core$async$mult_$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_46436 = f__33338__auto__();
(statearr_46436[(6)] = c__33337__auto___47793);

return statearr_46436;
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
var G__46438 = arguments.length;
switch (G__46438) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_47903 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_47903(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47904 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_47904(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47905 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47905(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47906 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_47906(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47907 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47907(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47912 = arguments.length;
var i__4737__auto___47913 = (0);
while(true){
if((i__4737__auto___47913 < len__4736__auto___47912)){
args__4742__auto__.push((arguments[i__4737__auto___47913]));

var G__47914 = (i__4737__auto___47913 + (1));
i__4737__auto___47913 = G__47914;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46455){
var map__46456 = p__46455;
var map__46456__$1 = (((((!((map__46456 == null))))?(((((map__46456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46456):map__46456);
var opts = map__46456__$1;
var statearr_46458_47915 = state;
(statearr_46458_47915[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46459_47917 = state;
(statearr_46459_47917[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46460_47918 = state;
(statearr_46460_47918[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46447){
var G__46448 = cljs.core.first(seq46447);
var seq46447__$1 = cljs.core.next(seq46447);
var G__46449 = cljs.core.first(seq46447__$1);
var seq46447__$2 = cljs.core.next(seq46447__$1);
var G__46450 = cljs.core.first(seq46447__$2);
var seq46447__$3 = cljs.core.next(seq46447__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46448,G__46449,G__46450,seq46447__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46461 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46462){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46462 = meta46462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46463,meta46462__$1){
var self__ = this;
var _46463__$1 = this;
return (new cljs.core.async.t_cljs$core$async46461(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46462__$1));
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46463){
var self__ = this;
var _46463__$1 = this;
return self__.meta46462;
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46461.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46462","meta46462",-2101557886,null)], null);
}));

(cljs.core.async.t_cljs$core$async46461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46461");

(cljs.core.async.t_cljs$core$async46461.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46461.
 */
cljs.core.async.__GT_t_cljs$core$async46461 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46461(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46462){
return (new cljs.core.async.t_cljs$core$async46461(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46462));
});

}

return (new cljs.core.async.t_cljs$core$async46461(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33337__auto___47929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_46573){
var state_val_46574 = (state_46573[(1)]);
if((state_val_46574 === (7))){
var inst_46482 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
var statearr_46578_47930 = state_46573__$1;
(statearr_46578_47930[(2)] = inst_46482);

(statearr_46578_47930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (20))){
var inst_46494 = (state_46573[(7)]);
var state_46573__$1 = state_46573;
var statearr_46579_47931 = state_46573__$1;
(statearr_46579_47931[(2)] = inst_46494);

(statearr_46579_47931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (27))){
var state_46573__$1 = state_46573;
var statearr_46583_47932 = state_46573__$1;
(statearr_46583_47932[(2)] = null);

(statearr_46583_47932[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (1))){
var inst_46469 = (state_46573[(8)]);
var inst_46469__$1 = calc_state();
var inst_46471 = (inst_46469__$1 == null);
var inst_46472 = cljs.core.not(inst_46471);
var state_46573__$1 = (function (){var statearr_46584 = state_46573;
(statearr_46584[(8)] = inst_46469__$1);

return statearr_46584;
})();
if(inst_46472){
var statearr_46585_47933 = state_46573__$1;
(statearr_46585_47933[(1)] = (2));

} else {
var statearr_46586_47934 = state_46573__$1;
(statearr_46586_47934[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (24))){
var inst_46518 = (state_46573[(9)]);
var inst_46542 = (state_46573[(10)]);
var inst_46527 = (state_46573[(11)]);
var inst_46542__$1 = (inst_46518.cljs$core$IFn$_invoke$arity$1 ? inst_46518.cljs$core$IFn$_invoke$arity$1(inst_46527) : inst_46518.call(null,inst_46527));
var state_46573__$1 = (function (){var statearr_46590 = state_46573;
(statearr_46590[(10)] = inst_46542__$1);

return statearr_46590;
})();
if(cljs.core.truth_(inst_46542__$1)){
var statearr_46591_47935 = state_46573__$1;
(statearr_46591_47935[(1)] = (29));

} else {
var statearr_46592_47936 = state_46573__$1;
(statearr_46592_47936[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (4))){
var inst_46485 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
if(cljs.core.truth_(inst_46485)){
var statearr_46596_47940 = state_46573__$1;
(statearr_46596_47940[(1)] = (8));

} else {
var statearr_46597_47941 = state_46573__$1;
(statearr_46597_47941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (15))){
var inst_46512 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
if(cljs.core.truth_(inst_46512)){
var statearr_46598_47942 = state_46573__$1;
(statearr_46598_47942[(1)] = (19));

} else {
var statearr_46599_47943 = state_46573__$1;
(statearr_46599_47943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (21))){
var inst_46517 = (state_46573[(12)]);
var inst_46517__$1 = (state_46573[(2)]);
var inst_46518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46517__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46517__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46517__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46573__$1 = (function (){var statearr_46600 = state_46573;
(statearr_46600[(12)] = inst_46517__$1);

(statearr_46600[(9)] = inst_46518);

(statearr_46600[(13)] = inst_46519);

return statearr_46600;
})();
return cljs.core.async.ioc_alts_BANG_(state_46573__$1,(22),inst_46520);
} else {
if((state_val_46574 === (31))){
var inst_46551 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
if(cljs.core.truth_(inst_46551)){
var statearr_46601_47944 = state_46573__$1;
(statearr_46601_47944[(1)] = (32));

} else {
var statearr_46602_47945 = state_46573__$1;
(statearr_46602_47945[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (32))){
var inst_46526 = (state_46573[(14)]);
var state_46573__$1 = state_46573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46573__$1,(35),out,inst_46526);
} else {
if((state_val_46574 === (33))){
var inst_46517 = (state_46573[(12)]);
var inst_46494 = inst_46517;
var state_46573__$1 = (function (){var statearr_46604 = state_46573;
(statearr_46604[(7)] = inst_46494);

return statearr_46604;
})();
var statearr_46605_47946 = state_46573__$1;
(statearr_46605_47946[(2)] = null);

(statearr_46605_47946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (13))){
var inst_46494 = (state_46573[(7)]);
var inst_46501 = inst_46494.cljs$lang$protocol_mask$partition0$;
var inst_46502 = (inst_46501 & (64));
var inst_46503 = inst_46494.cljs$core$ISeq$;
var inst_46504 = (cljs.core.PROTOCOL_SENTINEL === inst_46503);
var inst_46505 = ((inst_46502) || (inst_46504));
var state_46573__$1 = state_46573;
if(cljs.core.truth_(inst_46505)){
var statearr_46607_47947 = state_46573__$1;
(statearr_46607_47947[(1)] = (16));

} else {
var statearr_46608_47948 = state_46573__$1;
(statearr_46608_47948[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (22))){
var inst_46527 = (state_46573[(11)]);
var inst_46526 = (state_46573[(14)]);
var inst_46525 = (state_46573[(2)]);
var inst_46526__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46525,(0),null);
var inst_46527__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46525,(1),null);
var inst_46528 = (inst_46526__$1 == null);
var inst_46529 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46527__$1,change);
var inst_46530 = ((inst_46528) || (inst_46529));
var state_46573__$1 = (function (){var statearr_46609 = state_46573;
(statearr_46609[(11)] = inst_46527__$1);

(statearr_46609[(14)] = inst_46526__$1);

return statearr_46609;
})();
if(cljs.core.truth_(inst_46530)){
var statearr_46610_47950 = state_46573__$1;
(statearr_46610_47950[(1)] = (23));

} else {
var statearr_46614_47951 = state_46573__$1;
(statearr_46614_47951[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (36))){
var inst_46517 = (state_46573[(12)]);
var inst_46494 = inst_46517;
var state_46573__$1 = (function (){var statearr_46615 = state_46573;
(statearr_46615[(7)] = inst_46494);

return statearr_46615;
})();
var statearr_46616_47952 = state_46573__$1;
(statearr_46616_47952[(2)] = null);

(statearr_46616_47952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (29))){
var inst_46542 = (state_46573[(10)]);
var state_46573__$1 = state_46573;
var statearr_46617_47953 = state_46573__$1;
(statearr_46617_47953[(2)] = inst_46542);

(statearr_46617_47953[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (6))){
var state_46573__$1 = state_46573;
var statearr_46618_47954 = state_46573__$1;
(statearr_46618_47954[(2)] = false);

(statearr_46618_47954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (28))){
var inst_46537 = (state_46573[(2)]);
var inst_46538 = calc_state();
var inst_46494 = inst_46538;
var state_46573__$1 = (function (){var statearr_46619 = state_46573;
(statearr_46619[(7)] = inst_46494);

(statearr_46619[(15)] = inst_46537);

return statearr_46619;
})();
var statearr_46620_47959 = state_46573__$1;
(statearr_46620_47959[(2)] = null);

(statearr_46620_47959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (25))){
var inst_46565 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
var statearr_46621_47961 = state_46573__$1;
(statearr_46621_47961[(2)] = inst_46565);

(statearr_46621_47961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (34))){
var inst_46563 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
var statearr_46622_47962 = state_46573__$1;
(statearr_46622_47962[(2)] = inst_46563);

(statearr_46622_47962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (17))){
var state_46573__$1 = state_46573;
var statearr_46623_47963 = state_46573__$1;
(statearr_46623_47963[(2)] = false);

(statearr_46623_47963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (3))){
var state_46573__$1 = state_46573;
var statearr_46624_47964 = state_46573__$1;
(statearr_46624_47964[(2)] = false);

(statearr_46624_47964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (12))){
var inst_46567 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46573__$1,inst_46567);
} else {
if((state_val_46574 === (2))){
var inst_46469 = (state_46573[(8)]);
var inst_46474 = inst_46469.cljs$lang$protocol_mask$partition0$;
var inst_46475 = (inst_46474 & (64));
var inst_46476 = inst_46469.cljs$core$ISeq$;
var inst_46477 = (cljs.core.PROTOCOL_SENTINEL === inst_46476);
var inst_46478 = ((inst_46475) || (inst_46477));
var state_46573__$1 = state_46573;
if(cljs.core.truth_(inst_46478)){
var statearr_46625_47966 = state_46573__$1;
(statearr_46625_47966[(1)] = (5));

} else {
var statearr_46626_47967 = state_46573__$1;
(statearr_46626_47967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (23))){
var inst_46526 = (state_46573[(14)]);
var inst_46532 = (inst_46526 == null);
var state_46573__$1 = state_46573;
if(cljs.core.truth_(inst_46532)){
var statearr_46627_47972 = state_46573__$1;
(statearr_46627_47972[(1)] = (26));

} else {
var statearr_46628_47973 = state_46573__$1;
(statearr_46628_47973[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (35))){
var inst_46554 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
if(cljs.core.truth_(inst_46554)){
var statearr_46629_47974 = state_46573__$1;
(statearr_46629_47974[(1)] = (36));

} else {
var statearr_46630_47975 = state_46573__$1;
(statearr_46630_47975[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (19))){
var inst_46494 = (state_46573[(7)]);
var inst_46514 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46494);
var state_46573__$1 = state_46573;
var statearr_46631_47980 = state_46573__$1;
(statearr_46631_47980[(2)] = inst_46514);

(statearr_46631_47980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (11))){
var inst_46494 = (state_46573[(7)]);
var inst_46498 = (inst_46494 == null);
var inst_46499 = cljs.core.not(inst_46498);
var state_46573__$1 = state_46573;
if(inst_46499){
var statearr_46632_47982 = state_46573__$1;
(statearr_46632_47982[(1)] = (13));

} else {
var statearr_46633_47983 = state_46573__$1;
(statearr_46633_47983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (9))){
var inst_46469 = (state_46573[(8)]);
var state_46573__$1 = state_46573;
var statearr_46634_47984 = state_46573__$1;
(statearr_46634_47984[(2)] = inst_46469);

(statearr_46634_47984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (5))){
var state_46573__$1 = state_46573;
var statearr_46635_47985 = state_46573__$1;
(statearr_46635_47985[(2)] = true);

(statearr_46635_47985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (14))){
var state_46573__$1 = state_46573;
var statearr_46636_47986 = state_46573__$1;
(statearr_46636_47986[(2)] = false);

(statearr_46636_47986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (26))){
var inst_46527 = (state_46573[(11)]);
var inst_46534 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46527);
var state_46573__$1 = state_46573;
var statearr_46637_47988 = state_46573__$1;
(statearr_46637_47988[(2)] = inst_46534);

(statearr_46637_47988[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (16))){
var state_46573__$1 = state_46573;
var statearr_46638_47989 = state_46573__$1;
(statearr_46638_47989[(2)] = true);

(statearr_46638_47989[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (38))){
var inst_46559 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
var statearr_46639_47990 = state_46573__$1;
(statearr_46639_47990[(2)] = inst_46559);

(statearr_46639_47990[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (30))){
var inst_46518 = (state_46573[(9)]);
var inst_46527 = (state_46573[(11)]);
var inst_46519 = (state_46573[(13)]);
var inst_46545 = cljs.core.empty_QMARK_(inst_46518);
var inst_46547 = (inst_46519.cljs$core$IFn$_invoke$arity$1 ? inst_46519.cljs$core$IFn$_invoke$arity$1(inst_46527) : inst_46519.call(null,inst_46527));
var inst_46548 = cljs.core.not(inst_46547);
var inst_46549 = ((inst_46545) && (inst_46548));
var state_46573__$1 = state_46573;
var statearr_46640_47995 = state_46573__$1;
(statearr_46640_47995[(2)] = inst_46549);

(statearr_46640_47995[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (10))){
var inst_46469 = (state_46573[(8)]);
var inst_46490 = (state_46573[(2)]);
var inst_46491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46490,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46490,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46490,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46494 = inst_46469;
var state_46573__$1 = (function (){var statearr_46641 = state_46573;
(statearr_46641[(7)] = inst_46494);

(statearr_46641[(16)] = inst_46493);

(statearr_46641[(17)] = inst_46492);

(statearr_46641[(18)] = inst_46491);

return statearr_46641;
})();
var statearr_46642_47996 = state_46573__$1;
(statearr_46642_47996[(2)] = null);

(statearr_46642_47996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (18))){
var inst_46509 = (state_46573[(2)]);
var state_46573__$1 = state_46573;
var statearr_46643_47997 = state_46573__$1;
(statearr_46643_47997[(2)] = inst_46509);

(statearr_46643_47997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (37))){
var state_46573__$1 = state_46573;
var statearr_46644_48001 = state_46573__$1;
(statearr_46644_48001[(2)] = null);

(statearr_46644_48001[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46574 === (8))){
var inst_46469 = (state_46573[(8)]);
var inst_46487 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46469);
var state_46573__$1 = state_46573;
var statearr_46645_48002 = state_46573__$1;
(statearr_46645_48002[(2)] = inst_46487);

(statearr_46645_48002[(1)] = (10));


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
var statearr_46646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46646[(0)] = cljs$core$async$mix_$_state_machine__33218__auto__);

(statearr_46646[(1)] = (1));

return statearr_46646;
});
var cljs$core$async$mix_$_state_machine__33218__auto____1 = (function (state_46573){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_46573);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e46647){var ex__33221__auto__ = e46647;
var statearr_46648_48003 = state_46573;
(statearr_46648_48003[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_46573[(4)]))){
var statearr_46649_48004 = state_46573;
(statearr_46649_48004[(1)] = cljs.core.first((state_46573[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48005 = state_46573;
state_46573 = G__48005;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33218__auto__ = function(state_46573){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33218__auto____1.call(this,state_46573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33218__auto____0;
cljs$core$async$mix_$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33218__auto____1;
return cljs$core$async$mix_$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_46650 = f__33338__auto__();
(statearr_46650[(6)] = c__33337__auto___47929);

return statearr_46650;
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

var cljs$core$async$Pub$sub_STAR_$dyn_48010 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_48010(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48011 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_48011(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48012 = (function() {
var G__48013 = null;
var G__48013__1 = (function (p){
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
var G__48013__2 = (function (p,v){
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
G__48013 = function(p,v){
switch(arguments.length){
case 1:
return G__48013__1.call(this,p);
case 2:
return G__48013__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48013.cljs$core$IFn$_invoke$arity$1 = G__48013__1;
G__48013.cljs$core$IFn$_invoke$arity$2 = G__48013__2;
return G__48013;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46676 = arguments.length;
switch (G__46676) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48012(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48012(p,v);
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
var G__46680 = arguments.length;
switch (G__46680) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46677_SHARP_){
if(cljs.core.truth_((p1__46677_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46677_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46677_SHARP_.call(null,topic)))){
return p1__46677_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46677_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46683 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46684){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46684 = meta46684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46685,meta46684__$1){
var self__ = this;
var _46685__$1 = this;
return (new cljs.core.async.t_cljs$core$async46683(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46684__$1));
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46685){
var self__ = this;
var _46685__$1 = this;
return self__.meta46684;
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46684","meta46684",376512433,null)], null);
}));

(cljs.core.async.t_cljs$core$async46683.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46683");

(cljs.core.async.t_cljs$core$async46683.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46683");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46683.
 */
cljs.core.async.__GT_t_cljs$core$async46683 = (function cljs$core$async$__GT_t_cljs$core$async46683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46684){
return (new cljs.core.async.t_cljs$core$async46683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46684));
});

}

return (new cljs.core.async.t_cljs$core$async46683(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33337__auto___48031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_46795){
var state_val_46796 = (state_46795[(1)]);
if((state_val_46796 === (7))){
var inst_46786 = (state_46795[(2)]);
var state_46795__$1 = state_46795;
var statearr_46801_48032 = state_46795__$1;
(statearr_46801_48032[(2)] = inst_46786);

(statearr_46801_48032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (20))){
var state_46795__$1 = state_46795;
var statearr_46806_48033 = state_46795__$1;
(statearr_46806_48033[(2)] = null);

(statearr_46806_48033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (1))){
var state_46795__$1 = state_46795;
var statearr_46812_48036 = state_46795__$1;
(statearr_46812_48036[(2)] = null);

(statearr_46812_48036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (24))){
var inst_46766 = (state_46795[(7)]);
var inst_46777 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46766);
var state_46795__$1 = state_46795;
var statearr_46816_48038 = state_46795__$1;
(statearr_46816_48038[(2)] = inst_46777);

(statearr_46816_48038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (4))){
var inst_46709 = (state_46795[(8)]);
var inst_46709__$1 = (state_46795[(2)]);
var inst_46710 = (inst_46709__$1 == null);
var state_46795__$1 = (function (){var statearr_46826 = state_46795;
(statearr_46826[(8)] = inst_46709__$1);

return statearr_46826;
})();
if(cljs.core.truth_(inst_46710)){
var statearr_46827_48039 = state_46795__$1;
(statearr_46827_48039[(1)] = (5));

} else {
var statearr_46828_48040 = state_46795__$1;
(statearr_46828_48040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (15))){
var inst_46760 = (state_46795[(2)]);
var state_46795__$1 = state_46795;
var statearr_46829_48041 = state_46795__$1;
(statearr_46829_48041[(2)] = inst_46760);

(statearr_46829_48041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (21))){
var inst_46782 = (state_46795[(2)]);
var state_46795__$1 = (function (){var statearr_46830 = state_46795;
(statearr_46830[(9)] = inst_46782);

return statearr_46830;
})();
var statearr_46831_48043 = state_46795__$1;
(statearr_46831_48043[(2)] = null);

(statearr_46831_48043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (13))){
var inst_46733 = (state_46795[(10)]);
var inst_46739 = cljs.core.chunked_seq_QMARK_(inst_46733);
var state_46795__$1 = state_46795;
if(inst_46739){
var statearr_46832_48046 = state_46795__$1;
(statearr_46832_48046[(1)] = (16));

} else {
var statearr_46833_48047 = state_46795__$1;
(statearr_46833_48047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (22))){
var inst_46774 = (state_46795[(2)]);
var state_46795__$1 = state_46795;
if(cljs.core.truth_(inst_46774)){
var statearr_46834_48048 = state_46795__$1;
(statearr_46834_48048[(1)] = (23));

} else {
var statearr_46835_48049 = state_46795__$1;
(statearr_46835_48049[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (6))){
var inst_46766 = (state_46795[(7)]);
var inst_46769 = (state_46795[(11)]);
var inst_46709 = (state_46795[(8)]);
var inst_46766__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46709) : topic_fn.call(null,inst_46709));
var inst_46768 = cljs.core.deref(mults);
var inst_46769__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46768,inst_46766__$1);
var state_46795__$1 = (function (){var statearr_46836 = state_46795;
(statearr_46836[(7)] = inst_46766__$1);

(statearr_46836[(11)] = inst_46769__$1);

return statearr_46836;
})();
if(cljs.core.truth_(inst_46769__$1)){
var statearr_46837_48053 = state_46795__$1;
(statearr_46837_48053[(1)] = (19));

} else {
var statearr_46838_48054 = state_46795__$1;
(statearr_46838_48054[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (25))){
var inst_46779 = (state_46795[(2)]);
var state_46795__$1 = state_46795;
var statearr_46839_48055 = state_46795__$1;
(statearr_46839_48055[(2)] = inst_46779);

(statearr_46839_48055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (17))){
var inst_46733 = (state_46795[(10)]);
var inst_46747 = cljs.core.first(inst_46733);
var inst_46748 = cljs.core.async.muxch_STAR_(inst_46747);
var inst_46749 = cljs.core.async.close_BANG_(inst_46748);
var inst_46754 = cljs.core.next(inst_46733);
var inst_46719 = inst_46754;
var inst_46720 = null;
var inst_46721 = (0);
var inst_46722 = (0);
var state_46795__$1 = (function (){var statearr_46840 = state_46795;
(statearr_46840[(12)] = inst_46721);

(statearr_46840[(13)] = inst_46719);

(statearr_46840[(14)] = inst_46722);

(statearr_46840[(15)] = inst_46720);

(statearr_46840[(16)] = inst_46749);

return statearr_46840;
})();
var statearr_46842_48056 = state_46795__$1;
(statearr_46842_48056[(2)] = null);

(statearr_46842_48056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (3))){
var inst_46788 = (state_46795[(2)]);
var state_46795__$1 = state_46795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46795__$1,inst_46788);
} else {
if((state_val_46796 === (12))){
var inst_46762 = (state_46795[(2)]);
var state_46795__$1 = state_46795;
var statearr_46843_48058 = state_46795__$1;
(statearr_46843_48058[(2)] = inst_46762);

(statearr_46843_48058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (2))){
var state_46795__$1 = state_46795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46795__$1,(4),ch);
} else {
if((state_val_46796 === (23))){
var state_46795__$1 = state_46795;
var statearr_46844_48059 = state_46795__$1;
(statearr_46844_48059[(2)] = null);

(statearr_46844_48059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (19))){
var inst_46769 = (state_46795[(11)]);
var inst_46709 = (state_46795[(8)]);
var inst_46771 = cljs.core.async.muxch_STAR_(inst_46769);
var state_46795__$1 = state_46795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46795__$1,(22),inst_46771,inst_46709);
} else {
if((state_val_46796 === (11))){
var inst_46733 = (state_46795[(10)]);
var inst_46719 = (state_46795[(13)]);
var inst_46733__$1 = cljs.core.seq(inst_46719);
var state_46795__$1 = (function (){var statearr_46845 = state_46795;
(statearr_46845[(10)] = inst_46733__$1);

return statearr_46845;
})();
if(inst_46733__$1){
var statearr_46846_48060 = state_46795__$1;
(statearr_46846_48060[(1)] = (13));

} else {
var statearr_46847_48062 = state_46795__$1;
(statearr_46847_48062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (9))){
var inst_46764 = (state_46795[(2)]);
var state_46795__$1 = state_46795;
var statearr_46848_48065 = state_46795__$1;
(statearr_46848_48065[(2)] = inst_46764);

(statearr_46848_48065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (5))){
var inst_46716 = cljs.core.deref(mults);
var inst_46717 = cljs.core.vals(inst_46716);
var inst_46718 = cljs.core.seq(inst_46717);
var inst_46719 = inst_46718;
var inst_46720 = null;
var inst_46721 = (0);
var inst_46722 = (0);
var state_46795__$1 = (function (){var statearr_46849 = state_46795;
(statearr_46849[(12)] = inst_46721);

(statearr_46849[(13)] = inst_46719);

(statearr_46849[(14)] = inst_46722);

(statearr_46849[(15)] = inst_46720);

return statearr_46849;
})();
var statearr_46850_48071 = state_46795__$1;
(statearr_46850_48071[(2)] = null);

(statearr_46850_48071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (14))){
var state_46795__$1 = state_46795;
var statearr_46858_48077 = state_46795__$1;
(statearr_46858_48077[(2)] = null);

(statearr_46858_48077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (16))){
var inst_46733 = (state_46795[(10)]);
var inst_46741 = cljs.core.chunk_first(inst_46733);
var inst_46742 = cljs.core.chunk_rest(inst_46733);
var inst_46743 = cljs.core.count(inst_46741);
var inst_46719 = inst_46742;
var inst_46720 = inst_46741;
var inst_46721 = inst_46743;
var inst_46722 = (0);
var state_46795__$1 = (function (){var statearr_46863 = state_46795;
(statearr_46863[(12)] = inst_46721);

(statearr_46863[(13)] = inst_46719);

(statearr_46863[(14)] = inst_46722);

(statearr_46863[(15)] = inst_46720);

return statearr_46863;
})();
var statearr_46864_48082 = state_46795__$1;
(statearr_46864_48082[(2)] = null);

(statearr_46864_48082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (10))){
var inst_46721 = (state_46795[(12)]);
var inst_46719 = (state_46795[(13)]);
var inst_46722 = (state_46795[(14)]);
var inst_46720 = (state_46795[(15)]);
var inst_46727 = cljs.core._nth(inst_46720,inst_46722);
var inst_46728 = cljs.core.async.muxch_STAR_(inst_46727);
var inst_46729 = cljs.core.async.close_BANG_(inst_46728);
var inst_46730 = (inst_46722 + (1));
var tmp46851 = inst_46721;
var tmp46852 = inst_46719;
var tmp46853 = inst_46720;
var inst_46719__$1 = tmp46852;
var inst_46720__$1 = tmp46853;
var inst_46721__$1 = tmp46851;
var inst_46722__$1 = inst_46730;
var state_46795__$1 = (function (){var statearr_46869 = state_46795;
(statearr_46869[(12)] = inst_46721__$1);

(statearr_46869[(13)] = inst_46719__$1);

(statearr_46869[(14)] = inst_46722__$1);

(statearr_46869[(17)] = inst_46729);

(statearr_46869[(15)] = inst_46720__$1);

return statearr_46869;
})();
var statearr_46870_48091 = state_46795__$1;
(statearr_46870_48091[(2)] = null);

(statearr_46870_48091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (18))){
var inst_46757 = (state_46795[(2)]);
var state_46795__$1 = state_46795;
var statearr_46871_48093 = state_46795__$1;
(statearr_46871_48093[(2)] = inst_46757);

(statearr_46871_48093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46796 === (8))){
var inst_46721 = (state_46795[(12)]);
var inst_46722 = (state_46795[(14)]);
var inst_46724 = (inst_46722 < inst_46721);
var inst_46725 = inst_46724;
var state_46795__$1 = state_46795;
if(cljs.core.truth_(inst_46725)){
var statearr_46873_48098 = state_46795__$1;
(statearr_46873_48098[(1)] = (10));

} else {
var statearr_46874_48099 = state_46795__$1;
(statearr_46874_48099[(1)] = (11));

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
var statearr_46875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46875[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_46875[(1)] = (1));

return statearr_46875;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_46795){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_46795);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e46876){var ex__33221__auto__ = e46876;
var statearr_46877_48104 = state_46795;
(statearr_46877_48104[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_46795[(4)]))){
var statearr_46878_48105 = state_46795;
(statearr_46878_48105[(1)] = cljs.core.first((state_46795[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48109 = state_46795;
state_46795 = G__48109;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_46795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_46795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_46879 = f__33338__auto__();
(statearr_46879[(6)] = c__33337__auto___48031);

return statearr_46879;
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
var G__46881 = arguments.length;
switch (G__46881) {
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
var G__46883 = arguments.length;
switch (G__46883) {
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
var G__46885 = arguments.length;
switch (G__46885) {
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
var c__33337__auto___48134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_46928){
var state_val_46929 = (state_46928[(1)]);
if((state_val_46929 === (7))){
var state_46928__$1 = state_46928;
var statearr_46930_48136 = state_46928__$1;
(statearr_46930_48136[(2)] = null);

(statearr_46930_48136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (1))){
var state_46928__$1 = state_46928;
var statearr_46931_48141 = state_46928__$1;
(statearr_46931_48141[(2)] = null);

(statearr_46931_48141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (4))){
var inst_46889 = (state_46928[(7)]);
var inst_46888 = (state_46928[(8)]);
var inst_46891 = (inst_46889 < inst_46888);
var state_46928__$1 = state_46928;
if(cljs.core.truth_(inst_46891)){
var statearr_46932_48146 = state_46928__$1;
(statearr_46932_48146[(1)] = (6));

} else {
var statearr_46933_48147 = state_46928__$1;
(statearr_46933_48147[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (15))){
var inst_46914 = (state_46928[(9)]);
var inst_46919 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46914);
var state_46928__$1 = state_46928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46928__$1,(17),out,inst_46919);
} else {
if((state_val_46929 === (13))){
var inst_46914 = (state_46928[(9)]);
var inst_46914__$1 = (state_46928[(2)]);
var inst_46915 = cljs.core.some(cljs.core.nil_QMARK_,inst_46914__$1);
var state_46928__$1 = (function (){var statearr_46934 = state_46928;
(statearr_46934[(9)] = inst_46914__$1);

return statearr_46934;
})();
if(cljs.core.truth_(inst_46915)){
var statearr_46935_48151 = state_46928__$1;
(statearr_46935_48151[(1)] = (14));

} else {
var statearr_46936_48152 = state_46928__$1;
(statearr_46936_48152[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (6))){
var state_46928__$1 = state_46928;
var statearr_46937_48153 = state_46928__$1;
(statearr_46937_48153[(2)] = null);

(statearr_46937_48153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (17))){
var inst_46921 = (state_46928[(2)]);
var state_46928__$1 = (function (){var statearr_46939 = state_46928;
(statearr_46939[(10)] = inst_46921);

return statearr_46939;
})();
var statearr_46940_48154 = state_46928__$1;
(statearr_46940_48154[(2)] = null);

(statearr_46940_48154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (3))){
var inst_46926 = (state_46928[(2)]);
var state_46928__$1 = state_46928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46928__$1,inst_46926);
} else {
if((state_val_46929 === (12))){
var _ = (function (){var statearr_46941 = state_46928;
(statearr_46941[(4)] = cljs.core.rest((state_46928[(4)])));

return statearr_46941;
})();
var state_46928__$1 = state_46928;
var ex46938 = (state_46928__$1[(2)]);
var statearr_46942_48155 = state_46928__$1;
(statearr_46942_48155[(5)] = ex46938);


if((ex46938 instanceof Object)){
var statearr_46943_48156 = state_46928__$1;
(statearr_46943_48156[(1)] = (11));

(statearr_46943_48156[(5)] = null);

} else {
throw ex46938;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (2))){
var inst_46887 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46888 = cnt;
var inst_46889 = (0);
var state_46928__$1 = (function (){var statearr_46944 = state_46928;
(statearr_46944[(7)] = inst_46889);

(statearr_46944[(11)] = inst_46887);

(statearr_46944[(8)] = inst_46888);

return statearr_46944;
})();
var statearr_46945_48163 = state_46928__$1;
(statearr_46945_48163[(2)] = null);

(statearr_46945_48163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (11))){
var inst_46893 = (state_46928[(2)]);
var inst_46894 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46928__$1 = (function (){var statearr_46946 = state_46928;
(statearr_46946[(12)] = inst_46893);

return statearr_46946;
})();
var statearr_46947_48167 = state_46928__$1;
(statearr_46947_48167[(2)] = inst_46894);

(statearr_46947_48167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (9))){
var inst_46889 = (state_46928[(7)]);
var _ = (function (){var statearr_46948 = state_46928;
(statearr_46948[(4)] = cljs.core.cons((12),(state_46928[(4)])));

return statearr_46948;
})();
var inst_46900 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46889) : chs__$1.call(null,inst_46889));
var inst_46901 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46889) : done.call(null,inst_46889));
var inst_46902 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46900,inst_46901);
var ___$1 = (function (){var statearr_46949 = state_46928;
(statearr_46949[(4)] = cljs.core.rest((state_46928[(4)])));

return statearr_46949;
})();
var state_46928__$1 = state_46928;
var statearr_46950_48171 = state_46928__$1;
(statearr_46950_48171[(2)] = inst_46902);

(statearr_46950_48171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (5))){
var inst_46912 = (state_46928[(2)]);
var state_46928__$1 = (function (){var statearr_46951 = state_46928;
(statearr_46951[(13)] = inst_46912);

return statearr_46951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46928__$1,(13),dchan);
} else {
if((state_val_46929 === (14))){
var inst_46917 = cljs.core.async.close_BANG_(out);
var state_46928__$1 = state_46928;
var statearr_46952_48172 = state_46928__$1;
(statearr_46952_48172[(2)] = inst_46917);

(statearr_46952_48172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (16))){
var inst_46924 = (state_46928[(2)]);
var state_46928__$1 = state_46928;
var statearr_46953_48173 = state_46928__$1;
(statearr_46953_48173[(2)] = inst_46924);

(statearr_46953_48173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (10))){
var inst_46889 = (state_46928[(7)]);
var inst_46905 = (state_46928[(2)]);
var inst_46906 = (inst_46889 + (1));
var inst_46889__$1 = inst_46906;
var state_46928__$1 = (function (){var statearr_46954 = state_46928;
(statearr_46954[(14)] = inst_46905);

(statearr_46954[(7)] = inst_46889__$1);

return statearr_46954;
})();
var statearr_46955_48177 = state_46928__$1;
(statearr_46955_48177[(2)] = null);

(statearr_46955_48177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (8))){
var inst_46910 = (state_46928[(2)]);
var state_46928__$1 = state_46928;
var statearr_46956_48178 = state_46928__$1;
(statearr_46956_48178[(2)] = inst_46910);

(statearr_46956_48178[(1)] = (5));


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
var statearr_46957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46957[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_46957[(1)] = (1));

return statearr_46957;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_46928){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_46928);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e46958){var ex__33221__auto__ = e46958;
var statearr_46959_48190 = state_46928;
(statearr_46959_48190[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_46928[(4)]))){
var statearr_46960_48191 = state_46928;
(statearr_46960_48191[(1)] = cljs.core.first((state_46928[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48192 = state_46928;
state_46928 = G__48192;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_46928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_46928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_46961 = f__33338__auto__();
(statearr_46961[(6)] = c__33337__auto___48134);

return statearr_46961;
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
var G__46964 = arguments.length;
switch (G__46964) {
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
var c__33337__auto___48194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_46996){
var state_val_46997 = (state_46996[(1)]);
if((state_val_46997 === (7))){
var inst_46976 = (state_46996[(7)]);
var inst_46975 = (state_46996[(8)]);
var inst_46975__$1 = (state_46996[(2)]);
var inst_46976__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46975__$1,(0),null);
var inst_46977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46975__$1,(1),null);
var inst_46978 = (inst_46976__$1 == null);
var state_46996__$1 = (function (){var statearr_46998 = state_46996;
(statearr_46998[(9)] = inst_46977);

(statearr_46998[(7)] = inst_46976__$1);

(statearr_46998[(8)] = inst_46975__$1);

return statearr_46998;
})();
if(cljs.core.truth_(inst_46978)){
var statearr_46999_48195 = state_46996__$1;
(statearr_46999_48195[(1)] = (8));

} else {
var statearr_47000_48196 = state_46996__$1;
(statearr_47000_48196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (1))){
var inst_46965 = cljs.core.vec(chs);
var inst_46966 = inst_46965;
var state_46996__$1 = (function (){var statearr_47001 = state_46996;
(statearr_47001[(10)] = inst_46966);

return statearr_47001;
})();
var statearr_47002_48197 = state_46996__$1;
(statearr_47002_48197[(2)] = null);

(statearr_47002_48197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (4))){
var inst_46966 = (state_46996[(10)]);
var state_46996__$1 = state_46996;
return cljs.core.async.ioc_alts_BANG_(state_46996__$1,(7),inst_46966);
} else {
if((state_val_46997 === (6))){
var inst_46992 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47003_48198 = state_46996__$1;
(statearr_47003_48198[(2)] = inst_46992);

(statearr_47003_48198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (3))){
var inst_46994 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46996__$1,inst_46994);
} else {
if((state_val_46997 === (2))){
var inst_46966 = (state_46996[(10)]);
var inst_46968 = cljs.core.count(inst_46966);
var inst_46969 = (inst_46968 > (0));
var state_46996__$1 = state_46996;
if(cljs.core.truth_(inst_46969)){
var statearr_47005_48202 = state_46996__$1;
(statearr_47005_48202[(1)] = (4));

} else {
var statearr_47006_48203 = state_46996__$1;
(statearr_47006_48203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (11))){
var inst_46966 = (state_46996[(10)]);
var inst_46985 = (state_46996[(2)]);
var tmp47004 = inst_46966;
var inst_46966__$1 = tmp47004;
var state_46996__$1 = (function (){var statearr_47007 = state_46996;
(statearr_47007[(11)] = inst_46985);

(statearr_47007[(10)] = inst_46966__$1);

return statearr_47007;
})();
var statearr_47008_48206 = state_46996__$1;
(statearr_47008_48206[(2)] = null);

(statearr_47008_48206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (9))){
var inst_46976 = (state_46996[(7)]);
var state_46996__$1 = state_46996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46996__$1,(11),out,inst_46976);
} else {
if((state_val_46997 === (5))){
var inst_46990 = cljs.core.async.close_BANG_(out);
var state_46996__$1 = state_46996;
var statearr_47009_48207 = state_46996__$1;
(statearr_47009_48207[(2)] = inst_46990);

(statearr_47009_48207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (10))){
var inst_46988 = (state_46996[(2)]);
var state_46996__$1 = state_46996;
var statearr_47010_48208 = state_46996__$1;
(statearr_47010_48208[(2)] = inst_46988);

(statearr_47010_48208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46997 === (8))){
var inst_46977 = (state_46996[(9)]);
var inst_46976 = (state_46996[(7)]);
var inst_46975 = (state_46996[(8)]);
var inst_46966 = (state_46996[(10)]);
var inst_46980 = (function (){var cs = inst_46966;
var vec__46971 = inst_46975;
var v = inst_46976;
var c = inst_46977;
return (function (p1__46962_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46962_SHARP_);
});
})();
var inst_46981 = cljs.core.filterv(inst_46980,inst_46966);
var inst_46966__$1 = inst_46981;
var state_46996__$1 = (function (){var statearr_47011 = state_46996;
(statearr_47011[(10)] = inst_46966__$1);

return statearr_47011;
})();
var statearr_47012_48210 = state_46996__$1;
(statearr_47012_48210[(2)] = null);

(statearr_47012_48210[(1)] = (2));


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
var statearr_47013 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47013[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_47013[(1)] = (1));

return statearr_47013;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_46996){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_46996);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e47014){var ex__33221__auto__ = e47014;
var statearr_47015_48212 = state_46996;
(statearr_47015_48212[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_46996[(4)]))){
var statearr_47016_48213 = state_46996;
(statearr_47016_48213[(1)] = cljs.core.first((state_46996[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48214 = state_46996;
state_46996 = G__48214;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_46996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_46996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_47017 = f__33338__auto__();
(statearr_47017[(6)] = c__33337__auto___48194);

return statearr_47017;
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
var G__47019 = arguments.length;
switch (G__47019) {
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
var c__33337__auto___48225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_47043){
var state_val_47044 = (state_47043[(1)]);
if((state_val_47044 === (7))){
var inst_47025 = (state_47043[(7)]);
var inst_47025__$1 = (state_47043[(2)]);
var inst_47026 = (inst_47025__$1 == null);
var inst_47027 = cljs.core.not(inst_47026);
var state_47043__$1 = (function (){var statearr_47045 = state_47043;
(statearr_47045[(7)] = inst_47025__$1);

return statearr_47045;
})();
if(inst_47027){
var statearr_47046_48231 = state_47043__$1;
(statearr_47046_48231[(1)] = (8));

} else {
var statearr_47047_48233 = state_47043__$1;
(statearr_47047_48233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47044 === (1))){
var inst_47020 = (0);
var state_47043__$1 = (function (){var statearr_47048 = state_47043;
(statearr_47048[(8)] = inst_47020);

return statearr_47048;
})();
var statearr_47049_48237 = state_47043__$1;
(statearr_47049_48237[(2)] = null);

(statearr_47049_48237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47044 === (4))){
var state_47043__$1 = state_47043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47043__$1,(7),ch);
} else {
if((state_val_47044 === (6))){
var inst_47038 = (state_47043[(2)]);
var state_47043__$1 = state_47043;
var statearr_47050_48239 = state_47043__$1;
(statearr_47050_48239[(2)] = inst_47038);

(statearr_47050_48239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47044 === (3))){
var inst_47040 = (state_47043[(2)]);
var inst_47041 = cljs.core.async.close_BANG_(out);
var state_47043__$1 = (function (){var statearr_47051 = state_47043;
(statearr_47051[(9)] = inst_47040);

return statearr_47051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47043__$1,inst_47041);
} else {
if((state_val_47044 === (2))){
var inst_47020 = (state_47043[(8)]);
var inst_47022 = (inst_47020 < n);
var state_47043__$1 = state_47043;
if(cljs.core.truth_(inst_47022)){
var statearr_47052_48241 = state_47043__$1;
(statearr_47052_48241[(1)] = (4));

} else {
var statearr_47053_48242 = state_47043__$1;
(statearr_47053_48242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47044 === (11))){
var inst_47020 = (state_47043[(8)]);
var inst_47030 = (state_47043[(2)]);
var inst_47031 = (inst_47020 + (1));
var inst_47020__$1 = inst_47031;
var state_47043__$1 = (function (){var statearr_47054 = state_47043;
(statearr_47054[(10)] = inst_47030);

(statearr_47054[(8)] = inst_47020__$1);

return statearr_47054;
})();
var statearr_47055_48243 = state_47043__$1;
(statearr_47055_48243[(2)] = null);

(statearr_47055_48243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47044 === (9))){
var state_47043__$1 = state_47043;
var statearr_47056_48246 = state_47043__$1;
(statearr_47056_48246[(2)] = null);

(statearr_47056_48246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47044 === (5))){
var state_47043__$1 = state_47043;
var statearr_47057_48248 = state_47043__$1;
(statearr_47057_48248[(2)] = null);

(statearr_47057_48248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47044 === (10))){
var inst_47035 = (state_47043[(2)]);
var state_47043__$1 = state_47043;
var statearr_47058_48249 = state_47043__$1;
(statearr_47058_48249[(2)] = inst_47035);

(statearr_47058_48249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47044 === (8))){
var inst_47025 = (state_47043[(7)]);
var state_47043__$1 = state_47043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47043__$1,(11),out,inst_47025);
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
var statearr_47059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47059[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_47059[(1)] = (1));

return statearr_47059;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_47043){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_47043);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e47060){var ex__33221__auto__ = e47060;
var statearr_47061_48253 = state_47043;
(statearr_47061_48253[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_47043[(4)]))){
var statearr_47062_48254 = state_47043;
(statearr_47062_48254[(1)] = cljs.core.first((state_47043[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48255 = state_47043;
state_47043 = G__48255;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_47043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_47043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_47063 = f__33338__auto__();
(statearr_47063[(6)] = c__33337__auto___48225);

return statearr_47063;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47065 = (function (f,ch,meta47066){
this.f = f;
this.ch = ch;
this.meta47066 = meta47066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47067,meta47066__$1){
var self__ = this;
var _47067__$1 = this;
return (new cljs.core.async.t_cljs$core$async47065(self__.f,self__.ch,meta47066__$1));
}));

(cljs.core.async.t_cljs$core$async47065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47067){
var self__ = this;
var _47067__$1 = this;
return self__.meta47066;
}));

(cljs.core.async.t_cljs$core$async47065.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47065.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47068 = (function (f,ch,meta47066,_,fn1,meta47069){
this.f = f;
this.ch = ch;
this.meta47066 = meta47066;
this._ = _;
this.fn1 = fn1;
this.meta47069 = meta47069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47070,meta47069__$1){
var self__ = this;
var _47070__$1 = this;
return (new cljs.core.async.t_cljs$core$async47068(self__.f,self__.ch,self__.meta47066,self__._,self__.fn1,meta47069__$1));
}));

(cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47070){
var self__ = this;
var _47070__$1 = this;
return self__.meta47069;
}));

(cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47064_SHARP_){
var G__47071 = (((p1__47064_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47064_SHARP_) : self__.f.call(null,p1__47064_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47071) : f1.call(null,G__47071));
});
}));

(cljs.core.async.t_cljs$core$async47068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47066","meta47066",-284893980,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47065","cljs.core.async/t_cljs$core$async47065",112419718,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47069","meta47069",528158690,null)], null);
}));

(cljs.core.async.t_cljs$core$async47068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47068");

(cljs.core.async.t_cljs$core$async47068.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47068.
 */
cljs.core.async.__GT_t_cljs$core$async47068 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47068(f__$1,ch__$1,meta47066__$1,___$2,fn1__$1,meta47069){
return (new cljs.core.async.t_cljs$core$async47068(f__$1,ch__$1,meta47066__$1,___$2,fn1__$1,meta47069));
});

}

return (new cljs.core.async.t_cljs$core$async47068(self__.f,self__.ch,self__.meta47066,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47072 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47072) : self__.f.call(null,G__47072));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47065.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47066","meta47066",-284893980,null)], null);
}));

(cljs.core.async.t_cljs$core$async47065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47065");

(cljs.core.async.t_cljs$core$async47065.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47065.
 */
cljs.core.async.__GT_t_cljs$core$async47065 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47065(f__$1,ch__$1,meta47066){
return (new cljs.core.async.t_cljs$core$async47065(f__$1,ch__$1,meta47066));
});

}

return (new cljs.core.async.t_cljs$core$async47065(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47073 = (function (f,ch,meta47074){
this.f = f;
this.ch = ch;
this.meta47074 = meta47074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47075,meta47074__$1){
var self__ = this;
var _47075__$1 = this;
return (new cljs.core.async.t_cljs$core$async47073(self__.f,self__.ch,meta47074__$1));
}));

(cljs.core.async.t_cljs$core$async47073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47075){
var self__ = this;
var _47075__$1 = this;
return self__.meta47074;
}));

(cljs.core.async.t_cljs$core$async47073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47074","meta47074",-99270131,null)], null);
}));

(cljs.core.async.t_cljs$core$async47073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47073");

(cljs.core.async.t_cljs$core$async47073.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47073.
 */
cljs.core.async.__GT_t_cljs$core$async47073 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47073(f__$1,ch__$1,meta47074){
return (new cljs.core.async.t_cljs$core$async47073(f__$1,ch__$1,meta47074));
});

}

return (new cljs.core.async.t_cljs$core$async47073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47076 = (function (p,ch,meta47077){
this.p = p;
this.ch = ch;
this.meta47077 = meta47077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47078,meta47077__$1){
var self__ = this;
var _47078__$1 = this;
return (new cljs.core.async.t_cljs$core$async47076(self__.p,self__.ch,meta47077__$1));
}));

(cljs.core.async.t_cljs$core$async47076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47078){
var self__ = this;
var _47078__$1 = this;
return self__.meta47077;
}));

(cljs.core.async.t_cljs$core$async47076.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47076.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47076.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47077","meta47077",345909075,null)], null);
}));

(cljs.core.async.t_cljs$core$async47076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47076");

(cljs.core.async.t_cljs$core$async47076.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47076.
 */
cljs.core.async.__GT_t_cljs$core$async47076 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47076(p__$1,ch__$1,meta47077){
return (new cljs.core.async.t_cljs$core$async47076(p__$1,ch__$1,meta47077));
});

}

return (new cljs.core.async.t_cljs$core$async47076(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47080 = arguments.length;
switch (G__47080) {
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
var c__33337__auto___48293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_47104){
var state_val_47105 = (state_47104[(1)]);
if((state_val_47105 === (7))){
var inst_47100 = (state_47104[(2)]);
var state_47104__$1 = state_47104;
var statearr_47107_48294 = state_47104__$1;
(statearr_47107_48294[(2)] = inst_47100);

(statearr_47107_48294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (1))){
var state_47104__$1 = state_47104;
var statearr_47108_48295 = state_47104__$1;
(statearr_47108_48295[(2)] = null);

(statearr_47108_48295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (4))){
var inst_47086 = (state_47104[(7)]);
var inst_47086__$1 = (state_47104[(2)]);
var inst_47087 = (inst_47086__$1 == null);
var state_47104__$1 = (function (){var statearr_47110 = state_47104;
(statearr_47110[(7)] = inst_47086__$1);

return statearr_47110;
})();
if(cljs.core.truth_(inst_47087)){
var statearr_47111_48300 = state_47104__$1;
(statearr_47111_48300[(1)] = (5));

} else {
var statearr_47112_48301 = state_47104__$1;
(statearr_47112_48301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (6))){
var inst_47086 = (state_47104[(7)]);
var inst_47091 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47086) : p.call(null,inst_47086));
var state_47104__$1 = state_47104;
if(cljs.core.truth_(inst_47091)){
var statearr_47113_48303 = state_47104__$1;
(statearr_47113_48303[(1)] = (8));

} else {
var statearr_47114_48304 = state_47104__$1;
(statearr_47114_48304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (3))){
var inst_47102 = (state_47104[(2)]);
var state_47104__$1 = state_47104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47104__$1,inst_47102);
} else {
if((state_val_47105 === (2))){
var state_47104__$1 = state_47104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47104__$1,(4),ch);
} else {
if((state_val_47105 === (11))){
var inst_47094 = (state_47104[(2)]);
var state_47104__$1 = state_47104;
var statearr_47116_48306 = state_47104__$1;
(statearr_47116_48306[(2)] = inst_47094);

(statearr_47116_48306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (9))){
var state_47104__$1 = state_47104;
var statearr_47118_48307 = state_47104__$1;
(statearr_47118_48307[(2)] = null);

(statearr_47118_48307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (5))){
var inst_47089 = cljs.core.async.close_BANG_(out);
var state_47104__$1 = state_47104;
var statearr_47119_48309 = state_47104__$1;
(statearr_47119_48309[(2)] = inst_47089);

(statearr_47119_48309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (10))){
var inst_47097 = (state_47104[(2)]);
var state_47104__$1 = (function (){var statearr_47120 = state_47104;
(statearr_47120[(8)] = inst_47097);

return statearr_47120;
})();
var statearr_47122_48313 = state_47104__$1;
(statearr_47122_48313[(2)] = null);

(statearr_47122_48313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47105 === (8))){
var inst_47086 = (state_47104[(7)]);
var state_47104__$1 = state_47104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47104__$1,(11),out,inst_47086);
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
var statearr_47123 = [null,null,null,null,null,null,null,null,null];
(statearr_47123[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_47123[(1)] = (1));

return statearr_47123;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_47104){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_47104);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e47125){var ex__33221__auto__ = e47125;
var statearr_47126_48315 = state_47104;
(statearr_47126_48315[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_47104[(4)]))){
var statearr_47127_48317 = state_47104;
(statearr_47127_48317[(1)] = cljs.core.first((state_47104[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48322 = state_47104;
state_47104 = G__48322;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_47104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_47104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_47128 = f__33338__auto__();
(statearr_47128[(6)] = c__33337__auto___48293);

return statearr_47128;
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
var G__47130 = arguments.length;
switch (G__47130) {
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
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_47192){
var state_val_47193 = (state_47192[(1)]);
if((state_val_47193 === (7))){
var inst_47188 = (state_47192[(2)]);
var state_47192__$1 = state_47192;
var statearr_47194_48330 = state_47192__$1;
(statearr_47194_48330[(2)] = inst_47188);

(statearr_47194_48330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (20))){
var inst_47158 = (state_47192[(7)]);
var inst_47169 = (state_47192[(2)]);
var inst_47170 = cljs.core.next(inst_47158);
var inst_47144 = inst_47170;
var inst_47145 = null;
var inst_47146 = (0);
var inst_47147 = (0);
var state_47192__$1 = (function (){var statearr_47195 = state_47192;
(statearr_47195[(8)] = inst_47145);

(statearr_47195[(9)] = inst_47146);

(statearr_47195[(10)] = inst_47169);

(statearr_47195[(11)] = inst_47144);

(statearr_47195[(12)] = inst_47147);

return statearr_47195;
})();
var statearr_47196_48332 = state_47192__$1;
(statearr_47196_48332[(2)] = null);

(statearr_47196_48332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (1))){
var state_47192__$1 = state_47192;
var statearr_47197_48333 = state_47192__$1;
(statearr_47197_48333[(2)] = null);

(statearr_47197_48333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (4))){
var inst_47133 = (state_47192[(13)]);
var inst_47133__$1 = (state_47192[(2)]);
var inst_47134 = (inst_47133__$1 == null);
var state_47192__$1 = (function (){var statearr_47198 = state_47192;
(statearr_47198[(13)] = inst_47133__$1);

return statearr_47198;
})();
if(cljs.core.truth_(inst_47134)){
var statearr_47199_48336 = state_47192__$1;
(statearr_47199_48336[(1)] = (5));

} else {
var statearr_47200_48337 = state_47192__$1;
(statearr_47200_48337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (15))){
var state_47192__$1 = state_47192;
var statearr_47204_48339 = state_47192__$1;
(statearr_47204_48339[(2)] = null);

(statearr_47204_48339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (21))){
var state_47192__$1 = state_47192;
var statearr_47205_48340 = state_47192__$1;
(statearr_47205_48340[(2)] = null);

(statearr_47205_48340[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (13))){
var inst_47145 = (state_47192[(8)]);
var inst_47146 = (state_47192[(9)]);
var inst_47144 = (state_47192[(11)]);
var inst_47147 = (state_47192[(12)]);
var inst_47154 = (state_47192[(2)]);
var inst_47155 = (inst_47147 + (1));
var tmp47201 = inst_47145;
var tmp47202 = inst_47146;
var tmp47203 = inst_47144;
var inst_47144__$1 = tmp47203;
var inst_47145__$1 = tmp47201;
var inst_47146__$1 = tmp47202;
var inst_47147__$1 = inst_47155;
var state_47192__$1 = (function (){var statearr_47206 = state_47192;
(statearr_47206[(14)] = inst_47154);

(statearr_47206[(8)] = inst_47145__$1);

(statearr_47206[(9)] = inst_47146__$1);

(statearr_47206[(11)] = inst_47144__$1);

(statearr_47206[(12)] = inst_47147__$1);

return statearr_47206;
})();
var statearr_47207_48343 = state_47192__$1;
(statearr_47207_48343[(2)] = null);

(statearr_47207_48343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (22))){
var state_47192__$1 = state_47192;
var statearr_47208_48345 = state_47192__$1;
(statearr_47208_48345[(2)] = null);

(statearr_47208_48345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (6))){
var inst_47133 = (state_47192[(13)]);
var inst_47142 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47133) : f.call(null,inst_47133));
var inst_47143 = cljs.core.seq(inst_47142);
var inst_47144 = inst_47143;
var inst_47145 = null;
var inst_47146 = (0);
var inst_47147 = (0);
var state_47192__$1 = (function (){var statearr_47209 = state_47192;
(statearr_47209[(8)] = inst_47145);

(statearr_47209[(9)] = inst_47146);

(statearr_47209[(11)] = inst_47144);

(statearr_47209[(12)] = inst_47147);

return statearr_47209;
})();
var statearr_47210_48346 = state_47192__$1;
(statearr_47210_48346[(2)] = null);

(statearr_47210_48346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (17))){
var inst_47158 = (state_47192[(7)]);
var inst_47162 = cljs.core.chunk_first(inst_47158);
var inst_47163 = cljs.core.chunk_rest(inst_47158);
var inst_47164 = cljs.core.count(inst_47162);
var inst_47144 = inst_47163;
var inst_47145 = inst_47162;
var inst_47146 = inst_47164;
var inst_47147 = (0);
var state_47192__$1 = (function (){var statearr_47211 = state_47192;
(statearr_47211[(8)] = inst_47145);

(statearr_47211[(9)] = inst_47146);

(statearr_47211[(11)] = inst_47144);

(statearr_47211[(12)] = inst_47147);

return statearr_47211;
})();
var statearr_47212_48348 = state_47192__$1;
(statearr_47212_48348[(2)] = null);

(statearr_47212_48348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (3))){
var inst_47190 = (state_47192[(2)]);
var state_47192__$1 = state_47192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47192__$1,inst_47190);
} else {
if((state_val_47193 === (12))){
var inst_47178 = (state_47192[(2)]);
var state_47192__$1 = state_47192;
var statearr_47213_48353 = state_47192__$1;
(statearr_47213_48353[(2)] = inst_47178);

(statearr_47213_48353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (2))){
var state_47192__$1 = state_47192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47192__$1,(4),in$);
} else {
if((state_val_47193 === (23))){
var inst_47186 = (state_47192[(2)]);
var state_47192__$1 = state_47192;
var statearr_47214_48358 = state_47192__$1;
(statearr_47214_48358[(2)] = inst_47186);

(statearr_47214_48358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (19))){
var inst_47173 = (state_47192[(2)]);
var state_47192__$1 = state_47192;
var statearr_47215_48364 = state_47192__$1;
(statearr_47215_48364[(2)] = inst_47173);

(statearr_47215_48364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (11))){
var inst_47158 = (state_47192[(7)]);
var inst_47144 = (state_47192[(11)]);
var inst_47158__$1 = cljs.core.seq(inst_47144);
var state_47192__$1 = (function (){var statearr_47216 = state_47192;
(statearr_47216[(7)] = inst_47158__$1);

return statearr_47216;
})();
if(inst_47158__$1){
var statearr_47217_48367 = state_47192__$1;
(statearr_47217_48367[(1)] = (14));

} else {
var statearr_47218_48369 = state_47192__$1;
(statearr_47218_48369[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (9))){
var inst_47180 = (state_47192[(2)]);
var inst_47181 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47192__$1 = (function (){var statearr_47219 = state_47192;
(statearr_47219[(15)] = inst_47180);

return statearr_47219;
})();
if(cljs.core.truth_(inst_47181)){
var statearr_47220_48375 = state_47192__$1;
(statearr_47220_48375[(1)] = (21));

} else {
var statearr_47221_48376 = state_47192__$1;
(statearr_47221_48376[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (5))){
var inst_47136 = cljs.core.async.close_BANG_(out);
var state_47192__$1 = state_47192;
var statearr_47222_48377 = state_47192__$1;
(statearr_47222_48377[(2)] = inst_47136);

(statearr_47222_48377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (14))){
var inst_47158 = (state_47192[(7)]);
var inst_47160 = cljs.core.chunked_seq_QMARK_(inst_47158);
var state_47192__$1 = state_47192;
if(inst_47160){
var statearr_47223_48378 = state_47192__$1;
(statearr_47223_48378[(1)] = (17));

} else {
var statearr_47224_48379 = state_47192__$1;
(statearr_47224_48379[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (16))){
var inst_47176 = (state_47192[(2)]);
var state_47192__$1 = state_47192;
var statearr_47225_48380 = state_47192__$1;
(statearr_47225_48380[(2)] = inst_47176);

(statearr_47225_48380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47193 === (10))){
var inst_47145 = (state_47192[(8)]);
var inst_47147 = (state_47192[(12)]);
var inst_47152 = cljs.core._nth(inst_47145,inst_47147);
var state_47192__$1 = state_47192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47192__$1,(13),out,inst_47152);
} else {
if((state_val_47193 === (18))){
var inst_47158 = (state_47192[(7)]);
var inst_47167 = cljs.core.first(inst_47158);
var state_47192__$1 = state_47192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47192__$1,(20),out,inst_47167);
} else {
if((state_val_47193 === (8))){
var inst_47146 = (state_47192[(9)]);
var inst_47147 = (state_47192[(12)]);
var inst_47149 = (inst_47147 < inst_47146);
var inst_47150 = inst_47149;
var state_47192__$1 = state_47192;
if(cljs.core.truth_(inst_47150)){
var statearr_47226_48381 = state_47192__$1;
(statearr_47226_48381[(1)] = (10));

} else {
var statearr_47227_48386 = state_47192__$1;
(statearr_47227_48386[(1)] = (11));

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
var statearr_47228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47228[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__);

(statearr_47228[(1)] = (1));

return statearr_47228;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____1 = (function (state_47192){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_47192);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e47229){var ex__33221__auto__ = e47229;
var statearr_47230_48394 = state_47192;
(statearr_47230_48394[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_47192[(4)]))){
var statearr_47231_48399 = state_47192;
(statearr_47231_48399[(1)] = cljs.core.first((state_47192[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48400 = state_47192;
state_47192 = G__48400;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__ = function(state_47192){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____1.call(this,state_47192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33218__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_47232 = f__33338__auto__();
(statearr_47232[(6)] = c__33337__auto__);

return statearr_47232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));

return c__33337__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47234 = arguments.length;
switch (G__47234) {
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
var G__47236 = arguments.length;
switch (G__47236) {
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
var G__47238 = arguments.length;
switch (G__47238) {
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
var c__33337__auto___48423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_47262){
var state_val_47263 = (state_47262[(1)]);
if((state_val_47263 === (7))){
var inst_47257 = (state_47262[(2)]);
var state_47262__$1 = state_47262;
var statearr_47264_48425 = state_47262__$1;
(statearr_47264_48425[(2)] = inst_47257);

(statearr_47264_48425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (1))){
var inst_47239 = null;
var state_47262__$1 = (function (){var statearr_47265 = state_47262;
(statearr_47265[(7)] = inst_47239);

return statearr_47265;
})();
var statearr_47266_48426 = state_47262__$1;
(statearr_47266_48426[(2)] = null);

(statearr_47266_48426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (4))){
var inst_47242 = (state_47262[(8)]);
var inst_47242__$1 = (state_47262[(2)]);
var inst_47243 = (inst_47242__$1 == null);
var inst_47244 = cljs.core.not(inst_47243);
var state_47262__$1 = (function (){var statearr_47267 = state_47262;
(statearr_47267[(8)] = inst_47242__$1);

return statearr_47267;
})();
if(inst_47244){
var statearr_47268_48427 = state_47262__$1;
(statearr_47268_48427[(1)] = (5));

} else {
var statearr_47269_48428 = state_47262__$1;
(statearr_47269_48428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (6))){
var state_47262__$1 = state_47262;
var statearr_47270_48429 = state_47262__$1;
(statearr_47270_48429[(2)] = null);

(statearr_47270_48429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (3))){
var inst_47259 = (state_47262[(2)]);
var inst_47260 = cljs.core.async.close_BANG_(out);
var state_47262__$1 = (function (){var statearr_47271 = state_47262;
(statearr_47271[(9)] = inst_47259);

return statearr_47271;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47262__$1,inst_47260);
} else {
if((state_val_47263 === (2))){
var state_47262__$1 = state_47262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47262__$1,(4),ch);
} else {
if((state_val_47263 === (11))){
var inst_47242 = (state_47262[(8)]);
var inst_47251 = (state_47262[(2)]);
var inst_47239 = inst_47242;
var state_47262__$1 = (function (){var statearr_47272 = state_47262;
(statearr_47272[(7)] = inst_47239);

(statearr_47272[(10)] = inst_47251);

return statearr_47272;
})();
var statearr_47273_48430 = state_47262__$1;
(statearr_47273_48430[(2)] = null);

(statearr_47273_48430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (9))){
var inst_47242 = (state_47262[(8)]);
var state_47262__$1 = state_47262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47262__$1,(11),out,inst_47242);
} else {
if((state_val_47263 === (5))){
var inst_47239 = (state_47262[(7)]);
var inst_47242 = (state_47262[(8)]);
var inst_47246 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47242,inst_47239);
var state_47262__$1 = state_47262;
if(inst_47246){
var statearr_47275_48436 = state_47262__$1;
(statearr_47275_48436[(1)] = (8));

} else {
var statearr_47276_48437 = state_47262__$1;
(statearr_47276_48437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (10))){
var inst_47254 = (state_47262[(2)]);
var state_47262__$1 = state_47262;
var statearr_47277_48438 = state_47262__$1;
(statearr_47277_48438[(2)] = inst_47254);

(statearr_47277_48438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47263 === (8))){
var inst_47239 = (state_47262[(7)]);
var tmp47274 = inst_47239;
var inst_47239__$1 = tmp47274;
var state_47262__$1 = (function (){var statearr_47279 = state_47262;
(statearr_47279[(7)] = inst_47239__$1);

return statearr_47279;
})();
var statearr_47280_48439 = state_47262__$1;
(statearr_47280_48439[(2)] = null);

(statearr_47280_48439[(1)] = (2));


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
var statearr_47282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47282[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_47282[(1)] = (1));

return statearr_47282;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_47262){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_47262);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e47283){var ex__33221__auto__ = e47283;
var statearr_47284_48440 = state_47262;
(statearr_47284_48440[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_47262[(4)]))){
var statearr_47285_48447 = state_47262;
(statearr_47285_48447[(1)] = cljs.core.first((state_47262[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48459 = state_47262;
state_47262 = G__48459;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_47262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_47262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_47286 = f__33338__auto__();
(statearr_47286[(6)] = c__33337__auto___48423);

return statearr_47286;
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
var G__47288 = arguments.length;
switch (G__47288) {
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
var c__33337__auto___48480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_47326){
var state_val_47327 = (state_47326[(1)]);
if((state_val_47327 === (7))){
var inst_47322 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
var statearr_47328_48489 = state_47326__$1;
(statearr_47328_48489[(2)] = inst_47322);

(statearr_47328_48489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (1))){
var inst_47289 = (new Array(n));
var inst_47290 = inst_47289;
var inst_47291 = (0);
var state_47326__$1 = (function (){var statearr_47329 = state_47326;
(statearr_47329[(7)] = inst_47290);

(statearr_47329[(8)] = inst_47291);

return statearr_47329;
})();
var statearr_47330_48494 = state_47326__$1;
(statearr_47330_48494[(2)] = null);

(statearr_47330_48494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (4))){
var inst_47294 = (state_47326[(9)]);
var inst_47294__$1 = (state_47326[(2)]);
var inst_47295 = (inst_47294__$1 == null);
var inst_47296 = cljs.core.not(inst_47295);
var state_47326__$1 = (function (){var statearr_47331 = state_47326;
(statearr_47331[(9)] = inst_47294__$1);

return statearr_47331;
})();
if(inst_47296){
var statearr_47332_48502 = state_47326__$1;
(statearr_47332_48502[(1)] = (5));

} else {
var statearr_47333_48503 = state_47326__$1;
(statearr_47333_48503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (15))){
var inst_47316 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
var statearr_47334_48506 = state_47326__$1;
(statearr_47334_48506[(2)] = inst_47316);

(statearr_47334_48506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (13))){
var state_47326__$1 = state_47326;
var statearr_47335_48511 = state_47326__$1;
(statearr_47335_48511[(2)] = null);

(statearr_47335_48511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (6))){
var inst_47291 = (state_47326[(8)]);
var inst_47312 = (inst_47291 > (0));
var state_47326__$1 = state_47326;
if(cljs.core.truth_(inst_47312)){
var statearr_47336_48517 = state_47326__$1;
(statearr_47336_48517[(1)] = (12));

} else {
var statearr_47337_48522 = state_47326__$1;
(statearr_47337_48522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (3))){
var inst_47324 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47326__$1,inst_47324);
} else {
if((state_val_47327 === (12))){
var inst_47290 = (state_47326[(7)]);
var inst_47314 = cljs.core.vec(inst_47290);
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47326__$1,(15),out,inst_47314);
} else {
if((state_val_47327 === (2))){
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47326__$1,(4),ch);
} else {
if((state_val_47327 === (11))){
var inst_47306 = (state_47326[(2)]);
var inst_47307 = (new Array(n));
var inst_47290 = inst_47307;
var inst_47291 = (0);
var state_47326__$1 = (function (){var statearr_47338 = state_47326;
(statearr_47338[(7)] = inst_47290);

(statearr_47338[(8)] = inst_47291);

(statearr_47338[(10)] = inst_47306);

return statearr_47338;
})();
var statearr_47339_48542 = state_47326__$1;
(statearr_47339_48542[(2)] = null);

(statearr_47339_48542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (9))){
var inst_47290 = (state_47326[(7)]);
var inst_47304 = cljs.core.vec(inst_47290);
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47326__$1,(11),out,inst_47304);
} else {
if((state_val_47327 === (5))){
var inst_47290 = (state_47326[(7)]);
var inst_47299 = (state_47326[(11)]);
var inst_47294 = (state_47326[(9)]);
var inst_47291 = (state_47326[(8)]);
var inst_47298 = (inst_47290[inst_47291] = inst_47294);
var inst_47299__$1 = (inst_47291 + (1));
var inst_47300 = (inst_47299__$1 < n);
var state_47326__$1 = (function (){var statearr_47340 = state_47326;
(statearr_47340[(11)] = inst_47299__$1);

(statearr_47340[(12)] = inst_47298);

return statearr_47340;
})();
if(cljs.core.truth_(inst_47300)){
var statearr_47341_48547 = state_47326__$1;
(statearr_47341_48547[(1)] = (8));

} else {
var statearr_47342_48548 = state_47326__$1;
(statearr_47342_48548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (14))){
var inst_47319 = (state_47326[(2)]);
var inst_47320 = cljs.core.async.close_BANG_(out);
var state_47326__$1 = (function (){var statearr_47344 = state_47326;
(statearr_47344[(13)] = inst_47319);

return statearr_47344;
})();
var statearr_47345_48549 = state_47326__$1;
(statearr_47345_48549[(2)] = inst_47320);

(statearr_47345_48549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (10))){
var inst_47310 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
var statearr_47346_48550 = state_47326__$1;
(statearr_47346_48550[(2)] = inst_47310);

(statearr_47346_48550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (8))){
var inst_47290 = (state_47326[(7)]);
var inst_47299 = (state_47326[(11)]);
var tmp47343 = inst_47290;
var inst_47290__$1 = tmp47343;
var inst_47291 = inst_47299;
var state_47326__$1 = (function (){var statearr_47347 = state_47326;
(statearr_47347[(7)] = inst_47290__$1);

(statearr_47347[(8)] = inst_47291);

return statearr_47347;
})();
var statearr_47348_48551 = state_47326__$1;
(statearr_47348_48551[(2)] = null);

(statearr_47348_48551[(1)] = (2));


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
var statearr_47349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47349[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_47349[(1)] = (1));

return statearr_47349;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_47326){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_47326);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e47350){var ex__33221__auto__ = e47350;
var statearr_47351_48560 = state_47326;
(statearr_47351_48560[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_47326[(4)]))){
var statearr_47352_48565 = state_47326;
(statearr_47352_48565[(1)] = cljs.core.first((state_47326[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48566 = state_47326;
state_47326 = G__48566;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_47326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_47326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_47353 = f__33338__auto__();
(statearr_47353[(6)] = c__33337__auto___48480);

return statearr_47353;
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
var G__47356 = arguments.length;
switch (G__47356) {
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
var c__33337__auto___48570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33338__auto__ = (function (){var switch__33217__auto__ = (function (state_47398){
var state_val_47399 = (state_47398[(1)]);
if((state_val_47399 === (7))){
var inst_47394 = (state_47398[(2)]);
var state_47398__$1 = state_47398;
var statearr_47400_48571 = state_47398__$1;
(statearr_47400_48571[(2)] = inst_47394);

(statearr_47400_48571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (1))){
var inst_47357 = [];
var inst_47358 = inst_47357;
var inst_47359 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47398__$1 = (function (){var statearr_47401 = state_47398;
(statearr_47401[(7)] = inst_47359);

(statearr_47401[(8)] = inst_47358);

return statearr_47401;
})();
var statearr_47402_48572 = state_47398__$1;
(statearr_47402_48572[(2)] = null);

(statearr_47402_48572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (4))){
var inst_47362 = (state_47398[(9)]);
var inst_47362__$1 = (state_47398[(2)]);
var inst_47363 = (inst_47362__$1 == null);
var inst_47364 = cljs.core.not(inst_47363);
var state_47398__$1 = (function (){var statearr_47403 = state_47398;
(statearr_47403[(9)] = inst_47362__$1);

return statearr_47403;
})();
if(inst_47364){
var statearr_47404_48573 = state_47398__$1;
(statearr_47404_48573[(1)] = (5));

} else {
var statearr_47405_48574 = state_47398__$1;
(statearr_47405_48574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (15))){
var inst_47388 = (state_47398[(2)]);
var state_47398__$1 = state_47398;
var statearr_47406_48578 = state_47398__$1;
(statearr_47406_48578[(2)] = inst_47388);

(statearr_47406_48578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (13))){
var state_47398__$1 = state_47398;
var statearr_47407_48579 = state_47398__$1;
(statearr_47407_48579[(2)] = null);

(statearr_47407_48579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (6))){
var inst_47358 = (state_47398[(8)]);
var inst_47383 = inst_47358.length;
var inst_47384 = (inst_47383 > (0));
var state_47398__$1 = state_47398;
if(cljs.core.truth_(inst_47384)){
var statearr_47408_48580 = state_47398__$1;
(statearr_47408_48580[(1)] = (12));

} else {
var statearr_47409_48581 = state_47398__$1;
(statearr_47409_48581[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (3))){
var inst_47396 = (state_47398[(2)]);
var state_47398__$1 = state_47398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47398__$1,inst_47396);
} else {
if((state_val_47399 === (12))){
var inst_47358 = (state_47398[(8)]);
var inst_47386 = cljs.core.vec(inst_47358);
var state_47398__$1 = state_47398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47398__$1,(15),out,inst_47386);
} else {
if((state_val_47399 === (2))){
var state_47398__$1 = state_47398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47398__$1,(4),ch);
} else {
if((state_val_47399 === (11))){
var inst_47362 = (state_47398[(9)]);
var inst_47366 = (state_47398[(10)]);
var inst_47376 = (state_47398[(2)]);
var inst_47377 = [];
var inst_47378 = inst_47377.push(inst_47362);
var inst_47358 = inst_47377;
var inst_47359 = inst_47366;
var state_47398__$1 = (function (){var statearr_47410 = state_47398;
(statearr_47410[(7)] = inst_47359);

(statearr_47410[(11)] = inst_47378);

(statearr_47410[(12)] = inst_47376);

(statearr_47410[(8)] = inst_47358);

return statearr_47410;
})();
var statearr_47411_48584 = state_47398__$1;
(statearr_47411_48584[(2)] = null);

(statearr_47411_48584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (9))){
var inst_47358 = (state_47398[(8)]);
var inst_47374 = cljs.core.vec(inst_47358);
var state_47398__$1 = state_47398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47398__$1,(11),out,inst_47374);
} else {
if((state_val_47399 === (5))){
var inst_47359 = (state_47398[(7)]);
var inst_47362 = (state_47398[(9)]);
var inst_47366 = (state_47398[(10)]);
var inst_47366__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47362) : f.call(null,inst_47362));
var inst_47367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47366__$1,inst_47359);
var inst_47368 = cljs.core.keyword_identical_QMARK_(inst_47359,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47369 = ((inst_47367) || (inst_47368));
var state_47398__$1 = (function (){var statearr_47412 = state_47398;
(statearr_47412[(10)] = inst_47366__$1);

return statearr_47412;
})();
if(cljs.core.truth_(inst_47369)){
var statearr_47413_48588 = state_47398__$1;
(statearr_47413_48588[(1)] = (8));

} else {
var statearr_47414_48589 = state_47398__$1;
(statearr_47414_48589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (14))){
var inst_47391 = (state_47398[(2)]);
var inst_47392 = cljs.core.async.close_BANG_(out);
var state_47398__$1 = (function (){var statearr_47416 = state_47398;
(statearr_47416[(13)] = inst_47391);

return statearr_47416;
})();
var statearr_47417_48595 = state_47398__$1;
(statearr_47417_48595[(2)] = inst_47392);

(statearr_47417_48595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (10))){
var inst_47381 = (state_47398[(2)]);
var state_47398__$1 = state_47398;
var statearr_47418_48600 = state_47398__$1;
(statearr_47418_48600[(2)] = inst_47381);

(statearr_47418_48600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47399 === (8))){
var inst_47362 = (state_47398[(9)]);
var inst_47366 = (state_47398[(10)]);
var inst_47358 = (state_47398[(8)]);
var inst_47371 = inst_47358.push(inst_47362);
var tmp47415 = inst_47358;
var inst_47358__$1 = tmp47415;
var inst_47359 = inst_47366;
var state_47398__$1 = (function (){var statearr_47419 = state_47398;
(statearr_47419[(7)] = inst_47359);

(statearr_47419[(14)] = inst_47371);

(statearr_47419[(8)] = inst_47358__$1);

return statearr_47419;
})();
var statearr_47420_48613 = state_47398__$1;
(statearr_47420_48613[(2)] = null);

(statearr_47420_48613[(1)] = (2));


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
var statearr_47421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47421[(0)] = cljs$core$async$state_machine__33218__auto__);

(statearr_47421[(1)] = (1));

return statearr_47421;
});
var cljs$core$async$state_machine__33218__auto____1 = (function (state_47398){
while(true){
var ret_value__33219__auto__ = (function (){try{while(true){
var result__33220__auto__ = switch__33217__auto__(state_47398);
if(cljs.core.keyword_identical_QMARK_(result__33220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33220__auto__;
}
break;
}
}catch (e47422){var ex__33221__auto__ = e47422;
var statearr_47423_48621 = state_47398;
(statearr_47423_48621[(2)] = ex__33221__auto__);


if(cljs.core.seq((state_47398[(4)]))){
var statearr_47424_48622 = state_47398;
(statearr_47424_48622[(1)] = cljs.core.first((state_47398[(4)])));

} else {
throw ex__33221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48627 = state_47398;
state_47398 = G__48627;
continue;
} else {
return ret_value__33219__auto__;
}
break;
}
});
cljs$core$async$state_machine__33218__auto__ = function(state_47398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33218__auto____1.call(this,state_47398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33218__auto____0;
cljs$core$async$state_machine__33218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33218__auto____1;
return cljs$core$async$state_machine__33218__auto__;
})()
})();
var state__33339__auto__ = (function (){var statearr_47425 = f__33338__auto__();
(statearr_47425[(6)] = c__33337__auto___48570);

return statearr_47425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33339__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
