const srcDir = `${ __dirname }/src`;
const stylesDir = `${ srcDir }/styles`;
const templatesDir = `${ srcDir }/templates`;
const localesDir = `${ srcDir }/locales`;

const distDir = './public';

module.exports = {
  styles: {
    src: `${ stylesDir }/aem-eulogy.scss`,
    dist: `${ distDir }/styles`,
  },
  templates: {
    fr: {
      i18n: require(`${ localesDir }/fr.json`),
      src: `${ templatesDir }/index.njk`,
      dist: `${ distDir }/fr`,
    },
    en: {
      i18n: require(`${ localesDir }/en.json`),
      src: `${ templatesDir }/index.njk`,
      dist: `${ distDir }/en`,
    },
  },
};
