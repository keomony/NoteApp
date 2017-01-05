"use strict";


(function testStoreNote(){
  var inputNote = "Hi";
  var noteList = new NoteList();
  noteList.storeNote(inputNote);
  assert.isTrue(noteList.notes[0].text === inputNote, "should store the note object");
})();

var noteList = new NoteList();
noteList.storeNote("hi");
noteList.storeNote("hello");
var allNotes = noteList.showAllNotes();

(function testShowAllNotes(){

  assert.isTrue(allNotes.length === 2, "should show all note objects");
  assert.isTrue(allNotes[0] instanceof Note, "should be an note object");
})();

(function testNoteIdInOrder() {

  assert.isTrue(allNotes[0].id === 0, "should give first note an id of 0");
  assert.isTrue(allNotes[1].id === 1, "should give second note an id of 1");

})();
