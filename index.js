var noteList = new NoteList();
var controller = new NoteController(noteList);
noteList.addNote("Hey there");

controller.convertToHTML();

window.addEventListener("hashchange", function(){
  controller.renderSingleNoteHTML();
})
