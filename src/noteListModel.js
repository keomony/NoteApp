"use strict";

(function(exports) {

  var NoteList = function(){
    this.notes = new Array;
    this.count = 0;
  };

  NoteList.prototype.storeNote = function(inputText){
    var note = new Note(inputText,this.count)
    this.notes.push(note);
    this.count ++;
  };

  NoteList.prototype.showAllNotes = function(){
    return this.notes;
  };

  exports.NoteList = NoteList

})(this);
