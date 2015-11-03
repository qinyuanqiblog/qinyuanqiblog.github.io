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
		}

	}

});