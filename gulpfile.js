‘use strict’;

var gulp = require(‘gulp’);
var sass = require(‘gulp-sass’);

compile gulp.task(‘sass’, function () { gulp.src(‘styles/scss/*.scss’) .pipe(sass().on(‘error’, sass.logError)) .pipe(gulp.dest(‘styles/css’)); });

compile and watch gulp.task(‘sass:watch’, function() { gulp.watch(‘styles/scss/*.scss’, [‘sass’]);});
