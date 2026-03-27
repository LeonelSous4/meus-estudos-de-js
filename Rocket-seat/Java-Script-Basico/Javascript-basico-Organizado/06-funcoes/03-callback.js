// CALLBACK
// Uma função passada como argumento para outra função.

function execute(task, callback) {
  console.log("Executando a tarefa:", task);
  callback();
}

function finished() {
  console.log("Callback executado.");
}

execute("download do arquivo", finished);
