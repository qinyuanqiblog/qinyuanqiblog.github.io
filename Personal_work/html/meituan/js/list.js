// JavaScript Document

window.onload=function(){
//head左侧	
	var oPhone=document.getElementById('phone');
	var oPos=document.getElementById('pos');
	var oPhb=document.getElementById('phone_box');
	var timer=null;
	oPhone.onmouseover=oPos.onmouseover=function(){
		clearInterval(timer);
		timer=setTimeout(function(){
			
			oPos.style.display='block';
			oPhb.className='active phone_box';	
		},150);
	};
	oPhone.onmouseout=oPos.onmouseout=function(){
		clearTimeout(timer);
		timer=setTimeout(function(){
			
			oPos.style.display='none';
			oPhb.className='phone_box';	
		},150);
		
	};

//head右侧
	var oUl=document.getElementById('ul1');
	var aLi=oUl.getElementsByTagName('li');
	
	for(var i=0;i<aLi.length; i++)
	{
		(function(i){
			var timer=null;
			aLi[i].onmouseover=function(){
			
				var oLog=this.getElementsByClassName('pos2')[0];
				clearTimeout(timer);
				if(oLog)
				{
					var _this=this;
					timer=setTimeout(function(){
						_this.className='active fl';	
					},150);
				}
			};
		
			aLi[i].onmouseout=function(){
			
				var oLog=this.getElementsByClassName('pos2')[0];
				clearTimeout(timer);
				if(oLog)
				{
					var _this=this;
					timer=setTimeout(function(){
						_this.className='fl';	
					},150);
				}
			};	
			
		})(i);
		
	}	


//banner
	var oRe=document.getElementById('remove');
	var oBan=document.getElementById('banner');
	oRe.onclick=function(){
		
		oBan.style.display='none';
	};	

//侧边栏的消失
	var oNav=document.getElementById('nav_left');
	var oCol=document.getElementById('qz_column');
	var oH3=document.getElementById('all');
	var timer=null;
	oNav.onmouseover=oCol.onmouseover=function(){
		clearTimeout(timer);
		timer=setTimeout(function(){
			oCol.style.display='block';	
			oH3.className='active all';
				
		},200);
		
	};
	oNav.onmouseout=oCol.onmouseout=function(){
		clearTimeout(timer);
		timer=setTimeout(function(){
			oCol.style.display='none';
			oH3.className='all';	
				
		},200);
		
	};
	
//侧边栏
	var oSide=document.getElementById('side');
	var aLi1=oSide.getElementsByTagName('li');
	var timer2=null;
	for(var i=0;i<aLi1.length; i++)
	{
		(function(i){
			var timer=null;
			aLi1[i].onmouseover=function(){
				var oPos3=this.getElementsByClassName('pos3')[0];
				var oDis=this.getElementsByClassName('qz_div1')[0];
				clearTimeout(timer);
				oDis.style.background='#fff';
				if(oPos3)
				{	
					var _this=this;
					timer=setInterval(function(){
						_this.className='active';
						oDis.style.width='245px';
							
					},200)
					
				}
				
			};
			aLi1[i].onmouseout=function(){
				var oPos3=this.getElementsByClassName('pos3')[0];
				var oDis=this.getElementsByClassName('qz_div1')[0];
				clearTimeout(timer);
				oDis.style.background='';
				if(oPos3)
				{
					var _this=this;
					timer=setInterval(function(){
						_this.className='';
							
					},200)
				}
			};		
			
		})(i);
		
	}
	
//选项卡重用
	(function(){
		
		tab('tab');
	
		function tab(sName)
		{
			var aParent=document.getElementsByClassName(sName);
			
			for (var i=0; i<aParent.length; i++)
			{
				_tab(aParent[i]);
			}
			
			function _tab(oParent)
			{
				var aBtn=oParent.getElementsByClassName('btn');
				var aCont=oParent.getElementsByClassName('cont');
				for (var i=0; i<aBtn.length; i++)
				{
					aBtn[i].index=i;
					aBtn[i].onclick=function (){
						for (var i=0; i<aBtn.length; i++)
						{
							aBtn[i].className='btn';
							aCont[i].className='cont';
						}
						
						this.className='active btn';
						aCont[this.index].className='active cont';
					};
				}
			}
		}	
	})();

};