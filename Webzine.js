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
		$("#new").css("display","none");
		$("#new").css("display","block");
		create_Table(1945);
	})
	$("#img2").click(function(){
		$("#new").css("display","none");
		$("#new").css("display","block");
		create_Table(1955);

	})

	$("#img3").click(function(){
		$("#new").css("display","none");
		$("#new").css("display","block");
		create_Table(1965);

	})
	$("#img4").click(function(){
		$("#new").css("display","none");
		$("#new").css("display","block");
		create_Table(1975);

	})
	$("#img5").click(function(){
		$("#new").css("display","none");
		$("#new").css("display","block");
		create_Table(1985);

	})
	$("#img6").click(function(){
		$("#new").css("display","none");
		$("#new").css("display","block");
		create_Table(1995);

	})
	$("#img7").click(function(){
		$("#new").css("display","none");
		$("#new").css("display","block");
		create_Table(2005);
		

	})
	$("#img8").click(function(){
		$("#new").css("display","none");
		$("#new").css("display","block");
		create_Table(2015);

	})

	//GOOD!
	// $(".cont").on("click",show_note_form); // 요놈은 미리 생성되어 있어야만 가능한데 
	$(document).on("click",".cont",show_note_form); // 요놈은 동적생성해도 가능함 ^^~
	$("#close").on("click",push_note);
	
	/**
	 *****[테스트] server쪽 테스트중**
	 */
	// fill_note("ser");

	set_yearn();
	create_Table(1);
	init_today_history();
	$(document).on("click",".btn_history_change",change_today_history); // 요놈은 동적생성해도 가능함 ^^~
	
	// $(document).on("click","#right",change_today_history); // 요놈은 동적생성해도 가능함 ^^~
	// $(document).on("click","#left",change_today_history); // 요놈은 동적생성해도 가능함 ^^~

});//end of ready


//history: 오늘의 날짜에 띄울 사건들 저장하는 배열. 최대 5개까지만 저장.
// var history = [{title: "",
// 		date: "",
// 		summary: "",
// 		image: "",
// 		link : "",
// 		dist: ""}];

var history = [{}];
// var history = [];
	
	

function create_Table(Number){


	if(Number == 1945)
	 var req=$.ajax("test_1985s_list.json");
   	else if(Number == 1955)
	 var req=$.ajax("test_1995s_list.json");
   	else if(Number == 1965)
	 var req=$.ajax("test_1985s_list.json");
   	else if(Number == 1975)
	 var req=$.ajax("test_1995s_list.json");
   	else if(Number == 1985)
	 var req=$.ajax("test_1985s_list.json");
   	else if(Number == 1995)
	 var req=$.ajax("test_1995s_list.json");
   	else if(Number == 2005)
	 var req=$.ajax("test_1985s_list.json");
   	else
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
		var _link = data[i].link;	//기사와 연결된 link
			/*연도 1945 입력 이 부분은 이제 data 로 받아와야함*/
		   var table1=$("<tr></tr>").append($("<td></td>").addClass('year').text(yearNumber)).append($("<td></td>").text(""));
		   tb.append(table1);


		   var table2 = $("<tr/>")
		   .append($("<td/>").addClass('year').text(""))
		   .append($("<td></td>").addClass('cont')
		   			.append($("<h1></h1>").text(dateArr[1]+"월 "+dateArr[2]+"일"))
		   			.append($("<br>"))
		   			.append($("<img>",{
						   src:imgSrc,
						   align:"left",
						   alt:"180 X 180"
		   			}))
		   			.append($("<span/>").addClass('article-head').text(article_Title))
					.append($("<div/>").text(article_Content).addClass('article=main'))
		   			.append($("<p/>").text(_link).addClass("link"))); //link 추가


		   



// 		   var table2 = $("<tr/>");
// 		   var _year = $("<td/>").append($("<td/>").text(yearNumber)).addClass("year");
// 		   // var _date = $("<td/>").text(data[i].date).attr("colspan", 2).css("text-align", "center");
// 		   var _date = $("<td/>").text(data[i].date).attr("colspan", 2);
// 		   var _title = $("<td/>").text(data[i].title).attr("colspan", 2);
// 		   var _cont = $("<td/>").text(data[i].content).attr("colspan", 2);

// 		   article
// 		   .append($("<tr/>").append(_year).append($("<td/>")))
// 		   .append($("<tr/>").append($("<td/>")).append(_date))
// 		   .append($("<tr/>").append(_title))
// 		   .append($("<tr/>").append(_cont));

//    year_articles.append(article);




		   //FIXME: 링크를 어떻게 가져와야 할 지 몰라서 임시로 넣어둠
		//    var _link = data[i].link;
		//    table2.append($("<tr/>").append($("<td/>").text(_link)));
		//    table3.addClass("link");
		   tb.append(table2);
		}
		   /*반복 끝*/

		   // for(var i = 0 ; i<8; i++)
		$("#new").html(tb);

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


	//맞는 내용 띄우기
	// var _link = $(this).attr("id");
	// var _link = $(this).$(".link");
	// var _link = $(this)>$(".link").text();
	// var tb = $(this);
	// var _link =$(this).closest("table").children($("tr:eq(2)>td:eq(1)"));
	// var tb = $(this).parent("tr");

	// var _link =tb.next($("tr:eq(3)>td:eq(0)")).html();
	// var _link =$(this).next($("td:eq(0)")).text();
	var _link = $(this).children(".link").text();
	// var _link = $(this).children().text();

	// document.write(_link);
	// var _temp = $(this).children($(".link")).text();
	// document.write(_link);
	// document.write(_temp);
	// document.write(_link);
	// $("#notef").append(_link);
	fill_note(_link);
	
	// document.write(_link);


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
	

	// var req = $.ajax(src_dir);
	$("#notef").load(src_dir);
	
	


	// var req = $.ajax("/include/1995/1996-02-23-test.html");
	// $("#notef").load("./include/1995/1996-02-23-test.html");

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


