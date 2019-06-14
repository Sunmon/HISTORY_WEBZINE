var number=0;

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
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new1").css("display","block");
	})
	$("#img2").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new2").css("display","block");
	})
	$("#img3").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new3").css("display","block");
	})
	$("#img4").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new4").css("display","block");
	})
	$("#img5").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new5").css("display","block");
	})
	$("#img6").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new6").css("display","block");
	})
	$("#img7").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new7").css("display","block");
	})
	$("#img8").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new8").css("display","block");
	})

	$(".cont").on("click",show_note_form);
	$("#close").on("click",push_note);




	/**
	 * [테스트] server쪽 테스트중
	 */
	fill_note("ser");
	set_yearn();
});//end of ready


//note popup 띄우기
function show_note_form(){
	$("#note_form").addClass("popup");
	change_position($(".popup"));
	$(window).resize(function(){
		change_position($(".popup"));
	});
	$("#note_form").slideDown("slow");
}


//note popup창 닫기
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

//TODO: note popup의 내용 가져와서 채우기.. <div>note_form 채운다.
function fill_note(src_dir)
{
	//FIXME: 임시로 src_dir 설정해둠
	// src+dir = "./inclue/1995/"
	// .load( url [, data ] [, complete ] ) 

	$("#notef").load("./include/1995/1996-02-23-test.html");


}


//TODO: 자료들 돌아서 년도 채우기
function set_yearn()
{
/***************************************************************************
 * **[임시] new3에 데이터 읽어올 수 있는지 테스트****************************
 *
 *  
 * */
var list_src = "./test_1995s_list.json";
var year_articles = $("<div/>");
var req = $.ajax(list_src);
req.done((data)=>
{
	for(var i = 0; i<data.length; i++)
	{
		var article = $("<tb/>");
				//TODO: 1995를 그냥 json 에서 년도 가져온걸로 바꾸기
				// var _year = $("<td/>").append($("<td/>").text("1995")).css("class", "year").attr("colspan", 2);
				var _year = $("<td/>").append($("<td/>").text("1995")).addClass("year");
				// var _date = $("<td/>").text(data[i].date).attr("colspan", 2).css("text-align", "center");
				var _date = $("<td/>").text(data[i].date).attr("colspan", 2);
				var _title = $("<td/>").text(data[i].title).attr("colspan", 2);
				var _cont = $("<td/>").text(data[i].content).attr("colspan", 2);

				article
				.append($("<tr/>").append(_year).append($("<td/>")))
				.append($("<tr/>").append($("<td/>")).append(_date))
				.append($("<tr/>").append(_title))
				.append($("<tr/>").append(_cont));

		year_articles.append(article);
	}
});
$("#new3").css("color", "white");
$("#new3").html(year_articles);
}



	//TODO: 클릭한 곳마다 내용 있는 디렉토리 다르게 하기. 배열로 저장하면 되겠다.
	//TODO: src_dir에 있는 모든 파일 돌면서 년도 채우기



//TODO: 검색기능


