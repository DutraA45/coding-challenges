/* Cálculo Simples */

// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [codigo1, qtd1, valor1] = lines.shift().split(' ');
const [codigo2, qtd2, valor2] = lines.shift().split(' ');

const total = (qtd1 * valor1) + (qtd2 * valor2)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);