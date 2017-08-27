<?php

$link=mysql_connect('localhost','root','root');
//$link=mysql_connect('localhost','root','qilFYYNZJ0');//上传到009.gwolf.me
if(!$link){
	echo json_encode(array('连接数据库信息' =>'连接失败！' ));
}else{
//echo json_encode(array('连接数据库信息' =>'连接成功！' ));//连接成功，返回查询的mysql数组
mysql_select_db("baidunews");//mysql不能与mysqli混用
//必须设置读取格式，否则读取中文内容为null
mysql_query("SET NAMES utf8");
}
?>