'use strict';
define(function (require, exports, module){

	exports.main=function (){

		var oBox=document.getElementById('box');
		var oBox2=document.getElementById('box2');
		var aImg=document.getElementsByTagName('img');
		var oLeft=document.getElementById('left');
		var oRight=document.getElementById('right');
		var nSpeed=-3;
		var timer=null;

		//设置图片
		var arrImg=['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']

		//创建ul
		var oUl=document.createElement('ul');
		oUl.className='clearFix';
		oBox2.appendChild(oUl);

		// 创建li 添加图片
		for(var i=0; i<arrImg.length; i++){
			var oLi=document.createElement('li');
			oLi.innerHTML='<img src="images/'+arrImg[i]+'" alt=""/>';
			oUl.appendChild(oLi);
		}
		
		//添加oUl的长度
		oUl.innerHTML+=oUl.innerHTML;
		//运动到到oUl的宽度的一般的时候拉回来
		oUl.style.width=(oUl.children[0].offsetWidth+20)*oUl.children.length+'px';
		
		show();
		
		oLeft.onclick=function (){
			nSpeed=-3;
			show();
		}

		oRight.onclick=function (){
			nSpeed=3;
			show();
		}

		oBox2.onmouseover=function (){

			clearInterval(timer);

		};

		oBox2.onmouseout=function (){

			show(oUl, nSpeed, timer);
		}

		function show(){

			clearInterval(timer);
			timer=setInterval(function (){
				var left=oUl.offsetLeft+nSpeed;

				oUl.style.left=left+'px';

				if (left < -oUl.offsetWidth/2){
					oUl.style.left=0;
				}else if(left > 0){
					oUl.style.left=-oUl.offsetWidth/2+'px';
				}
			}, 30);
		}
	}
});
