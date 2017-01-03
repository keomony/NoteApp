"use strict";

function testNote(){
  var note = new Note("My favourite language is Ruby.");
  assert.isTrue(note.text === "My favourite language is Ruby.");
};
testNote();
