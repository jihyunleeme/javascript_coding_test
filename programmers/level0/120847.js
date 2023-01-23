/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/120847
* 최댓값 만들기(1)
*/

function solution(numbers) {
    numbers.sort((a,b) => b - a);
    return numbers[0] * numbers[1]
}

// sort()는 배열 자체가 변경됨