//오늘의 역사 바꾸기
function change_today_history()
{
	//오른쪽 버튼이면 다음 역사, 왼쪽 버튼이면 이전 역사 보여주기
	var len = hhh.length;
	var id = $(this).attr("id");
	(id == "right")? today_index++ : today_index --;
	today_index >= 0? today_index %= len : today_index = len-1;
	set_history_to_home(hhh[today_index]);
}



// 	//TODO: 클릭한 곳마다 내용 있는 디렉토리 다르게 하기. 배열로 저장하면 되겠다.

// // TODO: 오늘의 역사
// function set_today_history()
// {
// 	//FIXME: 임시로 날짜 정해줌.
// 	// var today_month = 06;
// 	// var today_day = 29;

// 	// //history: 오늘의 날짜에 띄울 사건들 저장하는 배열
// 	// var history = [];

// 	// //리스트 돌면서 같은 날짜 있는지 찾기 ... 
// 	// //TODO: 더 좋은 알고리즘으로 바꾸기

// 	// var req = $.ajax("lists.json");
// 	// req.done(function(data, status){
// 	// 	for(var i = 0; i<data.length; i++)
// 	// 	{
// 	// 		var req2 = $.ajax(data[i].link);
// 	// 		req2.done((article)=>
// 	// 		{
// 	// 			for(var j = 0; j<article.length; j++)
// 	// 			{

// 	// 				var date = article[j].date; // 역사 날짜
// 	// 				var dateArr = date.split('-'); // 역사 날짜를 받아서 '-'를 기준으로
// 	// 				if(dateArr[1] == today_month && dateArr[2]==today_day)
// 	// 				{
// 	// 					var obj =
// 	// 					{title: article[j].title, summary: article[j].summary, link: article[j].link};

// 	// 					// obj.push({title: article[j].title, summary: article[j].summary, link: article[j].link});
// 	// 					history.push(obj);
// 	// 					// history.push({title: article[j].title, summary: article[j].summary, link: article[j].link});
// 	// 					// FIXME:for문 밖으로 나가면 history가 undefined
// 	// 					$("#todaytitle").text(history[0].title);
// 	// 					$("#todaycontent").text(history[0].summary);


// 	// 					// document.write(article[j].title);
// 	// 					// document.write(obj.title);
// 	// 				}
// 	// 			}
// 	// 		});
// 	// 	}
		
// 	// });

// 	//FIXME: 오늘날짜 받아오기
// 	var today = [2019,06,16];

// 	// var temp = [];

