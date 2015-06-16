'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
  gulp.task('inject', ['scripts'], function () {
    var injectStyles = gulp.src([
      options.src + '/app/**/*.css'
    ], { read: false });

    var scriptsList = [
       options.src + '/{app,components}/**/*.js',
       '!' + options.src + '/app/**/*.spec.js',
       options.src + 'app/ocp.module.js'
      ];

    if (!argv.mocks) {
      scriptsList.push('!' + options.src + '/app/**/*.mock.js');
    } else {
      options.wiredep.devDependencies = true;
    }

    var injectScripts = gulp.src(scriptsList)
    .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'));

    var injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };

    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(options.wiredep))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
