function relogio() {

    const relogio = document.querySelector('.relogio');

    let seconds = 0;
    let timer;

    function createHourFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    document.addEventListener('click', (e) => {
        const elemento = e.target;

        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            timer = setInterval(function () {
                seconds++;
                relogio.innerText = createHourFromSeconds(seconds);
            }, 1000);
        } else if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        } else if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            seconds = 0;
            relogio.innerText = createHourFromSeconds(seconds)
        }
    });
}

relogio();
