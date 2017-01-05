"use strict";
var note = new Note("My favourite language is Ruby.", 3);

(function testNote(){
  assert.isTrue(note.text === "My favourite language is Ruby.", "should take text from note on instantiation.");
})();

(function testReturnNoteText(){
  assert.isTrue(note.returnText()=== "My favourite language is Ruby.", "should return note text.");
})();

(function testReturnId(){
  assert.isTrue(note.returnId() === 3, "should return the note ID");
})();
