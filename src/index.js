"use strict";

var noteList = new NoteList();
var noteController = new NoteController(noteList);
noteController.addNote("Favourite drink: seltzer");
noteController.getHTML();
