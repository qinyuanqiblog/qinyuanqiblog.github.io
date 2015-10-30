'use strict';
define(function (require, exports, module){

	var addEvent=require('base').addEvent;
	var getStyle=require('base').getStyle;
	var move=require('move').move;

	exports.main=function (){
		var aDiv=document.getElementsByTagName('div');
		
		for (var i=0; i<aDiv.length; i++){
			enter(aDiv[i]);
			leave(aDiv[i]);
		}

		function enter(obj){
			var oSpan=obj.getElementsByTagName('span')[0];
			obj.onmouseenter=function (ev){

				var oEvent=ev || event;
				var n=getN(obj, oEvent);

				switch(n){
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
					oSpan.style.top=0;
					break;

					case 3:
					oSpan.style.left=0;
					oSpan.style.top='-200px';
					break; 

				}
				move(oSpan, {left:0, top:0}, {duration:500});
			};
		}

		function leave(obj){
			var oSpan=obj.getElementsByTagName('span')[0];
			obj.onmouseleave=function (ev){

				var oEvent=ev || event;
				var n=getN(obj, oEvent);

				switch(n){
					case 0:
					var left='200px';
					var top=0;
					break;

					case 1:
					var left=0;
					var top='200px';
					break;


					case 2:
					var left='-200px';
					var top=0;
					break;

					case 3:
					var left=0;
					var top='-200px';
					break; 

				}
				move(oSpan, {left:left, top:top},{duration:500});
			};
		}

		function getN(obj, oEvent){
			var x=obj.offsetLeft+obj.offsetWidth/2-oEvent.clientX;
			var y=obj.offsetTop+obj.offsetHeight/2-oEvent.clientY;

			return Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
		}


		function d2a(n){
			return n*180/Math.PI;
		}
	}
});
