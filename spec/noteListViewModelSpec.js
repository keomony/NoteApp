function viewEmptyNoteList() {

  noteList = new NoteList();
  listView = new NoteListView(noteList);

  assert.isTrue(listView.hasOwnProperty('noteList'));
}

function viewSingularNoteList(){

  noteList = new NoteList();
  noteList.addNote("This is a fine note!");
  listView = new NoteListView(noteList);

  assert.isTrue(listView.convert() === "<ul><div><li>This is a fine note!</li></div></ul>");
}

function viewMultipleNoteList(){

  noteList = new NoteList();
  noteList.addNote("This is one fine note!");
  noteList.addNote("This is another fine note!");
  listView = new NoteListView(noteList);

  assert.isTrue(listView.convert() === "<ul><div><li>This is one fine not</li></div><div><li>This is another fine</li></div></ul>");
}

function twentyCharStrings(){

  noteList = new NoteList();
  noteList.addNote("Something with more than twenty characters");
  listView = new NoteListView(noteList);


  assert.isTrue(listView.convert() === "<ul><div><li>Something with more </li></div></ul>")
}

viewEmptyNoteList();
viewSingularNoteList();
viewMultipleNoteList();
twentyCharStrings();
