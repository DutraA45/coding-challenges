/* Salário com Bônus */

// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = lines.shift();
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());

const salario = B + (0.15 * C);

console.log(`TOTAL = R$ ${salario.toFixed(2)}`);


