"use strict";

var NoteListView = function(inputNoteList) {
  this.htmlTag = "";
  this.noteList = inputNoteList;

};

NoteListView.prototype.viewHTML = function() {

  this.htmlTag = "<ul>";
  for(var i = 0; i<this.noteList.notes.length; i++){
    this.htmlTag += "<li><div>"+this.noteList.notes[i].text+"</div></li>";
  }
  this.htmlTag += "</ul>";
  return this.htmlTag;
}
