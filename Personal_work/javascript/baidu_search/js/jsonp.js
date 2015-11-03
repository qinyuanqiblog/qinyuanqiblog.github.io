'use strict';
define(function (require, exports, module){

	exports.jsonp=function (json){
		json=json || {};
		if(!json.url)return;
		json.data=json.data || {};
		json.cbName=json.cbName || 'cb';

		var fnName='jsonp'+Math.random();
		fnName=fnName.replace('.','');

		json.data[json.cbName]=fnName;  //往数据里面添加回调名称

		var oS=document.createElement('script');
		oS.src=json.url+'?'+json2url(json.data);	
		var oHead=document.getElementsByTagName('head')[0];
		oHead.appendChild(oS);	

		window[fnName]=function(data){
			json.success && json.success(data);

		//删除
		oHead.removeChild(oS);

	}
	function json2url(json){
		var arr=[];
		for(var name in json){
			arr.push(name+'='+json[name]);
		}
		return arr.join('&');
	}
}




});