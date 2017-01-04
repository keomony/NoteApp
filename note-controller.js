(function(exportNoteController){

  var NoteController = function(noteList){
    noteList.addNote("Instatiated Note");
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.convertToHTML = function(){
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.convert();
  };

  exportNoteController.NoteController = NoteController;

})(this);
