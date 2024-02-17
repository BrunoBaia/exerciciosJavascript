function listaTarefas() {
    const inputTarefa = document.querySelector('.input_tarefa');
    const buttonTarefa = document.querySelector('.button_tarefa');
    const tarefas = document.querySelector('.tarefas');

    function criaTarefa(textoInput) {
        const li = document.createElement('li');

        li.innerText = textoInput;
        criaBotaoApagar(li);
        tarefas.appendChild(li);
        limparInput();
        salvarTarefas();
    }

    function limparInput() {
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function criaBotaoApagar(li) {
        const botaoApagar = document.createElement('button');

        li.innerText += ' ';
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar');
        botaoApagar.setAttribute('title', 'apagar esta tarefa');
        li.appendChild(botaoApagar);
    }

    function salvarTarefas() {
        const todasTarefas = tarefas.querySelectorAll('li');
        const arrayTarefas = [];

        for (let tarefa of todasTarefas) {
            arrayTarefas.push(tarefa.innerText.replace(' Apagar', ''));
        }

        const stringJSON = JSON.stringify(arrayTarefas);

        localStorage.setItem('nome_para_salvar', stringJSON);
    }

    function addTarefasSalvas() {
        const stringJSON = localStorage.getItem('nome_para_salvar');
        const arrayTarefas = JSON.parse(stringJSON);

        for (let tarefa of arrayTarefas) {
            criaTarefa(tarefa);
        }
    }

    inputTarefa.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;

            criaTarefa(inputTarefa.value);
        }
    });

    buttonTarefa.addEventListener('click', (e) => {
        if (!inputTarefa.value) return;

        criaTarefa(inputTarefa.value);
    });

    tarefas.addEventListener('click', (e) => {
        const element = e.target;
        
        if (element.classList.contains('apagar')) {
            element.parentElement.remove();
            salvarTarefas();
        }
    });

    addTarefasSalvas();
}

listaTarefas();



// NOVIDADES

// 'localStorage.setItem('nome_para_salvar', stringJSON);' - salva navegador
// 'const stringJSON = localStorage.getItem('nome_para_salvar');' - retorna o que foi salvo com esse nome

// 'const stringJSON = JSON.stringify(arrayTarefas);' - converte objeto javascript para string no formato JSON
// 'const arrayTarefas = JSON.parse(stringJSON);' - converte string no formato JSON de volta para um objeto javascript
