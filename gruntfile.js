'use strict';

module.exports = function (grunt) {
    // Project Configuration


        grunt.initConfig({
            jshint: {
                all: ['core/**/*.js', 'User/**/*.js'],
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                }
            },
            test :{
                all:['']
            }

        });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.grunt.registerTask('runTest', ['env:test','test']);

    //Load NPM tasks


    //Making grunt default to force in order not to break the project.

};
