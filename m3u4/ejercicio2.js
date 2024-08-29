document.addEventListener('DOMContentLoaded', () => {
    const text_area = document.getElementById('texto-introducido');
    const contador = document.getElementById('contador');

    text_area.addEventListener('input', () => {
        const numero_caracteres = text_area.value.length;
        contador.textContent = `Contador: ${numero_caracteres}`;
    });
});