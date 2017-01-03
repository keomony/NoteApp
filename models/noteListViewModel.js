(function(exportNoteListView){

  var NoteListView = function(noteList){
    this.noteList = noteList;
  };

  NoteListView.prototype.convert = function(){
    var output = this.noteList.noteModels().map(function(note){
      return "<div><li>" + note.view() + "</li></div>";
    });
    return "<ul>" + output.join('') + "</ul>";
  };

  exportNoteListView.NoteListView = NoteListView;

})(this);
