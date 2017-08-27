<?php
header("Content-type:application/json;charset=utf-8");
   require_once "db.php";
 $newstype=$_POST['newstype'];
     //  echo $newstype;
    // $newstype="社会";
    if($newstype=="all" || $newstype=="更多" ){//index页面，选择了相应的新闻
     //后台默认所有的新闻显示
		$sql="select * from news order by id desc";   
			
	}else{		

		  $sql="select * from news where newstype="."'{$newstype}' order by id desc";
	}
   // $sql="select * from news where newstype="."'{$newstype}' order by id desc";
//$sql="select * from news order by id desc";   
	//	echo $sql;
	$result=mysql_query($sql);    
	$senddata=array();
	

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

    // echo urldecode(json_encode($senddata));
 mysql_close();
    