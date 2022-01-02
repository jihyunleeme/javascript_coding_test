const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let word = input.split(' ');
if (input === '') {
    console.log(0)
} else {
    console.log(word.length)
}

// https://www.acmicpc.net/board/view/25519