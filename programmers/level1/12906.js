/* 
* https://programmers.co.kr/learn/courses/30/lessons/12906
* 같은 숫자는 싫어
*/

function solution(arr)
{
    var answer = [];
    var first = arr[0];

    answer.push(first);

    for (var i = 1; i < arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i])
        }
    }
    return answer;
}