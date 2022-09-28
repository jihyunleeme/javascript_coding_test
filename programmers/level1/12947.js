/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/12947
* 하샤드 수
*/

function solution(x) {
    let splited = String(x).split('')

    let sum = splited.reduce((prev, curr)=> Number(prev) + Number(curr))
    return x % sum === 0;
}