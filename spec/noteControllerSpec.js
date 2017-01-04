"use strict";

(function testNoteControllerInstantiation() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue( noteController instanceof NoteController, "should be an note controller object");
})()
