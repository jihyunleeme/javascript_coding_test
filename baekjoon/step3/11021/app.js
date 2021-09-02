const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ').map(value => +value);
    let value = numbers[0] + numbers[1] 
    answer += `Case #${i}: ` + value + '\n'
}
console.log(answer);