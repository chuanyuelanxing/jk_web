// 打开后台页面的时候，自动刷新后台数据
$(document).ready(function() {
    // 初始化，调用后台数据库新闻
    var $newsTable = $('#newstable tbody');
    var $type = "all";
    refreshNews($type);
    //添加新闻
    $('#btnsubmit').click(function(event) {

        event.preventDefault();
        // 判断admin.html输入是否为空
        if ($('#newstitle').val() === "" || $('#newstype').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {
            // 如果新闻标题输入为空，则在父元素上加bootstrap的has-error错误提示类
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            };
            if ($('#newstype').val() === "") {
                $('#newstype').parent().addClass('has-error');
            } else {
                $('#newstype').parent().removeClass('has-error');
            };
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            };
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            };
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            };
        } else {
            // 如果输入不为空则递交
            var $jsonNews = {
                'newstitle': $('#newstitle').val(),
                'newstype': $('#newstype').val(),
                'newsimg': $('#newsimg').val(),
                'newstime': $('#newstime').val(),
                'newssrc': $('#newssrc').val()
            };
            console.log($jsonNews);
            $.ajax({
                // url: 'server/insert.php',
                url: '/admin/insert',
                type: 'POST',
                dataType: 'json',
                data: $jsonNews,
                success: function(data) {
                    console.log(data);
                    //递交新闻后，清空输入框
                    refreshInputNews();
                    // 递交新闻成功后，刷新页面
                    refreshNews($type);

                }
            });

        };
    });

    //删除新闻
    var deleteID = null;
    $newsTable.on('click', '.btn-danger', function(event) { //用生成的类来判断一系列按钮，是否按下
        console.log('click delete');
        //这里用的是bootstrap的modal方法，参考：Bootstrap 模态框（Modal）插件
        $('#deleteModal').modal('show');
        // 获取新闻的id号，prevAll() 获得当前匹配元素集合中每个元素的前面的同胞元素,父元素就是td
        // console.log($(this).parent().prevAll().eq(5).html());
        deleteID = $(this).parent().prevAll().eq(5).html();
        console.log('deleteID=' + deleteID);
    });
    $('#deleteModal #confirmDelete').click(function(event) {
        if (deleteID) {
            $.ajax({
                // url: 'server/delete.php',
                url: '/admin/delete',
                type: 'POST',
                dataType: 'json',
                data: { newsid: deleteID },
                success: function(data) {
                    console.log(data);
                    console.log('删除成功！');
                    $('#deleteModal').modal('hide');
                    refreshNews('all');
                }
            });
        }
    });

    //更新新闻
    var updateID = null;
    // 点击编辑按钮后弹出模拟框,获取数据库中已有新闻
    $newsTable.on('click', '.btn-primary', function(event) { //用生成的类来判断一系列按钮，是否按下
        $('#updateModal').modal('show');
        updateID = $(this).parent().prevAll().eq(5).html();
        console.log('updateID=' + updateID);
        $.ajax({ //点击了编辑后，把从服务器取的值放入模拟框中以便修改
            // url: 'server/curnews.php',
            url: '/admin/curnews',
            type: 'get',
            dataType: 'json',
            data: { newsid: updateID },
            success: function(data) {
                //console.log(data);
                console.log('更新成功！');
                $.each(data, function(index, val) {
                    /* iterate through array or object */
                    console.log('index=' + index);
                    console.log('val=' + val.newsimg);

                    $('#unewstitle').val(val.newstitle);
                    $('#unewstype').val(val.newstype);
                    $('#unewsimg').val(val.newsimg);
                    $('#unewssrc').val(val.newssrc);
                    // 取时间返回值的左边部分，以空格为分界
                    // $('#unewstime').val(val.newstime.split(' ')[0]);
                    $('#unewstime').val(val.newstime.split('T')[0]); //NODEJS返回的时间中带有T
                });
            }
        });
    });
    // 在弹出的模拟框中，点击确认
    $('#updateModal #confirmUpdate').click(function(event) {
        console.log('update');
        // console.log($('#newstitle').val());
        $.ajax({
            // url: 'server/update.php',
            url: '/admin/update',
            type: 'get',
            dataType: 'json',
            data: {
                newsid: updateID,
                newstitle: $('#unewstitle').val(),
                newstype: $('#unewstype').val(),
                newsimg: $('#unewsimg').val(),
                newstime: $('#unewstime').val(),
                newssrc: $('#unewssrc').val()
            },
            success: function(data) {
                console.log(data);
                // 递交新闻成功后，刷新页面
                $('#updateModal').modal('hide');
                refreshNews($type);
            }
        });

    });

    var $type = 'all';

    // 到./server/getnews.php后台调用数据
    function refreshNews($type) {

        //console.info($newsTable);
        $newsTable.empty();
        $.ajax({
            // url: 'server/getnews.php',
            // type: 'POST',
            url: '/admin/getnews',
            type: 'GET',
            dataType: 'json',
            data: { newstype: $type },
            success: function(data) {
                console.log(data);
                $.each(data, function(index, val) { //index为键名或者序列号，val为值
                    var $tdid = $('<td>').html(val.id);
                    var $tdtype = $('<td>').html(val.newstype);
                    var $tdtitle = $('<td>').html(val.newstitle);
                    var $tdimg = $('<td>').html(val.newsimg);
                    // var $tdtime = $('<td>').html(val.newstime);
                    var $tdtime = $('<td>').html(moment(val.newstime).format('YYYY-MM-DD HH:mm:ss'));
                    var $tdsrc = $('<td>').html(val.newssrc);
                    // console.log($tdsrc);
                    // 组装修改及删除按钮
                    var $tdctrl = $('<td>');
                    // $元素必须带有<>否则出稀奇古怪错误，在button上就范了这个错误
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('编辑');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    //console.info($tdctrl);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdsrc, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                    // console.log("1");  
                    // console.log(val.newstype);
                });
            }
        })
    }

    //递交新闻后，清空输入框
    function refreshInputNews(argument) {
        //console.log('val'+$('#newstitle').val());
        $('#newstitle').val('');
        $('#newstype').val('精选');
        $('#newsimg').val('');
        $('#newstime').val('');
        $('#newssrc').val('');
    }

});
