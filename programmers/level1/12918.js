/* 
* https://programmers.co.kr/learn/courses/30/lessons/12918
* 문자열 다루기 기본
*/

function solution(s) {
    var answer = '';
    if(s.length == 4 || s.length == 6){
        for(var i = 0; i < s.length; i++) {
            if(s[i] >= 0 && s[i] <= 9) {
                answer = true;
            } 
            else {
                answer = false;
                break;
            }
        }
    } else {
        answer = false;
    }
    return answer;
}