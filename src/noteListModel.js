"use strict";

var NoteApp = function(){
  this.noteList = new Array;

};

NoteApp.prototype.storeNote = function(inputText){
  var note = new Note(inputText)
  this.noteList.push(note);
};

NoteApp.prototype.showAllNotes = function(){
  return this.noteList;
};
