// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25205){
var map__25206 = p__25205;
var map__25206__$1 = ((((!((map__25206 == null)))?(((((map__25206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25206):map__25206);
var m = map__25206__$1;
var n = cljs.core.get.call(null,map__25206__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25206__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25208_25230 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25209_25231 = null;
var count__25210_25232 = (0);
var i__25211_25233 = (0);
while(true){
if((i__25211_25233 < count__25210_25232)){
var f_25234 = cljs.core._nth.call(null,chunk__25209_25231,i__25211_25233);
cljs.core.println.call(null,"  ",f_25234);


var G__25235 = seq__25208_25230;
var G__25236 = chunk__25209_25231;
var G__25237 = count__25210_25232;
var G__25238 = (i__25211_25233 + (1));
seq__25208_25230 = G__25235;
chunk__25209_25231 = G__25236;
count__25210_25232 = G__25237;
i__25211_25233 = G__25238;
continue;
} else {
var temp__5457__auto___25239 = cljs.core.seq.call(null,seq__25208_25230);
if(temp__5457__auto___25239){
var seq__25208_25240__$1 = temp__5457__auto___25239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25208_25240__$1)){
var c__4351__auto___25241 = cljs.core.chunk_first.call(null,seq__25208_25240__$1);
var G__25242 = cljs.core.chunk_rest.call(null,seq__25208_25240__$1);
var G__25243 = c__4351__auto___25241;
var G__25244 = cljs.core.count.call(null,c__4351__auto___25241);
var G__25245 = (0);
seq__25208_25230 = G__25242;
chunk__25209_25231 = G__25243;
count__25210_25232 = G__25244;
i__25211_25233 = G__25245;
continue;
} else {
var f_25246 = cljs.core.first.call(null,seq__25208_25240__$1);
cljs.core.println.call(null,"  ",f_25246);


var G__25247 = cljs.core.next.call(null,seq__25208_25240__$1);
var G__25248 = null;
var G__25249 = (0);
var G__25250 = (0);
seq__25208_25230 = G__25247;
chunk__25209_25231 = G__25248;
count__25210_25232 = G__25249;
i__25211_25233 = G__25250;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25251 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25251);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25251)))?cljs.core.second.call(null,arglists_25251):arglists_25251));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25212_25252 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25213_25253 = null;
var count__25214_25254 = (0);
var i__25215_25255 = (0);
while(true){
if((i__25215_25255 < count__25214_25254)){
var vec__25216_25256 = cljs.core._nth.call(null,chunk__25213_25253,i__25215_25255);
var name_25257 = cljs.core.nth.call(null,vec__25216_25256,(0),null);
var map__25219_25258 = cljs.core.nth.call(null,vec__25216_25256,(1),null);
var map__25219_25259__$1 = ((((!((map__25219_25258 == null)))?(((((map__25219_25258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25219_25258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25219_25258):map__25219_25258);
var doc_25260 = cljs.core.get.call(null,map__25219_25259__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25261 = cljs.core.get.call(null,map__25219_25259__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25257);

cljs.core.println.call(null," ",arglists_25261);

if(cljs.core.truth_(doc_25260)){
cljs.core.println.call(null," ",doc_25260);
} else {
}


var G__25262 = seq__25212_25252;
var G__25263 = chunk__25213_25253;
var G__25264 = count__25214_25254;
var G__25265 = (i__25215_25255 + (1));
seq__25212_25252 = G__25262;
chunk__25213_25253 = G__25263;
count__25214_25254 = G__25264;
i__25215_25255 = G__25265;
continue;
} else {
var temp__5457__auto___25266 = cljs.core.seq.call(null,seq__25212_25252);
if(temp__5457__auto___25266){
var seq__25212_25267__$1 = temp__5457__auto___25266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25212_25267__$1)){
var c__4351__auto___25268 = cljs.core.chunk_first.call(null,seq__25212_25267__$1);
var G__25269 = cljs.core.chunk_rest.call(null,seq__25212_25267__$1);
var G__25270 = c__4351__auto___25268;
var G__25271 = cljs.core.count.call(null,c__4351__auto___25268);
var G__25272 = (0);
seq__25212_25252 = G__25269;
chunk__25213_25253 = G__25270;
count__25214_25254 = G__25271;
i__25215_25255 = G__25272;
continue;
} else {
var vec__25221_25273 = cljs.core.first.call(null,seq__25212_25267__$1);
var name_25274 = cljs.core.nth.call(null,vec__25221_25273,(0),null);
var map__25224_25275 = cljs.core.nth.call(null,vec__25221_25273,(1),null);
var map__25224_25276__$1 = ((((!((map__25224_25275 == null)))?(((((map__25224_25275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25224_25275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25224_25275):map__25224_25275);
var doc_25277 = cljs.core.get.call(null,map__25224_25276__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25278 = cljs.core.get.call(null,map__25224_25276__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25274);

cljs.core.println.call(null," ",arglists_25278);

if(cljs.core.truth_(doc_25277)){
cljs.core.println.call(null," ",doc_25277);
} else {
}


var G__25279 = cljs.core.next.call(null,seq__25212_25267__$1);
var G__25280 = null;
var G__25281 = (0);
var G__25282 = (0);
seq__25212_25252 = G__25279;
chunk__25213_25253 = G__25280;
count__25214_25254 = G__25281;
i__25215_25255 = G__25282;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__25226 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25227 = null;
var count__25228 = (0);
var i__25229 = (0);
while(true){
if((i__25229 < count__25228)){
var role = cljs.core._nth.call(null,chunk__25227,i__25229);
var temp__5457__auto___25283__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___25283__$1)){
var spec_25284 = temp__5457__auto___25283__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25284));
} else {
}


var G__25285 = seq__25226;
var G__25286 = chunk__25227;
var G__25287 = count__25228;
var G__25288 = (i__25229 + (1));
seq__25226 = G__25285;
chunk__25227 = G__25286;
count__25228 = G__25287;
i__25229 = G__25288;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__25226);
if(temp__5457__auto____$1){
var seq__25226__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25226__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__25226__$1);
var G__25289 = cljs.core.chunk_rest.call(null,seq__25226__$1);
var G__25290 = c__4351__auto__;
var G__25291 = cljs.core.count.call(null,c__4351__auto__);
var G__25292 = (0);
seq__25226 = G__25289;
chunk__25227 = G__25290;
count__25228 = G__25291;
i__25229 = G__25292;
continue;
} else {
var role = cljs.core.first.call(null,seq__25226__$1);
var temp__5457__auto___25293__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___25293__$2)){
var spec_25294 = temp__5457__auto___25293__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25294));
} else {
}


var G__25295 = cljs.core.next.call(null,seq__25226__$1);
var G__25296 = null;
var G__25297 = (0);
var G__25298 = (0);
seq__25226 = G__25295;
chunk__25227 = G__25296;
count__25228 = G__25297;
i__25229 = G__25298;
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

//# sourceMappingURL=repl.js.map
