function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let queue = [];
    for(let i=truck_weights.length; i>0; i--) {
        queue.push(truck_weights[i-1]);
    }
    let bridge = [0];
    let cur_weight = -1;
    while(queue.length > 0 || cur_weight !== 0) {
        answer++;
        let top = queue[queue.length - 1] ? queue[queue.length - 1] : 0;
        if(cur_weight + top > weight) { // 다리에 더이상 올라갈 수 없을 때
            bridge.unshift(0);
            if(bridge[bridge.length -1] > 0)
                cur_weight -= bridge[bridge.length -1];
            bridge.pop();
        } else {    // 다리 트럭이 더 지나갈 수 있을 때
            bridge.unshift(top);
            if(cur_weight === -1)
                cur_weight = top;
            else
                cur_weight += top;
            queue.pop();
        }
    }    
    return answer;
}