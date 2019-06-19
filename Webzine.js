var number=0;

$(document).ready(function(){
	
	$("#all").css("width",$(window).width()-100);
	$("#new").css("width",$(window).width()-300);
	
	/*
	$(window).resize(function(){
		$("#all").css('width',$(window).width()-100);
		$("#new").css("width",$(window).width()-300);
	});
	*/


        
	$("#_1945").hover(function(){
	$("#_1945").attr("src","source/timebarhover1.jpg");
	},function(){
		$("#_1945").attr("src","source/timebar1.jpg");
	})

    
	$(".timebar").hover(function(){
	$(this).attr("src","source/timebarhover2.jpg");
	},function(){
		$(this).attr("src","source/timebar2.jpg");
	})


	$("#_2015").hover(function(){
		$("#_2015").attr("src","source/timebarhover3.jpg");
	},function(){
		$("#_2015").attr("src","source/timebar3.jpg");
	})

	/* 연표 클릭 */
	$(".timebar_click").click(function(){
		$("#new").css("display","block");
		create_Table($(this).attr("id"));
	});

	//GOOD!
	// $(".cont").on("click",show_note_form); // 요놈은 미리 생성되어 있어야만 가능한데 
	$(document).on("click",".cont",show_note_form); // 요놈은 동적생성해도 가능함 ^^~
	$("#close").on("click",push_note);
	
	/**
	 *****[테스트] server쪽 테스트중**
	 */

	init_today_history();
	$(".btn_history_change").on("click", change_today_history);
	$("#todaybutton").click(show_note_form);

});//end of ready



//선택한 년도에 맞게 기사 목록 테이블 띄우기
function create_Table(id){

	//선택한 년도에 맞게 
	$.ajax("./lists.json")
	.done((dat)=>
	{
		//선택한 년도에 맞는 리스트 가져오기
		var _link = dat.find(list => list.name == id).link;
		var req = $.ajax(_link);
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
	
			   tb.append(table2);
			}
			   /*반복 끝*/
			   // for(var i = 0 ; i<8; i++)
			$("#new").html(tb);

			if(id=="_1945"){
        	 $("#new").css("background","#8B4513"); //#F2F5A9
      		}
      		else if(id=="_1955"){
        	 $("#new").css("background","#8B6331"); //#BCF5A9
      		}
      		else if(id=="_1965"){
        	 $("#new").css("background","#AE5E1A"); //#A9F5BC
      		}
      		else if(id=="_1975"){
      		   $("#new").css("background","#D27328"); //#81F7D8
      		}
      		else if(id=="_1985"){
        	 $("#new").css("background","#DC9146"); //#81BEF7
      		}
      		else if(id=="_1995"){
        	 $("#new").css("background","#F0B469"); //#8181F7
      		}	
      		else if(id=="_2005"){
        	 $("#new").css("background","#DCAD67"); //#AC58FA
      		}
     		else
      			$("#new").css("background","#F5D08A"); //#F781F3
		});
	});
 }


//note popup 띄우기
function show_note_form(){
	$("#note_form").addClass("popup");
	change_position($(".popup"));
	$(window).resize(function(){
		change_position($(".popup"));
	});
	$("#note_form").slideDown("slow");

	//note popup 내용 채우기
	var _link = $(this).children(".link").text();
	fill_note(_link);
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


//note popup의 내용을 src_dir의 내용으로 바꿔치기
function fill_note(src_dir)
{
	$("#notef").load(src_dir);
}


 /**
  * @function	오늘의_역사_관리
  * @var 		today_historys[]							오늘의 날짜에 띄울 사건들 저장하는 배열. 최대 5개까지만 저장.
  * @property	{title, date, content, image, link, dist}	dist: 현재 날짜와 사건 날짜까지의 차이	
  * @method		change_today_history 						오늘의 역사 전환
  * @method		calculate_dist(today,date)					오늘 날짜와 date의 날짜 차이 계산
  * @method		init_today_history							오늘의 역사 배열(today_historys) 초기화
  * @method		set_history_to_home							오늘의 역사를 메인화면에 띄우기
  */
 


 var today_historys = [];	//history대신
 var total_lists;			//시대별 리스트를 모아놓은 리스트
 var today_index = 0;		//오늘의 역사 몇 번째꺼 띄울건지 결정
 var max_dist = 987654321;	//today_historys를 갱신할 때 사용
 
//오늘의 날짜 배열 초기화
function init_today_history()
{
	$.ajax("./lists.json")
	.done((data)=>
	{
		total_lists = data;
		get_content_of_years(total_lists);
		set_history_to_home(today_historys[today_index]);
	});
}

//오늘의 역사 전환하기
function change_today_history()
{
	//오른쪽 버튼이면 다음 역사, 왼쪽 버튼이면 이전 역사 보여주기
	var len = today_historys.length;

	var id = $(this).attr("id");
	(id == "right")? today_index++ : today_index --;
	today_index >= 0? today_index %= len : today_index = len-1;

	set_history_to_home(today_historys[today_index]);


	

}


//오늘의 역사 화면 띄우기
function set_history_to_home(hist)
{
	$("#todaytitle").text(hist.title);
	$("#todaycontent").text(hist.content);
	$("#todaydate").text(hist.date);
	$("#todaybutton").children(".link").text(hist.link);
	$("#todayphoto").attr("src", hist.image);
}


//오늘-다른 날과 날짜 차이 계산해서 리턴
function calculate_dist(today, dateArr)
{
	//index[0]: year, [1]: month, [2]: date
	var dist_mon = dateArr[1] - today[1];
	var dist_day = dateArr[2] - (today[2] - dist_mon * 30);
	return Math.abs(dist_day);
}


//article을 hist_arrory(오늘의 역사 목록)에 추가해서 리턴
function add_article_to_history(hist_array, article, dist)
{
	//article을 object로 변환
	var obj = Object.assign({},article, {dist: dist});

	//hist_array에 삽입할 위치 구하기
	var index = 0;
	$.each(hist_array, (i, h)=>{
		if(h.dist < dist) return true;
		index = i;
		return false; 
	});

	//hist_array에 추가
	for(var i = hist_array.length-1; i>= index; i--)
	{
		if(i + 1 == 5) continue;
		hist_array[i+1] = hist_array[i];
	}
	hist_array[index] = Object.assign({},obj);
	return hist_array;
}


//시대별 사건 목록을 돌며 각 사건들의 정보 얻어옴
function get_content_of_years(total_lists)
{
	//year_lists: 각 시대별 리스트
	$.each(total_lists, (index, year_lists)=>
	{
		$.ajax({
				url: year_lists.link,
				async: false
		})
		//articles: 시대별 리스트 안에 있는 각각의 사건
		.done((articles)=>
		{
			today_historys = get_content_of_articles(articles);
		});
	});
}

//각각의 사건들을 돌며 오늘의 역사 배열에 추가
function get_content_of_articles(articles)
{
	var date = new Date();
	var today = [date.getFullYear(), date.getMonth()+1, date.getDate()];

	$.each(articles, (index, article)=>
	{
		var distance = calculate_dist(today, article.date.split("-"));
		if(distance > max_dist) return true;
		today_historys = add_article_to_history(today_historys, article, distance).slice();
		max_dist = today_historys[today_historys.length-1].dist;
	});
	return today_historys;
}