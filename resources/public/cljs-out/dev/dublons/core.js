// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('dublons.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('clojure.string');
goog.require('dublons.config');
goog.require('dublons.web');
dublons.core.draw_letter = (function dublons$core$draw_letter(cosine,diam){
var w = Math.abs(cosine);
var size = (diam * 0.8);
var offset_base = ((diam / (10)) - ((diam * w) / (10)));
var offset = (((cosine < (0)))?(0):offset_base);
quil.core.text_font.cljs$core$IFn$_invoke$arity$1(quil.core.create_font.cljs$core$IFn$_invoke$arity$3("Helvetica",size,true));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,dublons.config.letter_color);

var tr__10238__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,(0)], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__10238__auto__);

quil.core.scale.cljs$core$IFn$_invoke$arity$2(w,(1));

quil.core.text.cljs$core$IFn$_invoke$arity$3("D",(- (size / (3))),(size / (3)));

quil.core.rect.cljs$core$IFn$_invoke$arity$4((size / (15)),(- (size / (2))),(size / (15)),size);

return quil.core.rect.cljs$core$IFn$_invoke$arity$4((- (size / (10))),(- (size / (2))),(size / (15)),size);
}finally {quil.core.pop_matrix();
}});
dublons.core.draw_dublon = (function dublons$core$draw_dublon(dublon){
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(dublon);
var diam = cljs.core.cst$kw$diam.cljs$core$IFn$_invoke$arity$1(dublon);
var cosine = quil.core.cos(cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(dublon));
var elipse_width = (diam * Math.abs(cosine));
var wd = (diam / (10));
var depth = (wd - (elipse_width / (10)));
var tr__10238__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(pos),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(pos)], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__10238__auto__);

var fill__10222__auto___10400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dublons.config.fill_color,(10));
var previous_fill__10223__auto___10401 = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__10222__auto___10400)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__10222__auto___10400);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__10222__auto___10400);

}

var return_val__10224__auto___10402 = (function (){var stroke__10230__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dublons.config.fill_color,(10));
var previous_stroke__10231__auto__ = quil.core.current_stroke();
if(cljs.core.sequential_QMARK_(stroke__10230__auto__)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.stroke,stroke__10230__auto__);
} else {
quil.core.stroke.cljs$core$IFn$_invoke$arity$1(stroke__10230__auto__);

}

var return_val__10232__auto__ = (function (){
quil.core.ellipse((0),(0),(((10) + elipse_width) * 1.2),(1.3 * diam));

return quil.core.ellipse((5),(0),(((10) + elipse_width) * 1.2),(1.3 * diam));
})()
;
if((previous_stroke__10231__auto__ == null)){
quil.core.no_stroke();
} else {
quil.core.stroke.cljs$core$IFn$_invoke$arity$1(previous_stroke__10231__auto__);
}

return return_val__10232__auto__;
})();
if((previous_fill__10223__auto___10401 == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__10223__auto___10401);
}


cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,dublons.config.fill_color);

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.stroke,dublons.config.stroke_color);

var fill__10222__auto___10403 = dublons.config.stroke_color;
var previous_fill__10223__auto___10404 = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__10222__auto___10403)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__10222__auto___10403);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__10222__auto___10403);

}

var return_val__10224__auto___10405 = quil.core.rect.cljs$core$IFn$_invoke$arity$4((0),(- (diam / (2))),depth,diam);
if((previous_fill__10223__auto___10404 == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__10223__auto___10404);
}


if((cosine < (0))){
var fill__10222__auto___10406 = dublons.config.stroke_color;
var previous_fill__10223__auto___10407 = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__10222__auto___10406)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__10222__auto___10406);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__10222__auto___10406);

}

var return_val__10224__auto___10408 = quil.core.ellipse(depth,(0),elipse_width,diam);
if((previous_fill__10223__auto___10407 == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__10223__auto___10407);
}


quil.core.ellipse((0),(0),elipse_width,diam);
} else {
var fill__10222__auto___10409 = dublons.config.stroke_color;
var previous_fill__10223__auto___10410 = quil.core.current_fill();
if(cljs.core.sequential_QMARK_(fill__10222__auto___10409)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,fill__10222__auto___10409);
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(fill__10222__auto___10409);

}

