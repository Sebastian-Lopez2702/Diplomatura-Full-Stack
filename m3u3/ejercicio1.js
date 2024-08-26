const distancia_ingresada = parseInt(prompt('Ingrese la distancia a recorrer:', ''));

if (distancia_ingresada > 100000) {
    document.write('avion');
} else if (distancia_ingresada <= 100000 && distancia_ingresada > 30000) {
    document.write('auto');
} else if (distancia_ingresada <= 30000 && distancia_ingresada > 10000) {
    document.write('colectivo');
} else if (distancia_ingresada <= 10000 && distancia_ingresada > 1000) {
    document.write('bicicleta');
} else if (distancia_ingresada <= 1000 && distancia_ingresada >= 0) {
    document.write('pie');
} else {
    document.write(`error: la entrada que ingreso ${distancia_ingresada} es menor a 0`);
}