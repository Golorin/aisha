'use strict';

// Include gulp
var gulp = require('gulp');

// Include Our Plugins

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// var paths = {
//   scripts: ['src/js/*.js', '!client/external/**/*.coffee'],
//   images: 'client/img/**/*'
// };

// Lint Task
gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Our sass
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('public/javascripts/'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['lint', 'scripts']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
