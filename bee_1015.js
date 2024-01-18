/* Área */

var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [x1, y1] = lines.shift().split(' ').map(value => parseFloat(value));
const [x2, y2] = lines.shift().split(' ').map(value => parseFloat(value));

const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

console.log(distancia.toFixed(4));