// uma função passada para outra função como argumento

function execute(tarefa, callback) {
    console.log("execultando a tarefa", tarefa)

    callback()
}


function callback() {
    console.log("callback executado")
}

execute("downoload do arquivo...", callback) 