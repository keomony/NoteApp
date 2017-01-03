function UnorderedListofNotesCreated(){

  list = new List();
  listView = new ListView();

  list.add("note1");
  list.add("note2");

  debugger;

  if(listView.convert(list) !== "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>") {
    throw new Error("Bad list view")
  }
};

UnorderedListofNotesCreated()
