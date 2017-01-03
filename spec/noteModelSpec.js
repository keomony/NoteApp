"use strict";

function testNote(){
  var note = new Note("My favourite language is Ruby.");
  assert.isTrue(note.text === "My favourite language is Ruby.", "should take text from note on instantiation.");
};
testNote();

function testReturnNoteText(){
  var note = new Note("My favourite language is Ruby.");
  assert.isTrue(note.returnText()=== "My favourite language is Ruby.", "should return note text.");
}
testReturnNoteText();
