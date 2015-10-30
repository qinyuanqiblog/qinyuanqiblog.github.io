'use strict'	
define(function (require, exports, module){

	var getN=require('getN').getN;
	var move=require('move').move;


	module.exports={
		enter:function (obj){
			var oSpan=obj.getElementsByTagName('span')[0];
			obj.onmouseenter=function (ev){
				var oEvent=ev || Event;
				var n=getN(obj, oEvent);
				console.log(n)
				switch (n)
				{
					case 0:
					oSpan.style.left='200px';
					oSpan.style.top=0;
					break;

					case 1:
					oSpan.style.left=0;
					oSpan.style.top='200px';
					break;

					case 2:
					oSpan.style.left='-200px';
					oSpan.style.top='0';
					break;

					case 3:
					oSpan.style.left='0';
					oSpan.style.top='-200px';
					break;
				}

				move(oSpan, {top:0, left:0}, {duration:200});
			};
		},
		leave:function (obj){
			var oSpan=obj.getElementsByTagName('span')[0];
			obj.onmouseleave=function (ev){
				var oEvent=ev || event;
				var n=getN(obj, oEvent);
				switch (n)
				{
					case 0:
					var left=200;
					var top=0;
					break;

					case 1:
					var left=0;
					var top=200;
					break;

					case 2:
					var left=-200;
					var top=0;
					break;

					case 3:
					var left=0;
					var top=-200;
					break;
				}

				move(oSpan, {top:top, left:left},{duration:200});
			};
		}
	};
});
