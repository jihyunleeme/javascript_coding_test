/*
* https://programmers.co.kr/learn/courses/30/lessons/12925
* 문자열을 정수로 바꾸기
*/

function solution(s) {
    var answer = 0;
    console.log(s)
    if (typeof s === "string" ) {
        answer = Number(s)
    } else {
        answer = String(s);
    }
    return answer;
}