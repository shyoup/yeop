function solution(citations) {
    let sortedArr = citations.sort((a,b)=> b-a);
    let idx = 0;
    for(let i = sortedArr[0]; i>=0; i--) {
      if(i <= sortedArr[idx]) idx++;     // == 이 되어버리면 중복 체크를 못함
      if(i <= idx) return i;
    }
  }
  console.log(solution([47, 42, 32, 28, 24, 22, 17, 15, 10, 10, 8]));   // 10
  console.log(solution([3, 0, 6, 1, 5]));