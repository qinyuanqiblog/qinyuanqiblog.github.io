'use strict';
define(function (require, exports, module){
	var addEvent=require('base').addEvent;
	var removeEvent=require('base').removeEvent;
	var getStyle=require('base').getStyle;
	var getPos=require('base').getPos;


	exports.main=function (){

		//获取元素
		var oI=document.getElementById('ii');
		var oItem=document.getElementById('item');
		var oContBox=document.getElementById('contbox');
		var oCont=document.getElementById('cont');
		var oUp=document.getElementById('up');
		var oDown=document.getElementById('down');

			//计算oCont的高度
			var oContH=oCont.offsetHeight;
			//计算oContBox的高度
			var oContBoxH=parseInt(getStyle(oContBox, 'height'));
			//计算oCont的最大top值
			var maxContTop=oContH-oContBoxH;
			//设置oI的高度 让它自适应
			var oIH=oContBoxH/oContH*oItem.offsetHeight;

			//设置oI的最小高度
			(oIH<70) && (oIH=70);
			oI.style.height=oIH+'px';
			//计算oI的最大top值
			var maxTop=oItem.offsetHeight-oI.offsetHeight;

			var top=0;
			var timer=null;
			var disY=0;

			addEvent(oItem, 'mousedown', function oItfnDown(ev){

				var oEvent=ev || event;
				var imaxH=oEvent.clientY-getPos(oI).top;

				if (top > imaxH){
					top+=10;
				}
				oEvent.preventDefault();
			});

			// addEvent(oItem, 'mouseup', oItfnUp);

			function oItfnUp(){
				oI.onmousemove=null;
				oI.onmouseup=null;
			}

			//右侧滚轮拖动事件
			addEvent(oI, 'mousedown',function (ev){
				var oEvent=ev || event;
				disY=oEvent.clientY-oI.offsetTop;

				addEvent(document, 'mousemove', fnMove);
				addEvent(document, 'mouseup', fnUp);

				oEvent.preventDefault();
			});

			function fnMove(ev){
				var oEvent=ev || event;
				top=oEvent.clientY-disY;

				setTop();
			}
			function fnUp(){

				removeEvent(document, 'mousemove', fnMove);
				removeEvent(document, 'mouseup', fnUp);	
				oI.releaseCapture && oI.releaseCapture();
			}

			

			function isFF(){
				if (window.navigator.userAgent.toLowerCase().indexOf('firefox') !=-1){
					return true;
				}else{
					return false;
				}
			}

			//当按下向下按钮的时候
			addEvent(oDown, 'mousedown', function (){
					//开启一个定时器	
					timer=setInterval(function (){
						top+=30;
						setTop();
					}, 30);

				});

			//关闭向下的定时器
			addEvent(oDown, 'mouseup', function (){
				clearInterval(timer);
			});

			//当向上按钮控制滚轮的距离
			addEvent(oUp, 'mousedown', function (){
				//开启一个定时器		
				timer=setInterval(function (){
					top-=30;
					setTop();
				}, 30);
				
			});

			//清除向上的定时器
			addEvent(oUp, 'mouseup',function (){
				clearInterval(timer);
			});


			//鼠标滚轮事件
			addWheel(oContBox, function (down){
				
				if (down){
					top+=10;
					if (top > maxTop){
						top=maxTop;
					}
				}else{
					top-=10;		
					if (top < 0 ){
						top=0;
					}
				}
				oI.style.top=top+'px';
				oCont.style.top=-top/maxTop*maxContTop+'px';
			});


			//鼠标滚轮函数封装
			function addWheel(obj, fn){
				if (isFF()){
					obj.addEventListener('DOMMouseScroll',_wheel, false);
				}else{
					obj.onmousewheel=_wheel;
				}
				function _wheel(ev){
					var oEvent=ev || event;
					var down=false;

					if (oEvent.detail){
						down=oEvent.detail > 0 ? true : false;
						fn(down);
						//判断当超出范围的时候默认事件取消 激活window自带的滚动条
						if (top < maxTop && top>0){
							oEvent.preventDefault();
						}
						
					}else{
						down=oEvent.wheelDelta > 0 ? false : true;
						fn(down);
						//判断当超出范围的时候默认事件取消 激活window自带的滚动条
						if (top < maxTop && top >0){
							return false;
						}		
					}
				}
			}

			//设置top值
			function setTop(){
				if (top < 0){
					top=0;
				}else if (top > maxTop){
					top=maxTop;
				}

				oI.style.top=top+'px';
				oCont.style.top=-top/maxTop*maxContTop+'px';
			}	
		}
	});
