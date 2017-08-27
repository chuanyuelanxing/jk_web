$(document).ready(function() {
	// 默认newstype为精选参数
    refreshNews('all');

    $('nav a').click(function(event) {
    	event.preventDefault();
    	//取所选择a标签的内容
    	var $type=$(this).text();
    	refreshNews($type);
    });

});
// 新闻添加处理函数,type参数为控制新闻类型的切换
function refreshNews($type) {
	console.log($type);
    var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        url: './server/getnews.php',
        type: 'POST',
        dataType: 'json',
        data:{newstype:$type},
        success: function(data) {
            console.log('data'+data);
         
            $.each(data, function(index, val) { //index为键名或者序列号，val为值
                     //var $list = $('<li></li>').html('新闻标题占位符').appendTo($lists);//debug
                var $list = $('<li></li>').addClass('news-list').prependTo($lists); //往前面插入，appendTo为往后追加
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', val.newsimg).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                // var $h1 = $('<h1></h1>').html('新闻标题占位符').appendTo($newsContent);
                var $h1 = $('<h1></h1>').html(val.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').addClass('newstime').html(val.newstime).appendTo($p);
                var $newsSrc = $('<span></span>').addClass('newssrc').html(val.newssrc).appendTo($p);

                  
                });
        }
    });
}
