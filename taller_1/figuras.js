// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  perimetro = lado1 + lado2 + base;
  return perimetro;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function circunferenciaCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

console.group("Triángulo isóceles");

function alturaTrianguloIsoceles(lado1, base) {
  const mitad = base / 2;
  const altura = Math.sqrt((Math.pow(lado1,2))-(Math.pow(mitad,2)));
  return altura;
}


// Aquí interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("lado_a");
  const value1 = Number(input1.value);

  const input2 = document.getElementById("lado_b");
  const value2 = Number(input2.value);

  const input3 = document.getElementById("base");
  const value3 = Number(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("base");
  const value1 = Number(input1.value);

  const input2 = document.getElementById("altura");
  const value2 = Number(input2.value);

  const area = areaTriangulo(value1, value2);
  alert(area);
}

function calcularAlturaTrianguloIsoceles() {
  const input1 = document.getElementById("lado_A");
  const value1 = Number(input1.value);

  const input3 = document.getElementById("base_iso");
  const value3 = Number(input3.value);

  const altura = alturaTrianguloIsoceles(value1, value3);
  alert(altura);
}

// Circulo 
function calcularDiametroCirculo() {
  const input = document.getElementById("radio");
  const value = Number(input.value);

  const diametro = diametroCirculo(value);
  alert(diametro);
}

function calcularCircunferenciaCirculo() {
  const input = document.getElementById("radio");
  const value = Number(input.value);

  const perimetro = circunferenciaCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("radio");
  const value = Number(input.value);

  const area = areaCirculo(value);
  alert(area);
}