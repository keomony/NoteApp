var assert = {
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Error: Assertion Failed:" + assertionToCheck + " is not truthy");
    }
  }
};
