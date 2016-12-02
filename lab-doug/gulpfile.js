'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('test', function(){
  gulp.src('./test/*-test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function(){
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
gulp.task('dev', ['lint', 'test'], function(){
});

gulp.task('watch', function(){
  gulp.watch(['**/*.js', '!node_modules/**'], ['lint', 'test']);
});
