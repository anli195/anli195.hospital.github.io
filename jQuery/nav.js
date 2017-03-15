$(function(){
	$("#home").click(function(){
		if($("nav").hasClass("navSlide")) {
			$("nav").removeClass("navSlide");
			$("#wholeBox").removeClass("whole_box");
			$("header").removeClass("head_slide");
		}else{
			$("nav").addClass("navSlide");
			$("#wholeBox").addClass("whole_box");
			$("header").addClass("head_slide");
		}
	});
	$("nav h1 a").click(function(){
		$("nav").removeClass("navSlide");
		$("#wholeBox").removeClass("whole_box");
		$("header").removeClass("head_slide");
	})
	$("#logout").click(function(){
		$("nav").removeClass("navSlide");
		$("#wholeBox").removeClass("whole_box");
		$("header").removeClass("head_slide");
	});
	$("nav span a").click(function(){
		$("header em").text($(this).text());
		$("nav").removeClass("navSlide");
		$("#wholeBox").removeClass("whole_box");
		$("header").removeClass("head_slide");
	});
	$("body").on("click",".banner",function(){
		$("header em").text("医院新闻");
	});
	$("body").on("click",".hot_news",function(){
		$("header em").text("医院新闻");
	});
	$("body").on("click",".menu a",function(){
		$("header em").text($(this).find("h4").html());
	});
	$("body").on("click","#historyBack",function(){
		window.history.back();
	});
	
	
	
	
	
	
	
	
	
	
});
