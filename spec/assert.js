(function(windowArg) {
var assert = {
  isTrue: function(assertionToCheck, testMessage) {
    if (!assertionToCheck){
      throw new Error("Assertion failed: " + testMessage );
    } else {
      console.log("Assertion passed: " + testMessage);
    }
  }
};
windowArg.assert = assert;
})(this);
