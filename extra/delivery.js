// https://programmers.co.kr/learn/courses/30/lessons/12978


function solution(N, road, K) {
    // 1번 마을로부터 각 마을별 거리
    const dist = Array(N+1).fill(Infinity);     // N+1 : 각 마을의 숫자와 인덱스 맞추기 위해(0번은 그냥 둠)
    // 마을 사이의 거리 체크하기 위한 배열. 원소로 오브젝트 추가 예정
    const toNodeTime = Array.from({length: N+1}, () => []);

    // 마을별 거리 체크
    road.forEach(([a, b, c]) => {
        toNodeTime[a].push({to: b, time: c});
        toNodeTime[b].push({to: a, time: c});
    });

    // 우선순위큐 생성
    const pq = [{to: 1, time: 0}];
    // 1번 마을이 시작점이기 때문에 0으로 초기화
    dist[1] = 0;
    
    while (pq.length > 0) {
        let {to, time} = pq.pop();
        
        // 해당 노드의 객체들을 통해 거리 비교
        toNodeTime[to].forEach(next => {
            if (dist[next.to] > dist[to] + next.time) {     // 간선 간 여러 동선이 있을 수 있음. 최소 거리로 바꾸기. 계속 무한이면 연결X라는 의미
                dist[next.to] = dist[to] + next.time;
                pq.push(next);
            }
        });
    }

    return dist.filter(elem => elem <= K).length;
}


// testCase
console.log(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3));     // 4
console.log(solution(6, [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4));     // 4