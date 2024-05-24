/* Esfera */

// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const raio = lines.shift();
const pi = 3.14159

const total = (4 * pi * raio * raio * raio)/3

console.log("VOLUME = " + total.toFixed(3));