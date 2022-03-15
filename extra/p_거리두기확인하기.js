// https://programmers.co.kr/learn/courses/30/lessons/81302

function solution(places) {
    let result = [];
    
    const bfs = (strP, graph, dist) => {
        const move = [[0, -1], [0, 1], [-1, 0], [1, 0]];
        let que = [strP];

        while (que.length > 0) {
            let [x, y, d] = que.shift();

            if (d !== 0 && graph[x][y] === "P") return false;

            move.forEach(([dx, dy]) => {
                let nx = x + dx;
                let ny = y + dy;

                if (0 <= nx && nx < 5 && 0 <= ny && ny < 5 && dist[nx][ny] === 0 && graph[nx][ny] !== "X") {
                    if (d < 2) {
                        dist[nx][ny] = 1;
                        que.push([nx, ny, d+1]);
                    }
                }
            });
        }

        return true;
    };

    const checkDist = (graph) => {
        const dist = Array(5).fill().map(() => Array(5).fill(0));
        
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (graph[i][j] === 'P') {
                    dist[i][j] = 1;
                    if (!bfs([i, j, 0], graph, dist)) return 0;
                }
            }
        }
        return 1;
    }

    return places.map(checkDist);
}


// testCase
console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], 
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], 
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));    // [1, 0, 1, 1, 1]
