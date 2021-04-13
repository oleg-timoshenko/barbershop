'use strict';

var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');

gulp.task('less', function () {
    return gulp.src(['./src/styles/fonts.less', './src/styles/main.less', './src/styles/adaptive.less'])
        .pipe(less())
        .pipe(concatCss("main.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));

});