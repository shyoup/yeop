function solution(n, computers) {
    let ret = 0;
    function dfs(x, y) {
        if(y === n) {
            return;
        }
        computers[x][y] = 0;
        for(let i=0;i<n;i++) {
            if(computers[x][i] !== 0) {
                computers[x][i] = 0;
                computers[i][x] = 0;
                dfs(i,i);
            }
        }
    }
    for(let i=0; i<n; i++) {
        if(computers[i][i] !== 0) {
            dfs(i, i);
            ret++;
        }
    }
    return ret;
<<<<<<< HEAD
}

console.log(solution(3, [[1,1,0],[1,1,0],[0,0,1]]));
console.log(solution(3, [[1,1,1],[1,1,1],[1,1,1]]));
console.log(solution(3, [[1,0,0],[0,1,0],[0,0,1]]));
console.log(solution(7, [[1,1,0,1,0,0,0],[1,1,0,0,1,0,0],[0,0,1,0,0,0,1],[1,0,0,1,1,0,0],[0,1,0,1,1,1,0],[0,0,0,0,1,1,0],[0,0,1,0,0,0,1]]));
=======
}
>>>>>>> 968033ac64a732b58df57c1c199c9fe50ef7ba3a
