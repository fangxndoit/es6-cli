var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var webpackConfig = require('./webpack.config.js');
var concat = require('gulp-concat');


gulp.task('webpack', function () {
    return gulp.src(['./module/import.js'])
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/js'))
})

var del = require('del');
gulp.task('del', function (cb) {
    del(['dist/**/*'],cb);
});

gulp.task('serve',['sass','js'], function () {
    connect.server({
        port:9999,
        livereload: true
    })
})

gulp.task('load', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
    gulp.src('dist/css/*.css')
        .pipe(connect.reload());
    gulp.src('dist/js/*.js')
        .pipe(connect.reload());
})

gulp.task('watch', function () {
    gulp.watch('src/js/*.js',['js']);
    gulp.watch('src/sass/*.scss',['sass']);
    gulp.watch('module/*.js', ['webpack']);
    gulp.watch(['*.html','dist/js/*.js','dist/css/*.css'],['load']);
})

gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
})

gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

//gulp.task('default', ['del','serve','webpack', 'watch']);
gulp.task('default', ['del', 'serve', 'watch']);