/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/120889
* 삼각형의 완성조건(1)
*/

function solution(sides) {
    let max = Math.max(...sides)
    let rest = sides.reduce((prev, curr) => prev + curr, 0)
    return max < (rest - max) ? 1 : 2;
}