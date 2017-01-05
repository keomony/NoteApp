(function(exports){
  var SingleNoteView = function(note){
    this.note = note;
  };

  SingleNoteView.prototype.viewHTML = function(){
    var text = this.note.returnText();
    var html = "<div>"+text+"</div>";
    return html;
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
