import ValidaCPF from './ValidaCPF.js';


export default class GeraCPF {
    gera() {
        const cpf = [];

        for (let num = 0; num <= 8; num++) {
            cpf.push(GeraCPF.geraRandomInt(10));
        }

        cpf.push(ValidaCPF.testarDigito(cpf));
        cpf.push(ValidaCPF.testarDigito(cpf));

        if (GeraCPF.testCPF(cpf)) {
            return GeraCPF.toString(cpf);
        }

        return 'Ocorreu um erro';
    }

    static geraRandomInt(maxExcluded) {
        return String(Math.floor(Math.random() * maxExcluded));
    }

    static testCPF(cpf) {
        const validacao = new ValidaCPF(cpf.join(''));
        return validacao.validar();
    }

    static toString(cpf) {
        return cpf.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
}
