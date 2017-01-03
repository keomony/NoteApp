function noteListInstatiatedWithArray() {
  list = new NoteList();

  assert.isTrue(Array.isArray(list.noteModels()));
}

function noteListCanAddNotesToArray() {
  list = new NoteList();
  list.addNote("My first note!");

  assert.isTrue(list.noteModels()[0].view() === "My first note!");
}

noteListInstatiatedWithArray();
noteListCanAddNotesToArray();
