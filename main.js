let tarefas = [];

function adicionarTarefa() {
    // Obtém o valor do campo de entrada 
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim(); // Remove espaços em branco no início e no final 

    const mensagem = document.getElementById("mensagem");

    // Verifica se o campo de entrada está vazio
    if (tarefa == "") {
        // Exibe uma mensagem de erro se o campo estiver vazio
        let mensagemErro = "Por favor, insira uma tarefa.";
        mensagem.textContent = mensagemErro;
    } else {
        // Exibe uma mensagem de sucesso ao adicionar a tarefa
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;

        tarefas.push(tarefa); // Adiciona a tarefa ao array de tarefas
        renderizarTarefas(); // Chama a função para renderizar as tarefas na tela
    }

    // Limpa o campo de entrada após adicionar a tarefa
    inputTarefa.value = "";
}
function renderizarTarefas() {
    // Cria um novo elemento de lista para a tarefa e o adiciona à lista
    const listaTarefas = document.getElementById("listaTarefas");

    for(let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);
    }
}