noteList = new NoteList()
controller = new NoteController(noteList)
noteList.addNote("Hey there")

controller.convertToHTML();
// controller.showSingleNoteHTML();

function showSingleNoteHTML(){
  window.addEventListener("hashchange", function(){
    controller.renderSingleNoteHTML();
  })
}
