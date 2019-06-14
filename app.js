/**
 * @name        app.js
 * @function    run-server(node.js)
 * @author      Sun-Jung Kim
 */

var express = require("express"), http = require("http");
var static = require("serve-static");

//create "express" object
var app = express();

//set basic property
app.set("port", process.env.PORT || 8080);
app.set("host", "127.0.0.1");  //loopback

//use static server middleware
app.use(static(__dirname));

//run server
http.createServer(app).listen(app.get("port"), app.get("host"), () =>
{
	console.log("Express server running at " + app.get("port") + " " + app.get("host"));
});

//redirect
var router = express.Router();
router.get("/",function(req,res,next)
{
	res.redirect("/Webzine.html");
});

//router 동작. middleware로 달아줌.
app.use("/", router);



//file reader
/**
 * ****************************파일 읽고쓰기 예제
 */
var fs = require("fs");
var obj = [];
obj.push({id:1, square:2});
var json = JSON.stringify(obj);
// fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
fs.writeFile('myjsonfile.json', json, 'utf8', function(err) {
    if (err) throw err;
    console.log('complete');});

// fs.readdir(testFolder, function(error, filelist){
//   console.log(filelist);
// });

fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
	obj = JSON.parse(data); //now it an object
	// obj.table.push({id: 2, square:3}); //add some data
    obj.push({id: 2, square:3}); //add some data
	json = JSON.stringify(obj); //convert it back to json
	fs.writeFile('myjsonfile.json', json, 'utf8', function(err) {
		if (err) throw err;
		console.log('complete');});
	
    // fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
}});


/**
 * *******(미완)디렉토리 안의 file list를 읽어서 각 list.json에 저장하기 ******
 */
//TODO: 디렉토리 안의 file읽어서 list.json에 저장하기
var testFolder = './include/1995';
var obj = {_1995:[]};
obj._1995.push({id:1, square:2});

fs.readdir(testFolder, function(error, filelist){
	filelist.forEach((name, index, array)=>
	{
		console.log(name + index);

	});


  console.log(filelist);
});