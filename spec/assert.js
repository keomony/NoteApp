var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck){
      throw new Error("Assertion failed: " + assertionToCheck + " is falsy");
    } else {
      console.log("Assertion passed: " + assertionToCheck + " is truthy");
    }
  }
};
