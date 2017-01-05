(function(windowArg){
  var singleNoteView = function(note){
    this.note = note;
  };

  singleNoteView.prototype.viewHTML = function(){
    var text = this.note.returnText();
    var html = "<div>"+text+"</div>";
    return html;
  };

  windowArg.SingleNoteView = singleNoteView;

})(this);
