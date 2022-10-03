/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/12943
* 콜라츠 추측
*/

function solution(num) {
    let counter = 0;
    while(num != 1) {
        if (counter === 500) break;
        
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num = num * 3 + 1
        }
        counter++
    }
    return counter === 500 ? -1 : counter;
}