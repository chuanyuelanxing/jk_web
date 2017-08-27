<?php
header("Content-type:application/json;charset=utf-8");
   require_once "db.php";
    $updateID=trim($_POST['newsid']);
    $newstitle=trim($_POST['newstitle']);
   	$newstype=trim($_POST['newstype']);
   	$newsimg=trim($_POST['newsimg']);
   	$newstimg=trim($_POST['newstime']);
   	$newssrc=trim($_POST['newssrc']);
   	// $updateID='42';
  	 // $newstitle='测试';
   	// $newstype='互联网';
   	// $newsimg='img/2.jpg';
   	// $newstimg='2016-12-27';
   	// $newssrc='极客学院';
   $sql="UPDATE news SET newstitle='{$newstitle}',newstype='{$newstype}',newsimg='{$newsimg}',newssrc='{$newssrc}',newstime='".date("Y-m-d h:i:s",strtotime($newstimg))."' where id="."'{$updateID}'";


//echo '$sql='.$sql;
$result_update = mysql_query($sql) or die("table have run error");
echo json_encode(array('success'=>'update ok'));//一定要返回一条信息，否则ajax不完整；


mysql_close();