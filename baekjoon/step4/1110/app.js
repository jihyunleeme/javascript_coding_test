const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString()

let num = Number(input);
let count = 0;
while (true) {
  let sum = Math.floor(input / 10) + input % 10;
  input = (input % 10) * 10 + (sum % 10)
  count++;
  if (num === input) break
}
console.log(count)
