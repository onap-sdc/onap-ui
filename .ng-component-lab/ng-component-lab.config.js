var path = require('path');
var getWebPackConfig = require('../ng-component-lab.webpack.config.js');
var fullPath = path.resolve('.ng-component-lab/lab-configuration.module.ts');

console.log("fullPath: " + fullPath);

module.exports = {
  webpackConfig: getWebPackConfig,
  host: 'localhost',
  port: 6007,
  include: [],
  suites: {
    feature: fullPath
  }
};
