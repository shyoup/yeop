function solution(citations) {
    let sortedArr = citations.sort((a,b)=> b-a);
    let idx = 0;
    for(let i = sortedArr[0]; i>=0; i--) {
      if(i === sortedArr[idx]) {
        idx++;
      }
      console.log(idx);
      if(sortedArr[idx-1] <= idx) return sortedArr[idx-1];
    }
  }