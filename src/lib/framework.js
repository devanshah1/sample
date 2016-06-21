var pathLib = require('path');

function loader(logger, config) {
    config.files.unshift({
        pattern: pathLib.join(__dirname, "adapter.js"),
        included: true,
        served: true,
        watched: false,
        nocache: false
    });
}

loader.$inject = ['logger', 'config']

module.exports = loader;
