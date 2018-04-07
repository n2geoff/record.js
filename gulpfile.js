const gulp = require("gulp");
const minify = require('gulp-minify');
const strip = require("gulp-strip-comments");

gulp.task("default", function() {
    gulp.src("./src/record.js")
        .pipe(strip({safe: true}))
        .pipe(minify({ext: {min: ".min.js"}}))
        .pipe(gulp.dest("dist"))
});