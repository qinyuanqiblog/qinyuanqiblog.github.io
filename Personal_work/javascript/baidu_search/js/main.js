'use strict';
define(function (require, exports, module){
	var addEvent=require('base').addEvent;
	var jsonp=require('jsonp').jsonp;
	

	exports.main=function (){
		var oT=document.getElementById('t1');
		var oBtn=document.getElementById('btn');
		var oUl=document.getElementById('uu');

		var iNow=-1;
		var oldValue='';

		oT.onkeyup=function (ev){
			var oEvent=ev || event;
			if (oEvent.keyCode==40 || oEvent.keyCode==38 || oEvent.keyCode==27){
				return;
			}

			if (oEvent.keyCode == 13){
				window.open('https://www.baidu.com/s?wd='+oT.value,'_self');
				oT.value='';
			}

			jsonp({
				url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
				data: {wd:oT.value},
				success:function (json){
					oUl.innerHTML='';
					var arr=json.s;
					if (arr.length){
						oUl.style.display='block';
					}else{
						oUl.style.display='none';
					}

					for (var i=0; i<arr.length; i++){
						var oLi=document.createElement('li');
						oLi.innerHTML=arr[i];
						oUl.appendChild(oLi);


						(function (index){
							oLi.onmouseover=function (){
								for (var i=0; i<oUl.children.length; i++){
									oUl.children[i].className='';
								}
								this.className='active';	
								iNow=index;
							}									
						})(i)

						oLi.onclick=function (){
							window.open('https://www.baidu.com/s?wd='+this.innerHTML,'_self');

						}
					}

				}
			});
			oldValue=oT.value;
		};



		oT.onkeydown=function (ev){	
			var aLi=oUl.children;	
			var oEvent=ev || event;	
			if (oEvent.keyCode == 40){
				iNow++;
				if (iNow > aLi.length-1){
					iNow=-1;
				}

				for (var i=0; i<aLi.length; i++){
					aLi[i].className='';
				}
				if (iNow == -1){
					oT.value=oldValue;
				}else{
					aLi[iNow].className='active';
					oT.value=aLi[iNow].innerHTML;
				}
				return false;

			}else if (oEvent.keyCode == 38){
				iNow--;
				if (iNow < -1){
					iNow=aLi.length-1;
				}
				for (var i=0; i<aLi.length; i++){
					aLi[i].className='';
				}
				if (iNow == -1){
					oT.value=oldValue;

				}else{
					aLi[iNow].className='active';
					oT.value=aLi[iNow].innerHTML;
				}
				return false;
			}		
		}	

		oBtn.onclick=function (){
			window.open('https://www.baidu.com/s?wd='+oT.value,'_self');
			oT.value='';
		}

		document.onkeydown=function (ev){
			var oEvent=ev || event;
			if (oEvent.keyCode == 27){
				oUl.style.display='none';
			}
		}

	}
});
