let sequence = [];
let answer = [];

for (let i = 1; i <= 10000; i++) {
    let num = 0;
    let splitNum = String(i)
    for (let j = 0; j < splitNum.length; j++) {
        num += Number(splitNum[j]);
    }
    sequence.push(num + i);
}

for (let i = 1; i <= 10000; i++) {
    if (!sequence.includes(i)) {
        answer += i + '\n';
    }
}

console.log(answer);
