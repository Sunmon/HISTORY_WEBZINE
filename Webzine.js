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


	
	/* 연표 클릭 */
	$("#img1").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new1").css("display","block");
		create_Table(1945);
	})
	$("#img2").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new2").css("display","block");
		create_Table(1955);

	})

	$("#img3").click(function(){

		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new3").css("display","block");
		create_Table(1965);

	})
	$("#img4").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new4").css("display","block");
		create_Table(1975);

	})
	$("#img5").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new5").css("display","block");
		create_Table(1985);

	})
	$("#img6").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new6").css("display","block");
		create_Table(1995);

	})
	$("#img7").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new7").css("display","block");
		create_Table(2005);
		

	})
	$("#img8").click(function(){
		for(var i=0;i<8;i++){
			$("#new"+i).css("display","none");
		}
		$("#new8").css("display","block");
		create_Table(2015);

	})

	$(".cont").on("click",show_note_form);
	$("#close").on("click",push_note);
	/**
	 * [테스트] server쪽 테스트중
	 */
	fill_note("ser");
	set_yearn();
	create_Table(1);
});//end of ready



function create_Table(Number){


	// if(number == 1945)
//        var req=$.ajax("1995-06-29-sampoong.json");
//    	else if(number == 1955)
//        var req=$.ajax("1995-06-29-sampoong.json");
//    	else if(number == 1965)
//        var req=$.ajax("1995-06-29-sampoong.json");
//    	else if(number == 1975)
//        var req=$.ajax("1995-06-29-sampoong.json");
//    	else if(number == 1985)
//        var req=$.ajax("1995-06-29-sampoong.json");
//    	else if(number == 1995)
//        var req=$.ajax("1995-06-29-sampoong.json");
//    	else if(number == 2005)
//        var req=$.ajax("1995-06-29-sampoong.json");
//    	else
	 var req=$.ajax("test_1995s_list.json");





	 req.done(function(data,status){
		var tb = $("<table></table>"); //table태그 만들기


		/*반복*/

		for(var i=0; i <data.length; i++){


		/* 기본 값 지정*/
		var imgSrc = "http://placehold.it/180X180"; // 이미지 주소
		var article_Title = "article타이틀"; // 기사 제목
		var article_Content = "main"; // 기사 내용
		var yearNumber = "1945"; // 앞에 연도

		imgSrc = data[i].image;
		article_Title = data[i].title; // 기사 제목 json 파일에서 불러오기
		article_Content = data[i].content; // 기사 내용 json 파일에서 불러오기

		var date = data[i].date; // 역사 날짜
		var dateArr = date.split('-'); // 역사 날짜를 받아서 '-'를 기준으로
		 // 3개로 나눈것 ex 1999-04-14 면 dateArr[0] == 1999, dateArr[1] == 04, dateArr[2] == 14 참고로 이건 내생일 ㅎㅎ;
		yearNumber = dateArr[0]; // 앞에 년도 넣어주기

			/*연도 1945 입력 이 부분은 이제 data 로 받아와야함*/
		   var table1=$("<tr></tr>").append($("<td></td>").addClass('year').text(yearNumber)).append($("<td></td>").text(""));
		   tb.append(table1);

		   var table2 = $("<tr/>").append($("<td/>").addClass('year').text("")).append($("<td></td>").addClass('cont').append($("<h1></h1>").text("몇월몇일")).append($("<br>")).append($("<img>",{
			   src:imgSrc,
			   align:"left",
			   alt:"180 X 180"
		   })).append($("<span/>").addClass('article-head').text(article_Title)).append($("<div/>").text(article_Content).addClass('article=main'))); 

		   tb.append(table2);


		}
		   /*반복 끝*/

		   // for(var i = 0 ; i<8; i++)
		$("#new1").html(tb);

	  }
 )
 }


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

	// $("#notef").load("./include/1995/1996-02-23-test.html", function(req,res)
	// {
	// 	var re = "qweqweqe";
	// 	$("#notef").append(res.result_msg);
	// 	// $("#notef").append(res);
	// 	$("#notef").append(re);
	// 	$("#notef").append("<br/>asdf");
	// });

	
	// $("#notef").load("./include/1995/1996-02-23-test.html", { "title": "이름바꿨다" } );

	var reqq = $.ajax(
		{
			url: "/include/1995/1996-02-23-test.html",
			type: "GET",
			dataType: "html"});
	reqq.done(function(data,status,jq){
		// var students = JSON.parse(data);
		var re = "ㄱㄷㄱㅈㄱㄷ";
		$("#notef").append(data.result_msg);
		$("#notef").append(status.result_msg);
		$("#notef").append(jq.result_msg);
		// $("#notef").append(res);
		$("#notef").append(re);
		$("#notef").append("<br/>ㅅㄷㄷ");
		});

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



//TODO: 검색기능.. 검색도 new1 얘네한테 load시키면 되곘네.
