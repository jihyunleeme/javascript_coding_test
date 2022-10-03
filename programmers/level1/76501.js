/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/76501
* 음양 더하기
*/

function solution(absolutes, signs) {
    return absolutes.reduce((acc, curr, i) => acc + (signs[i] ? curr : -curr) ,0);
}