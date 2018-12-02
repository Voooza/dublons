// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('dublons.web');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
dublons.web.log = console.log;
dublons.web.logpass = (function dublons$web$logpass(var_args){
var G__10380 = arguments.length;
switch (G__10380) {
case 1:
return dublons.web.logpass.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dublons.web.logpass.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dublons.web.logpass.cljs$core$IFn$_invoke$arity$1 = (function (thing){
var G__10381_10384 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(thing)].join('');
(dublons.web.log.cljs$core$IFn$_invoke$arity$1 ? dublons.web.log.cljs$core$IFn$_invoke$arity$1(G__10381_10384) : dublons.web.log.call(null,G__10381_10384));

return thing;
});

dublons.web.logpass.cljs$core$IFn$_invoke$arity$2 = (function (msg,thing){
var G__10382_10385 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thing)].join('');
(dublons.web.log.cljs$core$IFn$_invoke$arity$1 ? dublons.web.log.cljs$core$IFn$_invoke$arity$1(G__10382_10385) : dublons.web.log.call(null,G__10382_10385));

return thing;
});

dublons.web.logpass.cljs$lang$maxFixedArity = 2;

dublons.web.window_size = (function dublons$web$window_size(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,window.innerWidth,cljs.core.cst$kw$height,window.innerHeight], null);
});
dublons.web.parse_params = (function dublons$web$parse_params(){
var param_strs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(window.location,/\?/)),/\&/);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = ((function (param_strs){
return (function dublons$web$parse_params_$_iter__10387(s__10388){
return (new cljs.core.LazySeq(null,((function (param_strs){
return (function (){
var s__10388__$1 = s__10388;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10388__$1);
if(temp__5457__auto__){
var s__10388__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10388__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10388__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10390 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10389 = (0);
while(true){
if((i__10389 < size__4323__auto__)){
var vec__10391 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10389);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10391,(1),null);
cljs.core.chunk_append(b__10390,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null));

var G__10397 = (i__10389 + (1));
i__10389 = G__10397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10390),dublons$web$parse_params_$_iter__10387(cljs.core.chunk_rest(s__10388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10390),null);
}
} else {
var vec__10394 = cljs.core.first(s__10388__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10394,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10394,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null),dublons$web$parse_params_$_iter__10387(cljs.core.rest(s__10388__$2)));
}
} else {
return null;
}
break;
}
});})(param_strs))
,null,null));
});})(param_strs))
;
return iter__4324__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4324__auto__,param_strs){
return (function (p1__10386_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__10386_SHARP_,/=/);
});})(iter__4324__auto__,param_strs))
,param_strs));
})());
});
