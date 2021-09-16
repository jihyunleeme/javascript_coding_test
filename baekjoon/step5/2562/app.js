const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(value => +value);

let numbers = input;

let max = numbers[0];
let maxIdx = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
    maxIdx = i + 1;
  }
}

console.log(max);
console.log(maxIdx);
