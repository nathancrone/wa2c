var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('minify', function () {
    return gulp.src('bower_components/jquery/dist/jquery.js')
               .pipe(uglify())
               .pipe(concat('lib.global.js'))
               .pipe(gulp.dest("wwwroot/Assets/js"));
});