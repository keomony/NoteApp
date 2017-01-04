"use strict";

(function testNote(){
  var note = new Note("My favourite language is Ruby.", 3);
  assert.isTrue(note.text === "My favourite language is Ruby.", "should take text from note on instantiation.");
})();

(function testReturnNoteText(){
  var note = new Note("My favourite language is Ruby.", 3);
  assert.isTrue(note.returnText()=== "My favourite language is Ruby.", "should return note text.");
})();

(function testReturnId(){
  var note = new Note("My favourite language is Ruby.", 3);
  assert.isTrue(note.returnId() === 3, "should return the note ID");
})();
