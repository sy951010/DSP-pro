$("#btn").click(function() {
	if ($(this).attr('class')=='turn-on') {
		$(".left-box").animate({left:0}, 300,"linear");
		$("#btn i").removeClass('icon-arrow-right').addClass('icon-sanheng');
		$(this).removeClass('turn-on').addClass('turn-off');
		return;
	}
	if($(this).attr('class')=='turn-off'){
		$(".left-box").animate({left:-102}, 300,"linear");
		$("#btn i").removeClass('icon-sanheng').addClass('icon-arrow-right');
		$(this).removeClass('turn-off').addClass('turn-on');
		return;
	}
});
var date=new Date();
$("#date span").eq(0).html(date.getFullYear());
$("#date span").eq(1).html(date.getMonth()+1);
$("#date span").eq(2).html(date.getDate());
$(document).ready(function() {
			window.onresize=function () {
	$(".ssj").css({
	left:($(".center-box").width()-40)/2 ,
});
}
		});



