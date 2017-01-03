function testNoteIsCreated() {

  testNote = new Note("Hello");

  if (testNote.text !== "Hello") {
    throw new Error("Incorrect note created");
  }
}

testNoteIsCreated();
