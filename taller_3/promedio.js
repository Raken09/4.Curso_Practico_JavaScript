
function calcularMediaAritmetica(lista) {
    const suma = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );

    promedioLista = suma / lista.length;
    return promedioLista;
}