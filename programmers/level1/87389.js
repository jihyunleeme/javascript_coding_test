/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/87389
* 나머지가 1이 되는 수 찾기
*/

function solution(n) {
    var answer = 1;
    while (n % answer !== 1) {
        answer++
    }
    return answer;
}