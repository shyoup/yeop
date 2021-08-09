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
}