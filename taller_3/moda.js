function calcularModa (lista) {
    const listaCount = {};

    lista.map(
        function(elemento) { // Cuenta cuantas veces aparace cada elemento.
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (valorAcomulado, nuevoValor) {
            return valorAcomulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    return moda;
};