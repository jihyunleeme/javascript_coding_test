const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath);
// const input = fs.readFileSync('/dev/stdin');

console.log(Number(input));

let answer = '';
for (let i = input; i > 0 ; i--) {
    answer += i + '\n';
}
console.log(answer);