/*function calculate(newPeople, limit, rest, cnt) {
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
}*/

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



function calculate(newPeople, limit, rest, cnt, curBoat) {
    if(newPeople.length < 1 && curBoat === 1) {
        return cnt+1;
    } else if (newPeople.length < 1) {
       return cnt;
    }
    for(let i=0; i<newPeople.length; i++) {
        if(newPeople[i] < 40 || newPeople[i] > 240) return -1;
        if(newPeople[i] <= rest) {
            rest -= newPeople[i];
            newPeople.splice(i, 1);
            break;
        }
    }
    if(rest < 40 || curBoat === 1) {
        return calculate(newPeople, limit, limit, ++cnt, 0);
    }
    return calculate(newPeople, limit, rest, cnt, 1);
}

function solution(people, limit) {
    if(people.length > 50000 || people.length < 1) return -1;
    if(limit < 40 || limit > 240) return -1;
    const sortedPeople = people.sort((a,b) => b-a);
    return calculate(sortedPeople, limit, limit, 0, 0);
}
/*
정확성  테스트
테스트 1 〉	통과 (27.39ms, 32.7MB)
테스트 2 〉	통과 (3.32ms, 30.8MB)
테스트 3 〉	통과 (20.84ms, 33.2MB)
테스트 4 〉	통과 (17.50ms, 32.5MB)
테스트 5 〉	통과 (11.14ms, 32.2MB)
테스트 6 〉	통과 (8.10ms, 32.6MB)
테스트 7 〉	통과 (8.38ms, 33.1MB)
테스트 8 〉	통과 (0.31ms, 30MB)
테스트 9 〉	통과 (1.80ms, 32.6MB)
테스트 10 〉	통과 (13.26ms, 32.4MB)
테스트 11 〉	통과 (15.21ms, 32.8MB)
테스트 12 〉	통과 (20.16ms, 31.9MB)
테스트 13 〉	통과 (14.87ms, 32.6MB)
테스트 14 〉	통과 (5.11ms, 31MB)
테스트 15 〉	통과 (0.49ms, 30.2MB)
효율성  테스트
테스트 1 〉	실패 (런타임 에러)
테스트 2 〉	실패 (런타임 에러)
테스트 3 〉	실패 (런타임 에러)
테스트 4 〉	실패 (런타임 에러)
테스트 5 〉	실패 (런타임 에러)
*/
