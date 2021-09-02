const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
for (let i = 1; i <= input[0]; i++) {
    let temp = input[i].split(' ');
    answer += Number(temp[0]) + Number(temp[1]) + '\n'
}

console.log(answer);