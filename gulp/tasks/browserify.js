var gulp = require('gulp');
gulp.task('browserify', function() {
	var browserify = require('browserify');
    var uglify = require('gulp-uglify');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var reactify = require('reactify');
    var literalify = require('literalify');
    var brfs = require('brfs');
	browserify()
	.require('./build/bundle.js', {expose: 'myApp'})
	.transform({global: true}, literalify.configure({react: 'window.React'}))
	.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
	.pipe(gulp.dest('./public'));
})
