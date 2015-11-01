'use strict'
define(function (require, exports, module){

	var move=require('move').move;
	var Tween=require('tween').Tween;
	var doMove=require('domove').doMove;

	var enter=require('hover').enter;
	var leave=require('hover').leave;

	var addEvent=require('base').addEvent;
	var addWheel=require('base').addWheel;
	var startMove=require('base').startMove;
	var rmd=require('base').rmd;
	

	var getElementsByClassName=require('base').getElementsByClassName;

	
	
	
	exports.main=function (){

		//获取右边nav的父级
		var oPos=document.getElementById('pos');
		//获取右边nav的父级下面的所有子集
		var aDivBox=oPos.children;
		//获取右边nav的父级下的所有a标签
		var aA=oPos.getElementsByTagName('a');
		//获取正文内容的父级
		var oBox=document.getElementById('box');
		//获取正文内容的父级下的所有子集
		var aDiv1=document.getElementById('box').getElementsByTagName('div');

		//获取首屏下的nav
		var oNav=document.getElementById('nav');
		var oNavBox=document.getElementById('nav_box');
		var oNavPos=document.getElementById('nav_pos');


		//公共元素
		var liW=oBox.children[0].offsetHeight;
		var iNow=0;
		var bFlag=false;
		//右侧nav的背景颜色
		var arr=['#2E8B57', '#4682B4', '#2E8B57', ' #FFB90F', '#009ACD'];

		//oProBox
		var oProBox=document.getElementById('production_box');
		var aSpan=document.getElementById('production_box').getElementsByTagName('span');
		var oIframeBox=document.getElementById('iframe_box');
		var aIframeEm=oIframeBox.getElementsByTagName('em');
		

		//oProBox子集的移入效果
		for (var i=0; i<oProBox.children.length; i++)
		{
			enter(oProBox.children[i]);
			leave(oProBox.children[i]);
		}

		//oProBox子集的布局转换
		var arrPro=[];

		for (var i=0; i<oProBox.children.length; i++){
			arrPro.push({top:oProBox.children[i].offsetTop, left:oProBox.children[i].offsetLeft});
		}
		for (var i=0; i<oProBox.children.length; i++){
			oProBox.children[i].style.left=arrPro[i].left+'px';
			oProBox.children[i].style.top=arrPro[i].top+'px';
			oProBox.children[i].style.position='absolute';
			oProBox.children[i].style.opacity=1;
			oProBox.children[i].style.margin=0;
		}

		//所有框架的描述标签
		var aEm=oProBox.getElementsByTagName('em');

		for (var i=0; i<aEm.length; i++){
			// aEm[i].style.color='rgb('+rmd(1, 256)+','+rmd(1, 256)+','+rmd(1, 256)+')';
			aEm[i].parentNode.style.background='rgb('+rmd(1, 256)+','+rmd(1, 256)+','+rmd(1, 256)+')';
		}



		// 跳转到框架的操作
		for (var i=0; i<oIframeBox.children.length; i++){
			(function (index){
				aSpan[i].onclick=function (){

					for (var i=0; i<oIframeBox.children.length; i++){
						oIframeBox.children[i].style.display='none';
					}
					oProBox.style.display='none';
					oIframeBox.children[index].style.display='block';

				}

			})(i);
		}

		
		// 跳转到框架之后的每一页的 关闭按钮
		for (var i=0; i<aIframeEm.length; i++){
			(function (index){
				aIframeEm[i].onclick=function (){
					aIframeEm[index].parentNode.style.display='none';
					oProBox.style.display='block';

				}
			})(i);
		}
		


			//右侧nav的布局转换
			var arrPos=[];
			for (var i=0; i<oPos.children.length; i++){
				arrPos.push({top:oPos.children[i].offsetTop});
			}

			for (var i=0; i<arrPos.length; i++){
				oPos.children[i].style.top=arrPos[i].top+'px';
				oPos.children[i].style.right='-97px';
				oPos.children[i].style.position='absolute';
			}

			//右侧nav的点击事件
			for (var i=0; i<aA.length; i++){
				(function (index){		
					addEvent(aA[i],'click',function (){

						iNow=index;
						for (var i=0; i<aA.length; i++){
							move(aA[i].parentNode, {right:-97},{duration:200});
							move(oBox, {top:liW*i});
							aDivBox[i].style.background=arr[index];
						}

						move(this.parentNode, {right:0},{duration:200});
						move(oBox, {top:-liW*index});

					});
				})(i);
			}

			//右侧nav的移入事件
			for (var i=0; i<aA.length; i++){
				(function (index){	
					
					addEvent(aA[i].parentNode, 'mouseover', function (){
						for (var i=0; i<aA.length; i++){
							move(aA[i].parentNode, {right:-97},{duration:100});
						}	
						move(aA[index].parentNode, {right:0}, {duration:100});

						move(aA[iNow].parentNode, {right:0})
					});

					addEvent(aA[i].parentNode, 'mouseout', function (){
						for (var i=0; i<aA.length; i++){
							move (aA[i].parentNode, {right:-97},{duration:100});
						}	
						move(aA[index].parentNode, {right:-97}, {duration:100});
						move(aA[iNow].parentNode, {right:0})
					});

				})(i);
			}

			//头像那块的点击事件
			for (var i=0; i<oNavBox.children.length; i++){	
				(function (index){
					addEvent(oNavBox.children[i],'click',function (){
						iNow=index;
						for (var i=0; i<oNavBox.children.length; i++){
							move(aA[i].parentNode, {right:-97});
							aDivBox[i].style.background=arr[index];
						}
						move(oBox, {top:-liW*index},{easing:Tween.Sine.easeInOut});
						if (index > 0){
							move(oNav, {top:-200}, {
								complete:function (){
									move(oPos, {right:0}, {
										complete:function (){
											move(aA[iNow].parentNode, {right:0},{duration:200});
										}
									});
								}
							});
						}				
					});
				})(i);
			}


			
			
			//鼠标滚动事件
			addWheel(document, function (down){

				if (bFlag){
					return;
				}

				bFlag=true;

				if (down){
					iNow++;
					if (iNow >= oBox.children.length){
						iNow=oBox.children.length-1;
					}	

				}else{
					iNow--;
					if (iNow < 0){
						iNow=0
					}		
				}

				if (iNow >= 1){
					//让头部的nav消失
					move(oNav, {top:-200});
					//让右侧的导航显示
					move(oPos, {right:0},{
						complete:function (){
							//清空所有
							for (var i=0; i<aA.length; i++){
								move(aA[i].parentNode, {right:-97}, {duration:200});
								aDivBox[i].style.background=arr[iNow];
							}
							//当前的显示
							move(aA[iNow].parentNode, {right:0}, {duration:200});
						}
					});
				}else{	
					//让头部的nav显示
					move(oNav, {top:0});
					for (var i=0; i<aA.length; i++){
						move(aA[i].parentNode, {right:-97}, {duration:200});
					}		
					move(oPos, {right:-200});
					
				}

				move(oBox, {top:-iNow*liW},{ 
					complete:function (){
						bFlag=false;
					}
				});	
			});


			//about里面的js 相关
			(function (){
				var oDiv=document.getElementById('div1');	
				var oDiv2=document.getElementById('div2');	
				var oClose=oDiv2.getElementsByTagName('span')[0];	

				var oInF=document.getElementById('information');
				var aB=oInF.getElementsByTagName('b');
				var oMySelf=document.getElementById('myself');
				var oMyBg=document.getElementById('my_bg');

				var iSpeedX=3;
				var iSpeedY=4;
				var timer=null;
				var bFlag=false;

			//碰撞事件
			time();

			//移入清除碰撞事件
			oDiv.onmouseover=function (){
				oDiv.children[0].style.display='block';
				clearInterval(timer);	
			}

			oDiv.onmouseout=function (){
				oDiv.children[0].style.display='none';
			}

			//点击的时候展开个人信息
			oDiv.onclick=function (){
				oMyBg.style.display='block';
				oDiv2.style.display='block';	
				oDiv2.className='div2';
				oDiv.style.display='none';

				move(oInF, {opacity:1}, {complete:function (){
					
					duangMove(oInF)
					
				}});	
			}

			

			//碰撞函数
			function time(){
				timer=setInterval(function(){
					var l=oDiv.offsetLeft+iSpeedX;
					var t=oDiv.offsetTop+iSpeedY;

					if(t>=document.documentElement.clientHeight-oDiv.offsetHeight){
						t=document.documentElement.clientHeight-oDiv.offsetHeight;
						iSpeedY*=-1;	
					}
					if(t<=0){
						t=0;
						iSpeedY*=-1;	
					}
					if(l>=document.documentElement.clientWidth-oDiv.offsetWidth){
						l=document.documentElement.clientWidth-oDiv.offsetWidth;
						iSpeedX*=-1;	
					}
					if(l<=0){
						l=0;
						iSpeedX*=-1;	
					}

					oDiv.style.left=l+'px';
					oDiv.style.top=t+'px';
				},30);
			}

			//个人信息所执行的函数
			function startInfo (){
				// oMySelf.parentNode.className=''
				
				var iCount=0;
				var timer=null;
				timer=setInterval(function (){
					oMySelf.children[iCount].style.display='block';
					iCount++;
					if (iCount == oMySelf.children.length){
						clearInterval(timer);

						var timer2=setTimeout(function (){
							oCloseMy.style.display='block';
						},300);	

						if (oCloseMy.style.display == 'block'){
							clearTimeout(timer2);
						}
						
					}
				}, 300);	
			}

			//关闭个人信息的按钮
			var oCloseMy=document.getElementById('close_my');
			oCloseMy.onclick=function (){
				if (bFlag){
					return;
				}

				bFlag=true;
				var iCount=oMySelf.children.length-1;
				var timer=null;
				timer=setInterval(function (){

					oMySelf.children[iCount].style.display='none';
					oCloseMy.style.display='none';
					iCount--;
					if (iCount < 0 ){
						clearInterval(timer);
						move(oInF, {opacity:0}, {complete:function (){	
							oMyBg.style.display='none';
							oDiv2.style.display='none';
							oDiv.style.display='block';
							time();
							oInF.style.left='47%';
							oInF.style.top='-20%';
							
							bFlag=false;
						}});


					}
					
				}, 300);
			}
			//设置about的背景图
			var arrImg=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
			var oMyImg=document.getElementById('myse_img');
			var c=0;
			setInterval(function(){
				
				oMyImg.src='images/about/'+arrImg[c%arrImg.length];
				c++;
				
			}, 5000);


			//从上向下的碰撞运动
			function duangMove(obj){
				var iSpeedX=0;
				var iSpeedY=8;
				var timer3=null;


				timer3=setInterval(function(){
					iSpeedY+=3;
					
					var l=obj.offsetLeft+iSpeedX;
					var t=obj.offsetTop+iSpeedY;
					var clientHeight=document.documentElement.clientHeight;
					var clientWidth=document.documentElement.clientWidth;
					var dis=500;


					if(t>=clientHeight-obj.offsetHeight-dis){
						t=clientHeight-obj.offsetHeight-dis;
						iSpeedY*=-0.8;
						iSpeedX*=0.8;	
					}
					if(t<=0){
						t=0;
						iSpeedY*=-0.8;
						iSpeedX*=0.8;	
					}
					if(l>=clientWidth-obj.offsetWidth-dis){
						l=clientWidth-obj.offsetWidth-dis;
						iSpeedX*=-0.8;
						iSpeedY*=0.8;	
					}
					if(l<=0){
						l=0;
						iSpeedX*=-0.8;
						iSpeedY*=0.8;	
					}
					
					obj.style.left=l+'px';
					obj.style.top=t+'px';
					
					if(Math.abs(iSpeedX)<1)iSpeedX=0;
					if(Math.abs(iSpeedY)<1)iSpeedY=0;
					
					if(iSpeedX==0 && iSpeedY==0 && t==document.documentElement.clientHeight-obj.offsetHeight-500){
						clearInterval(timer3);
						startInfo();
						

					}
					
				},30);	
			}
		})();


			//demo里面的事件
			var oDiv=document.getElementById('automatic');	
			var oPrevMask=getElementsByClassName(oDiv,'prev_div')[0];
			var oNextMask=getElementsByClassName(oDiv,'next_div')[0];

			var oPrevBtn=getElementsByClassName(oDiv,'prev')[0];
			var oNextBtn=getElementsByClassName(oDiv,'next')[0];

			var oPrevArrow=getElementsByClassName(oPrevBtn,'ico')[0];
			var oPrevArrowLight=getElementsByClassName(oPrevBtn,'ico1')[0];
			var oPrevTxt=getElementsByClassName(oPrevBtn,'txt')[0];

			var oNextArrow=getElementsByClassName(oNextBtn,'ico')[0];
			var oNextArrowLight=getElementsByClassName(oNextBtn,'ico1')[0];
			var oNextTxt=getElementsByClassName(oNextBtn,'txt')[0];

			oPrevArrow.alpha=100;
			var iInitPrevArrow=oPrevArrow.left=oPrevArrow.offsetLeft;
			oPrevArrowLight.alpha=0;
			var iInitPrevArrowLight=oPrevArrowLight.left=oPrevArrowLight.offsetLeft;
			oPrevTxt.alpha=0;
			var iInitPrevTxt=oPrevTxt.left=oPrevTxt.offsetLeft;

			oNextArrow.alpha=100;
			var iInitNextArrow=oNextArrow.left=oNextArrow.offsetLeft;
			oNextArrowLight.alpha=0;
			var iInitNextArrowLight=oNextArrowLight.left=oNextArrowLight.offsetLeft;
			oNextTxt.alpha=0;
			var iInitNextTxt=oNextTxt.left=oNextTxt.offsetLeft;

			var aLi=oDiv.getElementsByTagName('ul')[0].getElementsByTagName('li');

			var aLiInit=[];

			var oLine=getElementsByClassName(oDiv, 'line')[0];

			var iInterval=150;

			

			var i=0;

			for(i=0;i<aLi.length;i++)
			{
				aLiInit[i]={};
				aLi[i].width=aLiInit[i].w=aLi[i].getElementsByTagName('img')[0].offsetWidth;
				aLi[i].height=aLiInit[i].h=aLi[i].getElementsByTagName('img')[0].offsetHeight;
				aLi[i].left=aLiInit[i].l=aLi[i].offsetLeft;
				aLi[i].top=aLiInit[i].t=aLi[i].offsetTop;
				aLi[i].alpha=aLiInit[i].alpha=0;
				aLi[i].z=aLiInit[i].z=1;
			}

			for(i=0;i<aLi.length;i++)
			{
				aLi[i].style.position='absolute';
				aLi[i].style.left=aLiInit[i].l+'px';
				aLi[i].style.top=aLiInit[i].t+'px';
			}

			aLi[1].alpha=aLiInit[1].alpha=60;
			aLi[2].alpha=aLiInit[2].alpha=80;
			aLi[3].alpha=aLiInit[3].alpha=100;
			aLi[4].alpha=aLiInit[4].alpha=80;
			aLi[5].alpha=aLiInit[5].alpha=60;

			aLi[1].z=aLiInit[1].z=2;
			aLi[2].z=aLiInit[2].z=3;
			aLi[3].z=aLiInit[3].z=4;
			aLi[4].z=aLiInit[4].z=3;
			aLi[5].z=aLiInit[5].z=2;



				//自己动起来
				var timer5=null;
				time5();
				function time5(){
					timer5=setInterval(function (){
						gotoImg(true);
					}, 3000);
				}
				//第二版的图片加上移入事件
				var oImgBtn=document.getElementById('img_btn');
				
				var aImgBtn=oImgBtn.getElementsByTagName('a');
				for (var i=0; i<aImgBtn.length; i++){
					aImgBtn[i].onmouseover=function (){
						clearInterval(timer5);
					};
					aImgBtn[i].onmouseout=function (){
						time5();
					};
				}

				oPrevMask.onmousedown=function ()
				{
					clearInterval(timer5);
					gotoImg(true);
					return false;
				};


				oPrevMask.onmouseover=function ()
				{

					startMove(oPrevArrow, {left: iInitPrevArrow+10}, iInterval);
					startMove(oPrevArrowLight, {left: iInitPrevArrowLight+10, alpha:100}, iInterval);
					startMove(oPrevTxt, {left: iInitPrevTxt-10, alpha:100}, iInterval);
				};

				oPrevMask.onmouseout=function ()
				{

					startMove(oPrevArrow, {left: iInitPrevArrow}, iInterval);
					startMove(oPrevArrowLight, {left: iInitPrevArrowLight, alpha:0}, iInterval);
					startMove(oPrevTxt, {left: iInitPrevTxt, alpha:0}, iInterval);
				};


				oNextMask.onmouseover=function ()
				{
					startMove(oNextArrow, {left: iInitNextArrow-10}, iInterval);
					startMove(oNextArrowLight, {left: iInitNextArrowLight-10, alpha:100}, iInterval);
					startMove(oNextTxt, {left: iInitNextTxt+10, alpha:100}, iInterval);
				};

				oNextMask.onmouseout=function ()
				{
					startMove(oNextArrow, {left: iInitNextArrow}, iInterval);
					startMove(oNextArrowLight, {left: iInitNextArrowLight, alpha:0}, iInterval);
					startMove(oNextTxt, {left: iInitNextTxt, alpha:0}, iInterval);
				};

				oNextMask.onmousedown=function ()
				{
					clearInterval(timer5);
					gotoImg(false);
					return false;
				};

				function gotoImg(bLeft)
				{
					if(bLeft)
					{
						aLiInit.push(aLiInit.shift());
					}
					else
					{
						aLiInit.unshift(aLiInit.pop());
					}

				// oLine.style.display='none';

				// for(i=0;i<aLi.length;i++)
				// {
				// 	startMove(aLi[i], {left: aLiInit[i].l, top: aLiInit[i].t, width: aLiInit[i].w, height:aLiInit[i].h, alpha:aLiInit[i].alpha, zIndex:aLiInit[i].z}, 300, function (){oLine.style.display='block';});
				// }
				// 
				for(i=0;i<aLi.length;i++)
				{
					startMove(aLi[i], {left: aLiInit[i].l, top: aLiInit[i].t, width: aLiInit[i].w, height:aLiInit[i].h, alpha:aLiInit[i].alpha, zIndex:aLiInit[i].z}, 300);
				}
			};

		}
	});
