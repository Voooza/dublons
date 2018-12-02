// Compiled by ClojureScript 1.10.339 {}
goog.provide('dublons.test_runner');
goog.require('cljs.core');
goog.require('dublons.core_test');
goog.require('figwheel.main.testing');
dublons.test_runner._main = (function dublons$test_runner$_main(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19803 = arguments.length;
var i__4532__auto___19804 = (0);
while(true){
if((i__4532__auto___19804 < len__4531__auto___19803)){
args__4534__auto__.push((arguments[i__4532__auto___19804]));

var G__19805 = (i__4532__auto___19804 + (1));
i__4532__auto___19804 = G__19805;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return dublons.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

dublons.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__10507__auto___19806 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__10507__auto___19806))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__10507__auto___19806,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),((function (reporter__10507__auto___19806){
return (function (m__10508__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__10508__auto__);
});})(reporter__10507__auto___19806))
);
}

cljs.test.run_block.call(null,(function (){var env19801 = cljs.test.empty_env.call(null);
var summary19802 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env19801,summary19802,reporter__10507__auto___19806){
return (function (){
cljs.test.set_env_BANG_.call(null,env19801);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__13519__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__13519__auto__,env19801,summary19802,reporter__10507__auto___19806){
return (function (){
if((env__13519__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__13519__auto__,env19801,summary19802,reporter__10507__auto___19806))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return dublons.core_test.test_distance;},new cljs.core.Symbol("dublons.core-test","test-distance","dublons.core-test/test-distance",-592179301,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Symbol(null,"test-distance","test-distance",1707216320,null),"/home/voooza/dev/dublons/test/dublons/core_test.cljs",23,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(dublons.core_test.test_distance)?dublons.core_test.test_distance.cljs$lang$test:null)])),new cljs.core.Var(function(){return dublons.core_test.test_inc_angle;},new cljs.core.Symbol("dublons.core-test","test-inc-angle","dublons.core-test/test-inc-angle",1225387204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Symbol(null,"test-inc-angle","test-inc-angle",-228595185,null),"/home/voooza/dev/dublons/test/dublons/core_test.cljs",24,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(dublons.core_test.test_inc_angle)?dublons.core_test.test_inc_angle.cljs$lang$test:null)])),new cljs.core.Var(function(){return dublons.core_test.test_calc_columns;},new cljs.core.Symbol("dublons.core-test","test-calc-columns","dublons.core-test/test-calc-columns",1495273849,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Symbol(null,"test-calc-columns","test-calc-columns",-940174430,null),"/home/voooza/dev/dublons/test/dublons/core_test.cljs",27,1,27,27,cljs.core.List.EMPTY,null,(cljs.core.truth_(dublons.core_test.test_calc_columns)?dublons.core_test.test_calc_columns.cljs$lang$test:null)])),new cljs.core.Var(function(){return dublons.core_test.test_calc_axis;},new cljs.core.Symbol("dublons.core-test","test-calc-axis","dublons.core-test/test-calc-axis",-1961660984,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Symbol(null,"test-calc-axis","test-calc-axis",-167940237,null),"/home/voooza/dev/dublons/test/dublons/core_test.cljs",24,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(dublons.core_test.test_calc_axis)?dublons.core_test.test_calc_axis.cljs$lang$test:null)])),new cljs.core.Var(function(){return dublons.core_test.test_calc_positions;},new cljs.core.Symbol("dublons.core-test","test-calc-positions","dublons.core-test/test-calc-positions",-1407071040,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Symbol(null,"test-calc-positions","test-calc-positions",446680725,null),"/home/voooza/dev/dublons/test/dublons/core_test.cljs",29,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(dublons.core_test.test_calc_positions)?dublons.core_test.test_calc_positions.cljs$lang$test:null)])),new cljs.core.Var(function(){return dublons.core_test.test_calc_diam;},new cljs.core.Symbol("dublons.core-test","test-calc-diam","dublons.core-test/test-calc-diam",-304425818,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Symbol(null,"test-calc-diam","test-calc-diam",336385371,null),"/home/voooza/dev/dublons/test/dublons/core_test.cljs",24,1,52,52,cljs.core.List.EMPTY,null,(cljs.core.truth_(dublons.core_test.test_calc_diam)?dublons.core_test.test_calc_diam.cljs$lang$test:null)])),new cljs.core.Var(function(){return dublons.core_test.test_update_dublon;},new cljs.core.Symbol("dublons.core-test","test-update-dublon","dublons.core-test/test-update-dublon",1307427858,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Symbol(null,"test-update-dublon","test-update-dublon",593222247,null),"/home/voooza/dev/dublons/test/dublons/core_test.cljs",28,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(dublons.core_test.test_update_dublon)?dublons.core_test.test_update_dublon.cljs$lang$test:null)])),new cljs.core.Var(function(){return dublons.core_test.test_click;},new cljs.core.Symbol("dublons.core-test","test-click","dublons.core-test/test-click",-1303716456,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Symbol(null,"test-click","test-click",700243907,null),"/home/voooza/dev/dublons/test/dublons/core_test.cljs",20,1,62,62,cljs.core.List.EMPTY,null,(cljs.core.truth_(dublons.core_test.test_click)?dublons.core_test.test_click.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__13519__auto__,env19801,summary19802,reporter__10507__auto___19806){
return (function (){
if((env__13519__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__13519__auto__,env19801,summary19802,reporter__10507__auto___19806))
], null));
})());
});})(env19801,summary19802,reporter__10507__auto___19806))
,((function (env19801,summary19802,reporter__10507__auto___19806){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dublons.core-test","dublons.core-test",-1721318876,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env19801,summary19802,reporter__10507__auto___19806))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env19801,summary19802,reporter__10507__auto___19806){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary19802,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary19802),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env19801,summary19802,reporter__10507__auto___19806))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env19801,summary19802,reporter__10507__auto___19806){
return (function (){
cljs.test.set_env_BANG_.call(null,env19801);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary19802));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary19802),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env19801,summary19802,reporter__10507__auto___19806))
], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
});

dublons.test_runner._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
dublons.test_runner._main.cljs$lang$applyTo = (function (seq19800){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19800));
});


//# sourceMappingURL=test_runner.js.map
