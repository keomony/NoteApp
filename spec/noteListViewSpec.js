"use strict";

(function testNoteListView(){
  var noteList = new NoteList();
  noteList.storeNote("Favourite food: Amok");
  noteList.storeNote("Favourite food: Green Fish Curry");
  var noteListView = new NoteListView(noteList);
  console.log(noteListView.viewHTML());
  assert.isTrue(noteListView.viewHTML().includes("<li><div>Favourite food: Amok</div></li>"), "should return a string of HTML that represents the note list model");

})();
