/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/12943
* 콜라츠 추측
*/

function solution(num) {
    let counter = 0;
    while(num != 1) {
        if (counter === 500) break;
        
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num = num * 3 + 1
        }
        counter++
    }
    return counter === 500 ? -1 : counter;
}

function solution(num) {
    let counter = 0;
    while(num != 1 && counter !== 500) {
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;
        counter++
    }
    return counter === 500 ? -1 : counter;
}

/*
line 9의 if문을 while문의 조건으로 넣을 수 있었는데 이 생각을 하지 못했다.
while (true) {  
    statement
} 
while문의 조건이 참일때 실행되면 statement 반복 수행
*/