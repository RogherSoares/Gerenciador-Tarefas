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
// Função para renderizar as tarefas na tela
function renderizarTarefas() {
    // Cria um novo elemento de lista para a tarefa e o adiciona à lista
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; // Limpa a lista antes de adicionar as tarefas novamente

    for(let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i]; // Define o texto do novo elemento de lista como a tarefa atual

        // Cria um botão para remover a tarefa
        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerTarefa(i); // Adiciona um evento de clique ao botão para remover a tarefa correspondente

        // Cria um botão para editar a tarefa
        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarTarefa(i); // Adiciona um evento de clique ao botão para editar a tarefa correspondente
        
        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar); 
        listaTarefas.appendChild(novaTarefa);
    }
}
// Função para remover uma tarefa
function removerTarefa (i) {
    tarefas.splice(i, 1); // Remove a tarefa do array de tarefas
    renderizarTarefas(); // Chama a função para renderizar as tarefas na tela novamente
}
// Função para editar uma tarefa
function editarTarefa(i) {
    let tarefaEditada = prompt("Digite a nova tarefa:"); // Exibe um prompt para o usuário inserir a nova tarefa
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada; // Atualiza a tarefa no array de tarefas
        renderizarTarefas(); // Chama a função para renderizar as tarefas na tela novamente
    }
}
function limparLista () {
    tarefas.length = 0; // Limpa o array de tarefas
    renderizarTarefas(); // Chama a função para renderizar as tarefas na tela novamente
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Lista limpa com sucesso!"; // Exibe uma mensagem de sucesso ao limpar a lista
}