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
		mouseenter:function (obj, fn)
		{
			if (obj.onmouseenter)
			{
				obj.onmouseenter=fn;
			}
			else
			{
				obj.onmouseover=function (ev){
					var oEvent=ev || event;
					var oFrom=oEvent.fromElement || oEvent.relatedTarget;

					if( ! (oFrom && obj.contains(oFrom)))
					{
						fn(ev);
					}
				};
			}
		},
		mouseleave:function (obj, fn)
		{

			if (obj.onmouseleave)
			{
				obj.onmouseleave=fn;
			}
			else
			{
				obj.onmouseout=function (ev){
					var oEvent=ev || event;
					var oTo=oEvent.toElement || oEvent.relatedTarget;
					if ( ! (oTo && obj.contains(oTo)))
					{
						fn(ev);
					}
				};
			}
		}

	}

});