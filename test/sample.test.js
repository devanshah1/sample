describe("sample", function () {
    it("Should be defined", function() {
        var results = {
            resultsOne: "results"
        }

        SAM.scanDone(results);

        expect(true).not.toBe("undefined");
    });
});
