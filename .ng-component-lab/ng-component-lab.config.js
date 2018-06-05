var getWebPackConfig = require('../ng-component-lab.webpack.config.js');

module.exports = {
  webpackConfig: getWebPackConfig,
  host: 'localhost',
  port: 6007,
  include: [],
  suites: {
    feature: './.ng-component-lab/lab-configuration.module.ts'
  }
};
