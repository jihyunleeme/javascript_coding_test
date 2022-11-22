/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/42746
* 가장 큰 수
*/

function solution(numbers) {
    let answer = '';
    answer = numbers.map((e,i) => String(e)).sort((a,b)=>(b+a)-(a+b)).join('');
    
    if (answer[0] === '0') {
        answer = '0'
    }
    return answer
}