'use strict'
define(function (require, exports, module){
	
	var getStyle=require('base').getStyle;
	var Tween=require('tween').Tween;
	
	exports.move=function (obj, json, options)
	{
		options=options || {};
		var duration=options.duration || 1000;
		var easing=options.easing || Tween.Linear;

		var start={};
		var dis={};
		var count=Math.floor(duration/30);
		var n=0;

		for (var name in json)
		{
			start[name]=parseFloat(getStyle(obj, name));

			if(isNaN(start[name])){

				switch(name){
					case 'left':
					start[name]=obj.offsetLeft;
					break;
					case 'top':
					start[name]=obj.offsetTop;
					break;
					case 'width':
					start[name]=obj.offsetWidth;
					break;
					case 'height':
					start[name]=obj.offsetHeight;
					break;
					case 'opacity':
					start[name]=1;
					break;
				//.... fontSize borde 
				
			}	
		}
		dis[name]=parseFloat(json[name])-start[name];
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		
		for (var name in json)
		{
			var cur=easing(duration*n/count, start[name], dis[name], duration);
			
			if (name == 'opacity')
			{
				obj.style[name]=cur;
			}
			else
			{
				obj.style[name]=cur+'px';
			}
		}
		
		if (n == count)
		{
			clearInterval(obj.timer);
			options.complete && options.complete();
		}
	}, 30);
}
});