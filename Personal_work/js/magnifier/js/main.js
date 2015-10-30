'use strict';
define(function (require, exports, module){

	var addEvent=require('base').addEvent;
	var removeEvent=require('base').removeEvent;
	var mouseleave=require('base').mouseleave;
	var mouseenter=require('base').mouseenter;


	exports.main=function (){
		var oContentBox=document.getElementById('contentBox');
		var oDrag=document.getElementById('drag');
		var oImgBox=document.getElementById('imgBox');
		var oImg=document.getElementById('img1');

			//oContentBox移入
			addEvent(oContentBox, 'mouseenter',fnOver);

			//oContentBox移出
			addEvent(oContentBox, 'mouseleave', function (){
				oDrag.style.display='none';
				oImgBox.style.display='none';
			});

			function fnOver(){


				oDrag.style.display='block';
				oImgBox.style.display='block';

				



				//初始的left 和 top
				var disX=0;
				var disY=0;
				//drag的最大移动距离
				var iMaxH=0;
				var iMaxW=0;
				//图片的最大移动距离
				var oImgMaxH=0;
				var oImgMaxW=0;

				addEvent(oDrag, 'mouseenter', fnDown);

				function fnDown(ev){
					var oEvent=ev || event;
					disX=oEvent.clientX-oDrag.offsetLeft;
					disY=oEvent.clientY-oDrag.offsetTop;
					

					//drag的最大移动距离
					iMaxH=oContentBox.offsetHeight-oDrag.offsetHeight;
					iMaxW=oContentBox.offsetWidth-oDrag.offsetWidth;
					//图片的最大移动距离
					oImgMaxH=oImg.offsetHeight-oImgBox.offsetHeight;
					oImgMaxW=oImg.offsetWidth-oImgBox.offsetWidth;


					

					addEvent(document, 'mousemove', fnMove);
					addEvent(document, 'mouseup', fnUp);	
					oDrag.setCapture && oDrag.setCapture();
					return false;	
				}

				function fnMove(ev){	
					var oEvent=ev || event;
					var left=oEvent.clientX-disX;
					var top=oEvent.clientY-disY;

					if (left < 0){
						left=0;
					}else if (left > iMaxW){
						left=iMaxW;
					}

					if (top < 0){
						top=0;
					}else if (top > iMaxH){
						top=iMaxH;
					}

					oDrag.style.left=left+'px';
					oDrag.style.top=top+'px';
					oImg.style.left=-left/iMaxW*oImgMaxW+'px';
					oImg.style.top=-top/iMaxH*oImgMaxH+'px';
				}

				function fnUp(){
					removeEvent(document, 'mousemove', fnMove);
					removeEvent(document, 'mouseup', fnUp);
					oDrag.repleaseCapture && oDrag.repleaseCapture();	
				}
			}

		}

	});
