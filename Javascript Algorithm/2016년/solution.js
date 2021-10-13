function solution(a, b) {
    var answer = '';
    const dayArr = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    
    let date = new Date(`2016-${a}-${b}`);
    
    answer = dayArr[date.getDay()];
    
    return answer;
}