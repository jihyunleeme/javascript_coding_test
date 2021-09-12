const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let [length, number] = input;

let i = 0;
let answer = 0;
while(i < length) {
    answer += Number(number[i]);
    i++;
}

console.log(answer);