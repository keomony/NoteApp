"use strict";

(function testNoteControllerInstantiation() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue( noteController instanceof NoteController, "should be an note controller object");
})();

(function testAppElementContainsListHTML() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addNote("Favourite food: pesto");
  noteController.getHTML();
  var mockElement = document.getElementById("app");
  assert.isTrue( mockElement.innerHTML.includes("<ul><li><div>Favourite food: pest...</div></li></ul>"), "should include html list" );
})();
