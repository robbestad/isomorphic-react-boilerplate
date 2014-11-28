var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
gulp.task('jsx', function () {
return gulp.src('app/App3.jsx')
    .pipe(concat('bundle.js'))
    .pipe(react())
    .pipe(gulp.dest('./build'));
});

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('delete', function(callback) {
	var config = require('./config/config').delete;
	var del    = require('del');
    del(config.src, callback);
});

gulp.task('build', function(callback) {
	var gulp        = require('gulp');
	var runSequence = require('run-sequence');
    runSequence(
        [
            'jsx',
            'browserify',
        ],
        callback);
});

gulp.task('browserify', function() {
	var browserify = require('browserify');
    var uglify = require('gulp-uglify');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var reactify = require('reactify');
    var literalify = require('literalify');
    var brfs = require('brfs');
	browserify()
	.require('./bundle.js', {expose: 'myApp'})
	.transform({global: true}, literalify.configure(
    {
        global: true,
        lodash: 'window._',
        moment: 'window.moment',
        react: 'window.React'
    }
    )
  )
	.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
	.pipe(gulp.dest('./public'));
})
/*
gulp.task('js2', function() {
	 var buildJS = function (entryPoint, name) {
    var browserify = require('browserify');
    var uglify = require('gulp-uglify');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var reactify = require('reactify');
    var literalify = require('literalify');
    var brfs = require('brfs');

    browserify()
        .require(entryPoint + '/' + name + '.jsx')
        .transform({
           global: true
        }, reactify)
        .transform({
           global: true
        }, brfs)
        .transform({
           global: true
        }, literalify.configure({
        global: true,
        lodash: 'window._',
        moment: 'window.moment',
        react: 'window.React'
      }))
        .bundle()
        //.on('error', handleError)
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./public'));
//        .on('finish', cb)
};
buildJS('./app','App3');
})*/


gulp.task('browserify2', function() {
  var browserify = require('gulp-browserify'),
      reactify = require('reactify'),
      literalify = require('literalify'),
      rename = require('gulp-rename')

  return gulp.src('./myApp.js')
    .pipe(browserify({
      debug: true,
      expose: 'myApp',
      extensions: ['.jsx', '.js', '.json'],
      transform: [reactify, literalify.configure({
        global: true,
        lodash: 'window._',
        moment: 'window.moment',
        react: 'window.React'
      })]
    }))
    .on('error', function(err) {
      gutil.log(err.message)
    })
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./public'))
});

// Vendor scripts
gulp.task('vendor', function() {
  var concat = require('gulp-concat')
 
  gulp.src([
      'node_modules/react/dist/react-with-addons.js',
      'node_modules/lodash/dist/lodash.js',
      'node_modules/moment/moment.js',
      'node_modules/moment/locale/nb.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public'))
});