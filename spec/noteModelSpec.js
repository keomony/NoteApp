function testNoteIsCreated() {

  if (notes("Hello") !== "Hello") {
    throw new Error("No note was created")
  };
};

testNoteIsCreated();
