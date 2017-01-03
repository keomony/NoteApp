"use strict";

var NoteApp = function(){
  this.noteList = new Array;
};

NoteApp.prototype.storeNote = function(inputNote){
  this.noteList.push(inputNote);

};
