/* function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = new Array(bridge_length).fill(0);
    let cur_weight = 0;
    while(truck_weights.length > 0 || cur_weight > 0) {
    answer++;
    if(cur_weight + truck_weights[0] <= weight) { // 다리에 올라갈 수 있을 때
        bridge.unshift(truck_weights[0]);
        cur_weight += truck_weights[0];
        truck_weights.shift();
    } else {
        bridge.unshift(0);
        if(bridge[bridge.length -1] > 0) {
            cur_weight -= bridge[bridge.length -1];
            if(cur_weight === 0)
            answer--;
        }
    }
    bridge.pop();
}
return ++answer;
}
 */  // 시간초과 코드

// function solution(bridge_length, weight, truck_weights) {
//     var answer = 0;
//     let queue = [];
//     for(let i=truck_weights.length; i>0; i--) {
//         queue.push(truck_weights[i-1]);
//     }
//     let bridge = [0];
//     let cur_weight = -1;
//     while(queue.length > 0 || cur_weight !== 0) {
//         answer++;
//         let top = queue[queue.length - 1] ? queue[queue.length - 1] : 0;
//         if(cur_weight + top > weight) { // 다리에 더이상 올라갈 수 없을 때
//             bridge.unshift(0);
//             if(bridge[bridge.length -1] > 0)
//                 cur_weight -= bridge[bridge.length -1];
//             bridge.pop();
//         } else {    // 다리 트럭이 더 지나갈 수 있을 때
//             bridge.unshift(top);
//             if(cur_weight === -1)
//                 cur_weight = top;
//             else
//                 cur_weight += top;
//             queue.pop();
//         }
//     }    
//     return answer;
// }

function solution(bridge_length, weight, truck_weights) {
    let cur_weight = 0;
    let answer = 0;
    let onBridge = [];
    let rest = [];
    while(1) {
        let _size = rest.length;
        for(let i =0; i<_size; i++) {
            let restLength = rest[0];
            rest.shift();
            if(restLength <= 1) {
                cur_weight -= onBridge[0];
                onBridge.shift();
                continue;
            }
            rest.push(restLength - 1);
        }
        
        if(truck_weights.length > 0 && truck_weights[0] + cur_weight <= weight) {
            cur_weight += truck_weights[0];
            onBridge.push(truck_weights[0]);
            rest.push(bridge_length);
            truck_weights.shift();
        }
        answer++;
        if(cur_weight == 0 && truck_weights.length == 0)
            break;
    }
    return answer;
}