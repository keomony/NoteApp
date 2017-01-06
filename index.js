var noteList = new NoteList();
var controller = new NoteController(noteList);
noteList.addNote("Hey there");

controller.convertToHTML();

document.getElementById("noteForm").addEventListener("submit", function(evt){
  evt.preventDefault();
  console.log(evt);

})
window.addEventListener("hashchange", function(){
  controller.renderSingleNoteHTML();
})