var return_val__10224__auto___10411 = quil.core.ellipse((0),(0),elipse_width,diam);
if((previous_fill__10223__auto___10410 == null)){
quil.core.no_fill();
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1(previous_fill__10223__auto___10410);
}


quil.core.ellipse(depth,(0),elipse_width,diam);
}

return dublons.core.draw_letter(cosine,diam);
}finally {quil.core.pop_matrix();
}});
dublons.core.draw_state = (function dublons$core$draw_state(state){
var size_10412 = dublons.web.window_size();
quil.core.resize_sketch(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(size_10412),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(size_10412));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.background,dublons.config.background_color);

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(dublons.core.draw_dublon,cljs.core.cst$kw$dublons.cljs$core$IFn$_invoke$arity$1(state)));

return state;
});
dublons.core.distance = (function dublons$core$distance(a,b){
var G__10413 = ((function (){var G__10414 = (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(b) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(a));
var G__10415 = (2);
return Math.pow(G__10414,G__10415);
})() + (function (){var G__10416 = (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(b) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(a));
var G__10417 = (2);
return Math.pow(G__10416,G__10417);
})());
return Math.sqrt(G__10413);
});
dublons.core.inc_angle = (function dublons$core$inc_angle(var_args){
var G__10419 = arguments.length;
switch (G__10419) {
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
return dublons.core.inc_angle.cljs$core$IFn$_invoke$arity$2(angle,dublons.config.angle_increment);
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

dublons.core.calc_columns_fn = (function dublons$core$calc_columns_fn(n){
var G__10422 = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (x){
return (x <= ((2) + n));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10421_SHARP_){
return (p1__10421_SHARP_ * p1__10421_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return Math.sqrt(G__10422);
});
dublons.core.calc_columns = cljs.core.memoize(dublons.core.calc_columns_fn);
dublons.core.calc_axis_fn = (function dublons$core$calc_axis_fn(length,num_parts){
var size = (length / num_parts);
var half_size = (size / (2));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (size,half_size){
return (function (p1__10424_SHARP_){
return ((p1__10424_SHARP_ + half_size) | (0));
});})(size,half_size))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (size,half_size){
return (function (p1__10423_SHARP_){
return (p1__10423_SHARP_ * size);
});})(size,half_size))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_parts)));
});
dublons.core.calc_axis = cljs.core.memoize(dublons.core.calc_axis_fn);
dublons.core.calc_positions_fn = (function dublons$core$calc_positions_fn(width,height,n){
var num_columns = (dublons.core.calc_columns.cljs$core$IFn$_invoke$arity$1 ? dublons.core.calc_columns.cljs$core$IFn$_invoke$arity$1(n) : dublons.core.calc_columns.call(null,n));
var num_rows = (function (){var G__10426 = (n / num_columns);
return Math.ceil(G__10426);
})();
var ys = (dublons.core.calc_axis.cljs$core$IFn$_invoke$arity$2 ? dublons.core.calc_axis.cljs$core$IFn$_invoke$arity$2(height,num_rows) : dublons.core.calc_axis.call(null,height,num_rows));
var rows = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (num_columns,num_rows,ys){
return (function (p1__10425_SHARP_){
var G__10427 = width;
var G__10428 = cljs.core.count(p1__10425_SHARP_);
return (dublons.core.calc_axis.cljs$core$IFn$_invoke$arity$2 ? dublons.core.calc_axis.cljs$core$IFn$_invoke$arity$2(G__10427,G__10428) : dublons.core.calc_axis.call(null,G__10427,G__10428));
});})(num_columns,num_rows,ys))
,cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(num_columns,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (num_columns,num_rows,ys,rows){
return (function (row,y_coord){
var iter__4324__auto__ = ((function (num_columns,num_rows,ys,rows){
return (function dublons$core$calc_positions_fn_$_iter__10429(s__10430){
return (new cljs.core.LazySeq(null,((function (num_columns,num_rows,ys,rows){
return (function (){
var s__10430__$1 = s__10430;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10430__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var x = cljs.core.first(xs__6012__auto__);
var iterys__4320__auto__ = ((function (s__10430__$1,x,xs__6012__auto__,temp__5457__auto__,num_columns,num_rows,ys,rows){
return (function dublons$core$calc_positions_fn_$_iter__10429_$_iter__10431(s__10432){
return (new cljs.core.LazySeq(null,((function (s__10430__$1,x,xs__6012__auto__,temp__5457__auto__,num_columns,num_rows,ys,rows){
return (function (){
var s__10432__$1 = s__10432;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__10432__$1);
if(temp__5457__auto____$1){
var s__10432__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10432__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10432__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10434 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10433 = (0);
while(true){
if((i__10433 < size__4323__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10433);
cljs.core.chunk_append(b__10434,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null));

var G__10435 = (i__10433 + (1));
i__10433 = G__10435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10434),dublons$core$calc_positions_fn_$_iter__10429_$_iter__10431(cljs.core.chunk_rest(s__10432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10434),null);
}
} else {
var y = cljs.core.first(s__10432__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y], null),dublons$core$calc_positions_fn_$_iter__10429_$_iter__10431(cljs.core.rest(s__10432__$2)));
}
} else {
return null;
}
break;
}
});})(s__10430__$1,x,xs__6012__auto__,temp__5457__auto__,num_columns,num_rows,ys,rows))
,null,null));
});})(s__10430__$1,x,xs__6012__auto__,temp__5457__auto__,num_columns,num_rows,ys,rows))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_coord], null)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,dublons$core$calc_positions_fn_$_iter__10429(cljs.core.rest(s__10430__$1)));
} else {
var G__10436 = cljs.core.rest(s__10430__$1);
s__10430__$1 = G__10436;
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
return iter__4324__auto__(row);
});})(num_columns,num_rows,ys,rows))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rows,ys], 0));
});
dublons.core.calc_positions = cljs.core.memoize(dublons.core.calc_positions_fn);
dublons.core.calc_diam_fn = (function dublons$core$calc_diam_fn(width,height,n){
var num_columns = (dublons.core.calc_columns.cljs$core$IFn$_invoke$arity$1 ? dublons.core.calc_columns.cljs$core$IFn$_invoke$arity$1(n) : dublons.core.calc_columns.call(null,n));
var num_rows = (function (){var G__10437 = (n / num_columns);
return Math.ceil(G__10437);
})();
var field_width = (width / num_columns);
var field_height = (height / num_rows);
var field_size = (function (){var x__4040__auto__ = field_width;
var y__4041__auto__ = field_height;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
return ((0.6 * field_size) | (0));
});
dublons.core.calc_diam = cljs.core.memoize(dublons.core.calc_diam_fn);
dublons.core.create_dublon = (function dublons$core$create_dublon(pos,diam){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pos,pos,cljs.core.cst$kw$diam,diam,cljs.core.cst$kw$angle,dublons.core.inc_angle.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(3.14)),cljs.core.cst$kw$clicked,false], null);
});
dublons.core.setup = (function dublons$core$setup(){
quil.core.frame_rate(dublons.config.frame_rate);

var passed_count = (cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(dublons.web.parse_params()) | (0));
var n = dublons.web.logpass.cljs$core$IFn$_invoke$arity$2("n",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(passed_count,(0)))?(1):passed_count));
var positions = (function (){var G__10439 = quil.core.width();
var G__10440 = quil.core.height();
var G__10441 = n;
return (dublons.core.calc_positions.cljs$core$IFn$_invoke$arity$3 ? dublons.core.calc_positions.cljs$core$IFn$_invoke$arity$3(G__10439,G__10440,G__10441) : dublons.core.calc_positions.call(null,G__10439,G__10440,G__10441));
})();
var diam = (0);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dublons,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (passed_count,n,positions,diam){
return (function (p1__10438_SHARP_){
return dublons.core.create_dublon(p1__10438_SHARP_,diam);
});})(passed_count,n,positions,diam))
,positions))], null);
});
dublons.core.update_dublon = (function dublons$core$update_dublon(dublon,position){
var c = cljs.core.cst$kw$clicked.cljs$core$IFn$_invoke$arity$1(dublon);
var old_diam = cljs.core.cst$kw$diam.cljs$core$IFn$_invoke$arity$1(dublon);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$diam,(cljs.core.truth_(c)?(dublons.config.clicked_increase_factor * old_diam):old_diam),cljs.core.cst$kw$angle,(cljs.core.truth_(c)?(0):dublons.core.inc_angle.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(dublon))),cljs.core.cst$kw$pos,position,cljs.core.cst$kw$clicked,c], null);
});
dublons.core.update_dublons = (function dublons$core$update_dublons(dublons__$1){
var n = cljs.core.count(dublons__$1);
var positions = (function (){var G__10442 = quil.core.width();
var G__10443 = quil.core.height();
var G__10444 = n;
return (dublons.core.calc_positions.cljs$core$IFn$_invoke$arity$3 ? dublons.core.calc_positions.cljs$core$IFn$_invoke$arity$3(G__10442,G__10443,G__10444) : dublons.core.calc_positions.call(null,G__10442,G__10443,G__10444));
})();
var diam = (function (){var G__10445 = quil.core.width();
var G__10446 = quil.core.height();
var G__10447 = n;
return (dublons.core.calc_diam.cljs$core$IFn$_invoke$arity$3 ? dublons.core.calc_diam.cljs$core$IFn$_invoke$arity$3(G__10445,G__10446,G__10447) : dublons.core.calc_diam.call(null,G__10445,G__10446,G__10447));
})();
var ds = (function (){var iter__4324__auto__ = ((function (n,positions,diam){
return (function dublons$core$update_dublons_$_iter__10448(s__10449){
return (new cljs.core.LazySeq(null,((function (n,positions,diam){
return (function (){
var s__10449__$1 = s__10449;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__10449__$1);
if(temp__5457__auto__){
var s__10449__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10449__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__10449__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__10451 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__10450 = (0);
while(true){
if((i__10450 < size__4323__auto__)){
var d = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__10450);
cljs.core.chunk_append(b__10451,cljs.core.update.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$diam,((function (i__10450,d,c__4322__auto__,size__4323__auto__,b__10451,s__10449__$2,temp__5457__auto__,n,positions,diam){
return (function (_){
return diam;
});})(i__10450,d,c__4322__auto__,size__4323__auto__,b__10451,s__10449__$2,temp__5457__auto__,n,positions,diam))
));

var G__10452 = (i__10450 + (1));
i__10450 = G__10452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10451),dublons$core$update_dublons_$_iter__10448(cljs.core.chunk_rest(s__10449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10451),null);
}
} else {
var d = cljs.core.first(s__10449__$2);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$diam,((function (d,s__10449__$2,temp__5457__auto__,n,positions,diam){
return (function (_){
return diam;
});})(d,s__10449__$2,temp__5457__auto__,n,positions,diam))
),dublons$core$update_dublons_$_iter__10448(cljs.core.rest(s__10449__$2)));
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
return iter__4324__auto__(dublons__$1);
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(dublons.core.update_dublon,ds,positions);
});
dublons.core.update_state = (function dublons$core$update_state(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$dublons,dublons.core.update_dublons);
});
dublons.core.click = (function dublons$core$click(state,event){
var dublons__$1 = cljs.core.cst$kw$dublons.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(dublons__$1),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clicked,dublons__$1)))){
return window.location.href = "links.html";
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$dublons,((function (dublons__$1){
return (function (dublons__$2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (dublons__$1){
return (function (d){
if((dublons.core.distance(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(d),event) < cljs.core.cst$kw$diam.cljs$core$IFn$_invoke$arity$1(d))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$clicked,((function (dublons__$1){
return (function (_){
return true;
});})(dublons__$1))
);
} else {
return d;
}
});})(dublons__$1))
,dublons__$2));
});})(dublons__$1))
);
}
});
dublons.core.run_sketch = (function dublons$core$run_sketch(){
dublons.core.hello_quiljs = (function dublons$core$run_sketch_$_hello_quiljs(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"dublons",cljs.core.cst$kw$mouse_DASH_released,((cljs.core.fn_QMARK_(dublons.core.click))?(function() { 
var G__10453__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dublons.core.click,args);
};
var G__10453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10454__i = 0, G__10454__a = new Array(arguments.length -  0);
while (G__10454__i < G__10454__a.length) {G__10454__a[G__10454__i] = arguments[G__10454__i + 0]; ++G__10454__i;}
  args = new cljs.core.IndexedSeq(G__10454__a,0,null);
} 
return G__10453__delegate.call(this,args);};
G__10453.cljs$lang$maxFixedArity = 0;
G__10453.cljs$lang$applyTo = (function (arglist__10455){
var args = cljs.core.seq(arglist__10455);
return G__10453__delegate(args);
});
G__10453.cljs$core$IFn$_invoke$arity$variadic = G__10453__delegate;
return G__10453;
})()
:dublons.core.click),cljs.core.cst$kw$settings,(function (){
return quil.core.smooth.cljs$core$IFn$_invoke$arity$1((2));
}),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(dublons.core.update_state))?(function() { 
var G__10456__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dublons.core.update_state,args);
};
var G__10456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10457__i = 0, G__10457__a = new Array(arguments.length -  0);
while (G__10457__i < G__10457__a.length) {G__10457__a[G__10457__i] = arguments[G__10457__i + 0]; ++G__10457__i;}
  args = new cljs.core.IndexedSeq(G__10457__a,0,null);
} 
return G__10456__delegate.call(this,args);};
G__10456.cljs$lang$maxFixedArity = 0;
G__10456.cljs$lang$applyTo = (function (arglist__10458){
var args = cljs.core.seq(arglist__10458);
return G__10456__delegate(args);
});
G__10456.cljs$core$IFn$_invoke$arity$variadic = G__10456__delegate;
return G__10456;
})()
:dublons.core.update_state),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(dublons.core.setup))?(function() { 
var G__10459__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dublons.core.setup,args);
};
var G__10459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10460__i = 0, G__10460__a = new Array(arguments.length -  0);
while (G__10460__i < G__10460__a.length) {G__10460__a[G__10460__i] = arguments[G__10460__i + 0]; ++G__10460__i;}
  args = new cljs.core.IndexedSeq(G__10460__a,0,null);
} 
return G__10459__delegate.call(this,args);};
G__10459.cljs$lang$maxFixedArity = 0;
G__10459.cljs$lang$applyTo = (function (arglist__10461){
var args = cljs.core.seq(arglist__10461);
return G__10459__delegate(args);
});
G__10459.cljs$core$IFn$_invoke$arity$variadic = G__10459__delegate;
return G__10459;
})()
:dublons.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(dublons.core.draw_state))?(function() { 
var G__10462__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dublons.core.draw_state,args);
};
var G__10462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10463__i = 0, G__10463__a = new Array(arguments.length -  0);
while (G__10463__i < G__10463__a.length) {G__10463__a[G__10463__i] = arguments[G__10463__i + 0]; ++G__10463__i;}
  args = new cljs.core.IndexedSeq(G__10463__a,0,null);
} 
return G__10462__delegate.call(this,args);};
G__10462.cljs$lang$maxFixedArity = 0;
G__10462.cljs$lang$applyTo = (function (arglist__10464){
var args = cljs.core.seq(arglist__10464);
return G__10462__delegate(args);
});
G__10462.cljs$core$IFn$_invoke$arity$variadic = G__10462__delegate;
return G__10462;
})()
:dublons.core.draw_state)], 0));
});
goog.exportSymbol('dublons.core.hello_quiljs', dublons.core.hello_quiljs);

if(cljs.core.truth_(cljs.core.some((function (p1__8899__8900__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__8899__8900__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,dublons.core.hello_quiljs,cljs.core.cst$kw$host_DASH_id,"dublons"], null));
}
});
goog.exportSymbol('dublons.core.run_sketch', dublons.core.run_sketch);
dublons.core.run_sketch();
