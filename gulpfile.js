var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
    minifyHTML = require('gulp-minify-html');

var DEST = 'build/';
var SRC = 'src/';

gulp.task('default', function() {
  gulp.start('styles','scripts','images','images_main','minify-html');
});

gulp.task('styles', function() {
  return gulp.src('src/css/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src('src/views/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('src/**/**/*.js'))
    .pipe(gulp.dest('build'))
    .pipe(uglify())
    .pipe(gulp.dest('build'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('src/views/images/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('build/views/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('images_main', function() {
  return gulp.src('src/img/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('build/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('copy', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
});





gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('src/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('build'));
});

