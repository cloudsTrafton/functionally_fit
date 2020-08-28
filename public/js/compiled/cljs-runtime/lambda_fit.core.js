goog.provide('lambda_fit.core');
if((typeof lambda_fit !== 'undefined') && (typeof lambda_fit.core !== 'undefined') && (typeof lambda_fit.core.app_state !== 'undefined')){
} else {
lambda_fit.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
if((typeof lambda_fit !== 'undefined') && (typeof lambda_fit.core !== 'undefined') && (typeof lambda_fit.core.my_weight !== 'undefined')){
} else {
lambda_fit.core.my_weight = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof lambda_fit !== 'undefined') && (typeof lambda_fit.core !== 'undefined') && (typeof lambda_fit.core.my_height !== 'undefined')){
} else {
lambda_fit.core.my_height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
lambda_fit.core.weight_input = (function lambda_fit$core$weight_input(weight){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(weight),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51275_SHARP_){
return cljs.core.reset_BANG_(weight,p1__51275_SHARP_.target.value);
})], null)], null);
});
lambda_fit.core.height_input = (function lambda_fit$core$height_input(height){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(height),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51276_SHARP_){
return cljs.core.reset_BANG_(height,p1__51276_SHARP_.target.value);
})], null)], null);
});
lambda_fit.core.calc_bmi_imperial = (function lambda_fit$core$calc_bmi_imperial(height,weight){
if(lambda_fit.datautils.valid_number_QMARK_(height)){
return (((703) * weight) / (height * height));
} else {
return "Please enter a height and weight.";
}
});
lambda_fit.core.get_bmi = (function lambda_fit$core$get_bmi(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter your height in inches",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambda_fit.core.height_input,lambda_fit.core.my_height], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter your weight in pounds",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambda_fit.core.weight_input,lambda_fit.core.my_weight], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your BMI is: ",lambda_fit.core.calc_bmi_imperial(cljs.core.deref(lambda_fit.core.my_height),cljs.core.deref(lambda_fit.core.my_weight))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"BMI is a useless measurement and is stupid BTW. You should measure your health by how you feel"], null)], null);
});
lambda_fit.core.about_page = (function lambda_fit$core$about_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Lambda Fit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This website seeks to provide information about WHAT you can do to increase your fitness, not HOW to do it. That is personal to you.\n               No internet stranger can tell you exactly how to 'be fit' because it isn't as simple as taking a magical diet pill. There is no one\n               size fits all solution.\n               \n               This website also encourages those on a journey to increase their fitness to log their failures and progress in a way that works for them.\n               Keeping an immutable log of yourself at different points in time provides information about how you change and can be quite encouraging.\n               It is important to see yourself as you were, and as you are as opposed to looking for current 'flaws' without reviewing older entries"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambda_fit.core.get_bmi], null)], null);
});
lambda_fit.core.start = (function lambda_fit$core$start(){
var G__51277 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lambda_fit.core.about_page], null);
var G__51278 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__51277,G__51278) : reagent.core.render_component.call(null,G__51277,G__51278));
});
lambda_fit.core.init = (function lambda_fit$core$init(){
return lambda_fit.core.start();
});
goog.exportSymbol('lambda_fit.core.init', lambda_fit.core.init);
lambda_fit.core.stop = (function lambda_fit$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=lambda_fit.core.js.map
