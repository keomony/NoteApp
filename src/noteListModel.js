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

  NoteList.prototype.getNoteById = function(noteId){
    for(var i = 0; i<this.notes.length; i++){
      if(noteId == this.notes[i].returnId()){
        return this.notes[i];
        break;
      }
    }
  };

  exports.NoteList = NoteList

})(this);
