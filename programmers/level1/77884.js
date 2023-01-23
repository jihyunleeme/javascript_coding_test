/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/77884
* 약수의 개수와 덧셈
*/

function calCounter (number)  {
    let counter = 0;
    for (let j = 1; j <= number; j++) {
        if (number % j === 0) {
            counter++
        }   
    }
    return (counter % 2 === 0) ? number: -number
}

function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
       answer += calCounter(i)     
    }
    return answer;
}
