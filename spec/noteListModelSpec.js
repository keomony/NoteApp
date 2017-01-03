"use strict";

function testStoreNote(){
  var inputNote = "Hi";
  var noteApp = new NoteApp();

  noteApp.storeNote(inputNote);
  assert.isTrue(noteApp.noteList[0].text === inputNote);
};
testStoreNote();

function testShowAllNotes(){
  var noteApp = new NoteApp();
  noteApp.storeNote("hi");
  noteApp.storeNote("hello");
  var notes = noteApp.showAllNotes();
  var notesText = [];
  for(var i=0; i<notes.length; i++){
    notesText.push(notes[i].text);
  }
  assert.isTrue(notesText.includes("hello"));
};
testShowAllNotes();
