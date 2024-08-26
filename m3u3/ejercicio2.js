const array_ingresado = prompt('Ingrese un conjunto de numeros separados por coma para saber cual es el mayor:').split(',').map(Number);

let mayor_numero_encontrado = -Infinity;

for (let index = 0; index < array_ingresado.length; index++) {
    if (array_ingresado[index] > mayor_numero_encontrado) {
        mayor_numero_encontrado = array_ingresado[index]
    }
}

document.write(`El valor mas alto encontrado en el array es ${mayor_numero_encontrado}`)