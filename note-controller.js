(function(exportNoteController){

  var NoteController = function(noteList){
    noteList.addNote("Instatiated Note");
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.convertToHTML = function(){
    element = document.getElementById("app");
    element.innerHTML = this.noteListView.convert();
  };

  exportNoteController.NoteController = NoteController;

})(this);
