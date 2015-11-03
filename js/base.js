'use strict'
define(function (require, exports, module){

	var doMove=require('domove').doMove;

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
		addWheel:function (obj, fn)
		{
			if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1)
			{
				obj.addEventListener('DOMMouseScroll', function (ev){
					var down=ev.detail >0 ? true : false;
					fn(down);
				}, false);
			}
			else
			{
				obj.onmousewheel=function (){
					var down=event.wheelDelta >0 ? false : true;
					fn(down);
				};
			}
		},
		getStyle:function (obj, sName)
		{
			return (obj.currentStyle || getComputedStyle(obj, false))[sName];
		},
		getElementsByClassName:function (oParent, sClass)
		{
			var aTmp=oParent.getElementsByTagName('*');
			var aResult=[];
			var i=0;

			for(i=0;i<aTmp.length;i++)
			{
				if(aTmp[i].className==sClass)
				{
					aResult.push(aTmp[i]);
				}
			}

			return aResult;
		},
		d2a:function (d)
		{
			return d*180/Math.PI;
		},
		getPos:function (obj){
			var left=0;
			var top=0;
			while(obj){
				left+=obj.offsetLeft;
				top+=obj.offsetTop;
				obj=obj.offsetParent;
			}
			return {'left':left, 'top':top};
		},
		rmd:function (n, m){
			return Math.floor(Math.random()*(m-n)+n);
		}
	}
});












