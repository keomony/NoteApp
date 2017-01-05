function noteControllerInstantiated(){
  var noteList = new NoteList();
  var controller = NoteController;
  controller.initialize(noteList);
  assert.isTrue(controller.hasOwnProperty('noteListView'));
}


function validateInnerHTML(){

  //mock up a new note list, that responds to addNote() method by doing nothing
  function noteListDouble() {}
  noteListDouble.prototype.addNote = function(){};

  //mock up a new note list view
  function noteListViewDouble(noteListDouble){}
  noteListViewDouble.prototype.convert = function(){
    return "<ul><div><li>Test Note</li></div></ul>";
  };

  //creating all the stuff we need
  var noteListDouble = new noteListDouble();
  var controller = NoteController;
  controller.initialize();

  //override line 5 in controller code
  controller.noteListView = new noteListViewDouble();
  controller.convertToHTML();

  assert.isTrue(document.getElementById("app").innerHTML === "<ul><div><li>Test Note</li></div></ul>");

}

function findIdOfNote(){
  var noteList = new NoteList();
  var controller = NoteController;
  controller.initialize(noteList);

  var testLocation = window.location
  testLocation.hash = "#notes/0"

  assert.isTrue(controller.findNoteURL(testLocation) === "0")
}

function testFindNoteById(){
  var noteList = new NoteList();
  noteList.addNote("Testing again")

  var controller = NoteController;
  controller.initialize(noteList);

  assert.isTrue(controller.findNoteById("0") === noteList.noteModels()[0])
}

function getSingleNoteHTML(){
  var noteList = new NoteList();
  noteList.addNote("Test suttin")

  var controller = NoteController;
  controller.initialize(noteList);

  assert.isTrue(controller.getSingleNoteHTML() === "<div>Test suttin</div>")
}

function testChangeSingleNoteHTML(){
  var noteList = new NoteList();
  noteList.addNote("Test what")

  var controller = NoteController;
  controller.initialize(noteList);

  controller.changeSingleNoteHTML("Testing changing single note HTML")

  assert.isTrue(document.getElementById("app").innerHTML === "Testing changing single note HTML")

}

noteControllerInstantiated();
validateInnerHTML();
findIdOfNote();
testFindNoteById();
getSingleNoteHTML();
testChangeSingleNoteHTML();
