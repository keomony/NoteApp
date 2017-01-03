(function(exportList){

  var List = function() {
      this.list = [];
  };

  List.prototype.add = function(text) {
    note = new Note(text)
    return this.list.push(note);
  };

  List.prototype.view = function() {
    return this.list;
  };

  exportList.List = List;
}) (this);
