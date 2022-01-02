const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let processed = input.map(number => Number(number.split('').reverse().join('')));
let answer = processed.sort((a, b) => b - a);

console.log(answer[0])