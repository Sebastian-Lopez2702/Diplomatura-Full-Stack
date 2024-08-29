const array_alumnos = [
    {

        nombre: 'Juan Gomez',

        nota: 7

    }, {

        nombre: 'Pedro Rodriguez',

        nota: 4

    }, {

        nombre: 'Roxana García',

        nota: 8

    }, {

        nombre: 'Luciano Lopez',

        nota: 5

    }, {

        nombre: 'Fernanda Gimenez',

        nota: 6

    }, {

        nombre: 'Florencia Martinez',

        nota: 10

    }, {

        nombre: 'Raul Sanchez',

        nota: 7

    }, {

        nombre: 'Sandra Figueroa',

        nota: 8

    }
];

document.addEventListener('DOMContentLoaded', () => {
    const div_texto = document.getElementById('texto');

    const resultados = array_alumnos.filter(({ nota }) => nota >= 7);
    const resultadosJson = resultados.map(alumno => JSON.stringify(alumno));

    div_texto.textContent = `${resultadosJson}`;
    console.log(resultados);
});