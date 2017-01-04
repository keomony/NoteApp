"use strict";

(function(exports) {

  var NoteList = function(){
    this.notes = new Array;
  };

  NoteList.prototype.storeNote = function(inputText){
    var note = new Note(inputText)
    this.notes.push(note);
  };

  NoteList.prototype.showAllNotes = function(){
    return this.notes;
  };

  exports.NoteList = NoteList;

})(this);
