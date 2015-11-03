'use strict';
define(function (require, exports, module){

	var addEvent=require('base').addEvent;

	exports.main=function (){

		var oUp=document.getElementById('up');
		var oDown=document.getElementById('down');
		var oImg=document.getElementById('img1');
		var top=0;
		var minH=3895-300;
		var timer=null;

		oDown.onmouseover=function (){
			timer=setInterval(function(){
				top-=3;
				oImg.style.top=top+'px';
				if(top<-minH){
					clearInterval(timer);
					oImg.style.top=-minH+'px';
				}
			},30);
		};
		oDown.onmouseout=oUp.onmouseout=function (){
			clearInterval(timer);
		};
		oUp.onmouseover=function (){
			timer=setInterval(function(){
				top+=3;
				oImg.style.top=top+'px';
				if(top>0){
					clearInterval(timer);
					oImg.style.top=0;
				}
			},30);
		};
	}
});
