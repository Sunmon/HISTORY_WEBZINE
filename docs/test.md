docs폴더 만들려고 넣은 md파일


## json으로 작업하기

json 사용법 정리: https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON

## Load all files in directory

### Using js, jquery

js에서는 이런 기능을 지원하지 않는다고 한다... 폴더 내 파일 리스트를 불러올 수 없는 것.

따라서 년도별로 수동으로 목록을 만들어서 그 목록에다가 각 파일의 링크를 넣어줘야 한다.

아니면 그냥 아싸리 각각의 기사들을 하나의 json으로 합쳐버리던가...

참고: https://stackoverflow.com/questions/13989887/jquery-load-all-text-files-and-display-them

**그런데 Ajax를 쓰면 된다고 한다!!**

### Using Ajax, nodejs

ajax에서 하는 법: https://stackoverflow.com/questions/6994212/is-there-a-way-to-return-a-list-of-all-the-image-file-names-from-a-folder-using

node.js에서 하는 법:

https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j

https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5

https://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object

생활코딩 _ Nodejs로 파일 목록 불러오는 법: https://opentutorials.org/course/3332/21122

생활코딩_ Nodejs로 글 목록 만들기: https://opentutorials.org/course/3332/21123


## Ajax, Nodejs

ajax와 nodejs 이해에 도움되는 글:

ajax통신: https://jinbroing.tistory.com/99

ajax api 서버 : https://jinbroing.tistory.com/157

생활코딩 ajax: https://opentutorials.org/course/53/49

nodejs를 이용하여 파일 추가: https://supdev.tistory.com/32


**근데 서버 어디로 구현하지?**

아파치? 소켓? AWS? Azuer? Localhost?

## Server 구현

Node.js로 소켓 : https://mylko72.gitbooks.io/node-js/content/chapter8/intro.html

소켓이란? : https://juyoung-1008.tistory.com/19

TCP/IP 소켓이란? : https://zzdd1558.tistory.com/64

Node.js로 웹서버 만들기 : https://opentutorials.org/course/3332/21032


## save data through ajax

https://stackoverflow.com/questions/21603770/saving-data-to-the-database-via-jquery-ajax

https://stackoverflow.com/questions/45105992/node-js-send-data-to-backend-with-ajax


## html load ... popup 내용 띄우는 데 사용

https://offbyone.tistory.com/235

https://findfun.tistory.com/398

https://www.codingfactory.net/10358

https://www.w3schools.com/jquery/jquery_ajax_load.asp

https://rocabilly.tistory.com/27

https://qkrrudtjr954.github.io/ajax/2018/02/08/ajax-load-func.html


## post

https://findfun.tistory.com/400

## call by reference

js도 java랑 비슷하다..

포인터 쓰고 싶다 엉엉

https://emflant.tistory.com/64

## 얕은 복사 & 깊은 복사

history에 객체를 추가하는 데 자꾸 오류가 났다... undefined랜다..


얕은 복사와 깊은 복사 : https://blueshw.github.io/2016/01/20/shallow-copy-deep-copy/


## 클로저

http://www.nextree.co.kr/p7363/


## 동기화 & 비동기화

ajax에서 결과를 얻어오는데 자꾸 글로벌 변수에 저장이 안 되고 사라진다..

왜일까.. 하고 엄청 고민했다..

정답은 ajax가 비동기식이었기 때문이다..

done에서 불러서 하는건 하는거고...

done 밑의 코드로 알아서 쭉쭉 진행되고 있던거였다...

그러니까 done 밖의 전역변수는.. 못 썼지..

https://stackoverflow.com/questions/5316697/jquery-return-data-after-ajax-call-success

그래서 그냥 done(function())에서 다 만들어주기로 했따..

그래도 안 됐다... ajax를 두 번 써서 그런가...

결국 **async:false** 옵션을 써서 해결했다!!!

해결법: https://stackoverflow.com/questions/17981631/jquery-ajax-inside-a-loop


## 버튼을 누를 때마다 내용이 계속 추가되던 문제


```js
//오늘의 역사 다음 역사로 바꾸기
function change_today_history()
{
	//오른쪽 버튼이면 다음 역사, 왼쪽 버튼이면 이전 역사 보여주기
	var len = hhh.length;
	var id = $(this).attr("id");
	(id == "right")? today_index++ : today_index --;
	today_index >= 0? today_index %= len : today_index = len-1;

	set_history_to_home(hhh[today_index]);
}

//오늘의 역사를 화면에 띄우기
function set_history_to_home(hist)
{
	$("#todaytitle").text(hist.title);
	$("#todaycontent").text(hist.summary);
	//버튼에 연결된 링크 바꾸기
	$("#todaybutton").children(".link").text(hist.link);
	$("#todaybutton").click(show_note_form);
}

```

오늘의 역사를 화면에 띄우는 메소드다.

change_today_history로 같은 날짜에 있는 다른 역사로 바꾸고, set_history_to_home으로 해당 역사를 메인에 띄워준다.

그런데 자꾸 todaybutton의 link가 새로 생성되는 게 아니라, 기존 것에 이어서 추가로 생성되는 문제가 있었다.

text대신 html로 바꿔봐도 같은 문제였다..

알고보니, click을 저기에 달아줘서 그렇다. 매번 클릭할때마다 show_note_form이라는 이벤트 핸들러가 매번 추가되어서 그랬다.

$.click을 웹페이지 로딩시 한번만 실행하는 것으로 해결했다.



