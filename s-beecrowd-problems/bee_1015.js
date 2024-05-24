/* Distancia*/

// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [x1, y1] = lines.shift();

const cat1 = (x2 - x1) ** 2;
const cat2 = (y2 - y1) ** 2;

const distancia = Math.sqrt(cat1 + cat2);

console.log(distancia.toFixed(4));