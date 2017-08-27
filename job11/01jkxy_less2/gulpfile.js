//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    notify = require('gulp-notify'), //更改提醒
    // minifycss = require('gulp-minify-css'),
    cssmin = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    autoprefixer = require('gulp-autoprefixer'), //自动添加css前缀
    del = require('del'), //清除文件
    uglify = require('gulp-uglify'),//压缩js代码
    rename = require('gulp-rename'), //改名
    // jshint = require('gulp-jshint'), //js代码校验
    concat = require('gulp-concat'), //合并js文件
    imagemin = require('gulp-imagemin'), //压缩图片
    less = require('gulp-less'); //less的编译

gulp.task('clean_js', function () {
    //del(['dist/js']);//删除js目录
     del(['dist/js/a*.js','!dist/js/swiper.min.js']);
});
gulp.task('clean_css', function () {
    //del(['dist/js']);//删除js目录
     del(['dist/css/j*.css','!dist/css/swiper.min.css']);//匹配所有css文件，但排除掉以s开头的css文件;http://www.cnblogs.com/2050/p/4198792.html
});

gulp.task('clean_img', function () {
    //del(['dist/js']);//删除js目录
     del(['dist/img/*']);
});




gulp.task('minifyjs',["clean_js"], function() {
    gulp.src('src/js/*.js')
        .pipe(uglify()) //压缩js
        .pipe(concat('alldebug.js'))//合并后的文件名
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'js task complete' }));
});

// 定义一个Lsess任务（自定义任务名称）
gulp.task('lessc',["clean_css"],  function() {
    return gulp.src('./src/less/*.less') //该任务针对的文件;'less/jkxy_header.less'
        .pipe(less()) //该任务调用的模块
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
        //     cascade: true, //是否美化属性值 默认：true 像这样：
        //     remove:true //是否去掉不必要的前缀 默认：true 
        // }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(rename({ suffix: '.min' }))   //重命名
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css')) //将会在src/css下生成jxky_herder.css
        .pipe(notify({ message: '一个单独的less任务完成，分别处理了less目录下的多个less文件转换，css的压缩，追加浏览器成功,最后的处理成功提示' }));

});

/* http://trickyedecay.me/archives/9/  参考此文搞定多任务; 预设任务，执行清理后 */
gulp.task('default', ['clean_css','clean_js'], function() {
    gulp.start('lessc','minifyjs');
});

// 文档临听
gulp.task('watch', function() {

  // 监听所有.less文档
  gulp.watch('src/less/*.less', ['lessc']);


    // 监听所有.js档
    gulp.watch('src/js/*.js', ['minifyjs']);

    // 监听所有图片档
    gulp.watch('src/img/*', ['images']);

//   // 创建实时调整服务器 -- 在项目中未使用注释掉
//   var server = livereload();
//   // 监听 dist/ 目录下所有文档，有更新时强制浏览器刷新（需要浏览器插件配合或按前文介绍在页面增加JS监听代码）
//   gulp.watch(['public/dist/**']).on('change', function(file) {
//     server.changed(file.path);
//   });

});