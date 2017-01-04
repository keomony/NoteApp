function noteControllerInstantiated(){
  var noteList = new NoteList()
  var controller = new NoteController(noteList)
  assert.isTrue(controller.hasOwnProperty('noteListView'));
}

noteControllerInstantiated();

function validateInnerHTML(){

  //mock up a new note list, that responds to addNote() method by doing nothing
  function noteListDouble() {};
  noteListDouble.prototype.addNote = function(){};

  //mock up a new note list view
  function noteListViewDouble(noteListDouble){};
  noteListViewDouble.prototype.convert = function(){
    return "<ul><div><li>Test Note</li></div></ul>"
  }


  //creating all the stuff we need
  var noteListDouble = new noteListDouble();
  var controller = new NoteController(noteListDouble);

  //override line 5 in controller code
  controller.noteListView = new noteListViewDouble();
  controller.convertToHTML()

  assert.isTrue(element.innerHTML === "<ul><div><li>Test Note</li></div></ul>")

}

validateInnerHTML();
