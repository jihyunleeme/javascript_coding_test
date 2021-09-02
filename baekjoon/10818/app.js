const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let [num, arr] = input;
let sorted = arr.split(' ').sort((a,b) => a - b)

console.log(sorted[0], sorted[num - 1])