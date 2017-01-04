"user strict";

(function testSingleNoteViewInstantiation() {
  var inputText = "this is the test note text";
  var note = new Note(inputText);
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.viewHTML().includes("<div>"+inputText+"</div>") , "should view a single note text");
})();
