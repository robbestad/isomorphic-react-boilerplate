var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
gulp.task('jsx', function () {
return gulp.src('app/App.jsx')
    .pipe(concat('bundle.js'))
    .pipe(react())
    .pipe(gulp.dest('build'));
});
