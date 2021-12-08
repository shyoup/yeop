function calculate(newPeople, limit, rest, cnt) {
    if(newPeople.length < 1) {
        return ++cnt;
    }
    if(rest < 40) {
        return calculate(newPeople, limit, limit, ++cnt);
    }
    for(let i=0; i<newPeople.length; i++) {
        if(newPeople[i] <= rest) {
            rest -= newPeople[i];
            newPeople.splice(i, 1);
            break;
        }
    }
    return calculate(newPeople, limit, rest, cnt);
}

function solution(people, limit) {
    const sortedPeople = people.sort((a,b) => b-a);
    return calculate(sortedPeople, limit, limit, 0);
}

// console.log(solution([70, 50, 80, 50], 100));
// console.log(solution([70, 80, 50], 100));
console.log(solution([40, 40, 40,40, 50, 50, 50, 50], 130));  // 여기서 틀림


// 정확성  테스트
// 테스트 1 〉	실패 (런타임 에러)
// 테스트 2 〉	통과 (3.39ms, 31.3MB)
// 테스트 3 〉	실패 (런타임 에러)
// 테스트 4 〉	실패 (런타임 에러)
// 테스트 5 〉	실패 (런타임 에러)
// 테스트 6 〉	실패 (런타임 에러)
// 테스트 7 〉	통과 (6.62ms, 32.5MB)
// 테스트 8 〉	통과 (0.28ms, 30.1MB)
// 테스트 9 〉	실패 (런타임 에러)
// 테스트 10 〉	실패 (런타임 에러)
// 테스트 11 〉	실패 (런타임 에러)
// 테스트 12 〉	실패 (런타임 에러)
// 테스트 13 〉	실패 (런타임 에러)
// 테스트 14 〉	실패 (런타임 에러)
// 테스트 15 〉	통과 (0.30ms, 30.1MB)
// 효율성  테스트
// 테스트 1 〉	실패 (런타임 에러)
// 테스트 2 〉	실패 (런타임 에러)
// 테스트 3 〉	실패 (런타임 에러)
// 테스트 4 〉	실패 (런타임 에러)
// 테스트 5 〉	실패 (런타임 에러)