(function(listViewExport){

  var ListView = function(){

  };


  ListView.prototype.convert = function(list){
    var listArray = list.view().map(function(note){
      return "<li><div>" + note.text + "</div></li>"
    })
    return "<ul>" + listArray.join('') + "</ul>"
  };


  listViewExport.ListView = ListView;

})(this)
