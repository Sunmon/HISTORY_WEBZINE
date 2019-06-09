

$(document).ready(function(){


	$("#img1").hover(function(){
	$("#img1").attr("src","source/timebarhover1.jpg");
	},function(){
		$("#img1").attr("src","source/timebar1.jpg");
	})

    
	$(".timebar").hover(function(){
	$(this).attr("src","source/timebarhover2.jpg");
	},function(){
		$(this).attr("src","source/timebar2.jpg");
	})


	$("#img8").hover(function(){
		$("#img8").attr("src","source/timebarhover3.jpg");
	},function(){
		$("#img8").attr("src","source/timebar3.jpg");
	})


	$("#img1").click(function(){
		$("#new1").css("display","block");
	})
	
	$(".timebar").click(function(){
		$("#new1").css("display","block");
	})

	$("#img8").click(function(){
		$("#new1").css("display","block");
	})
	



});//end of ready