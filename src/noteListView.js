"use strict";

var NoteListView = function(inputNoteList) {
  this.htmlTag = "";
  this.noteList = inputNoteList;

};

NoteListView.prototype.viewHTML = function() {

  this.htmlTag = "<ul>";
  for(var i = 0; i<this.noteList.notes.length; i++){
    var text = this.noteList.notes[i].returnText();
    var shortText = "";
    if (text.length > 20) {
      shortText = text.substring(0,20) + "...";
    } else {
      shortText = text;
    }
    this.htmlTag += "<li><a href='#"+this.noteList.notes[i].returnId()+"'>"+shortText+"</a></li>";
  }
  this.htmlTag += "</ul>";
  return this.htmlTag;
};
