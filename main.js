$(document).ready(function(){
  var preText = "";

  $("pre").each(function (){
    preText = $(this).text().trim();
    $(this).text("");
    var editor = CodeMirror(this, {value: preText, mode: "javascript", theme: "neo"});
    var totalLines = editor.lineCount();
    var totalChars = editor.getValue().length;
    editor.autoFormatRange({line:0, ch:0}, {line:totalLines, ch:totalChars});
  });
});

var Parent = function(name){
	this.name = name;
};

Parent.prototype.get_name = function(){
	return this.name;
};

var Child = function(name){
	this.name = name;
}

Child.inherit = function(parent){
	this.prototype = new parent();
	return this;
}

Child.inherit(Parent);

var c = new Child("Chintu");

console.log(c.get_name());

