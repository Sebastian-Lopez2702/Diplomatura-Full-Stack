document.addEventListener('DOMContentLoaded', () => {
    const primera_caja = document.getElementsByClassName('primero')[0];
    const segunda_caja = document.getElementsByClassName('segundo')[0];
    const tercera_caja = document.getElementsByClassName('tercero')[0];

    primera_caja.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'red') {
            document.body.style.backgroundColor = 'red';
        } else {
            document.body.style.backgroundColor = 'red';
        }
    });

    segunda_caja.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'blue') {
            document.body.style.backgroundColor = 'blue';
        } else {
            document.body.style.backgroundColor = 'blue';
        }
    });

    tercera_caja.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'yellow') {
            document.body.style.backgroundColor = 'yellow';
        } else {
            document.body.style.backgroundColor = 'yellow';
        }
    });
});