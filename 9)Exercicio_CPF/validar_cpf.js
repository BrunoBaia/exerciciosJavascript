function main() {
    const CPFs = ['705.484.450-52', '070.987.720-03', '111.111.111-11'];

    for (let cpf of CPFs) {
        console.log(`O cpf '${cpf}' é ${validatorCPF(cpf) ? 'valido' : 'invalido'}`);
    }
}

function validatorCPF(cpf) {
    if (!cpf) return false;

    const arrayCPF = stringToArray(cpf);

    if (arrayCPF.length !== 11) return false;
    if (new Set(arrayCPF).size === 1) return false;

    const testFirstDigit = getDigit(arrayCPF.slice(0, -2)) === Number(arrayCPF[arrayCPF.length - 2]);
    const testSecondDigit = getDigit(arrayCPF.slice(0, -1)) === Number(arrayCPF[arrayCPF.length - 1]);

    return testFirstDigit && testSecondDigit;
}

function stringToArray(cpf) {
    let arrayCPF = cpf.replace(/\D+/g, '');
    arrayCPF = Array.from(arrayCPF);
    return arrayCPF;
}

function getDigit(partialCPF) {
    let multiplier = partialCPF.length + 1;
    let result;

    const digit = partialCPF.reduce(function (accumulator, value) {
        accumulator += Number(value) * multiplier;
        multiplier--;
        return accumulator;
    }, 0);

    result = 11 - (digit % 11);

    return (result > 9) ? 0 : result;
}


main();
