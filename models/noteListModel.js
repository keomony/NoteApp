(function(exportNoteListModel){

  var NoteList = function() {
    this.list = [];
  };

  NoteList.prototype.noteModels = function(){
    return this.list;
  };

  NoteList.prototype.addNote = function(text){
    this.list.push(new Note(text));
  };

  exportNoteListModel.NoteList = NoteList;

})(this);
