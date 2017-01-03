"use strict";

(function testStoreNote(){
  var inputNote = "Hi";
  var noteList = new NoteList();

  noteList.storeNote(inputNote);
  assert.isTrue(noteList.notes[0].text === inputNote, "should store the note object");
})();

(function testShowAllNotes(){
  var noteList = new NoteList();
  noteList.storeNote("hi");
  noteList.storeNote("hello");
  var allNotes = noteList.showAllNotes();
  assert.isTrue(allNotes.length == 2, "should show all note objects");
  assert.isTrue(allNotes[0] instanceof Note, "should be an note object");
})();
