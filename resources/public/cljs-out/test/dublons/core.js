// Compiled by ClojureScript 1.10.339 {}
goog.provide('dublons.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('clojure.string');
goog.require('cljs.test');
dublons.core.fill_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(234),(233),(66)], null);
dublons.core.stroke_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(224),(150),(66)], null);
dublons.core.letter_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(224),(150),(66)], null);
dublons.core.background_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20),(20)], null);
dublons.core.shade_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20),(20)], null);
dublons.core.base_diam = (100);
dublons.core.log = console.log;
dublons.core.logpass = (function dublons$core$logpass(thing){
dublons.core.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(thing)].join(''));

return thing;
});
dublons.core.window_size = (function dublons$core$window_size(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight], null);
});
dublons.core.draw_letter = (function dublons$core$draw_letter(cosine,diam){
var w = Math.abs(cosine);
var size = (diam - (20));
var offset_base = ((diam / (10)) - ((diam * w) / (10)));
var offset = (((cosine < (0)))?(0):offset_base);
quil.core.text_font.call(null,quil.core.create_font.call(null,"Helvetica",size,true));

cljs.core.apply.call(null,quil.core.fill,dublons.core.letter_color);

var tr__7941__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__7941__auto__);

quil.core.scale.call(null,w,(1));

quil.core.text.call(null,"D",(- (size / (3))),(size / (3)));

quil.core.rect.call(null,(size / (15)),(- (size / (2))),(size / (15)),size);

return quil.core.rect.call(null,(- (size / (10))),(- (size / (2))),(size / (15)),size);
}finally {quil.core.pop_matrix.call(null);
}});
dublons.core.draw_dublon = (function dublons$core$draw_dublon(dublon){
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(dublon);
var diam = new cljs.core.Keyword(null,"diam","diam",-501455045).cljs$core$IFn$_invoke$arity$1(dublon);
var cosine = quil.core.cos.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(dublon));
var elipse_width = (diam * Math.abs(cosine));
var wd = (diam / (10));
var depth = (wd - (elipse_width / (10)));
var tr__7941__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__7941__auto__);

var fill__7925__auto___8317 = cljs.core.conj.call(null,dublons.core.fill_color,(10));
var previous_fill__7926__auto___8318 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__7925__auto___8317)){
cljs.core.apply.call(null,quil.core.fill,fill__7925__auto___8317);
} else {
quil.core.fill.call(null,fill__7925__auto___8317);

}

var return_val__7927__auto___8319 = (function (){var stroke__7933__auto__ = cljs.core.conj.call(null,dublons.core.fill_color,(10));
var previous_stroke__7934__auto__ = quil.core.current_stroke.call(null);
if(cljs.core.sequential_QMARK_.call(null,stroke__7933__auto__)){
cljs.core.apply.call(null,quil.core.stroke,stroke__7933__auto__);
} else {
quil.core.stroke.call(null,stroke__7933__auto__);

}

var return_val__7935__auto__ = (function (){
quil.core.ellipse.call(null,(0),(0),(((10) + elipse_width) * 1.2),(1.3 * diam));

return quil.core.ellipse.call(null,(5),(0),(((10) + elipse_width) * 1.2),(1.3 * diam));
})()
;
if((previous_stroke__7934__auto__ == null)){
quil.core.no_stroke.call(null);
} else {
quil.core.stroke.call(null,previous_stroke__7934__auto__);
}

return return_val__7935__auto__;
})();
if((previous_fill__7926__auto___8318 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__7926__auto___8318);
}


cljs.core.apply.call(null,quil.core.fill,dublons.core.fill_color);

cljs.core.apply.call(null,quil.core.stroke,dublons.core.stroke_color);

var fill__7925__auto___8320 = dublons.core.stroke_color;
var previous_fill__7926__auto___8321 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__7925__auto___8320)){
cljs.core.apply.call(null,quil.core.fill,fill__7925__auto___8320);
} else {
quil.core.fill.call(null,fill__7925__auto___8320);

}

var return_val__7927__auto___8322 = quil.core.rect.call(null,(0),((0) - (diam / (2))),depth,diam);
if((previous_fill__7926__auto___8321 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__7926__auto___8321);
}


if((cosine < (0))){
var fill__7925__auto___8323 = dublons.core.stroke_color;
var previous_fill__7926__auto___8324 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__7925__auto___8323)){
cljs.core.apply.call(null,quil.core.fill,fill__7925__auto___8323);
} else {
quil.core.fill.call(null,fill__7925__auto___8323);

}

