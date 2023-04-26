var editor = CodeMirror(document.getElementById("editor"), {
    mode: "text/x-java",
    lineNumbers: true,
    styleActiveLine: true,
    indentUnit: 4,
    autoCloseBrackets: true,
    matchBrackets: true,
    caseFold: true,
    theme: "darcula"
});

editor.setSize(null, window.innerHeight - document.getElementById("editor").offsetTop - 16);
	window.addEventListener("resize", function() {
	editor.setSize(null, window.innerHeight - document.getElementById("editor").offsetTop - 16);
});

var out = CodeMirror(document.getElementById("console"), {
    mode: "text",
    lineNumbers: true,
    styleActiveLine: false,
    readOnly: true,
    cursorHeight: 0,
    lineWrapping: false,
    theme: "darcula"
});

out.setSize(null, window.innerHeight - document.getElementById("editor").offsetTop - 16);
	window.addEventListener("resize", function() {
	out.setSize(null, window.innerHeight - document.getElementById("editor").offsetTop - 16);
});