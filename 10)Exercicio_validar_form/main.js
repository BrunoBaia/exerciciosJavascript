class ValidarFormulario {
    constructor() {
        this.form = document.querySelector('.form');
        this.iniciar();
    }

    iniciar() {
        const nome = this.form.querySelector('.nome');
        const sobrenome = this.form.querySelector('.sobrenome');
        const cpf = this.form.querySelector('.cpf');
        const usuario = this.form.querySelector('.usuario');
        const senhas = this.form.querySelectorAll('.senha');

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            const resultNome = this.verificarCampoVazio(nome);
            const resultSobrenome = this.verificarCampoVazio(sobrenome);
            const resultCPF = this.validarCPF(cpf);
            const resultUsuario = this.validarUsuario(usuario);
            const resultSenha = this.validarSenha(senhas);

            if (!resultNome && !resultSobrenome && resultCPF && resultUsuario && resultSenha) {
                this.form.classList.add('complete');
                this.form.submit();
                return;
            }
            this.form.classList.remove('complete');
        });
    }

    validarCPF(elemento) {
        if (this.verificarCampoVazio(elemento)) return false;

        const cpf = new ValidaCPF(elemento.value);

        if (!cpf.validar()) {
            elemento.parentNode.classList.add('invalidCPF');
            return false;
        }

        elemento.parentNode.classList.remove('invalidCPF');
        return true;
    }

    validarUsuario(elemento) {
        if (this.verificarCampoVazio(elemento)) return false;

        const valor = elemento.value;
        const validarDigitos = /^[a-zA-Z0-9]+$/.test(valor);

        if (!validarDigitos) {
            elemento.parentNode.classList.add('username');
            return false;
        }

        if (valor.length < 3 || valor.length > 12) {
            elemento.parentNode.classList.add('usersize');
            return false;
        }

        elemento.parentNode.classList.remove('username', 'usersize');
        return true;
    }

    validarSenha(elementos) {
        const senhaVazia = this.verificarCampoVazio(elementos[0]);
        const comfirmaSenhaVazia = this.verificarCampoVazio(elementos[1]);

        if (senhaVazia || comfirmaSenhaVazia) return false;

        const senhaTamanho = this.verificarTamanho(elementos[0]);
        const confirmaSenhaTamanho = this.verificarTamanho(elementos[1]);

        if (senhaTamanho || confirmaSenhaTamanho) return false;

        if (elementos[0].value !== elementos[1].value) {
            elementos[0].parentNode.classList.add('wrongpassword');
            elementos[1].parentNode.classList.add('wrongpassword');
            return false;
        }

        elementos[0].parentNode.classList.remove('wrongpassword');
        elementos[1].parentNode.classList.remove('wrongpassword');
        return true;
    }

    verificarCampoVazio(elemento) {
        if (!elemento.value) {
            elemento.parentNode.classList.add('empty');
            return true;
        }

        elemento.parentNode.classList.remove('empty');
        return false;
    }

    verificarTamanho(elemento) {
        if (elemento.value.length < 6 || elemento.value.length > 12) {
            elemento.parentNode.classList.add('passwordsize');
            return true;
        }

        elemento.parentNode.classList.remove('passwordsize');
        return false;
    }
}


const usuario = new ValidarFormulario();


// elemento.insertAdjacentElement('afterend', div);
// elemento.previousElementSibling.innerText;