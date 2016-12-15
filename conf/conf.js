// An example configuration file.
exports.config = {
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },
  // Framework to use. Jasmine is recommended.
  framework: 'mocha',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../stories/login_positive_test.js'],
};
