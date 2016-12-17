beforeEach(function () {
    jasmine.addMatchers({
        toBeEmpty: function () {
            return {
                compare: function (selection) {
                    var result = {pass: selection.empty()};
                    result.message = "Expected selection to be empty.";
                    return result;
                }
            }
        }
    })
});
