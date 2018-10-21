'use strict';

const   gulp = require('gulp'),
       autoprefixer = require('gulp-autoprefixer'),
       sass = require('gulp-sass'),
       browserSync = require('browser-sync').create();


gulp.task('sass', () => {
   return gulp.src('src/scss/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({
       browsers: ['last 2 versions'],
       cascade: false
   }))
   .pipe(gulp.dest('app/css'))
   .pipe(browserSync.stream());
});

gulp.task('html', () => {
   return gulp.src('src/index.html')
   .pipe(gulp.dest('app/'))
   .pipe(browserSync.stream());
});

gulp.task('watch', () => {
 gulp.watch('src/scss/**/*.scss', ['sass']),
 gulp.watch('src/index.html',['html'])
});

gulp.task('connect', function() {
   browserSync.init({
       server: {
           baseDir: "app",
           open: true
       }
   });
});


gulp.task('default', ['watch', 'html', 'sass', 'connect']);