'use strict';
define(function (require, exports, module){

	var addEvent=require('base').addEvent;
	var move=require('move').move;

	exports.main=function (){
		var oBox=document.getElementById('box');
		var oBtn=document.getElementById('btn');
		var oImg=document.getElementById('img1');
		var bFlag=false;
		var now=0;
		var aSpan=[];
		var aPath=['0.jpg', '1.jpg', '2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
		var row=4;
		var col=7;
		var W=700/col;
		var H=400/row;

		// 创建span
		for (var r=0; r<row; r++)
		{
			for (var c=0; c<col; c++)
			{
				var oSpan=document.createElement('span');
				oSpan.c=c;
				oSpan.r=r;
				oSpan.style.width=W+'px';
				oSpan.style.height=H+'px';
				var left=W*c;
				var top=H*r;
				oSpan.style.left=left+'px';
				oSpan.style.top=top+'px';
				oSpan.style.backgroundPosition=-left+'px -'+top+'px';


				oBox.appendChild(oSpan);
				aSpan.push(oSpan);
			}
		}
		next();
		function next(){
			

			now++;


			for (var i=0; i<aSpan.length; i++)
			{
				aSpan[i].style.opacity=0;
				aSpan[i].style.backgroundImage
				='url(images/'+aPath[now%aPath.length]+')';
			}


			for (var i=0; i<aSpan.length; i++)
			{
				(function (index){
					var c=aSpan[i].c;
					var r=aSpan[i].r;
					setTimeout(function (){
						move(aSpan[index], {opacity:1},{
							complete:function (){
								if (index == aSpan.length-1)
								{
							// 最后一个运动完了
							oImg.src='images/'+aPath[now%aPath.length];
							next();
						}
					}	
				});
					}, 500*(r+c));
				})(i);
			}
		};
	}
});
