/**
 * Created by akashs on 6/4/2016.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        protractor: {
            options: {
                keepAlive: true,
                configFile: "./Config/conf.js"
            },
            singlerun: {},
            auto: {
                keepAlive: true,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.registerTask('default', ['protractor:singlerun']);

};