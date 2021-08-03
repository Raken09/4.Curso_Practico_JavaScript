// Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");
console.groupEnd();

// Triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm y la base mide " 
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Circulo
console.group("Círculos");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = PI * (radioCirculo * radioCirculo);

console.log("El radio del circulo es :" + radioCirculo + "cm");
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
console.log("El área del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();
