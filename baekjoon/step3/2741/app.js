const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let number = Number(input);
let answer = "";

for (let i = 1; i <= number; i++) {
    answer += i + '\n';
}
console.log(answer);