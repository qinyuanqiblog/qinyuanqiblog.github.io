'use strict';
define(function (require, exports, module){
	exports.rmd=function (n, m){
		return Math.floor(Math.random()*(m-n)+n);
	}
});