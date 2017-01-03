"use strict";

function testStoreNote(){
  var inputNote = "Hi";
  var noteApp = new NoteApp();

  noteApp.storeNote(inputNote);
  assert.isTrue(noteApp.noteList[0] === inputNote);
};
