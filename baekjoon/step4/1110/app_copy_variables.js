const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let [number] = input;
let splitNum = number.split('');
if (splitNum.length < 2) {
    splitNum.unshift('0');
}

console.log(splitNum)

let cycle = 0;
let result = [];
while (cycle <= 3 - 1) { // 0부터 시작하므로 0 <= N <= 99
    console.log("result = ", result, "splitNum = ", splitNum)
    let sum = (Number(splitNum[0]) + Number(splitNum[1]))
    console.log(sum.toString().split());

    let sumVal = sum.toString().split();
    console.log('sumVal = ', sumVal)

    if (sumVal.length < 2) {
        console.log('한자리수')
    }
    let newResult = sumVal.push('0');
    console.log('newResult = ', newResult)

    console.log("before = ", cycle)
    cycle++
    console.log("after = ", cycle)
}
// while (Number(splitNum) === Number(resultNum)) {
//     let newNum = Number(splitNum[0]) + Number(splitNum[1])
//     cycle++
// }
// console.log(cycle)
// let result1 = Number(splitNum[0]) + Number(splitNum[1])
// let result2 = result1.split('');

// let i = 0;
// while(i < )
// let i = 0;

// while(i < testCase.length -1) {
//     let testNum = testCase[i].split(' ');
//     console.log(Number(testNum[0]) + Number(testNum[1]));
//     i++;
// }
