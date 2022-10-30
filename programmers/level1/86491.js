/*
* https://school.programmers.co.kr/learn/courses/30/lessons/86491
* 최소직사각형
*/

function solution(sizes) {
    var answer = 0;
    let w = 0;
    let h = 0;
    for (let i = 0; i < sizes.length; i++) {
        for (let j = 0; j < sizes[i].length; j++) {
            if (sizes[i][0] < sizes[i][1]) {
                sizes[i].reverse()
            }
            
            if (w < sizes[i][0]) {
                w = sizes[i][0]
            }
            if (h < sizes[i][1]) {
                h = sizes[i][1]
            }
        }
    }
    return w * h;
}