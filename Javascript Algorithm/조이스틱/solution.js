const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphaNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,12,11,10,9,8,7,6,5,4,3,2,1]; // B-Z

function solution(name) {
    let answer = 0;
    for(let i=0; i<name.length; i++) {
        const idx = alpha.indexOf(name[i]);
        answer += alphaNum[idx];
    }
    let notA = [];
    let notAIdx = 0;
    let notACnt = 0;
    for(let i=0; i<name.length; i++) {
        if(name[i] !== 'A') notA.push(i);
    }
    if(notA[0] !== 0) notA.unshift(0);
    while(1) {
        if(!notA[notAIdx+1]) break;
        notACnt += (notA[notAIdx+1] - notA[notAIdx]);
        notAIdx++;
    }
    let rnotA = notA.slice().sort((a,b) => b-a);
    rnotA.pop();
    rnotA.unshift(name.length);
    let rnotAIdx = 0;
    let rnotACnt = 0;
    while(1) {
        if(!rnotA[rnotAIdx+1]) break;
        rnotACnt += (rnotA[rnotAIdx] - rnotA[rnotAIdx+1]);
        rnotAIdx++;
    }
    return answer + Math.min(notACnt, rnotACnt);
}

console.log(solution("JEROEN"));     // 56
console.log(solution("JAN"));        // 23
console.log(solution("JAAAAAABC"));  // 14
console.log(solution("AAAAAAAAAB")); // 2
console.log(solution("ABAAAAAAAAABB")); // 2
