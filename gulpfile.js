const gulp = require('gulp');

const config = require('./gulp-config');

const styles = require('./tasks/styles');
const { fr, en } = require('./tasks/templates');


gulp.task('styles', styles);
gulp.task('templates:fr', fr);
gulp.task('templates:en', en);

const gulpBuild = gulp.series(
  'styles',
  'templates:fr',
  'templates:en',
);

gulp.task('build', gulpBuild);

gulp.task(
  'dev',
  () => gulp.watch(config.watch.src, gulpBuild)
);
