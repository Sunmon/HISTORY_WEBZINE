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
var fs = require("fs");
var testFolder = './include';
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
});


// fs.readdir('./data', function(error, filelist){
// 	var title = 'Welcome';
// 	var description = 'Hello, Node.js';
// 	var list = '<ul>';
// 	var i = 0;
// 	while(i < filelist.length){
// 	  list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
// 	  i = i + 1;
// 	}
// 	list = list+'</ul>';
// }