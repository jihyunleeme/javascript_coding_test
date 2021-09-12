const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const s = fs.readFileSync(filePath).toString();

let answer = new Array(26).fill(-1);

for (let i = 0; i < s.length;  i++) {
    let alphabet = s[i]
    let idx = s.charCodeAt(i) - 97;
    if (answer[idx] === -1) {
        answer[idx] = s.indexOf(alphabet)
    }
}

console.log(answer.join(' ').trim());
console.log('1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1')