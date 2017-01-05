"use strict";
var noteList = new NoteList();
var noteController = new NoteController(noteList);

(function testNoteControllerInstantiation() {

  assert.isTrue( noteController instanceof NoteController, "should be an note controller object");
})();

(function testAppElementContainsListHTML() {
  
  noteController.addNote("Favourite food: pesto");
  noteController.getHTML();
  var mockElement = document.getElementById("app");
  assert.isTrue( mockElement.innerHTML.includes("<ul><li><a href=\"#0\">Favourite food: pest...</a></li></ul>"), "should include html list" );
})();
