// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
Processing.disableInit();
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var el = applet.quil_canvas;
el.setAttribute("width",width);

el.setAttribute("height",height);

applet.width = window.parseInt(goog.style.getComputedStyle(el,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(el,"height"));
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__8995 = arguments.length;
switch (G__8995) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__8997 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__8998 = null;
var count__8999 = (0);
var i__9000 = (0);
while(true){
if((i__9000 < count__8999)){
var vec__9001 = chunk__8998.cljs$core$IIndexed$_nth$arity$2(null,i__9000);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9001,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9001,(1),null);
var temp__5457__auto___9009 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5457__auto___9009)){
var handler_9010 = temp__5457__auto___9009;
(prc[cljs.core.name(processing_name)] = ((function (seq__8997,chunk__8998,count__8999,i__9000,handler_9010,temp__5457__auto___9009,vec__9001,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_9004 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_9010.cljs$core$IFn$_invoke$arity$0 ? handler_9010.cljs$core$IFn$_invoke$arity$0() : handler_9010.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_9004;
}});})(seq__8997,chunk__8998,count__8999,i__9000,handler_9010,temp__5457__auto___9009,vec__9001,processing_name,quil_name))
);
} else {
}


var G__9011 = seq__8997;
var G__9012 = chunk__8998;
var G__9013 = count__8999;
var G__9014 = (i__9000 + (1));
seq__8997 = G__9011;
chunk__8998 = G__9012;
count__8999 = G__9013;
i__9000 = G__9014;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__8997);
if(temp__5457__auto__){
var seq__8997__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8997__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__8997__$1);
var G__9015 = cljs.core.chunk_rest(seq__8997__$1);
var G__9016 = c__4351__auto__;
var G__9017 = cljs.core.count(c__4351__auto__);
var G__9018 = (0);
seq__8997 = G__9015;
chunk__8998 = G__9016;
count__8999 = G__9017;
i__9000 = G__9018;
continue;
} else {
var vec__9005 = cljs.core.first(seq__8997__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9005,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9005,(1),null);
var temp__5457__auto___9019__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5457__auto___9019__$1)){
var handler_9020 = temp__5457__auto___9019__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__8997,chunk__8998,count__8999,i__9000,handler_9020,temp__5457__auto___9019__$1,vec__9005,processing_name,quil_name,seq__8997__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR_9008 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_9020.cljs$core$IFn$_invoke$arity$0 ? handler_9020.cljs$core$IFn$_invoke$arity$0() : handler_9020.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_9008;
}});})(seq__8997,chunk__8998,count__8999,i__9000,handler_9020,temp__5457__auto___9019__$1,vec__9005,processing_name,quil_name,seq__8997__$1,temp__5457__auto__))
);
} else {
}


