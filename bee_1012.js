/* Cálculo Simples */

// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = lines.shift().split(' ');

const total = (A * B)/2

console.log("VOLUME = " + total.toFixed(3));