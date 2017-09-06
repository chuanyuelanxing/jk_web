fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

/*fis.match('*', {//默认对所有文件不使用hash
  useHash: false
});*/
fis.match('*.{js,css,jpg,png}', {//对这些文件使用hash
  useHash: true
});


fis.match('*.js', {//使用压缩
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('*.html', {//压缩html
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});