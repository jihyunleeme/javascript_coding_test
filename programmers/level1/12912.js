/* 
* https://programmers.co.kr/learn/courses/30/lessons/12912
* 두 정수 사이의 합
*/

function solution(a, b) {
    var answer = 0;
    if (a == b) {
        return a
    }
    for(var i = Math.min(a,b); i <= Math.max(a,b); i++ ) {
        answer += i;
    }
    return answer;
    
}