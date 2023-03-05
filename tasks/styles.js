const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


const config = require('../gulp-config').styles;


module.exports = compileStyles;


function compileStyles() {
  return gulp.src(config.src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(config.dist));
}
