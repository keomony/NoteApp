(function(exportNoteModel) {

  var Note = function(text){
    this.text = text;
  };

  Note.prototype.view = function(){
    return this.text;
  };

  exportNoteModel.Note = Note;

})(this);
