export default class ValidaCPF {
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

        return (this.cpf === resultado)
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
