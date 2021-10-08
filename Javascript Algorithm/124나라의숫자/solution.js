function solution(n) {
    let next = parseInt(n / 3);
    if(n == 0)
        return ``;
    let num = n % 3;
    switch(num) {
        case 1 :
            let a = cal(next);
            return `${a}1`;
        case 2 :
            let b = cal(next);
            return `${b}2`;
        case 0 :
            let c = cal(next - 1);
            return `${c}4`;
    }
}