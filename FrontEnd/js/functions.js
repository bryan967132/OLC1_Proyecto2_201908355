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
let graphviz
function graphAST() {
    fetch(`${path}/interpreter/getAST`,{
        method: 'POST',
        headers,
        body: `{"code":"${getCode()}"}`
    })
    .then(response => response.json())
    .then(response => {
        console.log(response.ast)
        graphviz = d3.select('#report').graphviz().scale(0.8).height(document.getElementById('report').clientHeight).width(890*1.9).renderDot(response.ast)
    })
}
function getSymbolsTable() {
    fetch(`${path}/interpreter/getSymbolsTable`,{
        method: 'GET',
        headers
    })
    .then(response => response.json())
    .then(response => {
        graphviz = d3.select('#report').graphviz().scale(1).height(document.getElementById('report').clientHeight).width(890*1.9).renderDot(response.table)
    })
}
function getErrors() {
    fetch(`${path}/interpreter/getErrors`,{
        method: 'GET',
        headers
    })
    .then(response => response.json())
    .then(response => {
        graphviz = d3.select('#report').graphviz().scale(1).height(document.getElementById('report').clientHeight).width(890*1.9).renderDot(response.errors)
    })
}
function resetGraph() {
    graphviz.resetZoom(d3.transition().duration(500))
}
function getCode() {
    let code = editor.getValue()
    code = code.replace(/\\/g,'\\\\')
    code = code.replace(/\t/g,'    ')
    code = code.replace(/\r?\n|\r/g,'\\n')
    code = code.replace(/"/g,'\\"')
    return code
}