var return_val__7927__auto___8325 = quil.core.ellipse.call(null,depth,(0),elipse_width,diam);
if((previous_fill__7926__auto___8324 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__7926__auto___8324);
}


quil.core.ellipse.call(null,(0),(0),elipse_width,diam);
} else {
var fill__7925__auto___8326 = dublons.core.stroke_color;
var previous_fill__7926__auto___8327 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__7925__auto___8326)){
cljs.core.apply.call(null,quil.core.fill,fill__7925__auto___8326);
} else {
quil.core.fill.call(null,fill__7925__auto___8326);

}

var return_val__7927__auto___8328 = quil.core.ellipse.call(null,(0),(0),elipse_width,diam);
if((previous_fill__7926__auto___8327 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__7926__auto___8327);
}


quil.core.ellipse.call(null,depth,(0),elipse_width,diam);
}

return dublons.core.draw_letter.call(null,cosine,diam);
}finally {quil.core.pop_matrix.call(null);
}});
dublons.core.inc_angle = (function dublons$core$inc_angle(var_args){
var G__8330 = arguments.length;
switch (G__8330) {
case 1:
return dublons.core.inc_angle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dublons.core.inc_angle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dublons.core.inc_angle.cljs$core$IFn$_invoke$arity$1 = (function (angle){
return dublons.core.inc_angle.call(null,angle,0.04);
});

dublons.core.inc_angle.cljs$core$IFn$_invoke$arity$2 = (function (angle,amount){
var result = (angle + amount);
if((result < 3.14)){
return result;
} else {
return (0);
}
});

dublons.core.inc_angle.cljs$lang$maxFixedArity = 2;

dublons.core.calc_columns = (function dublons$core$calc_columns(n){
return Math.sqrt(cljs.core.last.call(null,cljs.core.take_while.call(null,(function (x){
return (x <= ((2) + n));
}),cljs.core.map.call(null,(function (p1__8332_SHARP_){
return (p1__8332_SHARP_ * p1__8332_SHARP_);
}),cljs.core.range.call(null)))));
});
dublons.core.calc_axis = (function dublons$core$calc_axis(length,num_parts){
var size = (length / num_parts);
var half_size = (size / (2));
return cljs.core.map.call(null,((function (size,half_size){
return (function (p1__8334_SHARP_){
return ((p1__8334_SHARP_ + half_size) | (0));
});})(size,half_size))
,cljs.core.map.call(null,((function (size,half_size){
return (function (p1__8333_SHARP_){
return (p1__8333_SHARP_ * size);
});})(size,half_size))
,cljs.core.range.call(null,num_parts)));
});
dublons.core.calc_positions = (function dublons$core$calc_positions(width,height,n){
var num_columns = dublons.core.calc_columns.call(null,n);
var num_rows = Math.ceil((n / num_columns));
var ys = dublons.core.calc_axis.call(null,height,num_rows);
var rows = cljs.core.map.call(null,((function (num_columns,num_rows,ys){
return (function (p1__8335_SHARP_){
return dublons.core.calc_axis.call(null,width,cljs.core.count.call(null,p1__8335_SHARP_));
});})(num_columns,num_rows,ys))
,cljs.core.partition_all.call(null,num_columns,cljs.core.range.call(null,n)));
return cljs.core.mapcat.call(null,((function (num_columns,num_rows,ys,rows){
return (function (row,y_coord){
var iter__4324__auto__ = ((function (num_columns,num_rows,ys,rows){
return (function dublons$core$calc_positions_$_iter__8336(s__8337){
return (new cljs.core.LazySeq(null,((function (num_columns,num_rows,ys,rows){
return (function (){
var s__8337__$1 = s__8337;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8337__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__8337__$1,x,xs__6012__auto__,temp__5457__auto__,num_columns,num_rows,ys,rows){
return (function dublons$core$calc_positions_$_iter__8336_$_iter__8338(s__8339){
return (new cljs.core.LazySeq(null,((function (s__8337__$1,x,xs__6012__auto__,temp__5457__auto__,num_columns,num_rows,ys,rows){
return (function (){
var s__8339__$1 = s__8339;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__8339__$1);
if(temp__5457__auto____$1){
var s__8339__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8339__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8339__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8341 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8340 = (0);
while(true){
if((i__8340 < size__4323__auto__)){
var y = cljs.core._nth.call(null,c__4322__auto__,i__8340);
cljs.core.chunk_append.call(null,b__8341,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));

var G__8342 = (i__8340 + (1));
i__8340 = G__8342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8341),dublons$core$calc_positions_$_iter__8336_$_iter__8338.call(null,cljs.core.chunk_rest.call(null,s__8339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8341),null);
}
} else {
var y = cljs.core.first.call(null,s__8339__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),dublons$core$calc_positions_$_iter__8336_$_iter__8338.call(null,cljs.core.rest.call(null,s__8339__$2)));
}
} else {
return null;
}
break;
}
});})(s__8337__$1,x,xs__6012__auto__,temp__5457__auto__,num_columns,num_rows,ys,rows))
,null,null));
});})(s__8337__$1,x,xs__6012__auto__,temp__5457__auto__,num_columns,num_rows,ys,rows))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_coord], null)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,dublons$core$calc_positions_$_iter__8336.call(null,cljs.core.rest.call(null,s__8337__$1)));
} else {
var G__8343 = cljs.core.rest.call(null,s__8337__$1);
s__8337__$1 = G__8343;
continue;
}
} else {
return null;
}
break;
}
});})(num_columns,num_rows,ys,rows))
,null,null));
});})(num_columns,num_rows,ys,rows))
;
return iter__4324__auto__.call(null,row);
});})(num_columns,num_rows,ys,rows))
,rows,ys);
});
dublons.core.distance = (function dublons$core$distance(a,b){
return Math.sqrt((Math.pow((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a)),(2)) + Math.pow((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a)),(2))));
});
/**
 * Parse URL parameters into a hashmap
 */
