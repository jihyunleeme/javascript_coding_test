const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

let hansoo = 0;
let flag = false;

function checkInputOver100(input) {
    if (input < 100) {
        hansoo = input;
    } else {
        hansoo = 99;
        return true
    }
}

function main(input) {
    let flag = checkInputOver100(input);
    if (flag) {
        for (let i = 100; i <= Number(input); i++) {
            arithmeticSequence(i)
        }
    }
    console.log(hansoo);   
}

function arithmeticSequence(number) {
    let value = number.toString();

    let diff1 = Number(value[0]) - Number(value[1]);
    let diff2 = Number(value[1]) - Number(value[2]);
    if (diff1 === diff2) {
        hansoo++
    }
}

main(input);


