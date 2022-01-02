function solution(routes) {
    let array = [];

    function check(route) {
        let ret = false;
        if(array.length === 0) {
            array.push(route);
            return;
        }
        for(let i=0; i<array.length; i++) {
            if(array[i][0] <= route[0] && array[i][1] >= route[0]) {
                ret = true;
                array[i][0] = route[0];
            }
            if(array[i][0] <= route[1] && array[i][1] >= route[1]) {
                ret = true;
                array[i][1] = route[1];
            }
            if(ret) {
                return;
            }
        }
        array.push(route);
    }

    routes.sort((a,b) => b[0] - a[0]);
    for(const route of routes) {
        check(route);
    }
    return array.length;
}

// solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]);
console.log(solution([[1,15], [12,15], [16,17], [16,18], [3, 16], [9,11]]));