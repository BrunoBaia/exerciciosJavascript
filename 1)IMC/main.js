function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventForm(evento) {
        evento.preventDefault();

        const peso = Number(form.querySelector('.peso').value);
        const altura = Number(form.querySelector('.altura').value);

        
        if (isNaN(peso) || peso < 2 || peso > 800) {
            resultado.innerHTML = `<p style="background: red;">O peso '${peso}' é invalido.</p>`;
            return;
        }
        if (isNaN(altura) || altura < 0.5 || altura > 3) {
            resultado.innerHTML = `<p style="background: red;">A altura '${altura}' é invalida.</p>`;
            return;
        }

        const valorImc = (peso / altura ** 2).toFixed(2);
        let resultadoImc;
        
        if (valorImc < 18.5) {
        resultadoImc = 'Abaixo do peso';
        } else if (valorImc >= 18.5 && valorImc < 25) {
        resultadoImc = 'Peso normal';
        } else if (valorImc >= 25 && valorImc < 30) {
        resultadoImc = 'Sobrepeso';
        } else if (valorImc >= 30 && valorImc < 35) {
        resultadoImc = 'Obesidade grau 1';
        } else if (valorImc >= 35 && valorImc < 40) {
        resultadoImc = 'Obesidade grau 2';
        } else {
        resultadoImc = 'Obesidade grau 3';
        }

        resultado.innerHTML = `<p class='classe1'>Seu IMC é ${valorImc} (${resultadoImc})</p>`;
    }

    form.addEventListener('submit', recebeEventForm);
}


meuEscopo();
