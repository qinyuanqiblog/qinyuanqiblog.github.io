'use strict';
define(function (require, exports, module){
	
	var a2d=require('base').a2d;
	var Tween=require('tween').Tween;
	// alert(JSON.stringify(Tween))
	// alert(Tween.Quad.easeInOut)

	exports.move=function (obj, options){

		options=options || {};
		//运动总路程
		var target=options.target;
		//运动时间设置
		var duration=options.duration || 1200;
		//判断运动模式设置
		var easing=options.easing || Tween.Linear;

		//获取oDiv的半径
		var R=options.R;

		//起始点
		var start=obj.cur || 0;
		//路程
		var dis=target-start;
		//总次数
		var count=Math.floor(duration/30);
		var n=0;

		clearInterval(obj.timer);
		//开启一个定时器
		obj.timer=setInterval(function (){	
			n++;
			//运动模式
			var cur=easing(duration*n/count, start, dis, duration);

			//求出span的left/top值
			// var cur=start+dis*n/count;
			var left=R+Math.sin(a2d(cur))*R;
			
			var top=R-Math.cos(a2d(cur))*R;

			obj.style.left=left+'px';
			obj.style.top=top+'px';

			//运动次数等于总次数的时候 清除定时器
			if (n == count){
				clearInterval(obj.timer);
				//获取一个自定义的属性

				obj.cur=cur;
				// 判断fn 如果存在 fn就执行
				options.complete && options.complete(obj);
			}
		}, 30);
	};
});