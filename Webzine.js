

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

	$(".cont").on("click",show_note_form);
	$("#close").on("click",push_note);
	



});//end of ready
function show_note_form(){
	$("#note_form").addClass("popup");
	change_position($(".popup"));
	$(window).resize(function(){
		change_position($(".popup"));
	});
	$("#note_form").slideDown("slow");
}

function push_note(){
	$("#note_form").show().fadeOut("slow");
}

function change_position(obj){
	// obj.css("left",($(window).width()-$("#note_form").width())/2);
	// obj.css("top",($(window).height()-$("#note_form").height())/2);

	var l=($(window).width()-obj.width())/2+300;
	var t=($(window).height()-obj.height())/2;

	obj.css({top:t,left:l});
}