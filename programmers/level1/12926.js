/*
* https://school.programmers.co.kr/learn/courses/30/lessons/12926
* 시저암호
*/

function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i = 0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;


function solution(s, n) {
    var answer = '';
    let arr = s.split('')
    answer = arr.map((element) => {
        let asciiCode = element.charCodeAt(element)
        if (asciiCode !== 32) { // 32 space
            asciiCode = asciiCode + n
        }
        
        if ((91 <= asciiCode && asciiCode <= 96) || asciiCode > 122) {
            asciiCode = asciiCode - 26
        }
        return String.fromCharCode(asciiCode)
    });
    return answer.join('')
