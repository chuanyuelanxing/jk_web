var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var moment = require('moment');
var dbconfig=require('./db');
// moment().format();

var connection = mysql.createPool(dbconfig
// { //连接池子，保持连接状态
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'baidunews'
// }
);

/* 后台路由器页面,获取所有新闻列表 */
router.get('/getnews', function(req, res, next) {
    connection.query('select * from news ORDER BY id desc', function(err, rows) {

    	console.log(moment(rows[2].newstime).format('YYYY-MM-DD HH:mm:ss'));//ok
        // console.log(moment((moment(rows[2].newstime).format('X')).format('YYYY-MM-DD HH:mm:ss'));
        res.json(rows);
    });
});

// 确认更新,get对应newsid = req.query.id, post对应newsid = req.body.id, 
router.get('/update', function(req, res) {
    var newsid = req.query.newsid,
        newstype = req.query.newstype,
        newstitle = req.query.newstitle,
        newsimg = req.query.newsimg,
        newstime = req.query.newstime,
        newssrc = req.query.newssrc;
    connection.query('update news set newstitle=?,newstype=?,newsimg=?,newstime=?,newssrc=? where id=?', [newstitle, newstype, newsimg, newstime, newssrc, newsid], function(err, rows) {
        // connection.query("UPDATE news SET newstitle = '测2',newssrc= '新浪6' WHERE id = 52", function(err, rows) {
        //  	  connection.query("UPDATE news SET newstitle = '测2',newssrc= '新浪6' WHERE id = ?",[newsid], function(err, rows) {
        if (err) throw err;
        console.log(rows.changeRows);
        res.json({ success: 'update ok' }); //必须返回一个json格式给前端，否则前端无法结束。
    });
});

//insert
router.post('/insert', function(req, res) {
    var newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    connection.query('insert into news(newstitle,newstype,newsimg,newstime,newssrc) values(?,?,?,?,?)', [newstitle, newstype, newsimg, newstime, newssrc], function(err, result) {
        if (!err) {
            console.log(result.insertId);
            res.json({ success: 'ok' }); //必须返回一个json格式给前端，否则前端无法结束。
        }
    });
});

//delete
router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    connection.query('delete from news where id=?', [newsid], function(err, result) {
        if (!err) {
            console.log(result.affectedRows);
            res.json({ success: 'delete ok' }); //必须返回一个json格式给前端，否则前端无法结束。
        }
    });
});


//模态框取值
router.get('/curnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.query('select * from news where id=?', [newsid], function(err, rows) {
        res.json(rows);
    })
})


module.exports = router;
