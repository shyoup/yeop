/*obj {
    장르 : {
        value : 총 재생횟수
        arr : [{
                index : 
                value : 
            }]
        }
} object 형태로 저장
*/

function solution(genres, plays) {
    var answer = [];
    let obj = {}; // object 들 저장소
    for(let i=0; i<genres.length; i++) {
        if(obj[genres[i]] === undefined) {   // 기존에 저장된 장르가 없으면
            let data = {
                value : plays[i],
                arr : [[i, plays[i]]]
            };
            obj[genres[i]] = data;     // 새로운 장르를 obj에 저장
        } else {                        // 기존에 저장된 장르가 있으면
            obj[genres[i]].value += plays[i];
            obj[genres[i]].arr.push([i, plays[i]]);      // obj의 instance를 찾아서 값을 추가
        }
    }
    let sortable = [];
    for(let key in obj) {
        sortable.push([key, obj[key].value]);
    }                                           // obj의 key를 가지고 Array에 저장
    sortable.sort((a,b) => b[1] - a[1]);        // Array의 장르의 총 합을 가지고 정렬
    for(let sorted of sortable) {               // 정렬된 array를 돌면서
        obj[sorted[0]].arr.sort((a,b) => b[1] - a[1]);  // 장르 내의 순서를 정렬
        let min = Math.min(obj[sorted[0]].arr.length, 2);   // 장르가 1개일 수 있으니깐 최소값 계산
        for(let a=0; a<min; a++) {
            answer.push(obj[sorted[0]].arr[a][0]);              // 제일 많이 재생된 index를 장르별로 answer에 2개 or 1개로 저장
        }
    }
    return answer;
}