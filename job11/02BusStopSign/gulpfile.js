//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    uglify = require('gulp-uglify'), //使用gulp-uglify压缩javascript文件，减小文件大小
    // rev = require('gulp-rev-append'),
    del = require('del'), //清除文件
    // imagemin = require('gulp-imagemin'),//使用gulp-imagemin压缩图片文件http://www.ydcss.com/archives/26
    less = require('gulp-less'),
    cssmin = require('gulp-clean-css'),
    notify = require('gulp-notify'), //更改提醒
    autoprefixer = require('gulp-autoprefixer'), //自动添加css前缀
    concat = require('gulp-concat'); //合并js文件

// 定义一个Lsess任务（自定义任务名称）
gulp.task('lessc', ['clean'], function() {
    return gulp.src('src/less/*.less') //该任务针对的文件;'less/jkxy_header.less'
        .pipe(less()) //该任务调用的模块
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
        //     cascade: true, //是否美化属性值 默认：true 像这样：
        //     remove:true //是否去掉不必要的前缀 默认：true 
        // }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        // .pipe(cssmin()) 
        .pipe(gulp.dest('dest/css')) //将会在src/css下生成jxky_herder.css
        .pipe(notify({ message: '一个单独的less任务完成！' }));

});


// gulp.task('js',['clean'], function() {//必须执行完clean后再执行js,但是没有成功！gulp js情况下
//     // src方法的参数还可以是一个数组，用来指定多个成员,除了js/app.js以外的所有文件。 gulp.src(['js/**/*.js', '!js/**/*.min.js'])

//     // return gulp.src(['js/stand_cal.js','js/test.js']) //ok
//       return gulp.src(['js/*.js','!js/waves.min.js'])//js下所有的js文件，除了waves.min.js
//         .pipe(uglify())
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('js1'));

//         // .pipe(notify({ message: 'Scripts task complete' }));
// });


//没什么压缩效果
// gulp.task('img', function () {
//     gulp.src('img/*.{png,jpg,gif,ico}')
//         .pipe(imagemin())
//         .pipe(gulp.dest('img1'));
// });

// gulp.task('rev', function () {
//     gulp.src('testhtml.html')
//         .pipe(rev())
//         .pipe(gulp.dest('js1'));
// });

// Clean，cb为回调函数
gulp.task('clean', function(cb) {
    del(['dest/css/*', 'dest/js/*', 'dest/img/*'], cb); //'css1'这样直接删除目录,'css1/*'为删除目录中所有文件
    cb(); //必须加这条语句的回调函数，否则前面的调用函数就先执行了。http://www.cnblogs.com/2050/p/4198792.html
});


gulp.task('watch', function() {
    gulp.watch('src/less/*.less', ['lessc']); //当所有less文件发生改变时，调用js任务,启动监听事件：命令提示符执行 gulp Watch
});
