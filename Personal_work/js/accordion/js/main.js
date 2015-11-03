'use strict';
define(function (require, exports, module){

	var addEvent=require('base').addEvent;
	var move=require('move').move;


	exports.main=function (){
		var aLi=document.getElementsByTagName('li');
		var aSpan=document.getElementsByTagName('span');
		var liW=aLi[0].offsetWidth;
		var sW=aSpan[0].offsetWidth;
		
		
		// 默认left
		for (var i=0; i<aLi.length; i++)
		{
			if (i != 0)
			{
				aLi[i].style.left=liW+(i-1)*sW+'px';
			}
		}
		
		for (var i=0; i<aSpan.length; i++)
		{
			(function (index){
				aSpan[i].onmouseover=function (){
					
					for (var i=0; i<aLi.length; i++)
					{
						if (i <= index)
						{

							move(aLi[i], {left:i*sW}, {
								duration:300	
							});
						}
						else
						{

							move(aLi[i], {left:liW+(i-1)*sW}, {
								duration:300	
							});
						}
					}
				};
			})(i);
		}
	}
});
