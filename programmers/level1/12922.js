/*
* https://programmers.co.kr/learn/courses/30/lessons/12922
* 수박수박수박수박수박수?
*/

function solution(n) {
    var temp = '';
    for(var i=0; i<n; i++){
        if (i%2 == 0) {
            temp += '수'
        } else {
            temp += '박'
        }
    }
    return temp;
}