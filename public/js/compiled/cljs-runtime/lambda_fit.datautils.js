goog.provide('lambda_fit.datautils');
lambda_fit.datautils.not_zero_QMARK_ = (function lambda_fit$datautils$not_zero_QMARK_(value){
return (!((value === (0))));
});
lambda_fit.datautils.valid_number_QMARK_ = (function lambda_fit$datautils$valid_number_QMARK_(value){
return ((lambda_fit.datautils.not_zero_QMARK_(value)) && (typeof value === 'number') && (true));
});

//# sourceMappingURL=lambda_fit.datautils.js.map
