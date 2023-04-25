var editor = CodeMirror(document.getElementById("editor"), {
    mode: "text/x-java",
    lineNumbers: true,
    styleActiveLine: true,
    indentUnit: 4,
    theme: "darcula"
});

editor.setSize(null, window.innerHeight - document.getElementById("editor").offsetTop - 16);
	window.addEventListener("resize", function() {
	editor.setSize(null, window.innerHeight - document.getElementById("editor").offsetTop - 16);
});

var console = CodeMirror(document.getElementById("console"), {
    mode: "text/x-java",
    lineNumbers: true,
    styleActiveLine: false,
    readOnly: true,
    theme: "darcula"
});

console.setSize(null, window.innerHeight - document.getElementById("editor").offsetTop - 16);
	window.addEventListener("resize", function() {
	console.setSize(null, window.innerHeight - document.getElementById("editor").offsetTop - 16);
});