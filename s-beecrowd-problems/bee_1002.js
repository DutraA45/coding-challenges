/* Área do Círculo */

// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines.shift());
const pi = 3.14159;

const area = pi * A * A;

console.log("A=" + area.toFixed(4));



