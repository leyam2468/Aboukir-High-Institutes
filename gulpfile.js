var gulp = require('gulp');//for start gulp
var concat = require('gulp-concat');///for make file more compres
var prefix = require('gulp-autoprefixer');//for make outo brefixer css
var sass = require('gulp-sass');//for comppuuler scss
var pug = require('gulp-pug');//for compiler pug 
var sourcemap = require('gulp-sourcemaps');//make map for file css
var notify = require("gulp-notify");

// html task
gulp.task('html',function(){
    return gulp.src('input/pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('output'))
        .pipe(notify("HTML!"));
});

// css Tastgulp-sourcemaps
gulp.task('css',function(){
    return gulp.src('input/style/*.scss')
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(prefix())
        //.pipe(concat('main.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('output/style/'))
        .pipe(notify("css"));
});

// js Tast
gulp.task('js',function(){
    return gulp.src('input/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('output/js'))
        .pipe(notify("js"));

});


// watch task 
gulp.task('watch',function(){
    gulp.watch('input/pug/**/*.pug',gulp.series('html'));
    gulp.watch('input/style/**/**.scss',gulp.series('css'));
    gulp.watch('input/js/**/**.js',gulp.series('js'));
    //gulp.watch('input/img/**/**',gulp.series('image'));
});
// Default Task 
gulp.task('default', gulp.parallel('watch'));