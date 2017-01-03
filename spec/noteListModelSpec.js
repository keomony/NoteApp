function testListOfNotes() {

  testList = new List();
  testNote = new Note("Hello");

  testList.add(testNote.text);
  if(testList.view()[0].text !== "Hello") {
    throw new Error('The note was not accessible in the list');
  }

}

testListOfNotes();
