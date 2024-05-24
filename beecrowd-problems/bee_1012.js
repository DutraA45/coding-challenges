/* Área */

// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = lines.shift().split(' ').map(value => parseFloat(value)); // Converter para números
const pi = 3.14159;


const areaTriangulo = (A * C)/2
const areaCirculo = pi * (C ** 2);
const areaTrapezio = ((A + B) * C) / 2;
const areaQuadrado = B ** 2;
const areaRetangulo = A * B;


console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));