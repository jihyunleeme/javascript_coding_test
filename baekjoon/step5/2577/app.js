// 문제에 오타가 있음 1부터 9가 아닌 0부터 9를 출력할 것
let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(value => +value);

let [a, b, c] = input;
let result = (a * b * c).toString().split('');

let answer = Array(10).fill(0);
for (let i = 0; i < result.length; i++) {
  const nowChar = +result[i];
  answer[nowChar]++
}

for (let i = 0; i < answer.length; i++ ) {
  console.log(answer[i])
}