const paragrafo = window.document.querySelectorAll('.container p');   // Nodelist(parecido com array)
const styleBody = window.getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;


for (let p of paragrafo) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}