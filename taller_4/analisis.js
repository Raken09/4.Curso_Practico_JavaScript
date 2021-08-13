// Helpers (Funciones que nos ayudan)
function esPar(numero) {
    return numero % 2 === 0; // Devolvemos true o false
};

function calcularMediaAritmetica(lista) {
    const suma = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    );
        
    promedioLista = suma / lista.length;
    return promedioLista;
}

// Calculadora de mediana 
function medianaSalariosCol(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};
// Mediana general
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort( // Ordenamos los datos de mayor a menor
    function (salarayA, SalaryB) {
        return salarayA - SalaryB;
    }
);
const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

// Mediana top 10% de salarios
//const salariosColTop10 = salariosColSorted.slice(0, parseInt(salariosColSorted.length * 0.1));

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalariosCol (salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);