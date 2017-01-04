(function(exportNoteController){

  var NoteController = function(noteList){
    this.noteList = noteList
    this.noteList.addNote("Instatiated Note");
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.convertToHTML = function(){
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.convert();
  }

  this.showSingleNoteHTML();

  NoteController.prototype.showSingleNoteHTML = function(){
    window.addEventListener("hashchange", renderSingleNoteHTML)
  }

  NoteController.prototype.renderSingleNoteHTML = function(){
    this.changeSingleNoteHTML(this.getSingleNoteHTML())
  }

  NoteController.prototype.findNoteURL = function(location){
    return location.hash.split("#notes/")[1]
  }

  NoteController.prototype.findNoteById = function(id){
    return this.noteList.noteModels()[parseInt(id)]
  }

  NoteController.prototype.getSingleNoteHTML = function(){
    return new SingleNoteView(this.findNoteById(this.findNoteURL(window.location))).convert()
  }

  NoteController.prototype.changeSingleNoteHTML = function(text){
    document.getElementById("app").innerHTML = text
  }

  // function showSingleNoteHTML(){
  //   window.addEventListener("hashchange", renderSingleNoteHTML)
  // }
  //
  // function renderSingleNoteHTML(){
  //   changeSingleNoteHTML(getSingleNoteHTML())
  // }
  //
  // function findNoteURL(location){
  //   return location.hash.split("#notes/")[1]
  // }
  //
  // function findNoteById(id){
  //   return this.noteList.list[parseInt(id)]
  // }
  //
  // function getSingleNoteHTML() {
  //   return new SingleNoteView(findNoteById(findNoteURL(window.location))).convert()
  // }
  //
  // function changeSingleNoteHTML(text){
  //   document.getElementById("app").innerHTML = text
  // }



  exportNoteController.NoteController = NoteController;

})(this);
