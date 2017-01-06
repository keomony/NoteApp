(function(exports){

  var NoteController = function(noteList){
    this.noteList = noteList
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.convertToHTML = function(){
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.convert();
  };

  NoteController.prototype.renderSingleNoteHTML = function(){
    changeSingleNoteHTML(getSingleNoteHTML())
  }

  NoteController.prototype.findNoteURL = function(location){
    return location.hash.split("#notes/")[1]
  }

  NoteController.prototype.findNoteById = function(id){
    return this.noteList.list[parseInt(id)]
  }

  NoteController.prototype.getSingleNoteHTML = function() {
    return new SingleNoteView(this.findNoteById(this.findNoteURL(window.location))).convert()
  }

  NoteController.prototype.changeSingleNoteHTML = function(text){
    document.getElementById("app").innerHTML = text
  }

  exports.NoteController = NoteController;


})(this);
