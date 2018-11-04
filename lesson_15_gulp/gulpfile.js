 'use strict';

const   gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
notify = require('gulp-notify'),
sass = require('gulp-sass'),
clean = require('gulp-clean'),
browserSync = require('browser-sync').create(),
ftp = require('vinyl-ftp'),
gutil = require('gulp-util'),
test = require('dotenv').config(); // & create .env file with your variables --- add in .gitignore



gulp.task('sass', () => {
 return gulp.src('src/scss/**/*.scss')
 .pipe(sass().on('error', notify.onError("SASS-Error: <%= error.message %>")))
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

gulp.task('img', () => {
 return gulp.src('src/img/**/*.*')
 .pipe(gulp.dest('app/img'))
 .pipe(browserSync.stream());
});

gulp.task('watch', () => {
 gulp.watch('src/scss/**/*.scss', ['sass']),
 gulp.watch('src/img/**/*.*', ['img']),
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

gulp.task('clean', function () {
  return gulp.src('app')
  .pipe(clean({
    force: true,
    read: false
  }));
});

gulp.task('developing', ['watch', 'html', 'img', 'sass', 'connect']);

gulp.task('default', ['clean'], () => {
  gulp.start('developing');
});




gulp.task('deploy', () => {
  const envs = process.env;
  const host = envs["VAR_FTP_HOST"];
  const user = envs["VAR_FTP_USER"];
  const password = envs["VAR_FTP_PASSWORD"];
  const ftpPath = envs["VAR_FTP_PATH"] || '/';
  const log = gutil.log;
  log('deploying to: ' + host);
  const ftpConnection = ftp.create({ host, user, password, log });
  return gulp.src('app/**/**', {base: 'app', buffer: false})
  .pipe(ftpConnection.dest(ftpPath));
});