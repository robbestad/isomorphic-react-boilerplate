var gulp = require('gulp');
gulp.task('build', function(callback) {
	var gulp        = require('gulp');
	var runSequence = require('run-sequence');
    runSequence('delete',
        [
            'jsx',
            'reactify'
        ],
        callback);
});
