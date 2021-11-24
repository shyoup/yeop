function solution(numbers) {
    if(numbers.length < 1 || numbers.length > 7) return;
    let str = numbers.split('').sort((a,b)=>b-a); // 정렬된 array
    let max = Number(str.join(''));
    let arr = new Array(max+1).fill(false);
    let answer = [];
    for(let i=2; i*i<=max; i++) {
        if(!arr[i]) {
            for(let j=i*i; j<= max; j+= i) {
                arr[j] = true;
            }
        }
    }
    for(let i=2; i<arr.length; i++) {
        if(arr[i] === false) {
            let temp = String(i).split('');
            let cpStr = str.slice();
            let check = true;
            for(const t of temp) {
                let idx = cpStr.indexOf(t);
                if(idx > -1) {
                    cpStr[idx] = -1;
                } else {
                    check = false;
                    break;
                }
            }
            if(check) answer.push(i);
        }
    }
    return answer.length;
}

// 테스트 1 〉	통과 (0.77ms, 30.4MB)
// 테스트 2 〉	통과 (35.73ms, 43MB)
// 테스트 3 〉	통과 (0.16ms, 30.2MB)
// 테스트 4 〉	통과 (23.51ms, 38MB)
// 테스트 5 〉	통과 (163.43ms, 69.7MB)
// 테스트 6 〉	통과 (0.14ms, 30.3MB)
// 테스트 7 〉	통과 (0.76ms, 30.6MB)
// 테스트 8 〉	통과 (342.19ms, 90MB)
// 테스트 9 〉	통과 (0.43ms, 30.5MB)
// 테스트 10 〉	통과 (50.44ms, 48.1MB)
// 테스트 11 〉	통과 (12.72ms, 34.7MB)
// 테스트 12 〉	통과 (10.46ms, 33.8MB)