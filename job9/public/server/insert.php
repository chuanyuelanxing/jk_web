<?php
header("Content-type:application/json;charset=utf-8");
   require_once "db.php";
    $newstitle=trim($_POST['newstitle']);
   	$newstype=trim($_POST['newstype']);
   	$newsimg=trim($_POST['newsimg']);
   	$newstimg=trim($_POST['newstime']);
   	$newssrc=trim($_POST['newssrc']);
   	//  $newstitle='测试';
   	// $newstype='互联网';
   	// $newsimg='img/2.jpg';
   	// $newstimg='2016-12-27';
   	// $newssrc='极客学院';
   $sql="insert into news(newstitle,newstype,newsimg,newstime,newssrc) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','".date("Y-m-d h:i:s",strtotime($newstimg))."','{$newssrc}')";

//echo '$sql='.$sql;
$result_insert = mysql_query($sql) or die("insert into table have run error");
//echo json_encode($sql);//一定要返回一条信息，否则ajax不完整；
echo json_encode(array('success'=>'ok'));
//计算当月酬金
// $sql="UPDATE countticket SET pay=(({$fieldsArr[4]}*0.6)+if(({$fieldsArr[3]})=0,0,({$fieldsArr[4]}*0.2))+if(({$fieldsArr[2]}*{$fieldsArr[3]})=0,0,({$fieldsArr[4]}*0.2))+if(({$fieldsArr[1]}*{$fieldsArr[2]}*{$fieldsArr[3]})=0,0,({$fieldsArr[4]}*0.2)))";
// $result = mysql_query($sql) or die("UPDATE pay field have run error");
mysql_close();