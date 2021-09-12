const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const s = fs.readFileSync(filePath).toString().split('\n');

let [testNum, ...rest] = s;

let answer = '';

for (let i = 0; i < testNum; i++) {
    let test = rest[i].split(' ')
    let testString = test[1].split('')
    let temp = '';
    for (let j = 0; j < testString.length; j++) {
        let value = testString[j].repeat(test[0])
        temp += value;
    }
    answer += temp + '\n';
}
console.log(answer)