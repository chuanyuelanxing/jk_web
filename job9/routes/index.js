var express = require('express');
var router = express.Router();
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
var mysql      = require('mysql');
var dbconfig=require('./db');
// 在主页获取新闻时请求
router.get('/',function(req,res,next){
var newstype=req.query.newstype;
console.log('newstype='+newstype);
 var connection=mysql.createConnection(dbconfig
 	//{
//  host    :'localhost',
//  port    :3306,
//  user    :'root',
//  password:'root',
//  database:'baidunews'
// }
);
connection.connect();

//默认打开所有新闻，否则看细类
// if(req.query.newstype=='all'){
	if(newstype=='all' || newstype=='更多'){
	connection.query('SELECT * from news order by id ASC',function (error, results, fields) {//传进来是all，默认查询所有新闻；不需要where条件
		console.log('1');
   res.json(results);});
}else{
	connection.query("SELECT * from news where newstype=? order by id ASC",[newstype],function (error, results, fields) {//传进来是all，默认查询所有新闻；不需要where条件
  // if (error) throw error;//
  console.log('2');
  console.log('baidu nodejs news');
  console.log(results);
   res.json(results);
});
};

connection.end();
});

 
module.exports = router;
