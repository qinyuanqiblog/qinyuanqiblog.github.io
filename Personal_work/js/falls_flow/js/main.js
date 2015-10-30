'use strict';
define(function (require, exports, module){
	var rmd=require('rmd').rmd;
	var addEvent=require('base').addEvent;
	exports.main=function (){

		var oBox=document.getElementById('box');
		var oFoot=document.getElementById('foot');
		var iClientH=document.documentElement.clientHeight;
		var arr=[];
		//设置背景颜色
		var arrColor=['red', 'yellow', 'blue', 'green', 'pink'];
		var iCount=0;

		//创建ul
		for (var i=0; i<3; i++){
			var oUl=document.createElement('ul');
			oBox.appendChild(oUl);
			arr.push(oUl);
		}

		//创建li
		createLi();

		//滚动事件
		addEvent(window, 'scroll', function (){
			
			var iBodyH=document.body.offsetHeight;
			var iScrollH=document.body.scrollTop || document.documentElement.scrollTop;
			var iMaxH=iClientH+iScrollH;


			if (iMaxH >= iBodyH-500){
				createLi();
			}
		});

		function createLi(){
			iCount++;

			//超过5次 不执行
			if (iCount > 5){
				oFoot.style.display='block';
				return;
			}

			//创建li
			for (var i=0; i<30; i++){
				var oLi=document.createElement('li');
				oLi.style.height=rmd(100, 500)+'px';
			//设置统一的颜色
			// oLi.style.background=arrColor[iCount+1];
			// 设置背景颜色随机
			oLi.style.background='rgb('+rmd(1, 256)+','+rmd(1, 256)+','+rmd(1, 256)+')';
			

			arr.sort(function (u1, u2){
				return u1.offsetHeight-u2.offsetHeight;
			});

			arr[0].appendChild(oLi);
		}
	}

}
});
