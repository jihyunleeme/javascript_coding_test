const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let testCase = input;
let i = 0;
let answer = '';

while(i < testCase.length) {
    let testNum = testCase[i].split(' ');
    let value = Number(testNum[0]) + Number(testNum[1]);
    if (value) {
        answer += value + '\n';
    }
    i++;
}
console.log(answer)
