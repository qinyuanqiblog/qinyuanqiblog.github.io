'use strict';
define(function (require, exports, module){


	module.exports={
		addEvent: function (obj, sEv, fn)
		{
			if (obj.addEventListener)
			{
				obj.addEventListener(sEv, fn, false);
			}
			else
			{
				obj.attachEvent('on'+sEv, function (){
					fn.call(obj);
				});
			}
		},
		removeEvent:function (obj, sEv, fnName)
		{
			if (obj.removeEventListener)
			{
				obj.removeEventListener(sEv, fnName, false);
			}
			else
			{
				obj.detachEvent('on'+sEv, fnName);
			}
		},
		//判断是否是火狐浏览器
		isFF:function (){
			if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
				return true;
			}else{
				return false;
			}
		},
		//获取非行间样式
		getStyle:function (obj, sName){
			return (obj.currentStyle || getComputedStyle(obj, false))[sName];
		},
		//获取指定元素到页面的距离
		getPos:function (obj){
			var left=0;
			var top=0;

			while(obj){
				left+=obj.offsetLeft;
				top+=obj.offsetTop;

				obj=obj.offsetParent;
			}
			return {left:left, top:top};
		}
	}
	

});