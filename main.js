function adicionarTarefa() {

    // Obtém o valor do campo de entrada 
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim(); // Remove espaços em branco no início e no final 

    let mensagem = document.getElementById("mensagem");

    // Verifica se o campo de entrada está vazio
    if (tarefa == "") {
        // Exibe uma mensagem de erro se o campo estiver vazio
        let mensagemErro = "Por favor, insira uma tarefa.";
        mensagem.textContent = mensagemErro;
    } else {
        // Exibe uma mensagem de sucesso ao adicionar a tarefa
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;

        // Cria um novo elemento de lista para a tarefa
        let listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement("li");

        // Adiciona a tarefa à lista
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);
    }

    // Limpa o campo de entrada após adicionar a tarefa
    inputTarefa.value = "";
}