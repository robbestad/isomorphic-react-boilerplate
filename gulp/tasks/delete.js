var gulp = require('gulp');
gulp.task('delete', function(callback) {
	var config = require('../../config/config').delete;
	var del    = require('del');
    del(config.src, callback);
});
