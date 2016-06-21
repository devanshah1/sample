var reporter = function (baseReporterDecorator, config, emitter, logger) {
    baseReporterDecorator(this);

    this.adapters = [];

    this.onRunStart = function (browsers) {
        //console.log("onRunStart");

        if (!this.onBrowserStart) {
            browsers.forEach(function (browser) {
                //console.log("onBrowserStart foreach");
            });
        }
    };

    if (this.onBrowserStart) {
        this.onBrowserStart = function (browser) {
            //console.log("onBrowserStart");
        };
    }

    this.onBrowserComplete = function (browser, result) {
        //console.log("onBrowserComplete");
        //console.log(browser);
    };

    this.onSpecComplete = function (browser, result) {
        //console.log("result");
        //console.log(result);
    }

    this.onRunComplete = function () {
        //console.log("onRunComplete");
    };

    this.specSuccess = this.specSkipped = this.specFailure = function (browser, result) {
        //console.log("specSuccess specSkipped specFailure");
        //console.log(browser);
        //console.log(result);
    };

    emitter.on('exit', function (done) {
        //console.log("onExit");
        done();
    });

    emitter.on('info', function (info) {
        console.log("info emitter was called and following is the object");
        console.log(info);
    });

    emitter.on('start', function (start) {
        //console.log("start emitter was called and following is the object");
        //console.log(start);
    });
};

reporter.$inject = ['baseReporterDecorator', 'config', 'emitter', 'logger'];

module.exports = reporter;
