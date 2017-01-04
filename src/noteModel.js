var Note = function(input, id){
  this.text = input;
  this.id = id;
};

Note.prototype.returnText = function(){
  return this.text;
}

Note.prototype.returnId = function(){
  return this.id;
}
