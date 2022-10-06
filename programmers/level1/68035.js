/*
* https://school.programmers.co.kr/learn/courses/30/lessons/68935
* 3진법 뒤집기
*/

function solution(n) {
    let answer = n.toString(3).split('').reverse().join('')
    return parseInt(answer,3);
}
