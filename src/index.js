"use strict";

var noteList = new NoteList();
var noteController = new NoteController(noteList);
noteController.addNote("Favourite drink: seltzer");
noteController.addNote("Shopping list: Amok, Milk, Eggs, Bread");
noteController.addNote("Favourite food: Green Fish Curry");
noteController.getHTML();

makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};

function showNote(noteId) {
  var note = noteList.getNoteById(noteId);
  var singleNoteView = new SingleNoteView(note);
  document
    .getElementById("viewNote")
    .innerHTML = singleNoteView.viewHTML();
};
