function noteListModelSpec() {
  list = new NoteList();

  assert.isTrue(Array.isArray(list.noteModels()));

  list.addNote("My first note!");
  assert.isTrue(list.noteModels()[0].view() === "My first note!");
}

noteListModelSpec();