var G__9021 = cljs.core.next(seq__8997__$1);
var G__9022 = null;
var G__9023 = (0);
var G__9024 = (0);
seq__8997 = G__9021;
chunk__8998 = G__9022;
count__8999 = G__9023;
i__9000 = G__9024;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__3949__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for provided Processing object.
 *   Fullscreen is enabled when user presses F11. We turn
 *   sketch <canvas> element to fullscreen storing old size
 *   in an atom. When user cancels fullscreen (F11 or Esc)
 *   we resize sketch to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = ((function (old_size){
return (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});})(old_size))
;
var G__9026_9032 = window;
var G__9027_9033 = goog.events.EventType.KEYDOWN;
var G__9028_9034 = ((function (G__9026_9032,G__9027_9033,old_size,adjust_canvas_size){
return (function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
});})(G__9026_9032,G__9027_9033,old_size,adjust_canvas_size))
;
goog.events.listen(G__9026_9032,G__9027_9033,G__9028_9034);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__9029 = document;
var G__9030 = "fullscreenerror";
var G__9031 = ((function (G__9029,G__9030,old_size,adjust_canvas_size){
return (function (p1__9025_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__9025_SHARP_);
});})(G__9029,G__9030,old_size,adjust_canvas_size))
;
return goog.events.listen(G__9029,G__9030,G__9031);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__9037 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__9036 = ((function (G__9037){
return (function (p1__9035_SHARP_){
return (p1__9035_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9035_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__9035_SHARP_.call(null,options));
});})(G__9037))
;
return fexpr__9036(G__9037);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__9038_9042 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__9038_9042.cljs$core$IFn$_invoke$arity$0 ? fexpr__9038_9042.cljs$core$IFn$_invoke$arity$0() : fexpr__9038_9042.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__9039 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__9039.cljs$core$IFn$_invoke$arity$0 ? fexpr__9039.cljs$core$IFn$_invoke$arity$0() : fexpr__9039.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__9041 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__9040 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__9040.cljs$core$IFn$_invoke$arity$1 ? fexpr__9040.cljs$core$IFn$_invoke$arity$1(G__9041) : fexpr__9040.call(null,G__9041));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state);
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5457__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5457__auto__)){
var proc_obj = temp__5457__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9045 = arguments.length;
var i__4532__auto___9046 = (0);
while(true){
if((i__4532__auto___9046 < len__4531__auto___9045)){
args__4534__auto__.push((arguments[i__4532__auto___9046]));

var G__9047 = (i__4532__auto___9046 + (1));
i__4532__auto___9046 = G__9047;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__9044 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__9044);
})();
var renderer = (function (){var or__3949__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

var proc_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
host_elem.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem;

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq9043){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9043));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__9054 = quil.sketch.empty_body_QMARK_();
var seq__9048_9055 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__9049_9056 = null;
var count__9050_9057 = (0);
var i__9051_9058 = (0);
while(true){
if((i__9051_9058 < count__9050_9057)){
var sk_9059 = chunk__9049_9056.cljs$core$IIndexed$_nth$arity$2(null,i__9051_9058);
if(cljs.core.truth_(add_elem_QMARK__9054)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_9059));
} else {
}

var fexpr__9052_9060 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_9059);
(fexpr__9052_9060.cljs$core$IFn$_invoke$arity$0 ? fexpr__9052_9060.cljs$core$IFn$_invoke$arity$0() : fexpr__9052_9060.call(null));


var G__9061 = seq__9048_9055;
var G__9062 = chunk__9049_9056;
var G__9063 = count__9050_9057;
var G__9064 = (i__9051_9058 + (1));
seq__9048_9055 = G__9061;
chunk__9049_9056 = G__9062;
count__9050_9057 = G__9063;
i__9051_9058 = G__9064;
continue;
} else {
var temp__5457__auto___9065 = cljs.core.seq(seq__9048_9055);
if(temp__5457__auto___9065){
var seq__9048_9066__$1 = temp__5457__auto___9065;
if(cljs.core.chunked_seq_QMARK_(seq__9048_9066__$1)){
var c__4351__auto___9067 = cljs.core.chunk_first(seq__9048_9066__$1);
var G__9068 = cljs.core.chunk_rest(seq__9048_9066__$1);
var G__9069 = c__4351__auto___9067;
var G__9070 = cljs.core.count(c__4351__auto___9067);
var G__9071 = (0);
seq__9048_9055 = G__9068;
chunk__9049_9056 = G__9069;
count__9050_9057 = G__9070;
i__9051_9058 = G__9071;
continue;
} else {
var sk_9072 = cljs.core.first(seq__9048_9066__$1);
if(cljs.core.truth_(add_elem_QMARK__9054)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_9072));
} else {
}

var fexpr__9053_9073 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_9072);
(fexpr__9053_9073.cljs$core$IFn$_invoke$arity$0 ? fexpr__9053_9073.cljs$core$IFn$_invoke$arity$0() : fexpr__9053_9073.call(null));


var G__9074 = cljs.core.next(seq__9048_9066__$1);
var G__9075 = null;
var G__9076 = (0);
var G__9077 = (0);
seq__9048_9055 = G__9074;
chunk__9049_9056 = G__9075;
count__9050_9057 = G__9076;
i__9051_9058 = G__9077;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
