var gulp = require('gulp');
gulp.task('reactify', function() {
	var browserify = require('browserify');
    var uglify = require('gulp-uglify');
    var source = require('vinyl-source-stream');
    var buffer = require('vinyl-buffer');
    var reactify = require('reactify');
    var literalify = require('literalify');
    var reactify = require('reactify');
    //var brfs = require('brfs');
	browserify()
    .require('./app/App.jsx', {expose: 'myApp'}, reactify)
	.transform({global: true}, 
        literalify.configure(
        {
        global: true,
        react: 'window.React'
        })
    )
	.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
	.pipe(gulp.dest('./public'));
})
