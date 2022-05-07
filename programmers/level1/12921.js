/* 
소수 찾기
https://programmers.co.kr/learn/courses/30/lessons/12921
*/
function solution(n) {
    let answer = 0;
    let array = [];
    for (let i = 2; i <= n; i++) {
        array.push(i)
    }
    
    for (let j = 2; j <= n; j++) {
        if (array[j] === 0) continue;
        
        for (let k = j * 2; k <= n; k += j) {
            array[k] = 0;
        }
    }
    
    for(let m = 2; m <= n; m++){
        if (array[m] !== 0){
            answer++;
        }
    }
    return answer
}