'use strict'
define(function (require, exports, module){

	var d2a=require('base').d2a;
	var getPos=require('base').getPos;

	exports.getN=function (obj, ev)
	{
		var x=getPos(obj).left+obj.offsetWidth/2-ev.clientX;
		var y=getPos(obj).top+obj.offsetHeight/2-ev.clientY;

		return Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
	}


});
