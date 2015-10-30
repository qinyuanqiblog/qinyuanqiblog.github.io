$(function (){
		$('.nav_btn a').mouseover(function (){
			$('.nav_btn a').removeClass('nav_btn_active');
			$(this).addClass('nav_btn_active');
			
			$('.nav_img li').fadeOut();
			$('.nav_img li').eq($(this).index()).fadeIn();	
		});
	});
