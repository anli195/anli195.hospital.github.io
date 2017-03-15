$(function(){
	$("body #wholeBox").swipe({
		swipeLeft : left,
		swipeRight : right
	});
	
	function left(){
		if($(".banner").length == 0){
		$("nav").removeClass("navSlide");
		$("#wholeBox").removeClass("whole_box");
		$("header").removeClass("head_slide");
		}
	}
	function right(){
		if($(".banner").length == 0){
		$("nav").addClass("navSlide");
		$("#wholeBox").addClass("whole_box");
		$("header").addClass("head_slide");
		}
	}
})