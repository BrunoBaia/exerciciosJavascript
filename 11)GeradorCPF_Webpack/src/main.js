import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF.js';


const cpf = new GeraCPF();
const resultado = document.querySelector('.resultado');
for (let i = 0; i < 3; i++) {
    resultado.innerHTML += `${cpf.gera()}<br>`;
}
