var gulp = require('gulp')
var fs = require('fs')
var ejs  = require('gulp-ejs')
var rename = require('gulp-rename')
var del = require('del')
var customization

var paths = {
	'template': './src/**/*.ejs',
	'config': './config/**/*'
}

//编译模板任务
gulp.task('ejs', ['clean'], function() {
	var customStr = fs.readFileSync('./config/customization.json', 'utf8')
	customization = JSON.parse(customStr)
    gulp.src('src/**/*.ejs')
        .pipe(ejs(customization, {ext: '.html'}))
        .pipe(gulp.dest('dist'))
})

//清除文件夹
gulp.task('clean', function() {
   return del(['dist'])
})

//监听文件夹改动
gulp.task('watch', function(){
	gulp.watch([paths.template, paths.config], function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
		gulp.start('ejs')
	})
})

gulp.task('default', ['ejs', 'watch'])