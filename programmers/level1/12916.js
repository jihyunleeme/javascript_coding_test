/* 
* https://programmers.co.kr/learn/courses/30/lessons/12916
* 문자열 내 p와 y의 개수
*/
<script>
function solution(s){
    var checkP = s.match(/y/gi) 
    var checkY = s.match(/p/gi)
    
    if (checkP == null && checkY == null) {
        console.log("checkp, checkY = null", checkP, checkY)
        return true 
    } else if (checkP.length !== checkY.length) {
        console.log("return true / s = ", s)
        return false
    } else {
        console.log("return false / s = ", s)
        return true
    }
}

solution("PpoooyY")
solution("PyY")
solution("TReE")
</script>