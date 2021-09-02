const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let testCase = input;
let i = 0;

while(i < testCase.length -1) {
    let testNum = testCase[i].split(' ');
    console.log(Number(testNum[0]) + Number(testNum[1]));
    i++;
}
