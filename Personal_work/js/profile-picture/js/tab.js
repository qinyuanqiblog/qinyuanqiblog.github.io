'use strict';
define(function (require, exports, module){
	var move=require('move').move;

	exports.tab=function (){

		//获取元素
		var oBtn=document.getElementById('btn');
		var oDiv=document.getElementById('div1');	

		//获取oDiv半径
		
		//设置需要oDiv子集创建的个数
		var total=5;

		var aSpan=[];
		//图片设置
		var arr=['21.gif', '7.jpg', '8.jpg', '28.jpg', '5.jpg'];

		//创建span
		for (var i=0; i<total; i++){
			var oSpan=document.createElement('span');
			//在每一个span下创建一个img 
			oSpan.innerHTML='<img src="images/'+arr[i]+'" alt=""/>';	
			oDiv.appendChild(oSpan);
			aSpan.push(oSpan);
		}

		var n=0;
		
		
		//oBtn的点击事件
		oBtn.onclick=function (){
			var R=oDiv.offsetWidth/2;
			//点击时让span显示	
			for (var i=0; i<aSpan.length; i++){
				aSpan[i].style.display='block';
					// 设置span的背景图
					// aSpan[i].style.backgroundImage='url(images/'+arr[i]+')';
				}
				n++;

				//当点击的次数为奇数时
				if (n%2 == 1){	
					for (var i=0; i<total; i++){
						var target=360*i/total;
						//调用move框架
						// move(aSpan[i], { R:R, target:target, easing:Tween.Quad.easeOut});
						move(aSpan[i], { R:R, target:target});
					}	
					//当点击的次数为偶数时
				}else{

					for (var i=0; i<total; i++){

						//获取最后一个span
						(function (index){	
						//让所有的span依次消失 调用move框架 
						move(aSpan[i],  {R:R, target:0, complete:function (){
							aSpan[index].style.display='none';
						}});
					})(i)
				}
			}	
			return false;	
		};		
	}
});









