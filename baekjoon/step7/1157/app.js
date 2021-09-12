const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(filePath).toString();

countAlphabet(str);

function countAlphabet() {
    let alphabet = new Array(26).fill(0);
    let strUpper = str.toUpperCase();
    let strSplit = strUpper.split(''); 
    
    for (let i = 0; i < strSplit.length; i++) {
        alphabet[strUpper.charCodeAt(i) - 65] += 1;
    }
    let max = Math.max(...alphabet);
    let maxCount = alphabet.filter(value => value === max).length

    if (maxCount > 1) {
        console.log('?')
    } else {
        let value = alphabet.indexOf(max) + 65
        console.log(String.fromCharCode(value))
    }
}
