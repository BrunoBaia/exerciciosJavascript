class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpf', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpf
        });
    }

    validar() {
        if (typeof this.cpf !== 'string') return false;

        const cpfLimpo = this.limpar();

        if (cpfLimpo.length != 11) return false;
        if (new Set(cpfLimpo).size === 1) return false;

        const primeiroDigito = ValidaCPF.testarDigito(cpfLimpo.slice(0, -2));
        const segundoDigito = ValidaCPF.testarDigito(cpfLimpo.slice(0, -1));
        const resultado = this.cpf.slice(0, -2) + primeiroDigito + segundoDigito;

        return (this.cpf === resultado) ? true : false;
    }

    limpar() {
        let cpfLimpo = this.cpf.replace(/\D+/g, '');
        cpfLimpo = Array.from(cpfLimpo);
        return cpfLimpo;
    }

    static testarDigito(cpfParcial) {
        let multiplicador = cpfParcial.length + 1;

        let resultado = cpfParcial.reduce(function (acumulador, valor) {
            acumulador += Number(valor) * multiplicador;
            multiplicador--;
            return acumulador;
        }, 0);

        resultado = 11 - (resultado % 11);
        return (resultado > 9) ? '0' : String(resultado);
    }
}



const cpf1 = new ValidaCPF('705.484.450-52');
const cpf2 = new ValidaCPF('070.987.720-03');
const cpf3 = new ValidaCPF('070.987.721-03');
const cpf4 = new ValidaCPF('111.111.111-11');
cpf1.validar() ? console.log(`O cpf ${cpf1.cpf} e VALIDO`) : console.log(`o cpf ${cpf1.cpf} e INVALIDO`);
cpf2.validar() ? console.log(`O cpf ${cpf2.cpf} e VALIDO`) : console.log(`o cpf ${cpf2.cpf} e INVALIDO`);
cpf3.validar() ? console.log(`O cpf ${cpf3.cpf} e VALIDO`) : console.log(`o cpf ${cpf3.cpf} e INVALIDO`);
cpf4.validar() ? console.log(`O cpf ${cpf4.cpf} e VALIDO`) : console.log(`o cpf ${cpf4.cpf} e INVALIDO`);
