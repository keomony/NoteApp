'use strict';

(function(exports) {

  var NoteController = function(noteList){
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.addNote = function(noteText) {
    this.noteList.storeNote(noteText);
  }

  NoteController.prototype.getHTML = function() {
    var element = document.getElementById("note");
    element.innerHTML = this.noteListView.viewHTML();
  }

exports.NoteController = NoteController;

})(this);
