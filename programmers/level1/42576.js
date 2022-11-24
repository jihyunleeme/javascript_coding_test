/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/42576
* 완주하지 못한 선수
*/

function solution(participant, completion) {
    let hashed = []
    participant.forEach(e => {
        hashed[e] = hashed[e] ? hashed[e] + 1 : 1        
    })
    completion.forEach(e => {
        hashed[e] = hashed[e] - 1
    })

    for (var key in hashed) {
        if (hashed[key] >= 1) return key
    }
}