"use strict";

(function testStoreNote(){
  var inputNote = "Hi";
  var noteApp = new NoteApp();

  noteApp.storeNote(inputNote);
  assert.isTrue(noteApp.noteList[0].text === inputNote, "should store the note object");
})();

(function testShowAllNotes(){
  var noteApp = new NoteApp();
  noteApp.storeNote("hi");
  noteApp.storeNote("hello");
  var allNotes = noteApp.showAllNotes();
  assert.isTrue(allNotes.length == 2, "should show all note objects");
  assert.isTrue(allNotes[0] instanceof Note, "should be an note object");
})();
