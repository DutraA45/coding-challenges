/* Salário */

// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());
const C = parseFloat(lines.shift());

const salario = B * C;

console.log(`NUMBER = ${A}\nSALARY = U$ ${salario.toFixed(2)}`);


