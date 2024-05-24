/* O Maior */

/* Ainda não finalizado, plataforma com imagem quebrada */

/* x= (a+b+abs*(a-b))/2 */

var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B, S] = lines.shift().split(' ').map(value => parseFloat(value)); // Converter para números

const resultado = (A + B + (A * B * S * (A - B)))/2

console.log(A + " " + B + " " + S);
console.log(resultado);