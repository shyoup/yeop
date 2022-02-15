function solution(s) {
  let half = s.length / 2 + 1;

  let answer = s.length;
  for(let i=1; i<half; i++) {
      let tmp = s.substr(0, i);
      let tmp2 = "";
      if(s.length % i === 0) {
          let cnt = parseInt(s.length / i);
          for(let j=0; j<cnt; j++) {
              tmp2 += tmp;
          }

          if(tmp2 === s) {
              answer = tmp.length;
              break;
          }
      }
  }
  return answer;
}
