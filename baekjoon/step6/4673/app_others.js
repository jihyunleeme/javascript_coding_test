let temp = new Array(10).fill(null);
temp.push(3);
temp.unshift(11);
console.log(temp);

temp.forEach(item => item ? console.log(item) : null);

// console.log(Math.floor(1234 /1000))

// 풀이 meohyun2님
// https://www.acmicpc.net/source/32820777
let size=10000;
let answer = new Array(size);

for(let i = 1; i <= size; i ++){
  answer[i-1] = i;
}

const d = (initiator) => {
  let max = 0;
  for(let index = 0; index < initiator.length ; index++){
    max += Number(initiator[index]);
  }
  answer[Number(max) + Number(initiator) - 1] = null;
}

for(let i = 1; i <= size; i++){
  d(i.toString());
}
answer.forEach(item => item ? console.log(item) : null);

//https://www.acmicpc.net/source/32895162
// daekuenhan 님

function d(num) {
    let sum = 0;
    const strNum = String(num);

    for(let i=0; i<strNum.length; i++) {
        sum += +strNum[i]
    }
    return num+sum;
}

function solution() {
    const arr = Array(10001).fill(0);
    for (let i = 1; i <= 10000; ++i) {
        const ans = d(i);
        if (ans <= 10000) {
            arr[ans]++;
        }
    }
    for (let i = 1; i <= 10000; ++i) {
        if (arr[i] === 0) {
            console.log(i);
        }
    }
}

solution()



if (idx !== -1) {
    // idx가 -1이 아니라면 ==> idx가 oneToMill 배열안에 포함되어 있다면
    oneToMill.splice(idx, 1); // // splice (idx,1) idx순서에서 1가지를 제거하라
  }



// https://www.acmicpc.net/source/30717317
// 0r0l님
  const arr = new Array(10001).fill(true);

  for (let i = 0; i < 10001; i++) {
    const sum = String(i)
      .split('')
      .reduce((acc, cur) => acc + +cur, 0);
    arr[sum + i] = false;
  }
  let result = '';
  arr.forEach((isTrue, idx) => {
    if (isTrue) {
      result += idx + '\n';
    }
  });
  
  console.log(result.trim());


//   https://www.acmicpc.net/source/30363306
//   eunne
function NotSelfnumber(N){
    
    //숫자 하나를 더하는 것에 대한 함수
    let sum = N

    while(true){   
        if(N == 0) break;
        sum += N%10
        N = parseInt(N/10)
    }
    return sum; //무엇을 return할지 꼭 써주기
}

function selfnumber(N){
    let selfnum = []
    let result = []

    for(let i=1; i <= N; i++){
        let index = NotSelfnumber(i); 
        
        if(index <= N){
            selfnum[index] = true;
        }
    }

    for(let i=1; i<= N; i++){
        if(!selfnum[i]) result.push(i);
    }
    console.log(result.join('\n'));
}

selfnumber(10000);