dublons.core.parse_params = (function dublons$core$parse_params(){
var param_strs = clojure.string.split.call(null,cljs.core.last.call(null,clojure.string.split.call(null,window.location,/\?/)),/\&/);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = ((function (param_strs){
return (function dublons$core$parse_params_$_iter__8345(s__8346){
return (new cljs.core.LazySeq(null,((function (param_strs){
return (function (){
var s__8346__$1 = s__8346;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8346__$1);
if(temp__5457__auto__){
var s__8346__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8346__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8346__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8348 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8347 = (0);
while(true){
if((i__8347 < size__4323__auto__)){
var vec__8349 = cljs.core._nth.call(null,c__4322__auto__,i__8347);
var k = cljs.core.nth.call(null,vec__8349,(0),null);
var v = cljs.core.nth.call(null,vec__8349,(1),null);
cljs.core.chunk_append.call(null,b__8348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__8355 = (i__8347 + (1));
i__8347 = G__8355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8348),dublons$core$parse_params_$_iter__8345.call(null,cljs.core.chunk_rest.call(null,s__8346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8348),null);
}
} else {
var vec__8352 = cljs.core.first.call(null,s__8346__$2);
var k = cljs.core.nth.call(null,vec__8352,(0),null);
var v = cljs.core.nth.call(null,vec__8352,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),dublons$core$parse_params_$_iter__8345.call(null,cljs.core.rest.call(null,s__8346__$2)));
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
return iter__4324__auto__.call(null,cljs.core.map.call(null,((function (iter__4324__auto__,param_strs){
return (function (p1__8344_SHARP_){
return clojure.string.split.call(null,p1__8344_SHARP_,/=/);
});})(iter__4324__auto__,param_strs))
,param_strs));
})());
});
dublons.core.calc_diam = (function dublons$core$calc_diam(width,height,n){
var num_columns = dublons.core.calc_columns.call(null,n);
var num_rows = Math.ceil((n / num_columns));
var field_width = (width / num_columns);
var field_height = (height / num_rows);
var field_size = (function (){var x__4040__auto__ = field_width;
var y__4041__auto__ = field_height;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
return ((0.6 * field_size) | (0));
});
dublons.core.create_dublon = (function dublons$core$create_dublon(pos,diam){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"diam","diam",-501455045),diam,new cljs.core.Keyword(null,"angle","angle",1622094254),dublons.core.inc_angle.call(null,cljs.core.rand.call(null,3.14)),new cljs.core.Keyword(null,"clicked","clicked",114423720),false], null);
});
dublons.core.setup = (function dublons$core$setup(){
quil.core.frame_rate.call(null,(30));

var n = (new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dublons.core.parse_params.call(null)) | (0));
var positions = dublons.core.calc_positions.call(null,quil.core.width.call(null),quil.core.height.call(null),n);
var diam = (0);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dublons","dublons",-1883686824),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (n,positions,diam){
return (function (p1__8356_SHARP_){
return dublons.core.create_dublon.call(null,p1__8356_SHARP_,diam);
});})(n,positions,diam))
,positions))], null);
});
dublons.core.update_dublon = (function dublons$core$update_dublon(dublon,position){
var c = new cljs.core.Keyword(null,"clicked","clicked",114423720).cljs$core$IFn$_invoke$arity$1(dublon);
var old_diam = new cljs.core.Keyword(null,"diam","diam",-501455045).cljs$core$IFn$_invoke$arity$1(dublon);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"diam","diam",-501455045),(cljs.core.truth_(c)?(1.2 * old_diam):old_diam),new cljs.core.Keyword(null,"angle","angle",1622094254),(cljs.core.truth_(c)?(0):dublons.core.inc_angle.call(null,new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(dublon))),new cljs.core.Keyword(null,"pos","pos",-864607220),position,new cljs.core.Keyword(null,"clicked","clicked",114423720),c], null);
});
dublons.core.update_dublons = (function dublons$core$update_dublons(dublons__$1){
var n = (new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(dublons.core.parse_params.call(null)) | (0));
var positions = dublons.core.calc_positions.call(null,quil.core.width.call(null),quil.core.height.call(null),n);
var diam = dublons.core.calc_diam.call(null,quil.core.width.call(null),quil.core.height.call(null),n);
var ds = (function (){var iter__4324__auto__ = ((function (n,positions,diam){
return (function dublons$core$update_dublons_$_iter__8357(s__8358){
return (new cljs.core.LazySeq(null,((function (n,positions,diam){
return (function (){
var s__8358__$1 = s__8358;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__8358__$1);
if(temp__5457__auto__){
var s__8358__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8358__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__8358__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__8360 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__8359 = (0);
while(true){
if((i__8359 < size__4323__auto__)){
var d = cljs.core._nth.call(null,c__4322__auto__,i__8359);
cljs.core.chunk_append.call(null,b__8360,cljs.core.update.call(null,d,new cljs.core.Keyword(null,"diam","diam",-501455045),((function (i__8359,d,c__4322__auto__,size__4323__auto__,b__8360,s__8358__$2,temp__5457__auto__,n,positions,diam){
return (function (_){
return diam;
});})(i__8359,d,c__4322__auto__,size__4323__auto__,b__8360,s__8358__$2,temp__5457__auto__,n,positions,diam))
));

var G__8361 = (i__8359 + (1));
i__8359 = G__8361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8360),dublons$core$update_dublons_$_iter__8357.call(null,cljs.core.chunk_rest.call(null,s__8358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8360),null);
}
} else {
var d = cljs.core.first.call(null,s__8358__$2);
return cljs.core.cons.call(null,cljs.core.update.call(null,d,new cljs.core.Keyword(null,"diam","diam",-501455045),((function (d,s__8358__$2,temp__5457__auto__,n,positions,diam){
return (function (_){
return diam;
});})(d,s__8358__$2,temp__5457__auto__,n,positions,diam))
),dublons$core$update_dublons_$_iter__8357.call(null,cljs.core.rest.call(null,s__8358__$2)));
}
} else {
return null;
}
break;
}
});})(n,positions,diam))
,null,null));
});})(n,positions,diam))
;
return iter__4324__auto__.call(null,dublons__$1);
})();
return cljs.core.map.call(null,dublons.core.update_dublon,ds,positions);
});
dublons.core.update_state = (function dublons$core$update_state(state){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"dublons","dublons",-1883686824),dublons.core.update_dublons);
});
dublons.core.draw_state = (function dublons$core$draw_state(state){
var size_8362 = dublons.core.window_size.call(null);
quil.core.resize_sketch.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size_8362),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size_8362));

