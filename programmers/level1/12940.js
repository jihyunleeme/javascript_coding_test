/* 
* https://school.programmers.co.kr/learn/courses/30/lessons/12940
* 최대공약수와 최소공배수
*/
function solution(n, m) {
    const gcdVal = gcd(n,m)
    const lcmVal = lcm(n,m)
    return [gcdVal, lcmVal]
}

function lcm(n,m) {
    return (n * m) / gcd(n,m)
}

function gcd (n,m) {
    console.log(n,m)
    let r;
    while (n != 0) {
        r = m % n;
        m = n;
        n = r;
    }
    return m;
}