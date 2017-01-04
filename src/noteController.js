'use strict';

(function(exports) {

  var NoteController = function(noteList){
    this.noteList = noteList;
    var noteText = "Favourite drink: seltzer";
    this.noteList.storeNote(noteText);
    this.noteListView = new NoteListView(this.noteList);
  }
  NoteController.prototype.getHTML = function() {
    var element = document.getElementById("note");
    element.innerHTML = this.noteListView.viewHTML();
  }

exports.NoteController = NoteController;

})(this);
