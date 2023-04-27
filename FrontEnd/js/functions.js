function analyze() {
    fetch(`${path}/interpreter/parser`,{
        method: 'POST',
        headers,
        body: `{"code":"${getCode()}"}`
    })
    .then(response => response.json())
    .then(response => {
        out.setOption('value',response.console.join('\n'))
    })
}
function graphAST() {
    fetch(`${path}/interpreter/parserAST`,{
        method: 'POST',
        headers,
        body: `{"code":"${getCode()}"}`
    })
    .then(response => response.json())
    .then(response => {
        d3.select('#graphAST').graphviz().scale(0.8).height(document.getElementById('graphAST').clientHeight).width(890*1.9).renderDot(response.console)
    })
}
function getCode() {
    let code = editor.getValue()
    code = code.replace(/\\/g,'\\\\')
    code = code.replace(/\t/g,'    ')
    code = code.replace(/\r?\n|\r/g,'\\n')
    code = code.replace(/"/g,'\\"')
    return code
}