// 	var temp = [{title: "",
// 		date: "",
// 		summary: "",
// 		image: "",
// 		link : "",
// 		dist: ""}];
// 	var max_distance = 987654321;
	
// 	//년도별 리스트를 돌면서 같은 or 가까운 날짜가 있는지 확인
// 	//total_lists: 년도별 리스트를 모아둔 json파일
// 	var total_lists = $.ajax("lists.json");
// 	total_lists.done((lists)=>
// 	{
// 		// document.write("lists length: "+ lists.length +"<br/>");
// 		//년도별 리스트를 돌면서 검사
// 		$.each(lists, (index, list)=>
// 		{
// 			// document.write(list.link + "-");
// 			//list_year: 연도별 사건 리스트
// 			var list_year = $.ajax(list.link);
// 			list_year.done((articles)=>
// 			{
// 				// document.write(articles.length+" ");
// 				// //사건별로 날짜 검사해서 history에 추가
// 				$.each(articles,(art_index, article)=>
// 				{
// 					var dateArr = article.date.split("-");
// 					var distance = calculate_dist(today, dateArr);
// 					// document.write("dist:" + distance + " ");
// 					if(distance > max_distance) return true;
// 					max_distance = distance;
// 					temp = add_today_article(temp,article, distance).slice();
// 					// document.write("temp"+ art_index + "번째: "+  temp[0].date);
// 					// document.write("   tttemmmpppp.length "+ art_index + "번째: " + temp.length + "<br>");
// 					// temp.splice(0, temp.length, add_today_article(temp, article, distance));
// 					// document.write("max_dist: " + max_distance + "<br>");
// 				});
// 				document.write("temp[0]: "+ temp[0]);
// 				document.write("history[0]: " + history[0].date);

// 				// document.write("temppp2: "+ temp[0].date);

// 			});
// 		});
// 	});


// 	document.write(temp[0]);
// 	// document.write(temp[0].title);
// 	history = temp.slice();





// 	//
// 	//TODO: history를 오늘의 배열에 넣기

// 	// document.write(history[0].title);
	
// 	// $("#todaytitle").text(history[0].title);
// 	// $("#todaycontent").text(history[0]).summary;



// 	//TODO: foreach 문으로 바꾸기
// // 	req.done(function(data,status){
// // 		// data.each((dat)=>
// // 		$.each(data, (dat)=>
// // 		{
// // 			var req2 = $.ajax(dat.link);
// // 			req2.done((article)=>
// // 			{
// // 				var date = article[i].date; // 역사 날짜
// // 				var dateArr = article.split('-'); // 역사 날짜를 받아서 '-'를 기준으로
// // 				if(date[1] == today_month && date[2]==today_day)
// // 				{
// // 					var obj;
// // 					obj.push({title: article.title, summary: article.summary, link: article.link});
// // // obj.push({id:1, square:2});
// // // var json = JSON.stringify(obj);
// // 					// history.push(article.link);
// // 					history.push(obj);
// // 				}
// // 			});
// // 		});

// // 		$("#todaytitle").text(history[0].title);
// // 		$("#todaycontent").text(history[0]).summary;
// // 		// $("#todaybutton").on("click", show_note_form);

// // });
// }

//날짜 차이 계산
function calculate_dist(today, dateArr)
{
	//index[0]: year, [1]: month, [2]: date
	var dist_mon = dateArr[1] - today[1];
	var dist_day = dateArr[2] - (today[2] - dist_mon * 30);
	return Math.abs(dist_day);
}


// //오늘의 역사에 띄울 사건들 저장
// function add_today_article(his_array, article, distance)
// {
// 	//history에 넣을 새 object 만들기
// 	var obj = 
// 	{
// 		title: article.title,
// 		date: article.date,
// 		summary: article.summary,
// 		image: article.image,
// 		link : article.link,
// 		dist: distance
// 	};

// 	// $.each(obj, (index,data)=>
// 	// {
// 	// 	document.write(data);
// 	// })


// 	/*******
// 	 * *******삭제할것*******************************
// 	 */
// 	// document.write("현재  article dist: "+obj.dist + "함수로 들어온 배열.len"+ his_array.length + "<br>");
// 	// $.each(his_array, (index, data)=>
// 	// {
// 		// document.write(data.title + "," + data.date + "," + data.dist + "<br>");
// 	// })

