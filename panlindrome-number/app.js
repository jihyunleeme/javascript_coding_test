const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(value => +value);

let x = input;
isPalindrome(x)
function isPalindrome(x) {
  let split = x.toString().split('');
  let reversed = split.reverse();
  if (split === reversed) {
    console.log(true);
    return true
  } else {
    console.log(false)
    return false;
  }
};