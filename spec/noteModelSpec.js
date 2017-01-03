"use strict";

function testStoreNote(){
  var inputNote = "Hi";
  var noteApp = new NoteApp();

  noteApp.storeNote(inputNote);
  assert.isTrue(noteApp.noteList[0] === inputNote);
};
testStoreNote();

function testShowNote(){
  var noteApp = new NoteApp();
  noteApp.storeNote("hi");
  noteApp.storeNote("hello");
  assert.isTrue(noteApp.showNote().includes("hello"));
};
testShowNote();
