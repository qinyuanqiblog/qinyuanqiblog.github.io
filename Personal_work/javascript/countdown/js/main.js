'use strict';
define(function (require, exports, module){
	var addEvent=require('base').addEvent;
	var removeEvent=require('base').removeEvent;
	var getStyle=require('base').getStyle;
	var getPos=require('base').getPos;


	exports.main=function (){
		var aImg=document.getElementsByTagName('img');
		var oBtnBox=document.getElementById('btn_box');

		// var aBtn=oBtnBox.getElementsByTagName('input');

		
		// for (var i=0; i<aBtn.length;i++){
		// 	(function (index){

		// 		aBtn[i].oninput=aBtn[i].onpropertychange=function(){
		// 			aBtn[index].value=this.value.replace(/\D/g, '');	

		// 		};	

		// 	})(i);

		// }

		time();


		setInterval(function (){
			time();
		}, 1000);

		function time(){

			var oDate=new Date();
			var n1=oDate.getTime();


			var oDate2=new Date();
			oDate2.setFullYear(2016);	
			oDate2.setMonth(0, 1);
			oDate2.setHours(0, 0, 0, 0);

			var n2=oDate2.getTime();

			var total=Math.floor((n2-n1)/1000);
			var d=Math.floor(total/86400);
			total%=86400;
			var h=Math.floor(total/3600);
			total%=3600;
			var m=Math.floor(total/60);
			total%=60;
			var s=total;
			var year=oDate2.getFullYear();
			var month=oDate2.getMonth()+1;
			var data=oDate2.getDate();

			var str=year+show(month)+show(data)+show(d)+show(h)+show(m)+show(s);
			for (var i=0; i<aImg.length; i++){
				aImg[i].src='images/'+str.charAt(i)+'.png';
			}
		}

		function show(n){
			return n<10 ? '0'+n : ''+n;
		}
	}
});
