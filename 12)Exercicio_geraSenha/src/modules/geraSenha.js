export default function geraSenha() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const password = createPassword(form);
        resultado.innerText = password;
    });
}

function createPassword(form) {
    const quantity = form.querySelector('.qnt-char').value;
    const number = form.querySelector('.number-char').checked;
    const upper = form.querySelector('.upper-char').checked;
    const lower = form.querySelector('.lower-char').checked;
    const symbol = form.querySelector('.symbol').checked;

    if (!(number || upper || lower || symbol)) {
        return "Todos campos vazios";
    }

    const nums = "0123456789";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!#$%&*+-:;<=>?@^_|¿×÷";
    const options = [];

    number ? options.push(nums) : null;
    upper ? options.push(letters) : null;
    lower ? options.push(letters.toLowerCase()) : null;
    symbol ? options.push(symbols) : null;

    const password = create(quantity, options);

    return password;
}


function create(quantity, options) {
    let password = [];

    for (let i = 0; i < quantity; i++) {
        password.push(chooseRandom(chooseRandom(options)));
    }

    return password.join('');
}

function chooseRandom(iterable) {
    const randomIndex = Math.floor(Math.random() * iterable.length);
    return iterable[randomIndex];
}
