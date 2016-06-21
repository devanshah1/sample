module.exports = function (config) {
    config.set({

        basePath: '',

        browsers: ['Firefox'],

        frameworks: ['jasmine', 'SAM'],

        files: [
            "test/**/*.test.js"
        ],

        exclude: [
        ],

        preprocessors: {
        },

        reporters: ['SAM', 'progress'],

        port: 9879,

        retryLimit: 3,

        colors: true,

        logLevel: config.LOG_DEBUG,

        autoWatch: false,

        singleRun: true,

        concurrency: Infinity
    });
}