cljs.core.apply.call(null,quil.core.background,dublons.core.background_color);

cljs.core.doall.call(null,cljs.core.map.call(null,dublons.core.draw_dublon,new cljs.core.Keyword(null,"dublons","dublons",-1883686824).cljs$core$IFn$_invoke$arity$1(state)));

return state;
});
dublons.core.click = (function dublons$core$click(state,event){
var dublons_8363__$1 = new cljs.core.Keyword(null,"dublons","dublons",-1883686824).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,dublons_8363__$1),dublons.core.logpass.call(null,cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"clicked","clicked",114423720),dublons_8363__$1))))){
window.location.href = "links.html";
} else {
}

return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"dublons","dublons",-1883686824),(function (dublons__$1){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (d){
if((dublons.core.distance.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(d),event) < new cljs.core.Keyword(null,"diam","diam",-501455045).cljs$core$IFn$_invoke$arity$1(d))){
return cljs.core.update.call(null,d,new cljs.core.Keyword(null,"clicked","clicked",114423720),(function (_){
return true;
}));
} else {
return d;
}
}),dublons__$1));
}));
});
dublons.core.run_sketch = (function dublons$core$run_sketch(){
dublons.core.hello_quiljs = (function dublons$core$run_sketch_$_hello_quiljs(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"dublons",new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),((cljs.core.fn_QMARK_.call(null,dublons.core.click))?(function() { 
var G__8364__delegate = function (args){
return cljs.core.apply.call(null,dublons.core.click,args);
};
var G__8364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8365__i = 0, G__8365__a = new Array(arguments.length -  0);
while (G__8365__i < G__8365__a.length) {G__8365__a[G__8365__i] = arguments[G__8365__i + 0]; ++G__8365__i;}
  args = new cljs.core.IndexedSeq(G__8365__a,0,null);
} 
return G__8364__delegate.call(this,args);};
G__8364.cljs$lang$maxFixedArity = 0;
G__8364.cljs$lang$applyTo = (function (arglist__8366){
var args = cljs.core.seq(arglist__8366);
return G__8364__delegate(args);
});
G__8364.cljs$core$IFn$_invoke$arity$variadic = G__8364__delegate;
return G__8364;
})()
:dublons.core.click),new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
return quil.core.smooth.call(null,(2));
}),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,dublons.core.update_state))?(function() { 
var G__8367__delegate = function (args){
return cljs.core.apply.call(null,dublons.core.update_state,args);
};
var G__8367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8368__i = 0, G__8368__a = new Array(arguments.length -  0);
while (G__8368__i < G__8368__a.length) {G__8368__a[G__8368__i] = arguments[G__8368__i + 0]; ++G__8368__i;}
  args = new cljs.core.IndexedSeq(G__8368__a,0,null);
} 
return G__8367__delegate.call(this,args);};
G__8367.cljs$lang$maxFixedArity = 0;
G__8367.cljs$lang$applyTo = (function (arglist__8369){
var args = cljs.core.seq(arglist__8369);
return G__8367__delegate(args);
});
G__8367.cljs$core$IFn$_invoke$arity$variadic = G__8367__delegate;
return G__8367;
})()
:dublons.core.update_state),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,dublons.core.setup))?(function() { 
var G__8370__delegate = function (args){
return cljs.core.apply.call(null,dublons.core.setup,args);
};
var G__8370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8371__i = 0, G__8371__a = new Array(arguments.length -  0);
while (G__8371__i < G__8371__a.length) {G__8371__a[G__8371__i] = arguments[G__8371__i + 0]; ++G__8371__i;}
  args = new cljs.core.IndexedSeq(G__8371__a,0,null);
} 
return G__8370__delegate.call(this,args);};
G__8370.cljs$lang$maxFixedArity = 0;
G__8370.cljs$lang$applyTo = (function (arglist__8372){
var args = cljs.core.seq(arglist__8372);
return G__8370__delegate(args);
});
G__8370.cljs$core$IFn$_invoke$arity$variadic = G__8370__delegate;
return G__8370;
})()
:dublons.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,dublons.core.draw_state))?(function() { 
var G__8373__delegate = function (args){
return cljs.core.apply.call(null,dublons.core.draw_state,args);
};
var G__8373 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8374__i = 0, G__8374__a = new Array(arguments.length -  0);
while (G__8374__i < G__8374__a.length) {G__8374__a[G__8374__i] = arguments[G__8374__i + 0]; ++G__8374__i;}
  args = new cljs.core.IndexedSeq(G__8374__a,0,null);
} 
return G__8373__delegate.call(this,args);};
G__8373.cljs$lang$maxFixedArity = 0;
G__8373.cljs$lang$applyTo = (function (arglist__8375){
var args = cljs.core.seq(arglist__8375);
return G__8373__delegate(args);
});
G__8373.cljs$core$IFn$_invoke$arity$variadic = G__8373__delegate;
return G__8373;
})()
:dublons.core.draw_state));
});
goog.exportSymbol('dublons.core.hello_quiljs', dublons.core.hello_quiljs);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7536__7537__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7536__7537__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),dublons.core.hello_quiljs,new cljs.core.Keyword(null,"host-id","host-id",742376279),"dublons"], null));
}
});
goog.exportSymbol('dublons.core.run_sketch', dublons.core.run_sketch);
dublons.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map
