const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let numbersArray = input[0].split(' ');
let sequence = input[1].split(' ');

let answer = '';
for (let i = 0; i < numbersArray[0]; i++) {
    if (Number(sequence[i]) < Number(numbersArray[1])) {
        answer += sequence[i] + ' '
    }
}
console.log(answer);