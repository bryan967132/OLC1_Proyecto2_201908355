function analyze() {
    let code1 = editor.getValue()
    code1 = code1.replace(/\\/g,'\\\\')
    code1 = code1.replace(/\t/g,'    ')
    code1 = code1.replace(/\r?\n|\r/g,'\\n')
    code1 = code1.replace(/"/g,'\\"')
    fetch(`${path}/interpreter/parser`,{
        method: 'POST',
        headers,
        body: `{"code":"${code1}"}`
    })
    .then(response => response.json())
    .then(response => {
        out.setOption('value',response.console.join('\n'))
    })
}