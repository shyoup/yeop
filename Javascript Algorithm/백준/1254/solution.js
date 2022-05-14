function solution(plain) {
    function isPalindrome(str) {
        let half = parseInt(str.length / 2);
        for (let i=0; i<half; i++) {
            if(str[i] != str[str.length-1-i]) return false; 
        }
        return true;
    }

  let answer = plain.length * 2 - 1;

    for (let i=0; i<plain.length; i++) {
    let tmp = plain.substr(i, plain.length);
        if(isPalindrome(tmp)) {
            answer =  plain.length + i;
            break;
        }
    }

    return answer;
}