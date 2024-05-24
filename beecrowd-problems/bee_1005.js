/* Média 1 */

// var input = require('fs').readFileSync('C:\\Users\\jeffi\\Documents\\Dev_Projects\\javascript\\s-beecrowd-problems\\stdin', 'utf8');
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());


const media = ((3.5*A) + (7.5*B)) / 11

console.log(`MEDIA = ${media.toFixed(5)}`);