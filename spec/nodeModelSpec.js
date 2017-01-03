"use strict";

function testStoreNote(){
  var inputNote = "Hi";
  var noteApp = new NoteApp();
  noteApp.storeNote(inputNote);


  if(noteApp.noteList[0] !== inputNote ){
    throw new Error("Should have "+inputNote+" in your note.");
  }
};
