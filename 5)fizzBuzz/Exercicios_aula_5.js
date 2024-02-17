// Exercicio 1

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

// refatorando...

const maxTwo = (x, y) => (x > y) ? x : y;

console.log(max(100, 20) === maxTwo(100, 20));


// Exercicio 2

const ePaisagem = (width, height) => width > height;

console.log(ePaisagem(1920, 1080));


// Exercicio 3

function fizzBuzz (num) {
    const number = Number(num);

    if (isNaN(number)) return num;

    const divisionByThree = number % 3 === 0; 
    const divisionByFive = number % 5 === 0;

    return (divisionByThree && divisionByFive && 'FizzBuzz') ||
     (divisionByThree && 'Fizz') || (divisionByFive && 'Buzz') || number;
}


for (let i = 0; i < 101; i++) {
    console.log(i, fizzBuzz(i));
}
