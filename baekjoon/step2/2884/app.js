const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().split(' ').map(value => +value);

let [h, m] = input;
const gap = 45;

if (m >= gap) {
    console.log(h, m - gap);
} else {
    h = h - 1;
    m = 60 + m - gap;
    if (h === -1) {
      console.log("h는 -1입니다", h)
        h = 23;
    }
    console.log(h, m);
}