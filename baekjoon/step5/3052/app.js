let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(value => +value)

console.log(input)
let result = input.map((curr) => curr % 42);

console.log(result);a