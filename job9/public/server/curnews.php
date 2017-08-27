<?php
header("Content-type:application/json;charset=utf-8");
   require_once "db.php";
 
 $updateID=trim($_POST['newsid']);
// $updateID='42';
  $sql="select * from news where id="."'{$updateID}'";
//echo '$sql='.$sql;
$result=mysql_query($sql) or die("table have run error");  
	$senddata=array();
	//while($row=mysql_fetch_assoc($result)) {
	 while($row=mysql_fetch_array($result,MYSQL_ASSOC)){
		array_push($senddata,
			array('id'=>$row['id'],
			'newstype'=>$row['newstype'],
			'newstitle'=>$row['newstitle'],
			'newsimg'=>$row['newsimg'],
			'newssrc'=>$row['newssrc'],
			'newstime'=>$row['newstime']));
	}
 
 echo json_encode($senddata);
 mysql_close();