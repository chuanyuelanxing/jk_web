  //用单例模式实现
  // 控制显示我的关注
  var Display_s_menu_mine = function() {
      var s_menu_mine;
      console.log('s_menu_mine=' + s_menu_mine);

      return s_menu_mine || (s_menu_mine = $("#s_menu_mine").click(function(event) {
          var d = $("#s_content_100").css("display");
          if (d === "none") {
              $("#s_content_1").css({
                  "display": "none"
              });
              $("#s_content_15").css({
                  "display": "none"
              });
              $("#s_content_20").css({
                  "display": "none"
              });
              $("#s_content_100").css({
                  "display": "block"
              });
              // 添加小说导航栏的状态属性        
              $("#book").removeClass('current');
              $("#video").removeClass('current');
              $("#nav").removeClass('current');
              $("#s_menu_mine").addClass('current');
          }
      }));
  };

  var a = new Display_s_menu_mine;

  //控制显示我的导航

  var Display_nav = function() {
      var nav;
      console.log('nav=' + nav);

      return nav || (nav = $("#nav").click(function(event) {
          var d = $("#s_content_1").css("display");
          if (d === "none") {
              $("#s_content_100").css({
                  "display": "none"
              });
              $("#s_content_15").css({
                  "display": "none"
              });
              $("#s_content_20").css({
                  "display": "none"
              });
              $("#s_content_1").css({
                  "display": "block"
              });
              // 添加小说导航栏的状态属性        
              $("#book").removeClass('current');
              $("#video").removeClass('current');
              $("#nav").addClass('current');
              $("#s_menu_mine").removeClass('current');
          }
      }));
  };

  var b = new Display_nav;


  //控制显示小说
  var Display_book = function() {
      var book;
      console.log('book=' + book);

      return book || (book = $("#book").click(function(event) {
          var d = $("#s_content_20").css("display");
          if (d === "none") {
              $("#s_content_100").css({
                  "display": "none"
              });
              $("#s_content_15").css({
                  "display": "none"
              });
              $("#s_content_1").css({
                  "display": "none"
              });
              $("#s_content_20").css({
                  "display": "block"
              });

              // 添加小说导航栏的状态属性
              $("#nav").removeClass('current');
              $("#video").removeClass('current');
              $("#book").addClass('current');
              $("#s_menu_mine").removeClass('current');

          }
      }));
  };

  var c = new Display_book;


  //控制显示视频
  var Display_video = function() {
      var video;
      console.log('video=' + video);

      return video || (video = $("#video").click(function(event) {
          var d = $("#s_content_15").css("display");
          if (d === "none") {
              $("#s_content_100").css({
                  "display": "none"
              });
              $("#s_content_20").css({
                  "display": "none"
              });
              $("#s_content_1").css({
                  "display": "none"
              });
              $("#s_content_15").css({
                  "display": "block"
              });
              // 添加小说导航栏的状态属性
              $("#nav").removeClass('current');
              $("#book").removeClass('current');
              $("#video").addClass('current');
              $("#s_menu_mine").removeClass('current');

          }
      }));
  };

  var d = new Display_video;
  //console.log('d='+d);



  //跳转到页面顶部
  var Display_icon = function() {
      var iconmask;

      return iconmask || (iconmask = $("#icon-mask").click(function() {
          console.log("icon-mask");
          $('body,html').animate({ scrollTop: 0 }, 1000);
      }));
  };
  var e = new Display_icon;

  // 用户菜单项弹出控制
  var Display_s_username_top = function() {
      var s_username_top;

      return s_username_top || ($("#s_username_top").mousemove(function() {

          $("#s_user_name_menu").show().mouseleave(function() {
              $(this).hide();
          });

      }));
  };
  var f = new Display_s_username_top;

  // 搜索菜单项弹出控制

  var Display_s_usersetting_top = function() {
      var s_usersetting_top;

      return s_usersetting_top || ($("#s_usersetting_top").mouseenter(function() {
          $("#s_user_setting_menu").show().mouseleave(function() {
              $(this).hide();
          });
      }));
  };
  var g = new Display_s_usersetting_top;



  //右边弹出菜单 

  // var Display_s_bri = function() {
  //     var s_bri;

  //     return s_bri || ($("#s_bri").mouseenter(function() {
  //         $("#s_bdbriimg").show().mouseleave(function() {
  //             $(this).hide();
  //         });
  //     }));
  // };
  // var h = new Display_s_bri;

  (function(){ 
   var s_bri;

      return s_bri || ($("#s_bri").mouseenter(function() {
          $("#s_bdbriimg").show().mouseleave(function() {
              $(this).hide();
          });
      }));});