// 	/**
// 	 * **************************************************************
// 	 */

// 	//삽입 위치 구하기
// 	var insert = 0;
// 	$.each(his_array, (index, data)=>
// 	{
// 		if(data.dist < obj.dist) return true;
// 		insert = index;
// 		return false;
// 	});


// 	// document.write("insert 위치: "+ insert + "<br>");

// 	//FIXME:  여기 삽입 알고리즘 고치기. 제대로 안 됨.
// 	//history의 insert번째 index에 새로 삽입 &길이 5로 유지
// 	// var len = his_array.length;
// 	// if(len == 0)
// 	// {
// 	// 	his_array.push(obj);
// 	// 	return;
// 	// }

// 	var len = his_array.length;
// 	// if(len == 0) his_array.slice(obj);
	
// 	// else {
// 	len = (his_array.length < 5)? his_array.length: 5;

// 	len = (len > 2)? len: 2;

// 	var temp_obj = 
// 	{
// 		title: 0,
// 		date: "9999-999-99",
// 		summary: article.summary,
// 		image: article.image,
// 		link : article.link,
// 		dist: distance
// 	};

// 	// document.write("/////////////////"+ temp_obj.date+ "<br>");
// 	// document.write("^^^^^^^^^^^^^^^^^^^"+obj.date+"<br>");


// 	//FIXME: 왜  history에 object가 안들어가!!!!!!!!
// 	for(var i = len - 2; i >= insert; i--)
// 	{
// 		his_array[i+1] = his_array[i];
// 		document.write("/////////////////"+ temp_obj.date+ "<br>");
// 		document.write("^^^^^^^^^^^^^^^^^^^"+obj.date+"<br>");
// 		// document.write(his_array[i]);
// 		// document.write(his_array[i+1].date);
// 		// his_array[i+1] 
// 		// his_array.slice(i,i+1)
// 	}

// 	his_array.splice(insert,1,obj);

// 	// len == 2? his_array.push(obj) : his_array.splice(insert,1,obj);
	
// 	// arr.splice(2, 0, "Lene");
// 	// his_array[i] = obj;
// 	// document.write("<br> index: "+insert);
// 	// document.write(" ---- his_array.len"+ his_array.length + "<br>");

// 	document.write("his_array in method: "+ his_array.length + "<br>");
// 	$.each(his_array, (index, data)=>
// 	{
// 		document.write("@@@@@@@@@@@@@@@@@@@@@@"+ data.date + " ");
// 	});

// 	// for(var i = 0; i<his_array.length; i++)
// 	// {
// 		// document.write("&&&&&&&&&&&&&" + his_array[i].date + "<br>");
// 		// document.write("##"+i+"##<br>");
// 		// document.write(his_array[i].date);
// 	// }

// 	// $.each(his_array, (index, data)=>
// 	// {
// 		// document.write( "=================" + index + "<br>");
// 		// document.write("****************"+ data.title);
// 		// document.write( data.date + "," + data.dist + "<br>");

// 		// document.write(data.title + "," + data.date + "," + data.dist + "<br>");

// 	// });
// // }
// 	return his_array;

// }


//TODO: 검색기능.. 검색도 new1 얘네한테 load시키면 되곘네.
var hhh = [];	//history대신
// var hhh = [{}];	//history대신
var total_lists;
var today_index = 0;
var max_dist = 987654321;

function init_today_history()
{
	//FIXME: 날짜 오늘 날짜로 괴기
	// var today = [2019, 06, 15];
	// var total_list = $.ajax("./lists.json");
	$.ajax("./lists.json")
	.done((data)=>
	{
		total_lists = data;
		get_summary_of_years(total_lists);
		
		set_history_to_home(hhh[today_index]);
		// document.write("##############"+ hhh.length + " " + "max_dist"+max_dist) ;
		

		// $.each(hhh, (ind, dat)=>
		// 	{
		// 		document.write("%%%%%%%%%%%%%%%% "+ dat.title + " " + dat.date + "<br>");
	
		// 	});
	});

}


//오늘의 역사를 화면에 띄우기
function set_history_to_home(hist)
{
	$("#todaytitle").text(hist.title);
	$("#todaycontent").text(hist.summary);
	//TODO: 버튼 클릭 달기
	$("#todaybutton").append($("<p/>").text(hist.link).addClass("link"));
	$("#todaybutton").click(show_note_form);
}
// function set_today_history()
// {
// 	//FIXME: 날짜 오늘 날짜로 괴기
// 	var today = [2019, 06, 15];
// 	var total_list = $.ajax("./lists.json");
// 	var max_dist = 987654321;

