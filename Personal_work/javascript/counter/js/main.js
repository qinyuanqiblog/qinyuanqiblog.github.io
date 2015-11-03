'use strict';
define(function (require, exports, module){

	var addEvent=require('base').addEvent;

	exports.main=function (){
		var oUl=document.getElementById('uu');
		var oResult=document.getElementById('result');
		var oCount=document.getElementById('count');
		var aLi=oUl.children;
		
		var arr = "";
		var brr = "";
		var crr = "";
		var fuhao = "";
		var jieguo = "";
		var jilu = "";

		var dangqianjieguo = 0;
		for (var i=0; i<aLi.length; i++){
			addEvent(aLi[i],'click', function (){
				
				switch(this.innerHTML){
					case '+':
					checkJiSuan();
					fuhao = '+';
					jilu +='+';
					oCount.value = jilu;
					break;
					case '-':
					checkJiSuan();
					fuhao = '-';
					jilu +='-';
					oCount.value = jilu;
					break;
					case '×':
					checkJiSuan();
					fuhao = '×';
					jilu +='×';
					oCount.value = jilu;
					break;
					case '/':
					checkJiSuan();
					fuhao ='/';
					jilu +='/';
					oCount.value = jilu;
					break;
					case 'C':
					arr = "";
					brr = "";
					crr = "";
					fuhao = "";
					jieguo = "";
					jilu = "";
					oCount.value='';
					oResult.value='';
					jilu = '';
					break;
					case '=':
					checkJiSuan();

					break;
					default:

					if(arr == "" || fuhao == ""){
						arr += this.innerHTML+"";
					}else{
						brr += this.innerHTML+"";
					}
					jilu += this.innerHTML;
					oCount.value = jilu;
					break;
				}
			});
		}
		function checkJiSuan(){

			var a = arr == "" ? "" : parseInt(arr);
			var b = brr == "" ? "" : parseInt(brr);
			if(a != "" && b != "" && fuhao != ""){
				if(fuhao == "+"){
					jieguo = a + b;
				}else if(fuhao == "-"){
					jieguo = a - b;
				}else if(fuhao == "×"){

					jieguo = a * b;
				}else if(fuhao == "/"){
					jieguo = a / b;
				}
				arr = jieguo+"";
				brr = "";
				fuhao = "";
				oResult.value=jieguo+"";
			}
		}
	}
});
