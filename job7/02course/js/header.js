var uname = $.cookie("uname"),
    domain = $.cookie("domain"),
    uuid = $.cookie("uuid"),
    nolgoin = '<dl class="submenu">';
nolgoin += '<i class="top-icon"></i>', nolgoin += '<dd><a href="http://passport.jikexueyuan.com/sso/reg_phone" class="reg-btn">注册</a>|<a href="http://passport.jikexueyuan.com/sso/login" class="login-btn">登录</a></dd>', nolgoin += '<dd><a href="http://passport.jikexueyuan.com/sso/login"><i class="xxzx-icon"></i>学习中心</a></dd>', nolgoin += '<dd><a href="http://passport.jikexueyuan.com/sso/login"><i class="grzy-icon"></i>个人主页</a></dd>', nolgoin += '<dd><a href="http://passport.jikexueyuan.com/sso/login"><i class="xxtz-icon"></i>消息通知</a></dd>', nolgoin += '<dd><a href="http://passport.jikexueyuan.com/sso/login"><i class="zhsz-icon"></i>账号设置</a></dd>', nolgoin += "</dl>";
var logined = '<a href="http://my.jikexueyuan.com/setting/user/"><img src="" id="userpoto"/></a>';
logined += '<i id="uservip-icon"></i>', logined += '<dl class="submenu">', logined += '<i class="top-icon"></i>', logined += '<dd id="getUserLevel">', logined += "</dd>", logined += '<dd><a href="http://xue.jikexueyuan.com/"><i class="xxzx-icon"></i>学习中心</a></dd>', logined += '<dd><a href="http://my.jikexueyuan.com/' + (domain ? domain : uuid) + '"><i class="grzy-icon"></i>个人主页</a></dd>', logined += '<dd><a href="http://www.jikexueyuan.com/member/notifications/"><i class="xxtz-icon"></i>消息通知<em class="unread-num"></em></a></dd>', logined += '<dd><a href="http://my.jikexueyuan.com/setting/user/"><i class="zhsz-icon"></i>账号设置</a></dd>', logined += '<dd><a href="http://passport.jikexueyuan.com/submit/logout"><i class="tc-icon"></i>退出登录</a></dd>', logined += "</dl>";
var header = {
    init: function() {
        this.state(), this.bind(), this.selected()
    },
    bind: function() {
        var e = this;
        $(".icon-box").on("click", "#search-btn", this.searchshow), $(".searchbox").on("click", "#close-btn", this.searchide), $(".searchbox").on("click", "#search-btn", this.sbtnGo), $("#web_search_header").on("keyup", {
            _this: e
        }, this.siptKeyUp)
    },
    selected: function() {
        var e = this.hostname(),
            i = this.hostunit();
        ("http://www.jikexueyuan.com/" == document.location.href || "http://www.jikexueyuan.com/index/" == document.location.href || "http://www.jikexueyuan.com/index.html" == document.location.href) && $(".header-nav>li:eq(0)>a").css("color", "#35b558"), "www" == e && "zhiye" == i && ($(".header-nav>li:eq(1)").css("color", "#35b558"), $(".header-nav>li:eq(1)>i").css("border-color", "#35b558")), ("www" == e && ("course" == i || "path" == i || "tag" == i || "vip" == i) || "ke" == e && ("zhiye" == i || "xilie" == i)) && ($(".header-nav>li:eq(2)").css("color", "#35b558"), $(".header-nav>li:eq(2)>i").css("border-color", "#35b558")), ("wenda" == e || "wiki" == e || "qun" == e || "download" == e) && ($(".header-nav>li:eq(3)").css("color", "#35b558"), $(".header-nav>li:eq(3)>i").css("border-color", "#35b558"))
    },
    hostname: function() {
        var e = document.location.hostname.split(".");
        return e[0]
    },
    hostunit: function() {
        var e = document.location.pathname.split("/");
        return e[1]
    },
    searchshow: function() {
        $(".searchbox").addClass("scale")
    },
    searchide: function() {
        $(".searchbox").removeClass("scale")
    },
    sbtnGo: function() {
        var e = $("#web_search_header").val();
        "" != e && (location.href = "http://search.jikexueyuan.com/course/?q=" + e)
    },
    siptKeyUp: function(e) {
        var_focus = $("#web_search_header").is(":focus"), 1 != var_focus || 13 != e.keyCode && 10 != e.keyCode || e.data._this.sbtnGo()
    },
    state: function() {
        var e = $.cookie("authcode");
        if (void 0 == e || "" == e) $("#loginlist").removeClass("logged").addClass("login-icon"), $("#loginlist").html(nolgoin);
        else {
            var i = $.cookie("avatar");
            $("#loginlist").removeClass("login-icon").addClass("logged"), $("#loginlist").html(logined), $("#userpoto").attr("src", i), this.getUserLevel()
        }
    },
    getUserLevel: function() {
        var e, i = ($.cookie("is_expire"), $.cookie("level_id"), $.cookie("vip_status")),
            o = $.cookie("ca_status");
        1 == i ? ($("#uservip-icon").addClass("year-icon"), e = '<a href="http://my.jikexueyuan.com/user/myvip" class="year-vip"></a>') : ($("#uservip-icon").addClass(1 == o ? "rz-icon" : "xf-icon"), e = '<a href="http://my.jikexueyuan.com/user/myvip" class="xf-vip"></a>'), $("#getUserLevel").html(e), $("#getUserLevel").prepend(1 == o ? '<a href="http://my.jikexueyuan.com/user/myvip" class="rz-vip"></a>' : '<a href="http://my.jikexueyuan.com/user/myvip" class="rzno-vip"></a>')
    }
};
$(function() {
    header.init()
});