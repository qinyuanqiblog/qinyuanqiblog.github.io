'use strict'
define(function (require, exports, module){
	
	
	exports.doMove=function (obj, oTarget, oSpeed, iEndTime, fnCallBackEnd)
	{
		var iNow=(new Date()).getTime();

		if(iNow>=iEndTime)
		{
			clearInterval(obj.timer);
			obj.timer=null;

			for(var key in oTarget)
			{
				obj[key]=oTarget[key];

				switch(key)
				{
					case 'alpha':
					obj.style.opacity=oTarget[key]/100;
					obj.style.filter="alpha(opacity:"+oTarget[key]+")";
					break;
					case 'zIndex':
					obj.style.zIndex=oTarget[key];
					break;
					case 'width':
					case 'height':
					obj.getElementsByTagName('img')[0].style[key]=oTarget[key]+'px';
					break;
					default:
					obj.style[key]=oTarget[key]+'px';
					break;
				}
			}

			if(fnCallBackEnd)
			{
				fnCallBackEnd();
			}
		}
		else
		{
			for(key in oTarget)
			{
				obj[key]+=oSpeed[key];

				switch(key)
				{
					case 'alpha':
					obj.style.opacity=obj[key]/100;
					obj.style.filter="alpha(opacity:"+obj[key]+")";
					break;
					case 'zIndex':
					//obj.style.zIndex=obj[key];
					obj.style.zIndex=oTarget[key];
					break;
					case 'width':
					case 'height':
					obj.getElementsByTagName('img')[0].style[key]=obj[key]+'px';
					break;
					default:
					obj.style[key]=obj[key]+'px';
					break;
				}
			}
		}
	}

});