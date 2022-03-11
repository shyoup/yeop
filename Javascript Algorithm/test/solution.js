function solution(arr) {
  let answer = 0;
  let add = new Array();
  let alen = add.length;
  arr.forEach(i => {
    if ((alen === 0 && i>0) || add[alen-1]<i) {
      add.push(i);
      alen += 1;
      answer += 1; 
    }
    else if (add[alen-1] > i) {
      while(1) {
        add.pop();
        alen -= 1;
        if (alen === 0 && i === 0)
          break;
        if ((alen === 0 && i>0) || add[alen-1] < i) {
          add.push(i);
          alen += 1;
          answer += 1;
          break;
        } else if (add[alen - 1] === i) {
          break;
        }
      }
    }
  });
  return answer;
}