$(document).ready(function() {
    // 监听load事件，当页面（包括所有图片）被完全加载完后，执行一个函数,他妈的要监听window，而不是document
    $(window).on("load", function() {
        imgLocation();
        var dataInt = { 'data': [{ 'src': '1.jpg' }, { 'src': '2.jpg' }, { 'src': '3.jpg' }, { 'src': '4.jpg' }, { 'src': '5.jpg' }, { 'src': '6.jpg' }, { 'src': '7.jpg' }, { 'src': '8.jpg' }, { 'src': '9.jpg' }, { 'src': '10.jpg' }, { 'src': '11.jpg' }, { 'src': '12.jpg' }] };
        window.onscroll = function() {
                if (scrollside()) { //判断鼠标滑动长度是否达到加载的标准了
                    $.each(dataInt.data, function(index, value) {
                        var box = $("<div>").addClass("pin").appendTo($("main"));
                        var content = $("<div>").addClass("box").appendTo(box);
                        // console.log("./images/" + $(value).attr("src"));
                        $("<img>").attr("src", "./images/" + $(value).attr("src")).appendTo(content);
                    });
                    imgLocation();
                }
            }
            //当页面宽度变化时，重新排列布局
            //   window.onresize=function(){imgLocation();};
        $(window).resize(function() {
            imgLocation();
            //console.log($(window).width());
        });
    });
});
//加载判断函数
function scrollside() {
    var $box = $(".pin");
    //get()是把jquery转化为javascrip，类似$box.last()[0];element.offsetTop  返回当前元素的相对垂直偏移位置的偏移容器
    var lastboxHeight = $box.last().get(0).offsetTop + Math.floor($box.last().height() / 2);
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop(); //jquery 方法设置或返回被选元素的垂直滚动条位置。
    return (lastboxHeight < documentHeight + scrollHeight) ? true : false;
}
// 静态图片加载排列布局
function imgLocation() {
    var $box = $(".pin"); //前面设置为.box造成覆盖  
    //var $boxWidth = $box.eq(0).width(); //这个宽度取得有问题，造成在满屏时候实际只能放7列，而计算结果却是8列，因为width();只取高度，遗漏了padding
    var $boxWidth = $box.get(0).clientWidth; //通过get()转回DOM，调用clientWidth，lientWidth属性用来获取指定元素可见区域的宽度。可见区域的宽度不包括边框和滚动条区域的尺寸,但是包括padding的尺寸
    // JavaScript Math 对象,执行数学任务。floor() 方法返回小于等于x的最大整数
    var num = Math.floor(($(window).width() - 30) / $boxWidth); //30为左边距  
    var boxArr = [];
    $box.each(function(index, value) { //value指当前对象就是$box中一个DIV元素
        value.style.cssText = ""; //js语法，不加这个初始化则会出现，窗口有小变大的时候不会重新渲染
        var $boxHeight = $box.eq(index).height();
        if (index < num) {
            boxArr[index] = $boxHeight;
            console.log(index + '--' + $boxHeight);
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            console.log('minboxHeight--' + minboxHeight);
            // 在数组中查找指定值并返回它的索引
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            console.log('minboxIndex--' + minboxIndex);
            // 用value所指的dom元素转化为jquery，再设置样式
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": $box.eq(minboxIndex).position().left
            });
            // console.log('追加图片的序号' + index);
            // console.log('追加前图片的总高度' + boxArr[minboxIndex]);
            // console.log('要追加图片的高度' + $box.eq(index).height());
            boxArr[minboxIndex] += $box.eq(index).height();
            // console.log('追加后图片的总高度' + boxArr[minboxIndex]);
        }
    });
}
