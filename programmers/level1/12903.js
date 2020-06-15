/* 
* https://programmers.co.kr/learn/courses/30/lessons/12903
* 가운데 글자 가져오기
*/

function solution(s) {
    var answer = '';
    var divide2 = s.length / 2;
    if (s.length % 2 == 0) {
        answer = s.slice(divide2-1, divide2+1)
    } else {
        var floorNum = Math.floor(divide2)
        answer = s[floorNum]
    }
    return answer;
}