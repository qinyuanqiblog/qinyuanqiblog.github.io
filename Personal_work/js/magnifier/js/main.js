'use strict';
define(function (require, exports, module){

	var addEvent=require('base').addEvent;
	var removeEvent=require('base').removeEvent;
	var mouseleave=require('base').mouseleave;
	var mouseenter=require('base').mouseenter;


	exports.main=function (){
		var oDiv=document.getElementById('div1');
		var oMask=oDiv.children[1];
		var oBig=oDiv.children[2];
		var oImgBig=oBig.children[0];



		oDiv.onmouseover=function ()
		{
			oMask.style.display='block';
			oBig.style.display='block';
		};
		oDiv.onmouseout=function ()
		{
			oMask.style.display='none';
			oBig.style.display='none';
		};

		oDiv.onmousemove=function (ev)
		{
			var oEvent=ev||event;

			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;



			var l=oEvent.clientX+scrollLeft-oDiv.offsetLeft-oMask.offsetWidth/2;
			var t=oEvent.clientY+scrollTop-oDiv.offsetTop-oMask.offsetHeight/2;

			if(l<0)
			{
				l=0;
			}
			else if(l>oDiv.offsetWidth-oMask.offsetWidth)
			{
				l=oDiv.offsetWidth-oMask.offsetWidth;
			}

			if(t<0)
			{
				t=0;
			}
			else if(t>oDiv.offsetHeight-oMask.offsetHeight)
			{
				t=oDiv.offsetHeight-oMask.offsetHeight;
			}

			oMask.style.left=l+'px';
			oMask.style.top=t+'px';

			//算大图片的位置
			//img.left=mask.left*(img.w-bigdiv.w)/(div.w-mask.w)
			oImgBig.style.left=-l*(oImgBig.offsetWidth-oBig.offsetWidth)/(oDiv.offsetWidth-oMask.offsetWidth)+'px';
			oImgBig.style.top=-t*(oImgBig.offsetHeight-oBig.offsetHeight)/(oDiv.offsetHeight-oMask.offsetHeight)+'px';
		};

		var aA=document.getElementsByTagName('a');

		for(var i=0;i<aA.length;i++)
		{
			var aImg=document.getElementsByTagName('img');
			(function (index){
				aA[i].onclick=function ()
				{
					aImg[0].src='images/m'+(index+1)+'.jpg';
					aImg[1].src='images/b'+(index+1)+'.jpg';
				};
			})(i);
		}

	}

});
