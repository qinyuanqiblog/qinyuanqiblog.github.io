// JavaScript Document


window.onload=function(){
	
//getByClass
function getByClass(oParent, sName)
{
	if (oParent.getElementsByClassName)
	{
		return oParent.getElementsByClassName(sName);
	}
	else
	{
		var aChild=oParent.getElementsByTagName('*');
		var aRes=[];
		
		for (var i=0; i<aChild.length; i++)
		{
			var obj=aChild[i];
			var aTmp=obj.className.split(' ');
			if (findInArr(aTmp, sName) == true)
			{
				aRes.push(obj);
			}
		}

		return aRes;
	}	
}

function findInArr(arr, value)
{
	for (var i=0; i<arr.length; i++)
	{
		if (arr[i] == value)
		{
			return true;
		}
	}
	
	return false;
}

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
			//var oLog=aLi[i].getElementsByClassName('pos2')[0];
			var oLog=getByClass(aLi[i],'pos2')[0];
			aLi[i].onmouseover=function(){
				clearTimeout(timer);
				if(oLog)
				{
					var _this=this;
					timer=setTimeout(function(){
						_this.className='active fl';	
					},100);
				}
			};
		
			aLi[i].onmouseout=function(){				
				clearTimeout(timer);
				if(oLog)
				{
					var _this=this;
					timer=setTimeout(function(){
						_this.className='fl';	
					},100);
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
	
//主页侧边栏
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
	
//主页广告
	var oQMore=document.getElementById('qzz_more');
	var oQZPos=document.getElementById('qzz_pos');	
	oQMore.onmouseover=function (){
		oQZPos.style.display='block';
		
	};
	oQMore.onmouseout=function (){
		oQZPos.style.display='none';
		
	};
	
//主页广告下部
	(function(){
		var oBox=document.getElementById('box');
		var oBan=document.getElementById('ban');
		var aLi=oBox.children;
		var nLiW=oBox.children[0].offsetWidth;
		oBox.style.width=nLiW*oBox.children.length+'px';
		var now=0;
		var n=1;
		var oChan=document.getElementById('chan');
		oChan.innerHTML='1/'+aLi.length;
		var oNe=document.getElementById('next');
		var oPr=document.getElementById('prev');
		
		oNe.onclick=function(){
			next();
			
		};
		var timer=setInterval(function(){
			next();
			
		},3000);
		
		function next(){
			now++;
			n++;
			if(n>=aLi.length+1)
			{
				n=1;	
			}
			oChan.innerHTML=n+'/'+aLi.length;
			if(now==aLi.length)
			{
				now=0;	
			}
			tab();	
			
		}
		oNe.onmouseover=oPr.onmouseover=oBan.onmouseover=function(){
				
			clearInterval(timer);
				
		};
		oBan.onmouseout=function(){
				
			timer=setInterval(function(){next();},2000);
				
		};
		
		oPr.onclick=function(){
			now--;
			n--;
			if(n<=0)
			{
				n=aLi.length;	
			}
			oChan.innerHTML=n+'/'+aLi.length;
			if(now<0)
			{
				now=aLi.length-1;	
			}
			
			tab();
		};
		
		function tab(){
			
			for(var i=0; i<aLi.length; i++)
			{
				aLi[i].className='';
			}
			aLi[now].className='active';
			move(oBox, {left:-nLiW*now});	
		}	
	})();
	
//主页广告右侧
	(function(){
		var oBox=document.getElementById('box1');
		var aBtn=oBox.getElementsByTagName('span');
		var oTab=document.getElementById('tab_tick');
		var nLiW=oBox.children[0].offsetWidth;
		oTab.style.width=nLiW*oBox.children.length+'px';
		var aTat=getByClass(oBox,'tab_time');
		var now=0; 
		
		for (var i=0; i<aBtn.length; i++)
		{
			aBtn[i].index=i;
			aBtn[i].onmouseover=function (){
				now=this.index;
				tab();
			};
		}
		
		var oPrev=document.getElementById('prev1');
		oPrev.onclick=function (){
			now--;
			if (now < 0)
			{
				now=aBtn.length-1;
			}
			
			tab();
		};
		
		var oNext=document.getElementById('next1');
		oNext.onclick=next;
		
		var timer=setInterval(next, 2500);
		
		oBox.onmouseover=function (){
			clearInterval(timer);
		};
		
		oBox.onmouseout=function (){
			timer=setInterval(next, 2500);
		};
		
		function next()
		{
			now++;
			
			if (now == aBtn.length)
			{
				now=0;
			}
			
			tab();
		}
		
		function tab()
		{
			for (var i=0; i<aBtn.length; i++)
			{
				aBtn[i].className='s2_1';
			}
			
			aBtn[now].className='active s2_1';
			move(oTab, {left:-nLiW*now},{easing:Tween.Elastic.easeOut});
		}	
		
	})();
	
//名品抢购

	(function(){
		var oBox=document.getElementById('box2');
		var oFam=document.getElementById('fam_l_bot');
		var aLi=oBox.getElementsByTagName('li');
		var nLiW=oBox.children[0].offsetWidth;
		oBox.style.width=nLiW*oBox.children.length+'px';
		var now=0;
		var n=1;
		var oChan1=document.getElementById('chan1');
		oChan1.innerHTML='1/'+aLi.length;
		var oNe=document.getElementById('next2');
		var oPr=document.getElementById('prev2');
		
		oNe.onclick=function(){
			next();
			
		};
		var timer=setInterval(function(){
			next();
			
		},3000);
		
		function next(){
			now++;
			n++;
			if(n>=aLi.length+1)
			{
				n=1;	
			}
			oChan1.innerHTML=n+'/9';
			if(now==aLi.length)
			{
				now=0;	
			}
			tab();
		}
		oPr.onmouseover=oNe.onmouseover=oFam.onmouseover=function(){
				
			clearInterval(timer);
				
		};
		oFam.onmouseout=function(){
				
			timer=setInterval(function(){next();},3000);
				
		};
		
		oPr.onclick=function(){
			now--;
			n--;
			if(n<=0)
			{
				n=aLi.length;	
			}
			oChan1.innerHTML=n+'/'+aLi.length;
			
			if(now<0)
			{
				now=aLi.length-1;	
			}
			
			tab();
		};
		
		function tab(){
			
			move(oBox, {left:-nLiW*now});
		}	
	})();
//倒计时
	sec('time1','time2',10);
	function sec(sName1,sName, tim)
	{
		var oSpan=document.getElementById(sName);
		var oSpan1=document.getElementById(sName1);
		var timer=null;
		var n=tim;
		var t=2400;
		tick1();
		timer=setInterval(tick1,1000);
		
		function tick1(){
			
			n--;
			var h=parseInt(n/3600);
			var m=parseInt(n/60);
			var s=n%60;
			oSpan.innerHTML=toDub(h)+':'+toDub(m)+':'+toDub(s);
			if(n==0)
			{
				clearInterval(timer);
				function tick(){					
					t--;
					var h1=parseInt(t/3600);
					var m1=parseInt(t/60);
					var s1=t%60;
					oSpan1.innerHTML='距结束';
					oSpan.innerHTML=toDub(h1)+':'+toDub(m1)+':'+toDub(s1);	
					if(t<0)
					{
						clearInterval(timer);
						oSpan1.innerHTML='活动结束';	
						oSpan.innerHTML='敬请期待';	
					}
				}
				timer=setInterval(tick,1000);	
			}	
			
		}
			
	}
	
	function toDub(n){
		
		return n<10 ? '0'+n : ''+n;	
		
	}
	
//选项卡重用
	(function(){
		
		tab('tab');
	
		function tab(sName)
		{
			var aParent=getByClass(document,sName);
			
			for (var i=0; i<aParent.length; i++)
			{
				_tab(aParent[i]);
			}
			
			function _tab(oParent)
			{
				var aBtn=getByClass(oParent,'btn');
				var aCont=getByClass(oParent,'cont');
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
	
//回到顶部
	(function(){
	var oBtn=document.getElementById('returnToTop');
	var userScroll=false;
	var timer=null;
	
	window.onscroll=function(){
		if(userScroll)
		{
			clearInterval(timer);
		}	
		
		userScroll=true;
	};	
	
	oBtn.onclick=function(){
		var start=document.documentElement.scrollTop || document.body.scrollTop;
		var dis=0-start;
		var n=0; 
		var count=Math.floor(3000/30);
		
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			userScroll=false;
			
			var cur=start+dis*n/count;
			
			document.body.scrollTop=cur;
			document.documentElement.scrollTop=cur;
			if(n == count)
			{
				clearInterval(timer);	
			}	
		},30);	
	};
})();	
	
};





























