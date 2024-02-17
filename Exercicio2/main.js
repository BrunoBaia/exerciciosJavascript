const resultado = document.querySelector('.resultado');
const data = new Date();

resultado.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});