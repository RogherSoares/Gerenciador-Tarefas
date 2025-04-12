function adicionarTarefa() {
    //let mensagem = "Tarefa adicionada com sucesso!";

    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value;
    document.getElementById("mensagem").textContent = tarefa;

    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");

    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = ""; // Limpa o campo de entrada após adicionar a tarefa
}