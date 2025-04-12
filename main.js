function adicionarTarefa() {
    // Exibe uma mensagem de sucesso ao adicionar a tarefa
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagemSucesso;

    // Obtém o valor do campo de entrada 
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value;

    // Cria um novo elemento de lista para a tarefa
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");

    // Verifica se o campo de entrada está vazio
    if(tarefa == "") {
        // Exibe uma mensagem de erro se o campo estiver vazio
        let mensagemErro = "Por favor, insira uma tarefa.";
        document.getElementById("mensagem").textContent = mensagemErro;
    }
    
    // Adiciona a tarefa à lista
    novaTarefa.textContent = tarefa; 

    listaTarefas.appendChild(novaTarefa);

    // Limpa o campo de entrada após adicionar a tarefa
    inputTarefa.value = ""; 
}