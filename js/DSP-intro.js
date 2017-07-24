function rand(min,max) {
	return parseInt(Math.random()*(max-min+1)+min);
}
console.log(rand(0,14));
$(document).ready(function() {
		$(".need-box p").css('display', 'none');
		$(".four-box img").css('display', 'none');
		// 滚动页面，到达指定位置触发事件
		$(window).scroll(function(event) {
			console.log($(this).scrollTop());
			// 头部文字进入
			if ($(this).scrollTop()>400&&$(this).scrollTop()<450) {
				$(".need-box p").css('display', 'block');
				$(".need-box p:lt(3)").addClass('animated bounceInRight');
				$(".need-box p:gt(2)").addClass('animated bounceInLeft');
			}
			//四种受众数据图进入
			if ($(this).scrollTop()>2000&&$(this).scrollTop()<3000) {
				$(".four-box img").css('display', 'block');
				$(".four-box img").addClass('animated bounceInDown');
			}
			//图表
			if ($(this).scrollTop()>3271) {
				var myChart = echarts.init(document.getElementById('chars'));
				myChart.setOption({
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    series : [
				        {
				            name: '访问来源',
				            type: 'pie',
				            radius : '75%',
				            center: ['50%', '50%'],
				            data:[
				                {value:18, name:'视频'},
				                {value:8, name:'文学'},
				                {value:8, name:'生活服务'},
				                {value:7, name:'财经'},
				                {value:6, name:'女性'},
				                {value:5, name:'教育学习'},
				                {value:5, name:'娱乐'},
				                {value:4, name:'新闻'},
				                {value:4, name:'综合门户'},
				                {value:35, name:'其他'},
				            ],
				            
				        }
				    ],
				    color:['#6b439c', '#ae4097','#e44298','#ee1b24'
				    ,'#f57025','#f78e23','#ffc010','#d0c700','#6bc100'
				    ,'#ac6a00']
				     
				})
			}
			// 精准用户图标发散
			if ($(this).scrollTop()>900) {
				$(".pos-box>div").eq(0).css('display', 'block').animate({
					top: 0},500);
				$(".pos-box>div").eq(1).css('display', 'block').animate({
					top: 70,left:150},500);
				$(".pos-box>div").eq(2).css('display', 'block').animate({
					top: 210,left:50},500);
				$(".pos-box>div").eq(3).css('display', 'block').animate({
					top: 340,left:150},500);
				$(".pos-box>div").eq(4).css('display', 'block').animate({
					top: 70,right:150},500);
				$(".pos-box>div").eq(5).css('display', 'block').animate({
					top: 210,right:50},500);
				$(".pos-box>div").eq(6).css('display', 'block').animate({
					top: 340,right:150},500);
					}
			// 多维度优化机制
			if ($(this).scrollTop()>2815){
				$(".youhua-box img").css('display', 'block');
				$(".youhua-box img:lt(5)").addClass('animated bounceInDown');
				$(".youhua-box img:gt(5)").addClass('animated bounceInUp');
				$(".youhua-box img:eq(5)").addClass('animated bounceInRight');
			}
		});
		// 媒体资源旋转
		function goodMedia() {
			var index=rand(0,14);
			$(".media-table img").eq(index).addClass('media-animate');
			setTimeout(function () {
				$(".media-table img").eq(index).removeClass('media-animate')
			}, 1000)
		}
		setInterval(goodMedia, 500);
});

