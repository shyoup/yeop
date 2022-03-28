function solution(participant, completion) {
  let answer = "";

  participant.sort((a,b) => b-a);
  completion.sort((a,b) => b-a);

  for(let i=0; i<participant.length; i++) {
    if(participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}