// 	total_list.done((data)=>
// 	{
// 		lists = data;
// 		get_summary_of_years(lists);


// 		var ttemp = [];
// 		//total list안에 년도별 리스트 모아둔 것 순회
// 		$.each(data, (index, years)=>
// 		{
// 			var ttt = [];
// 			//year list들 순회
// 			var year_lists = $.ajax(years.link);
// 			year_lists.done((articles)=>
// 			{
// 				//FIXME: ajax에서 데이타ㅓ 읽어온 거 done 나가면 사라져버림.. 당연. 비동기식이니까.
// 			//article: test_1985s_list.json의 블럭 하나
// 				$.each(articles, (index2, article)=>
// 				{
// 					//기사별로 날짜 비교하여 오늘의 역사에 추가하기
// 					var distance = calculate_dist(today, article.date.split("-"));
// 					if(distance > max_dist) return true;
// 					max_dist = distance;
// 					ttemp = add_article_to_history(article, distance).slice();
					
// 				});
// 				//여긴 ttemp살아있음
// 				// document.write(" ###"+ hhh.length);
// 				document.write(" ###"+ ttemp.length);
// 				ttt = ttemp.slice();
// 				// hhh = ttemp;
// 				// hhh = ttemp.slice();
// 				// hhh = JSON.parse(JSON.stringify( ttemp ));
				
// 			});
// 		//FIXME:원인찾음. 비동기방식으로 진행되어서 그렇다
// 		//다음년도모음으로 넘어가기 전에 어디 ttemp 저장해야하는디... 
// 		//여긴 그냥 훌쩍 넘어와버린것
// 		document.write(" @@@"+ttemp.length);

// 	});

// 	//update hh
// });





//article을 history(오늘의 역사 목록)에 추가
function add_article_to_history(hist_array, article, dist)
{
	//object 생성

	// var obj = $.extend({}, article);
	// var obj = Object.assign({}, article);
	// obj.dist = dist;

	var obj = Object.assign({},article, {dist: dist});
	
	// var obj = JSON.parse(JSON.stringify(article));
	// obj.dist = dist;
	
	// document.write(obj.date + " " + obj.dist);


	
	//날짜 비교
	var index = 0;
	$.each(hist_array, (i, h)=>
	{
		if(h.dist < dist) return true;
		index = i;
		return false; 
	});

	//article(history)에 추가
	//한칸씩 뒤로 밀기
	for(var i = hist_array.length -1; i>= index; i--)
	{
		if(i == 4) continue;
		hist_array[i+1] = hist_array[i];
	}

	hist_array[index] = Object.assign({},obj);
	// article[index] =  JSON.parse(JSON.stringify(obj));
	// article[index] = $.extend({}, obj);
	return hist_array;
}


//19852.json, 1995s.json등을 돌며 내부 사건 대략적인 정보 얻어옴
function get_summary_of_years(total_lists)
{
	//year_lists: 년도별로 모아둔 리스트 하나하나
	$.each(total_lists, (index, year_lists)=>
	{
		$.ajax({
				url: year_lists.link,
				async: false
			})
		.done((articles)=>
		{
			hhh = get_summary_of_articles(articles);
		});
	});
	// document.write("@@@@@@@@@@@@"+ hhh.length + " " + "max_dist"+max_dist) ;
	// $.each(hhh, (ind, dat)=>
		// {
			// document.write(dat.title + " " + dat.date + "<br>");
		// });


}

function get_summary_of_articles(articles)
{
	var today = [2019, 06, 16];
	$.each(articles, (index, article)=>
	{
		var distance = calculate_dist(today, article.date.split("-"));
		if(distance > max_dist) return true;
		max_dist = distance;
		hhh = add_article_to_history(hhh, article, distance).slice();

	});
	// document.write("##############"+ hhh.length + " " + "max_dist"+max_dist) ;
	// $.each(hhh, (ind, dat)=>
		// {
			// document.write(dat.title + " " + dat.date + "<br>");
		// });
	return hhh;


}