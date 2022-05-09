/*
* https://programmers.co.kr/learn/courses/30/lessons/81301
* 숫자 문자열과 영단어
*/

function solution(s) {
    var answer = 0;
    const alphabet = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    for (let i = 0; i < alphabet.length; i++) {
        s = s.split(alphabet[i]).join(i)
        answer = Number(s)
    }
    return answer;
}