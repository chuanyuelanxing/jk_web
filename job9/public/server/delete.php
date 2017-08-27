<?php
header("Content-type:application/json;charset=utf-8");
   require_once "db.php";
   $deleteID=trim($_POST['newsid']);
 //$deleteID='38';
   $sql="delete from news where id="."'{$deleteID}'";
//echo '$sql='.$sql;
$result_insert = mysql_query($sql) or die("table have run error");
echo json_encode(array('success'=>'ok'));
//echo json_encode($sql);//一定要返回一条信息，否则ajax不完整,会阻塞；
mysql_close();