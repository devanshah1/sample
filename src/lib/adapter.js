var SAM = {};
!(function (window) {

    SAM.scanDone = function(results) {
        //console.log(results);
        window.__karma__.info({
            newResults: results
        });
    }
})(window);
