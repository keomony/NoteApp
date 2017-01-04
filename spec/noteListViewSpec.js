"use strict";

(function testNoteListView(){
  var noteList = new NoteList();
  noteList.storeNote("Shopping list: Amok, Milk, Eggs, Bread");
  noteList.storeNote("Favourite food: Green Fish Curry");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.viewHTML().includes("<ul><li><div>Shopping list: Amok,...</div></li><li><div>Favourite food: Gree...</div></li></ul>"),
  "should return a string of HTML that represents the note list model");
})();

(function testEmptyNoteListView(){
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.viewHTML().includes("<ul></ul>"),
  "should return a string of HTML that represents the empty note list model");
})();
