var gulp = require("gulp");
gulp.task('vendor', function() {
  var concat = require('gulp-concat'),
	  uglify = require('gulp-uglify');
  gulp.src([
      'node_modules/react/dist/react-with-addons.js'
    ])
	.pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public'))
});
