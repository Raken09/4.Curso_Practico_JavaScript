function calcularMediana(lista) {
    lista = lista.sort((a, b) => a - b);
    function calcularMediaAritmetica(lista) {
        const suma = lista.reduce(
            function (valorAcomulado = 0, nuevoElemento) {
                return valorAcomulado + nuevoElemento;
            }
        );
            
        promedioLista = suma / lista.length;
        return promedioLista;
    }

    const mitadLista = parseInt(lista.length / 2); // "parseInt" nos ayuda a aproximar un valor flotante a un entero.

    function esPar(num) {
        if (num % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    let mediana = 0;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    }
    else{
        mediana = lista[mitadLista];
    }
    return mediana;
}