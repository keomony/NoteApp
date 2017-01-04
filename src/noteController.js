'use strict';

(function() {

  var noteList = new NoteList();
  var noteText = "Favourite drink: seltzer";
  noteList.storeNote(noteText);
  var noteListView = new NoteListView(noteList);

  var element = document.getElementById("note");
  element.innerHTML = noteListView.viewHTML();

})();
