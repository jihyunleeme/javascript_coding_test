const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(value => +value);

let max = input[0];
let maxIndex = 0;
for (let i = 0; i < input.length; i++) {
    // console.log('i = ', i, 'input[i] = ', input[i], 'max = ', max)
    if (input[i] > max) {
        max = input[i];
        // console.log('----------------------------------- if 안 max = ', max);
        maxIndex = i + 1;
    }
}

console.log(max);
console.log(maxIndex);