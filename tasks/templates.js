const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

const config = require('../gulp-config').templates;


module.exports = { fr, en };


function fr() {
  return buildTemplate('fr');
}

function en() {
  return buildTemplate('en');
}

function buildTemplate(lang) {
  const c = config[lang];
  const { i18n, src, dist } = c;

  return gulp.src(src)
    .pipe(nunjucks.compile({ i18n }))
    .pipe(gulp.dest(dist));
}