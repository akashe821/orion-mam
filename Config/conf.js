// An example configuration file
exports.config = {

    directConnect: true,
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
    },

    chromeDriver: 'C:/Users/akashs/AppData/Roaming/npm/node_modules/protractor/selenium/chromedriver_2.21.exe',

    // Capabilities to be passed to the webdriver instance.
    /*multiCapabilities: [
     {'browserName': 'chrome'},
     {'browserName': 'firefox'}
     ],*/

    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'node_modules/jasmine-allure-reporter/allure-results'
        }));
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        // set implicit wait times in ms...
        browser.manage().timeouts().implicitlyWait(5000);
        // set browser size...
        browser.manage().window().setSize(1600, 900);

    },

    framework: 'jasmine2',
    specs: ['../TestSpec/AdminSpec/rolesSpec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        // Use colors in the command line report.
        showColors: true,
        defaultTimeoutInterval: 50000,
        displayStacktrace: true,
        displaySpecDuration: true
    }
};