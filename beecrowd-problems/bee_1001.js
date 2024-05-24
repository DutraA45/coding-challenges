// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift());
const B = parseInt(lines.shift());

const soma = A + B;

console.log("X = " + soma);