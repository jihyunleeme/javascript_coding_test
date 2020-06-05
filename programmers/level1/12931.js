/* 
* https://programmers.co.kr/learn/courses/30/lessons/12931
* 자릿수 더하기
*/

function solution(n) {
    let str = n.toString();
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
        answer += parseInt(str.charAt(i))
    }    
    return answer
}