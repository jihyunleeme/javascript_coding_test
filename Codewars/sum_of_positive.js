/* 
* https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
* 양수의 합
*/

function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        total += arr[i];
      }
    }
    return total;
  }